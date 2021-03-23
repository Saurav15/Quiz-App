const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '35',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2020?',
        a: 'C',
        b: 'Python',
        c: 'Java',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'Who is the President of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Salando',
        d: 'Joe Biden',
        correct: 'd'
    },
    {
        question: 'What does HTML stands for?',
        a: 'Hyper Text Markup Language',
        b: 'Hello Text Makeup Language',
        c: 'Hyper Text Makeup Language',
        d: 'Hyper Text Mutual Language',
        correct: 'a'
    }
];

const question = document.getElementsByClassName('question')[0];
const option_a = document.getElementById('option_a');
const option_b = document.getElementById('option_b');
const option_c = document.getElementById('option_c');
const option_d = document.getElementById('option_d');

var counter = 0;
var score = 0;

const submit = document.getElementsByClassName('btn')[0];

function changeText(){
    question.textContent = quizData[counter].question;
    option_a.textContent = quizData[counter].a;
    option_b.textContent = quizData[counter].b;
    option_c.textContent = quizData[counter].c;
    option_d.textContent = quizData[counter].d;
    counter++;
}

// First check if the ticked option is correct
function if_correct(){
    const all_radio_buttons_list = document.getElementsByTagName('input')
    
    for(var i = 0; i < all_radio_buttons_list.length; i++){
        const option_ticked = all_radio_buttons_list[i].checked;
        if(option_ticked){
            console.log(all_radio_buttons_list[i].value);
            console.log(quizData[counter-1].correct);
            if(quizData[counter-1].correct == all_radio_buttons_list[i].value){
                score++;
                console.log(score);
            }
        }
    }
}

// Then change the question and option when submit is clicked 
// location.reload();
changeText();
submit.addEventListener('click',()=>{
    if(counter < quizData.length){
        if_correct();
        changeText();
        deselect_all_opt();
    }
    else if(counter == quizData.length){
        if_correct();
        score_card();
        // alert("Game Over");
    }
});

//  Then deselect the by default ticked option
function deselect_all_opt(){
    const all_radio_buttons_list = document.getElementsByTagName('input')
    for(var i = 0; i < all_radio_buttons_list.length; i++){
        all_radio_buttons_list[i].checked = false;
    }
}


// After the game is over change the UI

function score_card(){
    document.getElementsByClassName('container')[0].classList.replace('container','container_hide');
    console.log(document.getElementsByClassName('score_hide')[0].classList.replace('score_hide','score'));

    const score_display = document.getElementById('score_number');

    const comments = document.getElementById('comments');
    if(score < ((50/100)*quizData.length))
    {
        score_display.innerText = score+'/'+quizData.length;
        comments.innerText = 'You need to work hard 🤡📚'
    }

    if(score > ((50/100)*quizData.length))
    {
        score_display.innerText = score+'/'+quizData.length;
        comments.innerText = 'I see you are good at this 🏆'
    }

    if(score == ((50/100)*quizData.length))
    {
        score_display.innerText = score+'/'+quizData.length;
        comments.innerText = 'I will say, you are neither good nor bad.🤷'
    }

    //  Check the clicked button to restart
    document.getElementsByClassName('btn_score')[0].addEventListener('click',()=>{
        location.reload();
    });

}






// ToDo : 
// Not allow people to submit if no option is selected
// Count the correct answers
// After the game is over change the page view