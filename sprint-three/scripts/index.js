let gallery = document.querySelector('.gallery');
let comments = document.createElement('section');
comments.classList.add('comments');

gallery.insertAdjacentElement('afterend', comments);

let title = document.createElement('h2');
title.classList.add('comments__title');
title.innerText = "Join The Conversation"
comments.appendChild(title);

// let interactiveForm = document.createElement('div');
// interactiveForm.classList.add('comments__interactive');
// comments.appendChild(interactiveForm);

// let userImageActive = document.createElement('img');
// userImageActive.classList.add('comments__image');
// userImageActive.setAttribute('src', "./assets/images/Mohan-muruge.jpg");
// userImageActive.setAttribute('rel', 'user avatar');
// interactiveForm.appendChild(userImageActive);

// let form = document.createElement('form');
// form.classList.add('comments__form');
// interactiveForm.appendChild(form);

// let nameLabel = document.createElement('label');
// nameLabel.classList.add('comments__label');
// nameLabel.innerText = 'NAME';
// nameLabel.setAttribute('for', 'name');
// form.appendChild(nameLabel);

// let nameInput = document.createElement('input');
// nameInput.classList.add('comments__input');
// setAttributes (nameInput, {'type': 'text', 'name': 'name', 'placeholder': 'Your name...'});
// form.appendChild(nameInput);

// let commentsLabel = document.createElement('label');
// commentsLabel.classList.add('comments__label');
// commentsLabel.setAttribute('for', 'comments');
// commentsLabel.innerText = 'COMMENT';
// form.appendChild(commentsLabel);

// let textBox = document.createElement('textarea');
// textBox.classList.add('comments__textbox');
// setAttributes (textBox, {'type': 'text', 'name': 'comment', 'placeholder': 'Add a comment'});
// form.appendChild(textBox);

// let button = document.createElement('button');
// button.classList.add('comments__button');
// button.setAttribute('type', 'submit')
// button.innerText = 'COMMENT';
// form.appendChild(button);

let cDate= new Date();

let commentDate = cDate.getMonth() + "/" + cDate.getDate() + "/" + cDate.getFullYear();


// userComments.forEach(function (commentsDisplayBox) {

//   let commentBox = document.createElement('div');
//   commentBox.classList.add('comments__display');
//   comments.appendChild(commentBox);

//   let image = document.createElement('img');
//   image.classList.add('comments__image');
//   image.setAttribute('src', './assets/images/Mohan-muruge.jpg');
//   commentBox.appendChild(image);

//   let userInfo = document.createElement('div');
//   userInfo.classList.add('comments__old');
//   commentBox.appendChild(userInfo);

//   let headingBox = document.createElement('div');
//   headingBox.classList.add('comments__heading');
//   userInfo.appendChild(headingBox);

//   let userName = document.createElement('h3');
//   userName.classList.add('comments__username');
//   userName.innerText = commentsDisplayBox.username;
//   headingBox.appendChild(userName);

//   let commentDate = document.createElement('p');
//   commentDate.classList.add('comments__date');
//   commentDate.innerText = commentsDisplayBox.date;
//   headingBox.appendChild(commentDate);

//   let comment = document.createElement('p');
//   comment.classList.add('comments__comment');
//   comment.innerText = commentsDisplayBox.comment;
//   userInfo.appendChild(comment);

//   return commentBox;
// } 
// ); 


let formInteractive = document.querySelector('form');
console.log(formInteractive);
formInteractive.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let newComment = {
    username: event.target.name.value,
    date: commentDate,
    comment: event.target.comment.value
  }
      function displayComment() {

        let newestCommentBox = document.createElement('div');
        newestCommentBox.classList.add('comments__display');
        interactiveForm.insertAdjacentElement('afterend', newestCommentBox);
    
    
        let image = document.createElement('img');
        image.classList.add('comments__image');
        image.setAttribute('src', './assets/images/Mohan-muruge.jpg');
        newestCommentBox.appendChild(image);
    
        let userInfo = document.createElement('div');
        userInfo.classList.add('comments__old');
        newestCommentBox.appendChild(userInfo);
    
        let headingBox = document.createElement('div');
        headingBox.classList.add('comments__heading');
        userInfo.appendChild(headingBox);
    
        let userName = document.createElement('h3');
        userName.classList.add('comments__username');
        userName.innerText = newComment.username;
        headingBox.appendChild(userName);
    
        let commentDate = document.createElement('p');
        commentDate.classList.add('comments__date');
        commentDate.innerText = newComment.date;
        headingBox.appendChild(commentDate);
    
        let newestcomment = document.createElement('p');
        newestcomment.classList.add('comments__comment');
        newestcomment.innerText = newComment.comment;
        userInfo.appendChild(newestcomment);

    
        return newestCommentBox
      };
      
      // userComments.unshift(newComment);
      displayComment();
      form.reset();
    }
    );
let form = document.querySelector('.comments__interactive');
let commentArray = axios 
  .get('https://project-1-api.herokuapp.com/comments?api_key=nicky')
  .then (response => {
    commentsArray = response.data;
    console.log(commentsArray);
    

commentsArray.forEach(function (commentsDisplayBox) {

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
  userName.innerText = commentsDisplayBox.name;
  headingBox.appendChild(userName);

  let commentDate = document.createElement('p');
  commentDate.classList.add('comments__date');
  commentDate.innerText = commentsDisplayBox.date;
  headingBox.appendChild(commentDate);

  let comment = document.createElement('p');
  comment.classList.add('comments__comment');
  comment.innerText = commentsDisplayBox.comment;
  userInfo.appendChild(comment);

  return commentBox;
} 
)
}).catch(error => {
  
  let errorMessage = document.createElement('h1');
  errorMessage.innerText = 'Sorry, comments are currently not available';
  interactiveForm.appendChild(errorMessage);
});


function setAttributes(el, attribute) {
  for (let key in attribute) {
  el.setAttribute(key, attribute[key]);
}
};





