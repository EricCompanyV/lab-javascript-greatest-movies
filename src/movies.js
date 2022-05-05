// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsArray = []
  movies.map(movie => directorsArray.push(movie.director))
  return directorsArray
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (!movies.length) {
    return 0
  } else { 
    const allSpielbergMovies = movies.filter(movie => (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")))
    return allSpielbergMovies.length
  }
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0
  } else {
    const allMovieScores = []
    movies.map(movie => {
      if (typeof movie.score === "number") {
        allMovieScores.push(movie.score)
      }
    })
    const sumOfScores = allMovieScores.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return parseFloat((sumOfScores/movies.length).toFixed(2))
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (!movies.length) {
    return 0
  } else {
    const allDramaMovieScores = []
    movies.map(movie => {
      if (movie.genre.includes("Drama")) {
        allDramaMovieScores.push(movie.score)
      }
    })
    const sumOfScores = allDramaMovieScores.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    if (allDramaMovieScores.length=== 0) {return 0}
    return parseFloat((sumOfScores/allDramaMovieScores.length).toFixed(2))
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const newArray = [...movies]
  const sortedArray = newArray.sort(function compare(a,b) {
    if (a.year < b.year) return -1
    if (a.year > b.year) return 1
    if (a.title < b.title) return -1
    if (a.title > b.title) return 1
  }) 
   return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const newArray = [...movies]
  const newArraySorted =newArray.sort(function compare(a,b){
    if (a.title < b.title) return -1
    if (a.title > b.title) return 1
  })
  const newArraySortedMovies = []
  newArraySorted.map(movie => newArraySortedMovies.push(movie.title))
  console.log(newArraySortedMovies)
  if (newArraySortedMovies.length < 20) {
    return newArraySortedMovies
  } else {
    return newArraySortedMovies.slice(0,20)
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const HoursToMinutesArray = [...movies]
   movies.map(movie => {
    let newHour = 0
    if (movie.duration.length > 2) {
      newHour= parseInt((movie.duration[0])*60)+parseInt((movie.duration[3]+movie.duration[4]))
    } else {
      newHour=parseInt((movie.duration[0])*60)
    }
    movie.duration = newHour
    HoursToMinutesArray.push(movie)
  })
  console.log(HoursToMinutesArray)
  return HoursToMinutesArray
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  // calculatin a unique array of the years
  if (!movies.length) {
    return null
  } else {
  const unique = [...new Set(movies.map(movie => movie.year))]
  
  console.log(unique)
  let maxAverage = 0, scoreTotal= 0, amountMovies= 0, bestYear = ""
  console.log(maxAverage, scoreTotal, amountMovies, bestYear)
  for (let i=0; i< unique.length; ++i) {
    amountMovies= 0;
    scoreTotal = 0
    for (let j=0; j<movies.length;++j) {
      
      if (movies[j].year === unique[i]){
        amountMovies += 1
        scoreTotal += movies[j].score
      }
      if (unique[i-1] === 1972) {
        console.log(maxAverage, scoreTotal, amountMovies, bestYear)
        console.log[movies[j]]
      }
    }
    if (scoreTotal/amountMovies > maxAverage) {
      maxAverage = scoreTotal/amountMovies
      bestYear = unique[i]
    } else if (scoreTotal/amountMovies === maxAverage){
      if(bestYear > unique[i]) {
        bestYear= unique[i]
      }
    }
  }
    return `The best year was ${bestYear} with an average score of ${maxAverage}` 
}
}
  /* creating an arrey of objects for every year
  const scoreForYearArray = []
  
  console.log(scoreForYearArray)*/




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
