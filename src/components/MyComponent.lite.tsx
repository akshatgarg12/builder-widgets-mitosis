import { useStore, Show, For } from "@builder.io/mitosis";

export default function MyComponent(props) {
  const state = useStore({
    numbers : null,
    vowels : ['a', 'e', 'i', 'o', 'u']
  })

  return (
    <div>
      <Show when={state.numbers}
        else = {
            <For each = {state.vowels}>
              {(vowel) => <h1>vowel : {vowel}</h1>}
            </For>
        }
      >
        <For each={state.numbers}>
          {(number) => <h1>number : {number}</h1>}
        </For>
      </Show>
    </div>
  );
}