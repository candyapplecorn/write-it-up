export const get_comments = storyId => $.ajax({
  url: `/api/stories/${storyId}/comments`,
  method: 'get'
});

export const delete_comment = commentId => $.ajax({
  url: `/api/comments/${commentId}`,
  method: 'delete'
});

export const create_comment = (storyId, comment) => $.ajax({
  url: `/api/stories/${storyId}/comments`,
  method: 'post',
  data: { comment }
});

export const update_comment = comment => $.ajax({
  url: `/api/comments/${comment.id}`,
  method: 'patch',
  data: { comment }
})
