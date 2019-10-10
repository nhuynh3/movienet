import React, { Component } from 'react';

export default class MovieNode extends Component {
    render() {
      const movie = this.props.movie;
      return (
        <div className="movieNode">
            <h2>{movie.title}</h2>
                <div className="content">
                    <p>vote_average: {movie.vote_average}</p>
                    <p>budget: {movie.budget}</p>
                </div>
        </div>
      )
    }
}