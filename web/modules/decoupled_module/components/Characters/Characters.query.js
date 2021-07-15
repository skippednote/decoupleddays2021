import React from "react";
import { useQuery } from "react-query";

export const Characters = () => {
  const { data, error, isLoading } = useQuery("characters", () =>
    fetch("https://rickandmortyapi.com/api/character/").then((r) => r.json())
  );

  if (isLoading) {
    return <h4>Fetching the Characters...</h4>;
  }

  if (error) {
    return <h4>There was an error!</h4>;
  }

  return (
    <>
      {data &&
        data.results.map((character) => (
          <details key={character.id}>
            <summary>{character.name}</summary>
            <img src={character.image} loading="lazy" />
          </details>
        ))}
    </>
  );
};

export default Characters;
