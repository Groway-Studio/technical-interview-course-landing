import TimelineDateItem from "./timeline_date_item";
import { timeline } from "../utils";
import "../sass/component/_timeline.scss";

const Timeline = () => {
  return (
    <section className="timeline">
      <h3 className="timeline__title">Fechas Importantes</h3>

      <ul className="timeline__dates">
        {timeline.map((timelineItem, index) => (
          <TimelineDateItem {...timelineItem} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Timeline;
