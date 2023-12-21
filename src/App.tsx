import ScreenSpliter from "./components/ScreenSpliter";

const LeftSideComponent = () => {
  return <h2>Iam Left Component</h2>;
};

const RightSideComponent = () => {
  return <h2>Iam Right Component</h2>;
};

function App() {
  return (
    <>
      <ScreenSpliter Left={LeftSideComponent} Right={RightSideComponent} />
    </>
  );
}

export default App;
