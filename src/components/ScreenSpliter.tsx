import React from "react";

interface ScreenSpliterProps {
  children: React.ReactNode;
  leftWidth: number;
  rightWidth: number;
}
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Panel = styled.div`
  flex: ${(p: any) => p.flex};
`;
const ScreenSpliter = ({
  children,
  leftWidth = 1,
  rightWidth = 1,
}: ScreenSpliterProps) => {
  const [Left, Right] = React.Children.toArray(children) as unknown as [
    React.ComponentType,
    React.ComponentType
  ];

  return (
    <Container>
      <Panel flex={leftWidth}>
        <Left />
      </Panel>
      <Panel flex={rightWidth}>
        <Right />
      </Panel>
    </Container>
  );
};

export default ScreenSpliter;
