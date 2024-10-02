const chai = await import('chai');
const { expect } = chai;

// Creation du fonction removeWords qui va nous permettre de supprimer les mots indésirés
const removeWords = function(original, wordsToRemove) {
    return wordsToRemove.reduce((str, word) => {
      const regex = new RegExp(`\\b${word}\\b`, 'g');
      return str.replace(regex, '').replace(/\s+/g, ' ').trim();
    }, original);
  };
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