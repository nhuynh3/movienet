import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import MovieNode from './MovieNode';

const GET_COLLECTIONS = gql`{
   collections {
     id
     name
     movies {
        id
        title
        budget
        vote_average
     }
   }
}`;

export default class Graph extends Component {
   render() {
     return (
       <div className="graph">
          <Query query={GET_COLLECTIONS}>
            {({ loading, error, data }) => {
                 if (loading) return "Loading...";
                 if (error) return error.message;

                 const { collections } = data;
                 return collections.map((collection, i) => {
                     const movieNodes = () => collection.movies.map((movie, i) => {
                        return <MovieNode key={movie.id} movie={movie} />
                     })
                     return (
                        <div key={{i}}>
                           <h2>{collection.name}</h2>
                           {movieNodes()}
                        </div>
                     )
                 })
              }}
          </Query>
       </div>
     )
   }
}
