export const scrollToTop = () => {
  const DEFAULT_BEHAVIOUR = "smooth";
  const TOP_VALUE = 0;

  window.scrollTo({
    top: TOP_VALUE,
    behavior: DEFAULT_BEHAVIOUR,
  });
};
