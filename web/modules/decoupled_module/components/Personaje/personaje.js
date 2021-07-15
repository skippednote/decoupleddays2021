import React, { useEffect, useState, lazy, Suspense } from "react";
const Greeting = lazy(() =>
  import(/* webpackChunkName: "Greeting" */ "../global/Greeting")
);

export const Personaje = () => {
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const main = async () => {
      try {
        setisLoading(true);
        let data = await fetch(
          "https://rickandmortyapi.com/api/character/1"
        ).then((r) => r.json());
        setData(data);
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
    return <h4>Fetching the Character...</h4>;
  }

  if (error) {
    return <h4>There was an error!</h4>;
  }

  return (
    <>
      <Suspense fallback="Loading...">
        <Greeting name={"Bassam"} />
      </Suspense>
      {data && (
        <div>
          <h1>{data.name}</h1>
          <img src={data.image} alt={data.name} />
        </div>
      )}
    </>
  );
};
