import * as React from "react";
import { useState } from "react";
import AccordionItem from "./accordion-item";

function Accordion(props) {
  const [open, setOpen] = useState(() => []);

  const [onlyOneAtATime, setOnlyOneAtATime] = useState(() =>
    Boolean(props.grid || props.oneAtATime)
  );

  const [getOpenGridItemPosition, setGetOpenGridItemPosition] = useState(
    () => props.grid && open.length
  );

  const [openGridItemOrder, setOpenGridItemOrder] = useState(() => null);

  return (
    <>
      <div className="builder-accordion div">
        {props.items ? (
          <>
            {props.items?.map((item, index) => (
              <AccordionItem
                state={state}
                titleBlocks={item.title}
                detailBlocks={item.detail}
                index={index}
                openGridItemOrder={openGridItemOrder}
                onlyOneAtATime={(event) => onlyOneAtATime}
              />
            ))}
          </>
        ) : null}
      </div>
      <style jsx>{`
        .div {
          display: flex;
          align-items: stretch;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}

export default Accordion;
