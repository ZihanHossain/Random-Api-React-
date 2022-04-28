import { useEffect } from "react";

export const useIpDetailsFetch = (
  callback,
  callback1,
  callback2,
  callback3
) => {
  async function getData() {
    const response = await fetch("http://ip-api.com/json/103.91.130.243");
    const data = await response.json();
    callback(data["city"]);
    callback1(data["country"]);
    callback2(data["zip"]);
    callback3(data["timezone"]);
  }

  useEffect(() => {
    getData();
  }, []);
};
