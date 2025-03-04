import { useEffect, useState } from "react";

import { Spin } from "antd";

export const Loader = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const totalTime = 5000;
    const startTime = Date.now();

    const intervalId = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newPercent = Math.min((elapsedTime / totalTime) * 100, 100);
      setPercent(newPercent);

      if (elapsedTime >= totalTime) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return <Spin percent={percent} />;
};
