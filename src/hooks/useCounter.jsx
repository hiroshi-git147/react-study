import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  // flgを切り替える
  const handleDisplay = useCallback(() => {
    setIsShow((hiddenBtn) => !hiddenBtn);
  }, []);

  return { count, isShow, handleClick, handleDisplay };
};
