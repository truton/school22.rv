import { defineField, defineType } from "sanity"

export const teacher = defineType({
  name: "teacher",
  title: "Вчителі та Адміністрація",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "ПІБ",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "position",
      title: "Посада",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Фото",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Біографія / Про вчителя",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "image",
    },
  },
})
