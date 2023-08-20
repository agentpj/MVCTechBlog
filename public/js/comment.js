const newCommentHandler = async (event) => {
  event.preventDefault();

  console.log("inside comment.js");
  const description = document.querySelector('#blog-comment').value.trim();

  if (description) {
    if (event.target.hasAttribute('data-blogId')) {
      const blog_id = event.target.getAttribute('data-blogId');
      consol.log("inside if description");
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        // must really add the user_id here
        body: JSON.stringify({ blog_id, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    
    //document.location.reload();

    if (response.ok) {
      document.location.replace('/blog');
    } else {
      alert('Failed to create comment');
    }
  }
}};

  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);

