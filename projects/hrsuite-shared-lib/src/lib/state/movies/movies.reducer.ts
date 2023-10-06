import { createReducer, on } from '@ngrx/store';
import { getName } from './movies.actions';
// import { Movie } from './movies.models';
// import { groupBy } from 'lodash-es';

export interface MovieState {
  // allMovies: Record<string, Movie[]>;
  name: string
}

const initialState: MovieState = {
  // allMovies: {},
  name: ''
};

export const moviesReducer = createReducer(
  initialState,
  // on(getMovies, (state, { movies }) => ({
  //   ...state,
  //   // allMovies: groupBy(movies, 'category'),
  // })),
  on(getName, (state, { name }) => ({
    ...state,
    name: name,
  })),

);
