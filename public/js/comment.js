const newCommentHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector('#blog-comment').value.trim();
  //retrieve the blog_id which is needed when adding to the comment table
  const blog_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1 ];
 
  if (description) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
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

const delCommentButtonHandler = async (event) => {
  if (event.target.hasAttribute('comment-id')) {
    const comment_id = event.target.getAttribute('comment-id');
    const response = await fetch(`/api/comments/${comment_id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete comment');
    }
  }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);

document
    .querySelector('.comment-delete-btn')
    .addEventListener('click', delCommentButtonHandler);
