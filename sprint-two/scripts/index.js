let userComments = [ 
  { username: 'Micheal Lyons',
    date: '12/18/2018',
    comment: 'They BLEW the ROOF off at their last show once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
  },
  { username: 'Gary Wong',
    date: '12/12/2018',
    comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
  },
  { username: 'Theodore Duncan',
    date: '11/15/2018',
    comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
  },
];

let gallery = document.querySelector('.gallery');
let comments = document.createElement('section');
comments.classList.add('comments');

gallery.insertAdjacentElement('afterend', comments);

let title = document.createElement('h2');
title.classList.add('comments__title');
title.innerText = "Join The Conversation"
comments.appendChild(title);

let interactiveForm = document.createElement('div');
interactiveForm.classList.add('comments__interactive');
comments.appendChild(interactiveForm);

let userImageActive = document.createElement('img');
userImageActive.classList.add('comments__image');
userImageActive.setAttribute('src', "./assets/images/Mohan-muruge.jpg");
userImageActive.setAttribute('rel', 'user avatar');
interactiveForm.appendChild(userImageActive);

let form = document.createElement('form');
form.classList.add('comments__form');
interactiveForm.appendChild(form);

let nameLabel = document.createElement('label');
nameLabel.classList.add('comments__label');
nameLabel.innerText = 'NAME';
nameLabel.setAttribute('for', 'name');
form.appendChild(nameLabel);

let nameInput = document.createElement('input');
nameInput.classList.add('comments__input');
setAttributes (nameInput, {'type': 'text', 'name': 'name', 'placeholder': 'Your name...'});
form.appendChild(nameInput);

let commentsLabel = document.createElement('label');
commentsLabel.classList.add('comments__label');
commentsLabel.setAttribute('for', 'comments');
commentsLabel.innerText = 'COMMENT';
form.appendChild(commentsLabel);

let textBox = document.createElement('textarea');
textBox.classList.add('comments__textbox');
setAttributes (textBox, {'type': 'text', 'name': 'comment', 'placeholder': 'Add a comment'});
form.appendChild(textBox);

let button = document.createElement('button');
button.classList.add('comments__button');
button.setAttribute('type', 'submit')
button.innerText = 'COMMENT';
form.appendChild(button);

let cDate= new Date();

let commentDate = cDate.getMonth() + "/" + cDate.getDate() + "/" + cDate.getFullYear();


userComments.forEach(function (commentsDisplayBox) {

  let commentBox = document.createElement('div');
  commentBox.classList.add('comments__display');
  comments.appendChild(commentBox);

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
  userName.innerText = commentsDisplayBox.username;
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
); 

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let newComment = {
    username: event.target.name.value,
    date: commentDate,
    comment: event.target.comment.value
  }
      function displayComment(usertComments) {

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
      
      userComments.unshift(newComment);
      displayComment();
      form.reset();
    }
    );


function setAttributes(el, attribute) {
  for (let key in attribute) {
  el.setAttribute(key, attribute[key]);
}
};




