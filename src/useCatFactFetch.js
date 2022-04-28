import { useEffect } from "react";

export const useCatfactFetch = (callback) => {
  const getData = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    callback(data["fact"]);
    console.log(data["fact"]);
  };

  useEffect(() => {
    getData();
  }, []);
};
