import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import genre from './genre'
import platform from './platform'

export const schemaTypes = [
  // Document types
  movie,
  person,
  genre,
  platform,

  // Other types
  blockContent,
  castMember,
  crewMember,
]
