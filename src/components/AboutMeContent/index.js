const AboutMeContent = ({ mode }) => {
  if (mode === "skills") {
    return <p>Skills</p>;
  }
  if (mode === "contact") {
    return <p>Contact</p>;
  }
  return <p>About</p>;
};

export default AboutMeContent;
