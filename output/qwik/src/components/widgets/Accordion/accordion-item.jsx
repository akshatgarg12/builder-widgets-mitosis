import RenderBlocks from "../../render-blocks";

import {
  Fragment,
  component$,
  h,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";

export const AccordionItem = component$((props) => {
  useStylesScoped$(STYLES);

  const state = useStore({
    isOpen: props.state.open.indexOf(props.index) !== -1,
  });

  return (
    <div key={props.index}>
      <div
        data-index={props.index}
        onClick$={(event) => {
          if (state.isOpen) {
            props.state.open = props.onlyOneAtATime
              ? []
              : props.state.open.filter((item) => item !== props.index);
          } else {
            props.state.open = props.onlyOneAtATime
              ? [props.index]
              : props.state.open.concat(props.index);
          }
        }}
        class={
          `builder-accordion-title builder-accordion-title-${
            state.isOpen ? "open" : "closed"
          }` + " div-AccordionItem"
        }
      >
        <RenderBlocks
          blocks={props.titleBlocks}
          path={`items.${props.index}.title`}
        ></RenderBlocks>
      </div>
      {state.isOpen ? (
        <div
          class={`builder-accordion-detail builder-accordion-detail-${
            state.isOpen ? "open" : "closed"
          }`}
        >
          <RenderBlocks
            blocks={props.detailBlocks}
            path={`items.${props.index}.detail`}
          ></RenderBlocks>
        </div>
      ) : null}
    </div>
  );
});

export default AccordionItem;

export const STYLES = `
.div-AccordionItem {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
`;
