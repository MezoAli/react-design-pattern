import { forwardRef } from "react";

const Dialog = forwardRef<HTMLDialogElement, any>(
  ({ handleCloseDialog, children }, ref) => {
    return (
      <dialog ref={ref} onClick={handleCloseDialog}>
        the name is : {children}
      </dialog>
    );
  }
);

export default Dialog;
