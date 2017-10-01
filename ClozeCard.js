var ClozeCard = function(text, cloze) {
  this.fullText = text;
  this.cloze = cloze;
  this.partial = this.fullText.replace(cloze, "...");
}

var firstPresidentCloze = new ClozeCard(
  "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States."
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States."
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

//export ClozeCard for use by other documents
module.exports = ClozeCard;