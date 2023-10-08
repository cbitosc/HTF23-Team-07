import {defineType, defineField} from 'sanity'
import {MdBookmark as icon} from 'react-icons/md'

export default defineType({
  name: 'genre',
  title: 'Genre',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    }),
  ],
})
