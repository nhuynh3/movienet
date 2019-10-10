import movies from '../datastore/movies';
import credits from '../datastore/credits';

const findMovieById = (movieId) => movies.find(movie => movie.id === movieId);

const ActorMovieMap = {};
const CollectionMovieMap = {};
const getActors = () => {
    if (!ActorMovieMap) _generateActorMovieMap(credits);
    return Object.values(ActorMovieMap);
}

const findActorById = (actorId) => {
    if (!ActorMovieMap) _generateActorMovieMap(credits);
    return ActorMovieMap[actorId];
}

// Creates a map of actor objects keyed by id
const _generateActorMovieMap = (credits) => {
    credits.map((credit) => {
        const movie = findMovieById(credit.id)
        for (actor in credit.cast) {
            if (!ActorMovieMap[actor.id]) {
                ActorMovieMap[actor.id] = {
                    id: id,
                    movies: [movie],
                    name: actor.name,
                };
            } else {
                ActorMovieMap[actor.id].movies.push(movie);
            }
        }
    })
}

const getCollections = () => {
    if (!Object.keys(CollectionMovieMap).length) _generateCollectionsMovieMap(movies);
    return Object.values(CollectionMovieMap);
}
const _generateCollectionsMovieMap = (movies) => {
    movies.map((movie) => {
        const collection = movie.belongs_to_collection;
        if (collection) {
            if (!CollectionMovieMap[collection.id]) {
                CollectionMovieMap[collection.id] = {
                    id: collection.id,
                    name: collection.name,
                    movies: [movie],
                }
            } else {
                CollectionMovieMap[collection.id].movies.push(movie)
            }
        }
    })
}

const resolvers = {
    RootQuery: {
        movies(root, args, context) {
            return movies; 
        }, 
        movie(root, { movieId }, context) {
            return findMovieById(movieId);
        },
        collections(root, args, context) {
            return getCollections();
        },
        actors(root, args, context) {
            return getActors();
        },
        actor(root, { actorId }, context) {
            return findActorById(actorId);
        },
    },
};
export default resolvers;
