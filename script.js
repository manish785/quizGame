const quesJSON = [
    {
      correctAnswer: 'Chennai Super Kings',
      options: [
        'Chennai Super Kings',
        'Mumbai Indians',
        'Gujarat Titans',
        'Kolkata Knight Riders'
        ],
      question:
        "Which team won the IPL 2023 title?",
    },
    {
      correctAnswer: 'Harshal Patel',
      options: [
        'Harshal Patel',
        'Mohammed Shami',
        'Avesh Khan',
        'Yuzvendra Chahal'
      ],
      question:
        "Against which bowler did Ravindra Jadeja score 37 runs in an IPL 2021 over?",
    },
    {
      correctAnswer: 'Yuzvendra Chahal',
      options: [
        'Rashid Khan',
        'Harshal Patel',
        'Yuzvendra Chahal',
        'Kuldeep Yadav'

      ],
      question:
        'Who scored the only hat trick in IPL 2022?',
    },
    {
      correctAnswer: 'Punjab Kings',
      options: [
        'Punjab Kings',
        'Royal Challengers Bangalore',
        'Kolkata Knight Riders',
        'Sunrisers Hyderabad'
      ],
      question: 'Which of these teams has only appeared in the IPL final once?',
    },
    {
      correctAnswer: '16th',
      options: [
        '13th',
        '14th',
        '15th',
        '16th'
      ],
      question:
       'What is the Indian Premier League (IPL) 2023 edition?',
    },
  ];
   
let score = 0;
let currentQuestion = 0;
const totalScore = quesJSON.length;

//Accessing all the elements:
const questionEle = document.getElementById("question");
const optionEle = document.getElementById("options");
const scoreEle = document.getElementById("score");
const nextEle = document.getElementById('next');


nextEle.addEventListener('click', ()=>{
  scoreEle.textContent = `Score: ${score} / ${totalScore}`;
  nextQuestion();
} );


showQuestion();
    function showQuestion(){
      // Destructuring the object
      const{correctAnswer, options, question} = quesJSON[currentQuestion];

      //Setting question text content
      questionEle.textContent = question; 

      const shuffledOptions = shuffleOptions(options);
      // console.log(typeof(shuffledOptions));

      //Populating the Options div with the buttons.
      shuffledOptions.forEach((opt) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        optionEle.appendChild(btn);

        // Event handling on the button:
        btn.addEventListener("click", () => {
            if(opt == correctAnswer){
                score++;
            }
            else{
                score=score-0.25;
            }
            scoreEle.textContent = `Score: ${score} / ${totalScore}`;   
            nextQuestion();
            });
        });
}

function nextQuestion(){
  currentQuestion++;
  optionEle.textContent = '';
  if(currentQuestion>=quesJSON.length){
    questionEle.textContent = 'Quiz Completed!!';
    nextEle.remove();
  } 
  else{
    showQuestion();
  }
}

//Shuffling the Options
function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [
      options[j],
      options[i],
    ];
  }
  return options;
}

shuffleOptions([1, 2, 3, 4, 5]);