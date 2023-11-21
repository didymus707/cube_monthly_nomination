type ButtonProps = {
  text: string;
};

export const Button = (props: ButtonProps) => {
  const { text } = props;
  return (
    <button className="font-poppins flex justify-center bg-black text-base text-white py-[13px] w-full h-[50px] tracking-[0.2px] font-bold">{text}</button>
  );
};
