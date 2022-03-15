
// function to randomize answers to questions 

export const shuffleArray = (array: any[]) => {

  //Fisher-Yates Shuffle
  let currentIndex = array.length, randomIndex;

  // while there are elements to shuffle..
  while (currentIndex) {

    // choose a remaining element..
    randomIndex = Math.floor(Math.random() * currentIndex--);

    // and swap it with current element.
    [array[currentIndex], array[randomIndex]] = 
    [array[randomIndex], array[currentIndex]];
  }

  return array;

  // // crude shuffle function:
  // [...array].sort(() => Math.random() - 0.5);
}