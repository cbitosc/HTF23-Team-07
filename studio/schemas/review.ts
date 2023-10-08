import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'review',
  type: 'object',
  fields: [
    defineField({
      name: 'author',
      type: 'string',
      title: "Author's name",
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title / Short description of the review',
    }),
    defineField({
      name: 'body',
      type: 'text',
      title: 'The review itself',
    }),
    defineField({
      name: 'rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
      title: 'Rating out of 5',
    }),
    defineField({
      name: 'platform',
      type: 'reference',
      to: [{type: 'platform'}],
      title: 'Platform the review is for',
    }),
  ],
})
