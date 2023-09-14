import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [url]);
  return {data, isError, isLoading}
};
