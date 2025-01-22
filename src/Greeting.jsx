import React, { useState } from "react";

const Greeting = () => {
  const [hasChanged, setHasChanged] = useState(false);

  const changeTextHandler = () => {
    setHasChanged(true);
  };
  return (
    <div>
      <h1>Hello World!</h1>
      {!hasChanged && <p>It's good to see you 🫶</p>}
      {hasChanged && (
        <p>
          <b>OOOH MY GOD, YOU ARE SOO AWESOME</b>
        </p>
      )}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
