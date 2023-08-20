const newCommentHandler = async (event) => {
  event.preventDefault();

  console.log("INSIDE COMMENT.JS");
  const description = document.querySelector('#blog-comment').value.trim();
  const blog_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1 ];
 
  console.log(blog_id);

  if (description) {
      console.log(description);
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        // must really add the user_id here
        body: JSON.stringify({ blog_id, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

    if (response.ok) {
      document.location.reload();
      //document.location.replace('/blog/${id}');
    } else {
      alert('Failed to create comment');
    }
  }
};

  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);

