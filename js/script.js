const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотенных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
console.log(personalMovieDB);