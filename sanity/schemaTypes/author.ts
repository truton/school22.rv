import { defineField, defineType } from "sanity"

export const author = defineType({
  name: "author",
  title: "Автор",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Ім'я",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Фото",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Біографія",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
})
