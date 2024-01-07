import { createPortal } from "react-dom";
import { styled } from "styled-components";

const ModalContent = styled.div`
  margin: 12% auto;
  width: 50%;
  padding: 25px;
  background-color: white;
  color: black;
`;
const ModalPortal = ({
  children,
  show,
  setShow,
}: {
  children: React.ReactNode;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return createPortal(
    <>
      {show && (
        <div className="overlay" onClick={() => setShow(false)}>
          <ModalContent onClick={(e: any) => e.stopPropagation()}>
            {children}
            <button onClick={() => setShow(false)}>X</button>
          </ModalContent>
        </div>
      )}
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default ModalPortal;
