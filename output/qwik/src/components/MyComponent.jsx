import { Fragment, component$, h, useStore } from "@builder.io/qwik";

export const MyBasicComponent = component$((props) => {
  const state = useStore({ name: "Foo" });

  return (
    <div>
      {props.message || "Hello"}
      {state.name}! I can run in React, Vue, Solid or Svelte!
    </div>
  );
});

export default MyBasicComponent;
