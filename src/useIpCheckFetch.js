import { useEffect } from "react";

export const useIpCheckFetch = (callback, callback1, callback2, callback3) => {
  const getData = async () => {
    const response = await fetch("https://api.ipify.org/?format=json");
    const data = await response.json();
    callback(data["ip"]);
  };

  useEffect(() => {
    getData();
  }, []);
};
