// Import stylesheets
import './style.css';

// Write Javascript code!
const myPromise = new Promise((resolve, reject) => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((post) => {
      const userId = post.userId;
      return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => reject(error));
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log('done'));
