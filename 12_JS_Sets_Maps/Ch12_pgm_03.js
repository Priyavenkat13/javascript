

// How many languages are there in the countries object file.

// *** Use the countries data to find the 10 most spoken languages:

//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]
const countriesData = [
    { name: 'Finland', languages: ['Finnish', 'Swedish'] },
    { name: 'Sweden', languages: ['Swedish'] },
    { name: 'Norway', languages: ['Norwegian'] },
    { name: 'USA', languages: ['English'] },
    { name: 'Canada', languages: ['English', 'French'] },
    
  ];
  
  const mostSpokenLanguages = (countries, topN) => {
    const languageCount = {};
  
    countries.forEach(country => {
      country.languages.forEach(language => {
        if (languageCount[language]) {
          languageCount[language]++;
        } else {
          languageCount[language] = 1;
        }
      });
    });
  
    const sortedLanguages = Object.entries(languageCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, topN)
      .map(([language, count]) => ({ [language]: count }));
  
    return sortedLanguages;
  };
  
  console.log(mostSpokenLanguages(countriesData, 10));
  console.log(mostSpokenLanguages(countriesData, 3));
  

