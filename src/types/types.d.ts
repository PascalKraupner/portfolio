interface Project {
  name: string;
  livePreviewLink: string;
  githubRepositoryLink: string;
  cardImage: {
    src: string;
    alt: string;
  };
  shortDescription: string;
  technologyStack: Array<string>;
}
