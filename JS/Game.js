const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score-count');

const jeaopardyCategories = [
  {
    genre: "WHO",
    questions:[
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '100'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '200'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '300'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '400'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '500'
      }
    ]
  },
  {
    genre: "WHEN",
    questions:[
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '100'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '200'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '300'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '400'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '500'
      }
    ]
  },
  {
    genre: "WHERE",
    questions:[
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '100'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '200'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '300'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '400'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '500'
      }
    ]
  },
  {
    genre: "WHY",
    questions:[
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '100'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '200'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '300'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '400'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '500'
      }
    ]
  },
  {
    genre: "HOW",
    questions:[
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '100'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '200'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '300'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '400'
      },
      {
        question: 'Who wrote Harry Potter?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
        level: '500'
      }
    ]
  }
];

function addCategory(category){
  const column = document.createElement('div');
  column.classList.add('genre-column');

  const genreTitle = document.createElement('div');
  genreTitle.classList.add('genre-title');
  genreTitle.innerText = category.genre;

  column.appendChild(genreTitle);
  game.append(column);

  category.questions.forEach(question =>{
    const card = document.createElement('div');
    card.classList.add('card');
    column.append(card);

    if(question.level === '100'){
      card.innerText = 100;
    }
    if(question.level === '200'){
      card.innerText = 200;
    }
    if(question.level === '300'){
      card.innerText = 300;
    }
    if(question.level === '400'){
      card.innerText = 400;
    }
    if(question.level === '500'){
      card.innerText = 500;
    }

    card.setAttribute('data-question', question.question);
    card.setAttribute('data-answer-1', question.answers[0]);
    card.setAttribute('data-answer-2', question.answers[1]);
    card.setAttribute('data-correct', question.correct);
    card.setAttribute('data-value', card.getInnerHTML());

    card.addEventListener('click', flipCard);

  });

}

jeaopardyCategories.forEach(category => addCategory(category));

function flipCard(){
  this.innerText = "";
  this.style.fontSize = "15px";
  this.style.lineHeight = "30px";
  const textDisplay = document.createElement('div');
  textDisplay.classList.add('card-text');
  textDisplay.innerText = this.getAttribute('data-question')
  const firstButton = document.createElement('button');
  const secondButton = document.createElement('button');
  firstButton.classList.add('first-button');
  secondButton.classList.add('second-button');
  firstButton.innerText = this.getAttribute('data-Answer-1');
  secondButton.innerText = this.getAttribute('data-Answer-2');
  this.append(textDisplay, firstButton, secondButton)
}