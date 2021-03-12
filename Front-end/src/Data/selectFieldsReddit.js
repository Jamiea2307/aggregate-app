export const selectFields = ({
  id,
  author,
  url,
  created,
  title,
  permalink,
  num_comments,
  crosspost_parent_list,
} = {}) => ({
  id,
  by: author,
  url,
  time: created,
  title,
  permalink,
  descendants: num_comments,
  crosspost_parent_list,
});

export const selectCommentFields = ({
  author,
  body,
  created,
  replies,
} = {}) => ({
  by: author,
  text: body,
  time: created,
  kids: replies,
});
