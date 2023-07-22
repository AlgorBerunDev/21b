function scrollNext({ parentElement, childElement, paddingLeft }) {
  const childRect = childElement.getBoundingClientRect();
  const parentRect = parentElement.getBoundingClientRect();

  const scrollLeft = childRect.left - parentRect.left + parentElement.scrollLeft;
  const scrollTop = childRect.top - parentRect.top + parentElement.scrollTop;

  parentElement.scrollTo({
    left: scrollLeft - paddingLeft,
    top: scrollTop,
    behavior: "smooth", // плавная прокрутка
  });

  childElement.scrollIntoView({
    behavior: "smooth", // плавная прокрутка
  });
}
