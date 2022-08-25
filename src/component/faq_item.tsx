import { useRef, useState } from "react";

import arrow from "../assets/faqs/arrow.svg";

interface Props {
  title: string;
  description: string;
  children?: JSX.Element;
}

const FaqItem = ({ title, description, children }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const contentRef = useRef<any>();

  return (
    <article className="FaqComponent__faq-list__item">
      <h2 onClick={() => setShow(!show)}>
        {title}{" "}
        <img
          src={arrow}
          alt="arrow"
          style={
            show
              ? { rotate: "0deg", transition: "all .3s ease" }
              : { rotate: "180deg", transition: "all .3s ease" }
          }
          draggable={false}
        />
      </h2>

      <div
        ref={contentRef}
        style={
          show
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
        className="content-parent"
      >
        <div>
          <p>{description}</p>
          {children}
        </div>
      </div>
    </article>
  );
};

export default FaqItem;
