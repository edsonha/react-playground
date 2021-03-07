import React from "react";
import { useState, useEffect } from "react";

const WithData = (Component) => {
  // For React Hook, has to be called from functional component and not callback
  const WrappedComponent = (props) => {
    const { source, title } = props;
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${source}`
        );
        const data = await response.json();
        setData(data.slice(0, 2));
      }
      fetchData();
    }, [source]);

    return (
      <div>
        <h1>{title}</h1>
        {!data.length ? (
          <h1>Loading</h1>
        ) : (
          <Component data={data} extra="extra data from HOC" {...props} />
        )}
      </div>
    );
  };
  return WrappedComponent;
};

export default WithData;
