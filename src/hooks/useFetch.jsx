import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function useFetch(URL) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setIsLoading(true);
    console.log("fetch");
    axios
      .get(URL)
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        // console.log("ERRRR" + err);
        setError(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [URL]);

  const refetch = () => {
    console.log("refetch");
    setIsLoading(true);
    setError(null);
    fetchData();
  };

  return { data, isLoading, error, refetch };
}
