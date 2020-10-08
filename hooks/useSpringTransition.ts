import {
  useSharedValue,
  useDerivedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

const useSpringTransition = (state: boolean | number) => {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = typeof state === "boolean" ? (state ? 1 : 0) : state;
  }, [state, value]);

  const transition = useDerivedValue(() => {
    return withSpring(value.value);
  });

  return transition;
};

export default useSpringTransition;
