const Header = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ fontSize: "50px" }}>{children}</div>;
};

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ fontSize: "50px" }}>{children}</div>;
};

const Body = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ fontSize: "18px" }}>{children}</div>;
};

const CompoundComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "20px auto",
        width: "50%",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};

export default CompoundComponent;

CompoundComponent.Header = Header;
CompoundComponent.Footer = Footer;
CompoundComponent.Body = Body;
