import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'castMember',
  title: 'Cast Member',
  type: 'object',
  fields: [
    defineField({
      name: 'characterName',
      title: 'Character Name',
      type: 'string',
    }),
    defineField({
      name: 'person',
      title: 'Actor',
      type: 'reference',
      to: [{type: 'person'}],
    }),
  ],
  preview: {
    select: {
      subtitle: 'characterName',
      title: 'person.name',
      media: 'person.image',
    },
  },
})
