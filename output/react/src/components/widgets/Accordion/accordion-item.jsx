import * as React from "react";
import { useState } from "react";
import RenderBlocks from "../../render-blocks";

function AccordionItem(props) {
  const [isOpen, setIsOpen] = useState(
    () => props.state.open.indexOf(props.index) !== -1
  );

  const [open, setOpen] = useState(() => null);

  return (
    <>
      <div key={props.index}>
        <div
          data-index={props.index}
          onClick={(event) => {
            if (isOpen) {
              props.state.open = props.onlyOneAtATime
                ? []
                : props.state.open.filter((item) => item !== props.index);
            } else {
              props.state.open = props.onlyOneAtATime
                ? [props.index]
                : props.state.open.concat(props.index);
            }
          }}
          className={
            `builder-accordion-title builder-accordion-title-${
              isOpen ? "open" : "closed"
            }` + " div"
          }
        >
          <RenderBlocks
            blocks={props.titleBlocks}
            path={`items.${props.index}.title`}
          />
        </div>

        {isOpen ? (
          <>
            <div
              className={`builder-accordion-detail builder-accordion-detail-${
                isOpen ? "open" : "closed"
              }`}
            >
              <RenderBlocks
                blocks={props.detailBlocks}
                path={`items.${props.index}.detail`}
              />
            </div>
          </>
        ) : null}
      </div>
      <style jsx>{`
        .div {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
      `}</style>
    </>
  );
}

export default AccordionItem;
