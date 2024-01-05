export const myObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "InnerInnervalue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

const isObject = (obj: string) => (typeof obj === "object" ? true : false);

const RecursiveComponent = ({ data }: any) => {
  if (!isObject(data)) {
    return <li key={data}>{data}</li>;
  }

  const pairs = Object.entries(data);
  console.log(pairs);

  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li key={key}>
            {key} :
            <ul>
              <RecursiveComponent data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
};

export default RecursiveComponent;
