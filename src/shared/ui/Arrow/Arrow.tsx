import type { FC } from "react";
import type { TArrowProps } from "@shared/ui/Arrow/types";
import { ArrowButtonSvg } from "./svg/ArrowButtonSvg";
// Данный компонент отображает стрелку для раскрывающегося списка

export const Arrow: FC<TArrowProps> = (props) => {
  const { isOpen } = props;

  return (
    <ArrowButtonSvg
      isOpen={isOpen}
      aria-label={isOpen ? "Стелочка наверх" : "Стелочка вниз"}
      aria-hidden="true"
    />
  );
};
