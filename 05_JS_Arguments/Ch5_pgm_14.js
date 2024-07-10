// Displaying a player's information using properties

var showPlayerInfo;
var showPlayerName;
var showPlayerHealth;
var showPlayerPlace;
var showLine;
var showBlankLine;

showPlayerName = function (playerName) {
    console.log(playerName);
};

showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

showLine = function () {
    console.log("----------------------------");
};

showBlankLine = function () {
    console.log("");
};

showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    showBlankLine();

    showPlayerName(playerName);

    showLine();

    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);

    showLine();
    showBlankLine();
};

showPlayerInfo("Kandra", "The Dungeon of Doom", 50);
showPlayerInfo("Dax", "The Old Library", 40);



/* Further Adventures
 *
 * 1) Define a showLine function with a parameter
 *    for the length of line.
 *    e.g. showLine(5) should output
 *    -----
 *    showLine(20) should output
 *    --------------------
 *
 *    Hints:
 *    a) In the function body declare a line variable
 *       and assign it a long string of dashes.
 *    b) Use the substring function to grab
 *       a line of the correct length.
 *       line.substring(0, 10) would have length 10.
 *
 * 2) Use your showLine function to display the
 *    player's name in a box.
 *    ----------
 *    - Kandra -
 *    __________
 *
 * 3) Update your showLine function to use
 *    asterisks rather than dashes.
 *    **********
 *    * Kandra *
 *    **********
 *
 */