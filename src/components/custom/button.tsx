type ButtonProps = {
  text: string;
  classes?: string[];
};

export const Button = (props: ButtonProps) => {
  const { text, classes = [] } = props;
  const classNames = [
    "font-poppins",
    "flex",
    "justify-center",
    "bg-black",
    "text-base",
    "text-white",
    "py-[13px]",
    "w-full",
    "h-[50px]",
    "tracking-[0.2px]",
    "font-bold",
    ...classes,
  ];
  return <button className={classNames.join(" ")}>{text}</button>;
};
