import { useState } from "react";
import useSpringTransition from "./useSpringTransition";

const useTransition = () => {
  const [isToggled, setToggle] = useState(false);
  const transition = useSpringTransition(isToggled);

  return { isToggled, setToggle, transition };
};

export default useTransition;
