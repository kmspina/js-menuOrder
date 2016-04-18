// begin with a blank/new order
var order = '';

// ask questions
function question(questiontext) {
  var answerInput = prompt(questiontext);
  order += answerInput + ", ";
  if ( answerInput.toUpperCase() === order ) {
  }
  console.log(" ordered " + order)
}

question("White or Brown rice?", order);
question("Black or pinto beans?", order);
question("Type of meat", order);
question("Mild, medium, or hot salsa?", order);
question("Lettuce, cheese, sour cream?", order);
question("Guac? (extra cost)", order);
question("Chips? (extra cost)", order);
question("Drink? (extra cost)", order);

// output their order
document.write("<p>You ordered: " + order + "<p>");
