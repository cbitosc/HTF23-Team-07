import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({
  name: 'movie',
  title: 'Movie',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'This is the description of the movie, the main text of the movie page.',
      type: 'blockContent',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime',
    }),
    defineField({
      name: 'glimpses',
      title: 'Glimpses - Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'trailer',
      title: 'Trailer',
      type: 'url',
      description: "The URL to the movie's trailer.",
    }),
    defineField({
      name: 'runtime',
      title: 'Runtime',
      type: 'number',
      description: 'The runtime of the movie in minutes.',
    }),
    defineField({
      name: 'producers',
      title: 'Producers',
      type: 'array',
      of: [{type: 'reference', to: {type: 'person'}}],
    }),
    defineField({
      name: 'rating',
      description: 'The rating of the movie',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(10),
    }),
    defineField({
      name: 'director',
      title: 'Director',
      type: 'reference',
      to: [{type: 'person'}],
    }),
    defineField({
      name: 'poster',
      title: 'Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'genres',
      title: 'Genres',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'genre'}]}],
    }),
    defineField({
      name: 'platforms',
      title: 'Platforms',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'platform'}]}],
    }),
    defineField({
      name: 'castMembers',
      title: 'Cast Members',
      type: 'array',
      of: [{type: 'castMember'}],
    }),
    defineField({
      name: 'crewMembers',
      title: 'Crew Members',
      type: 'array',
      of: [{type: 'crewMember'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'poster',
      castName0: 'castMembers.0.person.name',
      castName1: 'castMembers.1.person.name',
      availableOn: 'platforms.0.name',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]
      const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: `${cast} - Available on ${selection.availableOn}`,
        media: selection.media,
      }
    },
  },
})
