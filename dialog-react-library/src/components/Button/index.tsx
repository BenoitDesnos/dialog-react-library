import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;
type CustomButtonProps = ButtonProps & {
  triggerFn: () => void;
  // add as many custom props as you need
};

export const Button = ({ triggerFn, ...props }: CustomButtonProps) => {
  return <button onClick={triggerFn} className="text-blue-500" {...props} />;
};
