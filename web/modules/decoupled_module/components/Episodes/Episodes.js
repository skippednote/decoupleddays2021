import React, { useEffect, useState } from "react";

export const Episodes = () => {
  const [loading, setLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const main = async () => {
      try {
        setLoading(true);
        let { results } = await fetch(
          "https://rickandmortyapi.com/api/episode/"
        ).then((r) => r.json());
        setEpisodes(results);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    main();
  }, []);

  if (loading) {
    return <h4>Fetching the Episodes...</h4>;
  }

  if (error) {
    return <h4>There was an error!</h4>;
  }

  return (
    <>
      {episodes.map((episode) => (
        <details key={episode.id}>
          <summary>{episode.name}</summary>
          <p>{episode.air_date}</p>
        </details>
      ))}
    </>
  );
};
