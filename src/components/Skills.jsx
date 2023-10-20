import { skills } from "../data";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage, id }) => {
        return (
          <div className="progress__box" key={id}>
            <div className="progress__circle">
              <CircularProgressbar
                strokeWidth={5.5}
                text={`${percentage}%`}
                value={percentage}
              />
            </div>

            <h3 className="skills__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
