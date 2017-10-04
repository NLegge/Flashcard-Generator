//Cloze card constructor
var ClozeCard = function(text, cloze) {
  this.fullText = text;
  this.cloze = cloze;
  this.partial = this.fullText.replace(cloze, "...");
}

//Export ClozeCard for use by other documents
module.exports = ClozeCard;