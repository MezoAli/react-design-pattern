import { forwardRef } from "react";

const InputRef = forwardRef<HTMLInputElement, any>((props, ref) => {
  return (
    <>
      <input {...props} type="text" id="name" ref={ref} />;
    </>
  );
});

export default InputRef;
