import { defineField, defineType } from "sanity"

export const event = defineType({
  name: "event",
  title: "Події / Анонси",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок події",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL-адреса",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Дата проведення",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Місце проведення",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Головне зображення",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Опис події",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "image",
    },
  },
})
