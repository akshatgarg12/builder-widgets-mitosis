import AccordionItem from "./accordion-item";

import {
  Fragment,
  component$,
  h,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";

export const Accordion = component$((props) => {
  useStylesScoped$(STYLES);

  const state = useStore({
    getOpenGridItemPosition: props.grid && open.length,
    onlyOneAtATime: Boolean(props.grid || props.oneAtATime),
    open: [],
    openGridItemOrder: null,
  });

  return (
    <div class="builder-accordion div-Accordion">
      {props.items
        ? (props.items || []).map(function (item, index) {
            return (
              <AccordionItem
                state={state}
                titleBlocks={item.title}
                detailBlocks={item.detail}
                index={index}
                openGridItemOrder={state.openGridItemOrder}
                onlyOneAtATime={state.onlyOneAtATime}
              ></AccordionItem>
            );
          })
        : null}
    </div>
  );
});

export default Accordion;

export const STYLES = `
.div-Accordion {
  display: flex;
  align-items: stretch;
  flex-direction: column;
}
`;
