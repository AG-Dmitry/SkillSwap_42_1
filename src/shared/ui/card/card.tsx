import React, { memo, useState, useEffect } from "react";
import { Button } from "../button";
import type { CardProps } from "./type";
import styles from "./card.module.scss";

// Типы для данных
type TSkill = {
  id: number;
  subcategoryId: number;
  userId: number;
  name: string;
  description?: string;
  type_of_proposal: "учу" | "учусь";
  images: string[];
  modified_datetime: string;
};

export const Card: React.FC<CardProps> = memo(
  ({ user, cities, onDetailsClick, className = "", isLoading = false }) => {
    const [skills, setSkills] = useState<TSkill[]>([]);
    const [skillsLoading, setSkillsLoading] = useState(true);

    // Загружаем навыки при монтировании компонента
    useEffect(() => {
      const loadSkills = async () => {
        try {
          const response = await fetch("/db/skills.json");
          const data: TSkill[] = await response.json(); // data - это массив навыков
          setSkills(data);
        } catch (error) {
          console.error("Error loading skills:", error);
          setSkills([]);
        } finally {
          setSkillsLoading(false);
        }
      };

      loadSkills();
    }, []);

    // Функция для вычисления возраста из даты рождения
    const calculateAge = (dateOfBirth: Date): string => {
      const birthDate = new Date(dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      // Склонение лет
      const lastDigit = age % 10;
      const lastTwoDigits = age % 100;

      if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return `${age} лет`;
      }

      if (lastDigit === 1) {
        return `${age} год`;
      } else if (lastDigit >= 2 && lastDigit <= 4) {
        return `${age} года`;
      } else {
        return `${age} лет`;
      }
    };

    // Функция для получения цвета фона тега на основе категории
    const getTagBackgroundColor = (categoryId: number): string => {
      const colorMap: Record<number, string> = {
        1: "#eee7f7", // Бизнес и карьера
        2: "#f7e7f2", // Творчество и искусство
        3: "#ebe5c5", // Иностранные языки
        4: "#e7f2f6", // Образование и развитие
        5: "#f7ebe5", // Дом и уют
        6: "#e9f7e7", // Здоровье и лайфстайл
      };
      return colorMap[categoryId] || "#e8ecf7";
    };

    // Функция для получения названия города по cityId
    const getCityName = (cityId: number): string => {
      const city = cities.find((c) => c.id === cityId);
      return city ? city.name : "Город не указан";
    };

    // Функция для получения категории по subcategoryId
    const getCategoryId = (subcategoryId: number): number => {
      // subcategoryId от 1 до 8 -> категория 1 (Бизнес)
      // subcategoryId от 9 до 16 -> категория 2 (Творчество)
      // subcategoryId от 17 до 23 -> категория 3 (Языки)
      // subcategoryId от 24 до 29 -> категория 4 (Образование)
      // subcategoryId от 30 до 35 -> категория 5 (Дом)
      // subcategoryId от 36 до 42 -> категория 6 (Здоровье)
      if (subcategoryId >= 1 && subcategoryId <= 8) return 1;
      if (subcategoryId >= 9 && subcategoryId <= 16) return 2;
      if (subcategoryId >= 17 && subcategoryId <= 23) return 3;
      if (subcategoryId >= 24 && subcategoryId <= 29) return 4;
      if (subcategoryId >= 30 && subcategoryId <= 35) return 5;
      if (subcategoryId >= 36 && subcategoryId <= 42) return 6;
      return 0;
    };

    // Функция для получения навыков пользователя по типу
    const getUserSkillsByType = (type: "canTeach" | "wantToLearn") => {
      return skills.filter(
        (skill) =>
          skill.userId === user.id &&
          skill.type_of_proposal === (type === "canTeach" ? "учу" : "учусь"),
      );
    };

    // Получаем навыки пользователя
    const canTeachSkills = getUserSkillsByType("canTeach");
    const wantToLearnSkills = getUserSkillsByType("wantToLearn");

    const handleDetailsClick = React.useCallback(() => {
      if (!isLoading && !skillsLoading) {
        onDetailsClick?.(user);
      }
    }, [isLoading, skillsLoading, onDetailsClick, user]);

    const isCardLoading = isLoading || skillsLoading;

    return (
      <div
        className={`${styles.card} ${className} ${isCardLoading ? styles.loading : ""}`}
      >
        {/* Заголовок карточки с аватаром и информацией о пользователе */}
        <div className={styles.card__header}>
          <div className={styles.card__avatar}>
            <img
              src={user.avatarUrl}
              alt={user.name}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://i.pravatar.cc/150?img=0";
              }}
              loading="lazy"
            />
          </div>
          <div className={styles.card__userInfo}>
            <h3 className={styles.card__name}>{user.name}</h3>
            <p className={styles.card__details}>
              {getCityName(user.cityId)}, {calculateAge(user.dateOfBirth)}
            </p>
          </div>
        </div>

        {/* Навык, которому может научить */}
        <div className={styles.card__section}>
          <div className={styles.card__sectionTitle}>Может научить:</div>
          <div className={styles.card__skillItem}>
            <div className={styles.card__skillInfo}>
              <div className={styles.card__subcategories}>
                {canTeachSkills.slice(0, 1).map((skill) => (
                  <div
                    key={skill.id}
                    className={styles.card__subcategory}
                    style={{
                      background: getTagBackgroundColor(
                        getCategoryId(skill.subcategoryId),
                      ),
                    }}
                  >
                    {skill.name}
                  </div>
                ))}
                {canTeachSkills.length === 0 && !skillsLoading && (
                  <div
                    className={styles.card__subcategory}
                    style={{ background: "#e8ecf7" }}
                  >
                    Навыки не указаны
                  </div>
                )}
                {skillsLoading && (
                  <div
                    className={styles.card__subcategory}
                    style={{ background: "#e8ecf7" }}
                  >
                    Загрузка...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Навыки, которым хочет научиться */}
        <div className={styles.card__section}>
          <div className={styles.card__sectionTitle}>Хочет научиться:</div>
          <div className={styles.card__learnSkills}>
            {wantToLearnSkills.slice(0, 2).map((skill) => (
              <div
                key={skill.id}
                className={styles.card__learnSkill}
                style={{
                  background: getTagBackgroundColor(
                    getCategoryId(skill.subcategoryId),
                  ),
                }}
              >
                {skill.name}
              </div>
            ))}

            {wantToLearnSkills.length > 2 && (
              <div className={styles.card__additionalSkills}>
                +{wantToLearnSkills.length - 2}
              </div>
            )}
            {wantToLearnSkills.length === 0 && !skillsLoading && (
              <div
                className={styles.card__learnSkill}
                style={{ background: "#e8ecf7" }}
              >
                Навыки не указаны
              </div>
            )}
            {skillsLoading && wantToLearnSkills.length === 0 && (
              <div
                className={styles.card__learnSkill}
                style={{ background: "#e8ecf7" }}
              >
                Загрузка...
              </div>
            )}
          </div>
        </div>

        {/* кнопка "Подробнее" */}
        <div className={styles.card__actions}>
          <div className={styles.card__detailsButton}>
            <Button
              variant="primary"
              disabled={isCardLoading}
              onClick={handleDetailsClick}
            >
              {skillsLoading ? "Загрузка..." : "Подробнее"}
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

Card.displayName = "Card";
export default Card;
