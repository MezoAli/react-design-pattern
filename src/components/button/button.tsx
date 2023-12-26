// type ButtonProps = React.PropsWithChildren<{
//   onClick: () => void;
// }>;

type ButtonProps = React.ComponentPropsWithoutRef<"button">;
type DivProps = React.ComponentPropsWithoutRef<"div">;

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};
export const Div = ({ children }: DivProps) => {
  return <div>{children}</div>;
};

export default Button;
