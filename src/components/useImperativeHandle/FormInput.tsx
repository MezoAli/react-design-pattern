import { ChangeEvent, useEffect, useId, useRef, useState } from "react";
import Input from "./Input";
import Dialog from "./Dialog";
const FormInput = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [_, setShow] = useState(false);
  const id = useId();

  const handleCloseDialog = () => {
    if (dialogRef?.current) {
      dialogRef?.current?.close();
    }
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef?.current) return;
    if (dialogRef?.current && inputRef?.current) {
      dialogRef?.current?.showModal();
      setShow((prev: boolean) => !prev);
      console.log(inputRef?.current?.value);

      // inputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (inputRef?.current) {
      inputRef?.current?.focus();
    }
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={id}>Name</label>
        <Input ref={inputRef} id={id} />

        <Dialog ref={dialogRef} handleCloseDialog={handleCloseDialog}>
          {inputRef?.current && inputRef?.current?.getValue()}
        </Dialog>
        <button type="submit">Show Result</button>
      </form>
    </>
  );
};

export default FormInput;
