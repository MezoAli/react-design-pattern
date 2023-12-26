// type ButtonProps = React.PropsWithChildren<{
//   onClick: () => void;
// }>;

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};
