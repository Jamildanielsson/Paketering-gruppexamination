export function shuffleArray(moviesArray: MovieData[]) {
  let currentIndex = moviesArray.length;

  // Variabler för att hålla det temporära värdet och det slumpmässiga indexet
  let temporaryValue, randomIndex;

  // Medans det finns element att shuffla...
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = moviesArray[currentIndex]; // Spara aktuellt element till tillfälligt värde
    moviesArray[currentIndex] = moviesArray[randomIndex]; // Ersätt nuvarande element med det slumpmässigt valda
    moviesArray[randomIndex] = temporaryValue; // Ersätt slumpmässigt valt element med det tillfälliga värdet
  }

  return moviesArray;
}
