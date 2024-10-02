const { expect } = require('chai');
const { describe } = require('mocha');
const { factorial } = require('./code.js');

const removeWords = function(original, wordsToRemove) {
    return wordsToRemove.reduce((str, word) => {
      const regex = new RegExp(`\\b${word}\\b`, 'g');
      return str.replace(regex, '').replace(/\s+/g, ' ').trim();
    }, original);
  };
  
  // Tests unitaires avec Mocha et Chai
  const { expect } = require('chai');
  
  describe('removeWords', function() {
    it('doit supprimer les mots spécifiés', function() {
      expect(removeWords("Hello, ceci est un test", ["ceci", "un"]))
        .to.equal("Hello, est test");
    });
  
    it('doit être sensible à la casse', function() {
      expect(removeWords("Hello Java", ["java"]))
        .to.equal("Hello Java");
    });
  
    it('doit gérer les mots multiples et les espaces', function() {
      expect(removeWords("Ceci est un test avec des mots à supprimer", ["est", "avec", "des", "à"]))
        .to.equal("Ceci un test mots supprimer");
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