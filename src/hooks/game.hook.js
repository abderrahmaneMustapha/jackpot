import { useState, useEffect } from 'react';
import { backendUrl, othersList } from "../config"

const useGetGames = (category, jackpots) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    new Promise(async () => {
      await filterGames(category, jackpots)
    })
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${backendUrl}/games.php`);
      const json = await response.json();
      setLoading(false);
      return json;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const filterGames  = async (_category, _jackpots) => {
    let _data =  await fetchData();
    let filtered = []
    // When the category is "other"
    if(_category === "other") {
      filtered = _data.filter(game => othersList.some(o => game.categories.includes(o)))
      setData(filtered);
      return
    }

    // Filter games by category
    if (_category) {
      filtered = _data.filter(game => game.categories.includes(_category));
      setData(filtered);
      return
    }

    // Filter games by id
    if (_jackpots) {
      filtered = _data.filter(g => _jackpots.some(j => j.game === g.id));
      setData(filtered);
      return
    }
    setData(_data);

  }

  return {data, loading, error, filterGames};
};

export default useGetGames;
