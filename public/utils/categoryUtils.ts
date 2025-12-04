// Утилиты для работы с категориями и подкатегориями

//
//  Получает ID категории по ID подкатегории
//  На вход принимает ubcategoryId - ID подкатегории (от 1 до 42)
//  Возвращает ID категории (1-6) или 0, если не найдено
//
// subcategoryId от 1 до 8 -> категория 1 (Бизнес)
// subcategoryId от 9 до 16 -> категория 2 (Творчество)
// subcategoryId от 17 до 23 -> категория 3 (Языки)
// subcategoryId от 24 до 29 -> категория 4 (Образование)
// subcategoryId от 30 до 35 -> категория 5 (Дом)
// subcategoryId от 36 до 42 -> категория 6 (Здоровье)

export const getCategoryIdBySubcategory = (subcategoryId: number): number => {
  if (subcategoryId >= 1 && subcategoryId <= 8) return 1;
  if (subcategoryId >= 9 && subcategoryId <= 16) return 2;
  if (subcategoryId >= 17 && subcategoryId <= 23) return 3;
  if (subcategoryId >= 24 && subcategoryId <= 29) return 4;
  if (subcategoryId >= 30 && subcategoryId <= 35) return 5;
  if (subcategoryId >= 36 && subcategoryId <= 42) return 6;
  return 0;
};

//
//  Получает название класса CSS для тега на основе ID категории
//  На вход принимает categoryId - ID категории и styles - объект стилей из модуля
//  Возвращает название класса CSS
//

export const getTagClassName = (
  categoryId: number,
  styles: Record<string, string>,
): string => {
  const colorMap: Record<number, string> = {
    1: styles.business,
    2: styles.creativity,
    3: styles.languages,
    4: styles.education,
    5: styles.home,
    6: styles.health,
  };
  return colorMap[categoryId] || styles.default;
};
