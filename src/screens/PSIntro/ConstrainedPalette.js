import {
  Mesh,
  OrthographicCamera,
  PlaneBufferGeometry,
  Scene,
  ShaderMaterial,
  UniformsUtils,
  Vector2,
} from "three";

export function constrainedPaletteShader(palette) {
  return new ShaderMaterial({
    uniforms: {
      /* EffectComposer compatibility, the input image */
      tDiffuse: { value: null },
      /*
       * The palette, an array of THREE.Color. you can change the palette
       * uniform at runtime only if the size remains the same, as the size
       * gets compiled into the shader. it is usually easiest to just call
       * constrainedPaletteShader again and get a new shader if you're changing
       * the palette
       */
      palette: { value: palette },
      /* The threshold under which to perform a dither */
      threshold: { value: 0.03 },
    },
    /* standard vert shader */
    vertexShader: [
      "out vec2 vUv;",
      "void main() {",
      "vUv = uv;",
      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
      "}",
    ].join("\n"),
    fragmentShader: [
      "uniform vec3 palette[" + palette.length + "];",
      "uniform sampler2D tDiffuse;",
      "uniform float threshold;",
      "in vec2 vUv;",
      "void main() {",
      /* the input pixel */
      "vec3 color = texture2D( tDiffuse, vUv ).rgb;",
      "float total = gl_FragCoord.x + gl_FragCoord.y;",
      "bool isEven = mod(total,2.0)==0.0;",
      "float closestDistance = 1.0;",
      "vec3 closestColor = palette[0];",
      "int firstIndex = 0;",
      "int secondIndex = 0;",
      "float secondClosestDistance = 1.0;",
      "vec3 secondClosestColor = palette[1];",
      /*
       * loop through the palette colors and compute the two closest colors
       * to the input pixel color
       */
      "for(int i=0;i<" + palette.length + "; i++) {",
      "float d = distance(color, palette[i]);",
      "if(d <= closestDistance) {",
      "secondIndex = firstIndex;",
      "secondClosestDistance = closestDistance;",
      "secondClosestColor = closestColor;",
      "firstIndex = i;",
      "closestDistance = d;",
      "closestColor = palette[i];",
      "} else if (d <= secondClosestDistance) {",
      "secondIndex = i;",
      "secondClosestDistance = d;",
      "secondClosestColor = palette[i];",
      "}",
      "}",
      /*
       * if the two closest colors are within the threshold of each other
       * preform a dither
       */
      "if(distance(closestDistance, secondClosestDistance) < threshold) {",
      "vec3 a = firstIndex < secondIndex ? closestColor : secondClosestColor;",
      "vec3 b = firstIndex < secondIndex ? secondClosestColor : closestColor;",
      "gl_FragColor = vec4(isEven ? a : b, 1.0);",
      /* otherwise use the closest color */
      "} else {",
      "gl_FragColor = vec4(closestColor, 1);",
      "}",
      "}",
    ].join("\n"),
  });
}
