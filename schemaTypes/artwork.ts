import { defineType, defineField } from 'sanity'

export const artwork = defineType({
  type: "document",
  name: "artwork",
  fields: [
    defineField({ type: "string", name: "title" }),
    defineField({ type: "image", name: "image", options: { hotspot: true } }),
    defineField({ type: "text", name: "description" }),
    defineField({ type: "number", name: "width" }),
    defineField({ type: "number", name: "height" }),
  ],
});

