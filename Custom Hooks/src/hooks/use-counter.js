import { useEffect, useState } from "react";
const useCounter = (flag=1) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + flag);
    }, 1000);

    return () => clearInterval(interval);
  }, [flag]);
  return counter;
};

export default useCounter;
