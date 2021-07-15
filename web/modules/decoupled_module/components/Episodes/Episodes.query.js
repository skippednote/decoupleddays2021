import React, { Suspense } from "react";
import { useQuery } from "react-query";

export const Episodes = () => {
  const { data, error, isLoading } = useQuery("episodes", () =>
    fetch("https://rickandmortyapi.com/api/episode/").then((r) => r.json())
  );

  if (isLoading) {
    return <h4>Fetching the Episodes...</h4>;
  }

  if (error) {
    return <h4>There was an error!</h4>;
  }

  return (
    <>
      {data &&
        data.results.map((episode) => (
          <details key={episode.id}>
            <summary>{episode.name}</summary>
            <p>{episode.air_date}</p>
          </details>
        ))}
    </>
  );
};

export default Episodes;
