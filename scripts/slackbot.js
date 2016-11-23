// Description:
// <description of this script's functionality>
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//  bluebot <trigger> - <what the respond trigger does>
//  <trigger> - <what the hear trigger does>
//
// Notes:
//
//
// Author:
// <tifs>
//

// module.exports = function(robot) {
//    // YOUR CODE HERE
//    // Example
//    robot.hear(/cheese/i, function(msg) {
//      return msg.send("let's get started");
//    });
// };

/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/

/*
var squirrels;
squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];
*/

var hansonFacts;
hansonFacts = [
"Such a great question! Taylor likes to wear a long braid in the back of his hair.",
"I'm glad you asked. Together Ike, Tay, and Zac have written over 300 songs.",
"Well, it really comes down to knowing that Ike wears clear braces.",
"Word has it that Ike names his guitars after girls he likes.",
"It's important to remember that the first song Ike ever wrote was called 'Rain Falling Down' he was in the third grade.",
"Let me ask you a question. Did you know Zac's favorite soda is Dr Pepper?",
"Your question reminds me—back in their home in Tulsa, Ike, Tay, and Zac share a bedroom. Ike and Tay sleep in a bunk bed and Zac has his own bed.",
"I thought you'd never ask. Yes, Ike is a big Star Wars fan.",
"That's irrelevant. Just know that the boys love to relax by playing Ping-Pong.",
"All three boys collect Legos and love to build with them.",
"It's a combination of things. But for sure, Taylor uses Flex shampoo.",
"You asking that makes me feel like we're getting off-task. Ike use Pantene Pro-V.",
"Ike likes to wear high-top sneakers or hiking boots.",
"Let's stay focused. On days off Ike likes to hang out at the mall.",
"Never forget that Zac's favorite school subject is Math.",
"I hear you loud and clear. In the 'MMMBop' video, Taylor is driving the same car Sandra Bullock did in speed 2.",
"Here's what you really need to know. Ike got his first guitar from a pawn shop in Tulsa.",
"To answer your question, Zac loves action movies.",
"More importantly, Zac thinks the best phrase is from Toy Story 'To infinity and beyond!'",
"Here's my answer. One of Hanson's favorite Tulsa restaurants is Rex's Boneless Chicken.",
"Something you need to know: Zac says that 'everday life' inspires him to write songes.",
"The only thing you really need to remember is that Taylor has a scar on the left side of his face from running into a glass door.",
"That reminds me, before Hanson wrote songs about love and friendship, they used to write cute songs about frogs and ants.",
"Funny you ask me that. Zac has been known to eat whole packets of sugar, straight!"
];

module.exports = function(robot) {
  robot.respond(/bop me/i, function(msg) {
    return msg.send("https://www.youtube.com/watch?v=NHozn0YXAeE");
  });
  return robot.hear(/^bluebot (.*)\u003F/i, function(msg) {
    return msg.send(msg.random(hansonFacts));
  });
};



/*
module.exports = function(robot) {
  // Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!"
  return robot.respond(/hi|hello/i, function(msg) {
    return msg.send("Howdy!");
  });

  // Random Example
  //If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
  return robot.hear(/ship it/i, function(msg) {
    return msg.send(msg.random(squirrels));
  });
};
*/