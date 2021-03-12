const domainExtractor = (url) => {
  let domain;
  if (Array.isArray(url)) {
    domain = new URL(url[0].url);
  } else {
    domain = new URL(url);
  }

  return <div>({domain.hostname})</div>;
};

export const urlCheck = (storyDetails) => {
  if (storyDetails.crosspost_parent_list)
    return domainExtractor(storyDetails.crosspost_parent_list);

  if (storyDetails.url) return domainExtractor(storyDetails.url);
};
