import axios from "axios";
import { ReactElement, useEffect, useState } from "react";

import React from "react";

interface CurrentUserLoaderProps {
  children: ReactElement<{ user: Record<string, any> }> | ReactElement[];
}

const CurrentUserLoader: React.FC<CurrentUserLoaderProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<Record<string, any>>({
    name: "Sarah Waters",
    age: 55,
    country: "United Kingdom",
    books: ["Fingersmith", "The Night Watch"],
  });
  //   console.log(user);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("/current-user");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    // getUser();
  }, []);
  return (
    <>
      {React.Children.map(children, (child: any) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default CurrentUserLoader;
