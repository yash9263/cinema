import Section from "../sections/Section";
import Slides from "../slides/Slides";
import "./SectionContainer.css";

const SectionContainer = () => {
  return (
    <div className="sections-container">
      <Slides />
      <Section />
    </div>
  );
};

export default SectionContainer;
