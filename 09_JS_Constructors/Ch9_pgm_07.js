// A quiz question constructor

var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);
var question2 = new QuizQuestion(
    "random access memory",
    "RAM"
);
var question3 = new QuizQuestion(
    "What is the largest planet in our solar system?",
    "Jupiter"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("BrK");
question1.showQuestion();

question2.addOption("ROM");
question2.addOption("CPU");
question2.addOption("EPROM");
question2.addOption("MM");
question2.showQuestion();

question3.addOption("Earth");
question3.addOption("Mars");
question3.addOption("Jupiter");
question3.addOption("Saturn");
question3.showQuestion();
/* Further Adventures
 *
 * 1) Add a fifth option to question1.
 *
 * 2) Create two more questions.
 *
 * 3) At the console prompt type
 *    question2.showQuestion();
 *    Press Enter
 *
 * 4) At the console prompt type
 *    question2.answer;
 *    Press Enter
 *
 */