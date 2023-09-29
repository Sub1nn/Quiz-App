const questions = [{
        'que': "What is the capital of America?",
        'a': "Kathmandu",
        'b': "Newyork",
        'c': "California",
        'd': "Washington",
        'correct': "d"
    },
    {
        'que': "What Year MadhuSudan and Subin came to Finland?",
        'a': "2008",
        'b': "2010",
        'c': "2012",
        'd': "none of the above",
        'correct': "b"
    },
    {
        'que': "What does CSS stand for?",
        'a': "Come Stand Still",
        'b': "Common Standard Style",
        'c': "Cascading Style Sheet",
        'd': "Computer Selected Symbol",
        'correct': "c",
    },
    {
        'que': "Which football Club does Ronaldo play for?",
        'a': "Al Nasar",
        'b': "Al Jumha",
        'c': "Al Hilal",
        'd': "Al Akbar",
        'correct': "a",
    },

]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    console.log(data)
    quesBox.innerText = ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked) {
             answer = input.value;
            }
        }    
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3> Thank you for participating in the Quiz </h3>
    <h2> ${right} / ${total} are correct </h2>
    </div>
    `
}

loadQuestion();

