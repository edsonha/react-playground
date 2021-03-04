import React from "react";
import { useState, useEffect } from "react";

const WithData = (Component, urlSource) => {
  // For React Hook, has to be called from functional component and not callback
  const WrappedComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${urlSource}`
        );
        const data = await response.json();
        setData(data.slice(0, 3));
      }
      fetchData();
    });

    return <Component data={data} />;
  };
  return WrappedComponent;
};

export default WithData;
