import { stats } from "../data";
import parse from "html-react-parser";
const Stats = () => {
  return (
    <>
      {stats.map(({ no, title, id }) => {
        return (
          <div className="stats__box" key={id}>
            <h3 className="stats__no">{no}</h3>
            <p className="stats__title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
};

export default Stats;
