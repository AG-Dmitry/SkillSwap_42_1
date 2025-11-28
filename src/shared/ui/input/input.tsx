import type { InputProps } from "./input.types";
import style from "./styles/input.module.scss";

export const Input = (props: InputProps) => {
  const { type, children, isOpenList = false, ...restProps } = props;

  if (type === "radio" || type === "checkbox") {
    const inputClass =
      type === "radio" ? style.inputRadio : style.inputCheckbox;

    const labelClass =
      type === "radio" ? style.labelRadio : style.labelCheckbox;

    const inputCustom =
      type === "radio"
        ? style.inputRadioCustom
        : `${style.inputCheckboxCustom} ${isOpenList ? style.isList : style.nonList}`;

    return (
      <label className={labelClass}>
        <input className={inputClass} type={type} {...restProps} hidden />
        <span className={inputCustom}> </span>
        {children}
      </label>
    );
  }

  if (type === "search") {
    return (
      <label className={style.inputSearchWrapper}>
        <input
          className={style.inputSearch}
          type={type}
          placeholder={props.placeholder || "Искать навык"}
          {...restProps}
        />
      </label>
    );
  }

  return <input className={style.input} type={type} {...restProps} />;
};

// Универсальный компонент, который покрывает всё использование импутов в приложении. В качестве обязательного пропса необходимо передать тип инпута (type). Далее остальные пропсы передаются по мере необходимости.
// Обратите внимание! В макете, в выпадающем списке, есть разные отрисовки при состоянии checked. В данном компоненте это учтено через пропс isOpenList.
// Компоненты полностью стилизированы и, на текущий момент, не требуют внешних вмешательств. Разве что, в дальнейшем, подключим оригинальные картинки из проекта. Сейчас стоят заглушки.
// Пример использования:
// <Input type="checkbox" isOpenList children="Бизнес и карьера" />
// <Input type="checkbox" children="Бизнес и карьера" />
// <Input type="radio" children="Хочу научиться" name="Обязательно одинаковое имя!"/>
// <Input type="radio" children="Хочу играть в батлу" name="Обязательно одинаковое имя!"/>
// <Input type="text" placeholder="Введите ваше имя" />
// <Input type="search" placeholder="Искать навык" />
