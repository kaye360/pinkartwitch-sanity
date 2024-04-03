import { defineType, defineField, defineArrayMember } from 'sanity'

export const artwork = defineType({
  type: "document",
  name: "artwork",
  fields: [
    defineField({ type: "string", name: "title" }),
    defineField({ type: "slug", name: "slug", options: { source: "title" } }),
    defineField({ type: "text", name: "description" }),
    defineField({ type: "image", name: "image", options: { hotspot: true } }),
    defineField({
      type: "reference",
      name: "category",
      to: [{ type: "category" }],
    }),
    defineField({
      type: "array",
      name: "tags",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ type: "number", name: "year" }),
    defineField({ type: "string", name: "medium" }),
    defineField({ type: "string", name: "dimensions" }),
    defineField({ type: "number", name: "price" }),
    defineField({ type: "boolean", name: "availability" }),
  ],
});

