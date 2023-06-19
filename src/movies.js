// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
    function getAllDirectors(moviesArray) {
        const directors = moviesArray.map((movie) => movie.director);
        return directors;
    }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
    function howManyMovies(moviesArray) {
        const dramaMovies = moviesArray.filter((movie) => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
        });
    
        return dramaMovies.length;
    }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    if (moviesArray.length === 0) {
        return 0;
      }
    
    const sumScores = moviesArray.reduce((total, movie) => {
        if (movie.score && typeof movie.score === 'number') {
          return total + movie.score;
        }
        return total;
      }, 0);
    
      const averageScore = sumScores / moviesArray.length;
      const roundedAverage = Math.round(averageScore * 100) / 100;
    
      return roundedAverage;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
    function dramaMoviesScore(moviesArray) {
        const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));
    
        if (dramaMovies.length === 0) {
        return 0;
        }
    
        const sumDramaScores = dramaMovies.reduce((total, movie) => {
        if (movie.score && typeof movie.score === 'number') {
            return total + movie.score;
        }
        return total;
        }, 0);
    
        const averageScore = sumDramaScores / dramaMovies.length;
        const roundedAverage = Math.round(averageScore * 100) / 100;
    
        return roundedAverage;
    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
    function orderByYear(moviesArray) {
        const sortedMovies = moviesArray.slice().sort((movieA, movieB) => {
        if (movieA.year !== movieB.year) {
            return movieA.year - movieB.year;
        } else {
            const titleA = movieA.title.toLowerCase();
            const titleB = movieB.title.toLowerCase();

            if (titleA < titleB) {
            return -1;
            } else if (titleA > titleB) {
            return 1;
            } else {
            return 0;
            }
        }
        });

        return sortedMovies;
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
    function orderAlphabetically(moviesArray) {
        const sortedMovies = moviesArray.slice().sort((movieA, movieB) => {
        const titleA = movieA.title.toLowerCase();
        const titleB = movieB.title.toLowerCase();
    
        if (titleA < titleB) {
            return -1;
        } else if (titleA > titleB) {
            return 1;
        } else {
            return 0;
        }
        });
    
        const movieTitles = sortedMovies.map(movie => movie.title);
    
        return movieTitles.slice(0, 20);
    }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
