import {
  InputHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
interface InputRefProps extends InputHTMLAttributes<HTMLInputElement> {}

interface InputRefHandle {
  focus(): void;
}

const InputRef = forwardRef<InputRefHandle, InputRefProps>((props, ref) => {
  const internalRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          internalRef?.current?.focus();
        },
        getValue() {
          return internalRef?.current?.value;
        },
      };
    },
    []
  );
  return (
    <>
      <input {...props} type="text" id={props.id} ref={internalRef} />
    </>
  );
});

export default InputRef;
