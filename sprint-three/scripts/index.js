let gallery = document.querySelector('.gallery');
let comments = document.createElement('section');
comments.classList.add('comments');

gallery.insertAdjacentElement('afterend', comments);

let title = document.createElement('h2');
title.classList.add('comments__title');
title.innerText = "Join The Conversation"
comments.appendChild(title);

let form = document.querySelector('.comments__interactive');
comments.appendChild(form);

let interactiveForm = document.querySelector('form');
console.log(interactiveForm);
interactiveForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
let newComment = {
  'name': event.target.name.value,
  'comment': event.target.comment.value
}

  function displayComment(comment) {

    let commentBox = document.createElement('div');
    commentBox.classList.add('comments__display');
    form.insertAdjacentElement('afterend', commentBox);
  
    let image = document.createElement('img');
    image.classList.add('comments__image');
    image.setAttribute('src', './assets/images/Mohan-muruge.jpg');
    commentBox.appendChild(image);
  
    let userInfo = document.createElement('div');
    userInfo.classList.add('comments__old');
    commentBox.appendChild(userInfo);
  
    let headingBox = document.createElement('div');
    headingBox.classList.add('comments__heading');
    userInfo.appendChild(headingBox);
  
    let userName = document.createElement('h3');
    userName.classList.add('comments__username');
    userName.classList.add('comments__username-new');
    userName.innerText = newComment.name;
    headingBox.appendChild(userName);
  
    let time = new Date
    let cDate = time.getMonth() + "/" + time.getDate() + "/" + time.getFullYear();

    let commentDate = document.createElement('p');
    commentDate.classList.add('comments__date');
    commentDate.innerText = cDate;
    headingBox.appendChild(commentDate);
  
    let newestComment = document.createElement('p');
    newestComment.classList.add('comments__comment');
    newestComment.innerText = newComment.comment;
    userInfo.appendChild(newestComment);
  
    return commentBox;
  };
  displayComment();
  interactiveForm.reset();

axios 
  .post('https://project-1-api.herokuapp.com/comments?api_key=nicky', newComment)
  .then (response => {
   newComment.unshift(response);
  })
  .catch (error => {
    console.log(error);
    let errorMessage = document.createElement('h1');
    errorMessage.innerText = 'Sorry, comments are currently not available';
    interactiveForm.appendChild(errorMessage);
  })  
  });


axios 
  .get('https://project-1-api.herokuapp.com/comments?api_key=nicky')
  .then (response => {
  commentsArray = response.data;
     
commentsArray.forEach( 
  
  function (commentObj) {

  let time = new Date (commentObj.timestamp);
  console.log(time);
  let cDate = time.getMonth() + "/" + time.getDate() + "/" + time.getFullYear();
  console.log(cDate);

  let commentBox = document.createElement('div');
  commentBox.classList.add('comments__display');
  form.insertAdjacentElement('afterend', commentBox);

  let image = document.createElement('img');
  image.classList.add('comments__image');
  image.setAttribute('src', './assets/images/Mohan-muruge.jpg');
  commentBox.appendChild(image);

  let userInfo = document.createElement('div');
  userInfo.classList.add('comments__old');
  commentBox.appendChild(userInfo);

  let headingBox = document.createElement('div');
  headingBox.classList.add('comments__heading');
  userInfo.appendChild(headingBox);

  let userName = document.createElement('h3');
  userName.classList.add('comments__username');
  userName.innerText = commentObj.name;
  headingBox.appendChild(userName);

  let commentDate = document.createElement('p');
  commentDate.classList.add('comments__date');
  commentDate.innerText = cDate;
  headingBox.appendChild(commentDate);

  let comment = document.createElement('p');
  comment.classList.add('comments__comment');
  comment.innerText = commentObj.comment;
  userInfo.appendChild(comment);

  return commentBox;
})
}).catch(error => {
  let errorMessage = document.createElement('h1');
  errorMessage.innerText = 'Sorry, comments are currently not available';
  interactiveForm.appendChild(errorMessage);
});





