const typeDefinitions = `
  type Movie {
    id: Int
    title: String
    budget: Int
    vote_average: Float
  }
  type Collection {
    id: Int
    name: String
    movies: [Movie]
  }
  type Genre {
    id: Int
    name: String
  }
  type Actor {
    id: Int
    name: String
    movies: [Movie]
  }
  type RootQuery {
    movies: [Movie],
    movie(movieId: Int): Movie,
    actors: [Actor],
    actor(actorId: Int): Actor,
    collections: [Collection],
  }
  schema {
    query: RootQuery
  }
`;

export default [typeDefinitions];
