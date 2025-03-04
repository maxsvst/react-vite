import { useEffect, useState } from "react";

import { Skeleton } from "antd";

import { getInfo } from "../../api/mockData";
import { InfoDTO } from "../../model/types";

export const WelcomeScreen = () => {
  const [info, setInfo] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await getInfo();
      const data: InfoDTO = await response.json();
      setInfo(data.data.info);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getData();
    })();
  }, []);

  return isLoading ? (
    <Skeleton active paragraph={{ rows: 0 }} />
  ) : (
    <h1 dangerouslySetInnerHTML={{ __html: info }}></h1>
  );
};
