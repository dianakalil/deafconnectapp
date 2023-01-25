

const quizData =[
    
    {   
        img : 'Quiz_Page/1674367353285.png',
        question: "Question 1/10 \nWhat is the alphabet of this hand sign?",
        a:"Z ",
        b:"A ",
        c:"S ",
        d:"B ",
        correct:"a",
    },
    {
        img : 'Quiz_Page/quiziloveyou.png',
        question: "Question 2/10 \nWhat is the phrase of this hand sign?",
        a:"How Much? ",
        b:"Hi / Hello ",
        c:"Lets Go! ",
        d:"I Love You ",
        correct:"d",
    },
    {
        img : 'Quiz_Page/1674367373664.png',
        question: "Question 3/10 \nWhat is the alphabet of this hand sign?",
        a:"Y ",
        b:"U ",
        c:"W ",
        d:"V ",
        correct:"a",
    },
    {
        img : 'Quiz_Page/1674367391072.png',
        question: "Question 4/10 \nWhat is the alphabet of this hand sign?",
        a:"U ",
        b:"V ",
        c:"W ",
        d:"B ",
        correct:"b",
    },
    {
        img : 'Quiz_Page/1674367418915.png',
        question: "Question 5/10 \nWhat is the alphabet of this hand sign?",
        a:"U ",
        b:"V ",
        c:"W ",
        d:"B ",
        correct:"a",
    },
    {
        img : 'Quiz_Page/1674367438495.png',
        question: "Question 6/10 \nWhat is the alphabet of this hand sign?",
        a:"S ",
        b:"G ",
        c:"D ",
        d:"B ",
        correct:"a",
    },
    {
        img : 'Quiz_Page/quizfrustated.png',
        question: "Question 7/10 \nWhat is the phrase of this hand sign?",
        a:"Go Away ",
        b:"No ",
        c:"Frustrated ",
        d:"Angry ",
        correct:"c",
    },
    {
        img : 'Quiz_Page/1674367467179.png',
        question: "Question 8/10 \nWhat is the alphabet of this hand sign?",
        a:"I ",
        b:"J ",
        c:"L ",
        d:"P ",
        correct:"b",
    },
    {
        img : 'Quiz_Page/1674367486500.png',
        question: "Question 9/10 \nWhat is the alphabet of this hand sign?",
        a:"I ",
        b:"J ",
        c:"L ",
        d:"P ",
        correct:"a",
    },
    {
        img : 'Quiz_Page/quizhowmuch.png',
        question: "Question 10/10 \nWhat is the phrase of this hand sign?",
        a:"What Do you want? ",
        b:"Take it/this ",
        c:"Help me carry this ",
        d:"How much? ",
        correct:"d",
    },
    
];

var audio = new Audio('Quiz_Page/correct_sound.mp3');
var audio2 = new Audio('Quiz_Page/wrong_answer.mp3');
const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('submit')
const image=document.getElementById('image')


let currentQuiz = 0
let score = 0


loadQuiz()

function loadQuiz() {

    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    image.innerHTML = `<img src=${currentQuizData.img} />`
    
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}



function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}


function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            audio.play();
            score++
        }else{audio2.play();}

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>Congratulations!</h2>
            <h2>You've answered all the questions</h2>   
            <h2><img src="Quiz_Page/trophy-icon.png"/></h2>
            <h2>Here's Your score :</h2>
            <h2>${score}/${quizData.length}</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }

    }
})

//<h2>You answered ${score}/${quizData.length} questions correctly</h2>
//<button onclick="location.reload()">Reload</button>
