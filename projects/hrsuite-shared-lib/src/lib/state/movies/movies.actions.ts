import { createAction, props } from '@ngrx/store';

import { Movie } from './movies.models';

// export const getMovies = createAction(
//   '[Movie Component] GetMovies',
//   props<{ movies: Movie[] }>()
// );

export const getName = createAction(
  '[Movie Component] GetNames',
  props<{ name: string }>()
);
