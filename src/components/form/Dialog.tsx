import { forwardRef } from "react";

const Dialog = forwardRef<HTMLDialogElement, any>(
  ({ handleCloseDialog, name }, ref) => {
    return (
      <dialog ref={ref} onClick={handleCloseDialog}>
        the name is : {name}
      </dialog>
    );
  }
);

export default Dialog;
