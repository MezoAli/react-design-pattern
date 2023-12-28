const classNames = {
  1: "primary 1",
  2: "secondary 1",
  3: "teritary 1",
} as const;

type TestTypeProps = {
  variant: keyof typeof classNames;
};
type Types = typeof classNames;
type Keys = keyof Types;
type Values = Types[Keys];

const TestTypes = ({ variant = 1 }: TestTypeProps) => {
  return <div className={classNames[variant]}></div>;
};

export default TestTypes;
