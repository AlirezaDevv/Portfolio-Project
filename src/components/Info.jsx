import { personalInfo } from "../data";

const info = () => {
  return (
    <>
      {personalInfo.map(({ title, description, id }) => {
        return (
          <li className="info__item" key={id}>
            <span className="info__title">{title}</span>
            <span className="info__description">{description}</span>
          </li>
        );
      })}
    </>
  );
};

export default info;
