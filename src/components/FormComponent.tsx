import { ChangeEvent, FormEvent, useState } from "react";

type InitialData = {
  name: string;
  age: string;
  title: string;
};

const initialState: InitialData = {
  age: "",
  name: "",
  title: "",
};

const FormComponent = () => {
  const [data, setData] = useState<InitialData | null>(initialState);
  const [currentIndex, setCurrentIndex] = useState(2);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prevState: any) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      {currentIndex === 0 && (
        <>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={data?.name}
            onChange={handleChange}
          />
        </>
      )}
      {currentIndex === 1 && (
        <>
          <label>age</label>
          <input
            type="text"
            name="age"
            value={data?.age}
            onChange={handleChange}
          />
        </>
      )}
      {currentIndex === 2 && (
        <>
          <label>title</label>
          <input
            type="text"
            name="title"
            value={data?.title}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
};

export default FormComponent;
