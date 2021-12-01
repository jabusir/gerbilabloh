export const NoOpShader = {
  uniforms: {
    tDiffuse: { value: null },
  },
  vertexShader: /*glsl*/ `
    varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}
  `,
  fragmentShader: /*glsl*/ `
    #include <common>
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

    void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = texel;
		}
  `,
};
