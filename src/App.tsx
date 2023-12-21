import ScreenSpliter from "./components/ScreenSpliter";

const LeftSideComponent = ({ title }: { title: string }) => {
  return <h2 style={{ backgroundColor: "blue" }}>Iam {title} Component</h2>;
};

const RightSideComponent = ({ title }: { title: string }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>Iam {title} Component</h2>;
};

function App() {
  return (
    <>
      <ScreenSpliter leftWidth={1} rightWidth={2}>
        <LeftSideComponent title="Left" />
        <RightSideComponent title="Right" />
      </ScreenSpliter>
    </>
  );
}

export default App;
