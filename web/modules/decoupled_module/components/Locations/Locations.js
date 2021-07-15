import React, { useEffect, useState, lazy, Suspense } from "react";

export const Locations = () => {
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const main = async () => {
      try {
        setisLoading(true);
        let { results } = await fetch(
          "https://rickandmortyapi.com/api/location/"
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
    return <h4>Fetching the Locations...</h4>;
  }

  if (error) {
    return <h4>There was an error!</h4>;
  }

  return (
    <>
      {data &&
        data.map((location) => (
          <details key={location.id}>
            <summary>{location.name}</summary>
            <section>
              <p>
                <strong>Type:</strong> {location.type}
              </p>
              <p>
                <strong>Dimension:</strong> {location.dimension}
              </p>
            </section>
          </details>
        ))}
    </>
  );
};
