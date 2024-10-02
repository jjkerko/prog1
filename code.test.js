const chai = await import('chai');
const { expect } = chai;
import { removeWords } from "./code.js";
import { getMostPopularPlaces } from "./code.js";


 // Voici maintenant les différents tests à faire pour verifier si cette fonction est bien fonctionnel

 describe('removeWords', function() {
    it('doit supprimer les mots spécifiés', function() {
      expect(removeWords("Kaiza, ito  dia test fotsiny", ["ito", "test"]))
        .to.equal("Kaiza, dia fotsiny");
    });
  
    it('doit être sensible à la casse', function() {
      expect(removeWords("Hello Toto", ["toto"]))
        .to.equal("Hello Toto");
    });
  
    it('doit gérer les mots multiples et les espaces', function() {
      expect(removeWords("Coucou dia aona inona ny vaovao anao azafady", ["dia", "ny", "anao", "azafady"]))
        .to.equal("Coucou aona inona vaovao");
    });
  
    it('doit retourner la chaîne originale si aucun mot n\'est à supprimer', function() {
      expect(removeWords("Rien à supprimer ici", ["pas", "présent"]))
        .to.equal("Rien à supprimer ici");
    });
  
    it('doit gérer une chaîne vide', function() {
      expect(removeWords("", ["mot"]))
        .to.equal("");
    });
  
    it('doit gérer un tableau vide de mots à supprimer', function() {
      expect(removeWords("Texte inchangé", []))
        .to.equal("Texte inchangé");
    });
  });

describe('getMostPopularPlaces', () => {
    it('devrait retourner les deux quartiers les plus populaires', () => {
        const result = getMostPopularPlaces('Analamahitsy', 'Analamahitsy', 'Itaosy', 'Behoririka', 'Itaosy', 'Itaosy');
        expect(result).to.equal('Itaosy Analamahitsy');
    });

    it('devrait retourner les bons quartiers pour un autre exemple', () => {
        const result = getMostPopularPlaces('Ambatobe', 'Ambatobe', 'Behoririka', 'Behoririka', 'Ambatobe', 'Anosy', 'Anosy');
        expect(result).to.equal('Ambatobe Behoririka');
    });
});
