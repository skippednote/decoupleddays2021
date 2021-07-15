import React, { useEffect, useState } from "react";

export const Characters = () => {
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const main = async () => {
      try {
        setisLoading(true);
        let { results } = await fetch(
          "https://rickandmortyapi.com/api/character/"
        ).then((r) => r.json());
        setData(results);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setisLoading(false);
      }
    };
    main();
  }, []);

  if (isLoading) {
    return <h4>Fetching the Characters...</h4>;
  }

  if (error) {
    return <h4>There was an error!</h4>;
  }

  return (
    <>
      {data &&
        data.map((character) => (
          <details key={character.id}>
            <summary>{character.name}</summary>
            <img src={character.image} loading="lazy" />
          </details>
        ))}
    </>
  );
};
