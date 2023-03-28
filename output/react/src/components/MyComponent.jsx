import * as React from "react";
import { useState } from "react";

function MyComponent(props) {
  const [numbers, setNumbers] = useState(() => [1, 2, 3, 4, 5]);

  const [vowels, setVowels] = useState(() => ["a", "e", "i", "o", "u"]);

  return (
    <div>
      {numbers && numbers.length ? (
        <>
          {numbers?.map((number) => (
            <h1>number :{number}</h1>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default MyComponent;
