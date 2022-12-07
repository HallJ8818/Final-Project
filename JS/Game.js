
const firebaseConfig = {
  apiKey: "AIzaSyAf7HDmlnl8F50XRn2i6KHvCdgd66ziEew",
  authDomain: "csci-225-final.firebaseapp.com",
  projectId: "csci-225-final",
  storageBucket: "csci-225-final.appspot.com",
  messagingSenderId: "476638522914",
  appId: "1:476638522914:web:0587b2a354f5f3c26fe47b",
  measurementId: "G-HSNP6N4LCN"
};

firebase.initializeApp(firebaseConfig);

// save the data

$("#button").click(function (e) {
  e.preventDefault();

  var score = $('#score').text();
  console.log(score);
  var name = $('#name').val();

  // made the data
  var data = {
    Name: name,
    Score: score
  };

  firebase.firestore().collection("Leaderboard").add(data);

  // clear the entry //
  $('form')[0].reset();
});

const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');

let score = 0;

const jeaopardyCategories = [
  {
    genre: "WHO",
    questions:[
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '100'
      },
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '200'
      },
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '300'
      },
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '400'
      },
      {
        question: 'Who wrote Harry Potter?',
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
        correct: 'JK Rowling',
        level: '100'
      },
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '200'
      },
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '300'
      },
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '400'
      },
      {
        question: 'Who wrote Harry Potter?',
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
        correct: 'JK Rowling',
        level: '100'
      },
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '200'
      },
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '300'
      },
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '400'
      },
      {
        question: 'Who wrote Harry Potter?',
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
        correct: 'JK Rowling',
        level: '100'
      },
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '200'
      },
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '300'
      },
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '400'
      },
      {
        question: 'Who wrote Harry Potter?',
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
        correct: 'JK Rowling',
        level: '100'
      },
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '200'
      },
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '300'
      },
      {
        question: 'Who wrote Harry Potter?',
        correct: 'JK Rowling',
        level: '400'
      },
      {
        question: 'Who wrote Harry Potter?',
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
  const textBox = document.createElement('input');
  textBox.setAttribute('type', 'text');
  textBox.setAttribute('id', 'box');
  textBox.classList.add('text-box');
  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.classList.add('submit-button');
  submit.innerText = 'Submit';
  submit.addEventListener('click', getResult);
  this.append(textDisplay, textBox, submit);

  const allCards = Array.from(document.querySelectorAll('.card'));
  allCards.forEach(card => card.removeEventListener('click', flipCard));
}

function getResult(){
  const answer = document.getElementById("box").value;

  const allCards = Array.from(document.querySelectorAll('.card'));
  allCards.forEach(card => card.addEventListener('click', flipCard));

  const cardOfButton = this.parentElement;

  console.log(answer);

  console.log(cardOfButton);

  if(cardOfButton.getAttribute('data-correct') == answer){
    score = score + parseInt(cardOfButton.getAttribute('data-value'));
    scoreDisplay.innerText = score;
    setTimeout(() => {
      while(cardOfButton.firstChild){
        cardOfButton.removeChild(cardOfButton.lastChild);
      }
      cardOfButton.innerText = cardOfButton.getAttribute('data-value');
    }, 100);
  } else {
    setTimeout(() => {
      while(cardOfButton.firstChild){
        cardOfButton.removeChild(cardOfButton.lastChild);
      }
      cardOfButton.innerText = 0;
    }, 100);
  }
  cardOfButton.removeEventListener('click', flipCard);
}
