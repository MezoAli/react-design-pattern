import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";

const GenericLoader = ({
  children,
  url,
  sourceName,
}: {
  children: React.ReactNode;
  url: string;
  sourceName: string;
}) => {
  const [data, setData] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${url}`);

        setData(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    getUser();
  }, [url]);
  return (
    <>
      {React.Children.map(children, (child: React.ReactNode) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [sourceName]: data });
        }
        return child;
      })}
    </>
  );
};

export default GenericLoader;
