const chai = await import('chai');
const { expect } = chai;

// Creation du fonction removeWords qui va nous permettre de supprimer les mots indésirés
export function removeWords(original, wordsToRemove) {
    return wordsToRemove.reduce((str, word) => {
      const regex = new RegExp(`\\b${word}\\b`, 'g');
      return str.replace(regex, '').replace(/\s+/g, ' ').trim();
    }, original);
  };
  
export function getMostPopularPlaces(...places) {
  const counts = {};

  places.forEach(place => {
      counts[place] = (counts[place] || 0) + 1;
  });

  const sortedPlaces = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  // Retourner les deux quartiers les plus populaires
  return `${sortedPlaces[0][0]} ${sortedPlaces[1][0]}`;
}
