import { styled } from "styled-components";

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #00000075;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  width: 50%;
  padding: 25px;
  background-color: white;
  color: black;
`;
const ControlledModal = ({
  children,
  show,
  setShow,
}: {
  children: React.ReactNode;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {show && (
        <ModalOverlay onClick={() => setShow(false)}>
          <ModalContent onClick={(e: any) => e.stopPropagation()}>
            <button onClick={() => setShow(false)}>Close Modal</button>
            <hr />
            {children}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default ControlledModal;
