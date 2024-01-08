import { ChangeEvent, useEffect, useId, useRef } from "react";
import Input from "./Input";
import Dialog from "./Dialog";
const FormInput = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
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
    }
    inputRef.current.value = "";
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

        <button>Show Result</button>
      </form>
      <Dialog
        ref={dialogRef}
        name={inputRef?.current?.value}
        handleCloseDialog={handleCloseDialog}
      />
    </>
  );
};

export default FormInput;
