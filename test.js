const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const questions = [
    {
        question: "What is the official capital of Australia?",
        A: "Canberra",
        B: "Sydney",
        C: "Melbourne",
        D: "Brisbane",
        Answer: "A"
    },
    {
        question: "Which river is traditionally recognized as the longest river in the world?",
        A: "Nile",
        B: "Amazon",
        C: "Yangtze",
        D: "Mississippi",
        Answer: "A"
    },
    {
        question: "On which continent is the Andes mountain range primarily located?",
        A: "North America",
        B: "South America",
        C: "Africa",
        D: "Asia",
        Answer: "B"
    },
    {
        question: "Which of the following South American countries is landlocked?",
        A: "Chile",
        B: "Peru",
        C: "Bolivia",
        D: "Colombia",
        Answer: "C"
    },
    {
        question: "Which country is estimated to contain more natural lakes than the rest of the world combined?",
        A: "Russia",
        B: "Canada",
        C: "United States",
        D: "Finland",
        Answer: "B"
    }
]
let len = questions.length;

async function askUser() {
  const rl = readline.createInterface({ input, output });

  console.log
  const name = await rl.question();
  const age = await rl.question('How old are you? ');

  console.log(`Hello ${name}, you are ${age} years old.`);

  // Always close the interface when finished so the terminal exits
  rl.close();
}

let questionsCorrect = 0;

async function test() {

    const rl = readline.createInterface({ input, output });
    
    for (let i = 0; i < len; i++) {
    console.log(questions[i].question);
    console.log(`A: ${questions[i].A}`);
    console.log(`B: ${questions[i].B}`);
    console.log(`C: ${questions[i].C}`);
    console.log(`D: ${questions[i].D}`);
    const response = await rl.question('Your answer (A, B, C, or D): ');
    if (response === questions[i].Answer) {
        questionsCorrect++;
    }
    }
    rl.close();
    console.log()
    console.log(`You got ${questionsCorrect} out of ${len} questions correct. 😀`);    
}

test();