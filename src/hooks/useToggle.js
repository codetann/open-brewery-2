import { useState } from "react";

export function useToggle(initial = false) {
  const [toggle, setToggled] = useState(initial);

  const setToggle = () => setToggled((prevState) => !prevState);

  return [toggle, setToggle];
}
