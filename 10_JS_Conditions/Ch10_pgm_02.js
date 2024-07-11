// Guess the number - the else clause

var secret = 8;

var guess = function (userNumber) {
  if (userNumber !== secret) {
    console.log("Well");
  } else {
    console.log("try again.");
  }
};
guess(6);
guess(2);
guess(10);


/* Further Adventures
 *
 * 1) Run the program and try a few guesses at the prompt.
 *    e.g. guess(2)
 *
 * You can check if two values are NOT equal
 * by using the !== operator.
 *
 * 2) Change the condition in parentheses to check
 *    if the guess is not equal to the secret.
 *
 *    if (userNumber !== secret)
 *
 * 3) Run and test the updated program.
 *
 * 4) Change the messages to fit the new condition.
 *
 */