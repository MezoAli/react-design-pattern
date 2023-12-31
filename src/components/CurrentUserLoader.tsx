import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";

const CurrentUserLoader = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("/api/current-user");
        console.log(response);

        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    console.log(React.Children.toArray(children));
    console.log(children);

    getUser();
  }, []);
  return (
    <>
      {React.Children.map(children, (child: React.ReactNode) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default CurrentUserLoader;
