import Section from "../sections/Section";
import Slides from "../slides/Slides";
import "./SectionContainer.css";
import categoryDocs from "./categoryDocs";

const SectionContainer = () => {
  return (
    <div className="sections-container">
      <Slides />
      {categoryDocs.map((categoryDoc) => {
        return (
          <Section
            title={categoryDoc.title}
            url={categoryDoc.url}
            path={categoryDoc.path}
          />
        );
      })}
    </div>
  );
};

export default SectionContainer;
