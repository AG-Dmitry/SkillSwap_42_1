import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type TButtonVariant = "primary" | "secondary" | "tertiary";

export type TButtonProps = {
  children: ReactNode;
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  variant?: TButtonVariant;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
