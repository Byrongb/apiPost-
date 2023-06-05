fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) 
  .then(data => {
    const postsContainer = document.getElementById('posts-container');

    data.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      const titleElement = document.createElement('h2');
      titleElement.classList.add('post-title');
      titleElement.textContent = post.title;

      const bodyElement = document.createElement('p');
      bodyElement.classList.add('post-body');
      bodyElement.textContent = post.body;

      postDiv.appendChild(titleElement);
      postDiv.appendChild(bodyElement);

      postsContainer.appendChild(postDiv);
    });
  });