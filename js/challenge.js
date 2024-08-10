let counter = document.getElementById('counter');
let count = 0;
let = setInterval(function() {
  count++;
  counter.textContent = count;
}, 1000);
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus') 
plusButton.addEventListener('click', function(){
    count++;
    counter.textContent = count; 
}); 
minusButton.addEventListener('click', function() {
    count--;
    counter.textContent = count; 
});
const heartButton = document.getElementById('heart');
const likesList = document.querySelector('.likes');
const likes = {};
heartButton.addEventListener('click', function() {
  if (likes[count]) {
    likes[count]++;
  } else {
    likes[count] = 1;
  }
  let likeItem = document.getElementById(`like-${count}`);
  if (likeItem) {
    likeItem.textContent = `${count} has been liked ${likes[count]} times`;
  } else {
    likeItem = document.createElement('li');
    likeItem.id = `like-${count}`;
    likeItem.textContent = `${count} has been liked 1 time`;
    likesList.appendChild(likeItem);
  }
});
const pauseButton = document.getElementById('pause');
let isPaused = false;
let timer; // Add this line to initialize the timer variable

pauseButton.addEventListener('click', function() {
  if (isPaused) {
    timer = setInterval(function() {
      count++;
      counter.textContent = count;
    }, 1000);
    pauseButton.textContent = "pause";
    plusButton.disabled = false;
    minusButton.disabled = false;
    heartButton.disabled = false;
    isPaused = false;
  } else {
    clearInterval(timer);
    pauseButton.textContent = "resume";
    plusButton.disabled = true;
    minusButton.disabled = true;
    heartButton.disabled = true;
    isPaused = true;
  }
});
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');

commentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const comment = document.createElement('p');
  comment.textContent = commentInput.value;
  commentList.appendChild(comment);
  commentInput.value = ''; // Clear the input field after submission
});
