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




// "use client";

// import { cva, VariantProps } from "class-variance-authority";
// import { HTMLAttributes, useState } from "react";
// import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

// export type ButtonProps = {
//   variant?: "primary" | "secondary" | "tertiary";
//   block?: boolean;
// } & HTMLAttributes<HTMLButtonElement>;

// const classes = cva(
//   "text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-[8px]",
//   {
//     variants: {
//       block: {
//         true: "w-full",
//       },
//       variant: {
//         primary: ["border-gradient"],
//         secondary: ["bg-gray-100 text-gray-950"],
//         tertiary: ["bg-gray-800 text-gray-200"],
//       },
//     },
//     defaultVariants: {
//       variant: "primary",
//       block: false,
//     },
//   }
// );

// export const Button = (props: ButtonProps) => {
//   const { className = "", children, ...otherProps } = props;
//   const [isHovered, setIsHovered] = useState(false);
//   const angle = useMotionValue(45);
//   const background = useMotionTemplate`[background:linear-gradient(var(--color-gray-950),var(--color-gray-950)) padding-box, conic-gradient(from_${angle}deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]`;
//   // [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_padding-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]
//   return (
//     <motion.button
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className={classes({ ...otherProps, className })}
//       style={
//         props.variant === "primary"
//           ? {
//               background: background,
//             }
//           : undefined
//       }
//     >
//       {children}
//     </motion.button>
//   );
// };
