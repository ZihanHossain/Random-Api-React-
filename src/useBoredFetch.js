import { useEffect } from "react";

export const useBoredFetch = (callback, callback1) => {
  const getData = async () => {
    const response = await fetch("https://www.boredapi.com/api/activity");
    const data = await response.json();
    callback1(data["type"]);
    callback(data["activity"]);
    console.log(data["activity"]);
  };

  useEffect(() => {
    getData();
  }, []);
};
