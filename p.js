// get the recent posts section
const recentPosts = document.querySelector('.left-section');

// create an array of posts
const posts = [
  { title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Post 2', content: 'Nunc eget eros nec velit feugiat facilisis.' },
  { title: 'Post 3', content: 'Integer vel est vitae nisi ultricies sodales.' }
];

// loop through the posts and create a list item for each
for (let post of posts) {
  let listItem = document.createElement('li');
  let link = document.createElement('a');
  link.href = '#';
  link.textContent = post.title;
  listItem.appendChild(link);
  recentPosts.querySelector('ul').appendChild(listItem);
}

// get the featured post section
const featuredPost = document.querySelector('.right-section article');

// set the title and content of the featured post
featuredPost.querySelector('h3').textContent = 'Post Title';
featuredPost.querySelector('p').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget eros nec velit feugiat facilisis. Integer vel est vitae nisi ultricies sodales.';

// add an event listener to the "Read More" button
featuredPost.querySelector('a').addEventListener('click', function(event) {
  event.preventDefault();
  alert('You clicked the "Read More" button!');
});
function toggleText() {
  var moreText = document.getElementById("more");
  var buttonText = document.querySelector("button");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    buttonText.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    buttonText.innerHTML = "Read More";
  }
}
document.addEventListener("DOMContentLoaded", function() {
  var readMoreButtons = document.querySelectorAll(".read-more-button");

  readMoreButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var wrapper = this.parentNode;
      var text = wrapper.querySelector(".read-more-text");

      if (text.classList.contains("collapsed")) {
        text.classList.remove("collapsed");
        this.innerHTML = "Read Less";
      } else {
        text.classList.add("collapsed");
        this.innerHTML = "Read More";
      }
    });
  });
});

