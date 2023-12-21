interface ScreenSpliterProps {
  Left: React.ComponentType;
  Right: React.ComponentType;
}
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div`
  flex: 1;
`;
const ScreenSpliter = ({ Left, Right }: ScreenSpliterProps) => {
  return (
    <Container>
      <Panel>
        <Left />
      </Panel>
      <Panel>
        <Right />
      </Panel>
    </Container>
  );
};

export default ScreenSpliter;
