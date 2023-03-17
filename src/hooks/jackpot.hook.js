import { useState, useEffect } from 'react';
import { backendUrl } from "../config"

const useGetJackpots = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendUrl}/jackpots.php`);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {data, loading, error};
};

const useGetJackpot = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = (game) => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendUrl}/jackpots.php`);
        const json = await response.json();
        setData(json.find(j => j.game === game) || undefined);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }

  return {data, loading, getData};
};


export { useGetJackpots, useGetJackpot };