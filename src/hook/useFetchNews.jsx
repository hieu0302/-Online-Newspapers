import { useEffect, useState } from "react";
import ApiService from "../API/ApiService";
import axios from "axios";

const useFetchNews = (category) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});

  const onFetch = async () => {
    try {
      const data = await ApiService.getNewsByCategory(category);
      setData(data.articles.results);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    onFetch();
  }, []);

  return {
    data,
    error,
  };
};

export default useFetchNews;
