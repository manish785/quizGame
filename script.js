const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      answers: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };

const {category, correctAnswer, answers, question} = questionObj;

const queEle = document.getElementById('question');
const optionsEle = document.getElementById('options');
const scoreEle = document.getElementById('score');

queEle.textContent = question;