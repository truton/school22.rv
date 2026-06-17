import { defineField, defineType } from "sanity"

const colorOptions = [
  { title: "Синій", value: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  { title: "Зелений", value: "bg-green-500/10 text-green-600 dark:text-green-400" },
  { title: "Жовтий", value: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
  { title: "Рожевий", value: "bg-rose-500/10 text-rose-600 dark:text-rose-400" },
  { title: "Індиго", value: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" },
  { title: "Помаранчевий", value: "bg-orange-500/10 text-orange-600 dark:text-orange-400" },
]

export const category = defineType({
  name: "category",
  title: "Категорія",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Назва",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "color",
      title: "Колір мітки",
      type: "string",
      options: { list: colorOptions },
      initialValue: colorOptions[0].value,
    }),
  ],
  preview: {
    select: { title: "title" },
  },
})
