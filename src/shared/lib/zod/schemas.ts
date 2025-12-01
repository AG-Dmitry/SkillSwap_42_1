import { z } from "zod";

export const skillTitleSchema = z
  .string()
  .min(3, { message: "Название должно быть не менее 3 символов" })
  .max(50, { message: "Название не должно превышать 50 символов" })
  .regex(/^[А-Яа-яA-Za-z0-9\s\-_,.!?()]+$/, {
    message: "Название содержит недопустимые символы",
  });

export const skillDescriptionSchema = z
  .string()
  .max(500, { message: "Описание не должно превышать 500 символов" })
  .optional();

//TODO: export const skillTypeSchema =

export const skillCategorySchema = z
  .string()
  .min(1, { message: "Выберите категорию" });

export const skillImageSchema = z
  .instanceof(File)
  .refine(
    (file) => {
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      return allowedTypes.includes(file.type);
    },
    { message: "Поддерживаются только JPEG и PNG изображения" },
  )
  .refine(
    (file) => {
      const maxSize = 2 * 1024 * 1024; // 2 MB
      return file.size <= maxSize;
    },
    { message: "Размер изображения не должен превышать 2MB" },
  )
  .optional()
  .nullable();

export const skillTagsSchema = z
  .array(z.string())
  .max(5, { message: "Максимум 5 тегов" })
  .refine(
    (tags) => {
      // Проверка длины каждого тега
      return tags.every((tag) => tag.length >= 2 && tag.length <= 20);
    },
    { message: "Каждый тег должен быть от 2 до 20 символов" },
  )
  .default([]);

// Полная схема создания навыка
export const createSkillSchema = z.object({
  title: skillTitleSchema,
  description: skillDescriptionSchema,
  //TODO type: skillTypeSchema,
  category: skillCategorySchema,
  image: skillImageSchema,
  tags: skillTagsSchema,
});

export const updateSkillSchema = createSkillSchema.partial();
