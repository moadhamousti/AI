import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  block?:boolean;
} & HTMLAttributes<HTMLButtonElement>;

const classes = cva(
  "text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-[8px]",
  {
    variants: {
      block: {
        true: "w-full",
      },
      variant: {
        primary: [
          "border-gradient",
        ],
        secondary: ["bg-gray-100 text-gray-950"],
        tertiary: ["bg-gray-800 text-gray-200"],
      },
    },
    defaultVariants: {
      variant: "primary",
      block: false,
    },
  }
);

export const Button = (props: ButtonProps) => {
  const { className = "", children, ...otherProps } = props;
  return (
    <button className={classes({ ...otherProps, className })}>
      {children}
    </button>
  );
};
