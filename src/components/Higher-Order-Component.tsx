import axios from "axios";
import { useEffect, useState } from "react";

type Props = {
  sourceName: string;
  url: string;
};

export const logProps = (Component: any) => {
  return (props: Props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const resposne = await axios.get(`${props.url}`);
        setData(resposne.data);
      })();
    }, []);
    return <Component {...props} {...{ [props.sourceName]: data }} />;
  };
};
