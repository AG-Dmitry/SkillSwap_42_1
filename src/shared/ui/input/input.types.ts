export type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "date"
  | "radio"
  | "checkbox"
  | "search";

export type InputProps = {
  type: InputType;
  placeholder?: string;
  value?: string;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  name?: string;
  checked?: boolean;
  children?: React.ReactNode;
  isOpenList?: boolean;
};
