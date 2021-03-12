export const selectFields = ({
  id,
  by,
  url,
  time,
  title,
  kids,
  descendants,
} = {}) => ({
  id,
  by,
  url,
  time,
  title,
  kids,
  descendants,
});

export const selectCommentFields = ({ by, id, kids, text, time } = {}) => ({
  by,
  id,
  kids,
  text,
  time,
});
