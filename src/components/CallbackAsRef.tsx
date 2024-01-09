import { useEffect, useRef, useState } from "react";

const CallbackAsRef = () => {
  const [show, setShow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef?.current?.focus();
    }
  }, [show]);
  return (
    <div>
      <button onClick={() => setShow((prev: boolean) => !prev)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <input type="text" ref={inputRef} />}
    </div>
  );
};

export default CallbackAsRef;
