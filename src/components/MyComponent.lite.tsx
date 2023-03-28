import { useStore, Show, For } from "@builder.io/mitosis";

export default function MyComponent(props) {
  const state = useStore({
    numbers : [1,2,3,4,5],
    vowels : ['a', 'e', 'i', 'o', 'u'],
    getAccordionItem : () => <h1>Accordion Item</h1>
  })
  return (
    <div>
      <Show when={state.numbers && state.numbers.length}>
        <For each={state.numbers}>
          {(number) => <h1>number : {state.getAccordionItem()} {number}</h1>}
        </For>
      </Show>
    </div>
  );
}