import { Fragment, component$, h, useStore } from "@builder.io/qwik";

export const MyComponent = component$((props) => {
  const state = useStore({
    numbers: [1, 2, 3, 4, 5],
    vowels: ["a", "e", "i", "o", "u"],
  });

  return (
    <div>
      {state.numbers && state.numbers.length
        ? (state.numbers || []).map(function (number) {
            return <h1>number : {number}</h1>;
          })
        : null}
    </div>
  );
});

export default MyComponent;
