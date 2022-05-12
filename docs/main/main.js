document.addEventListener('DOMContentLoaded', () => {
  console.log('matejb6 GitHub Pages profile web page loaded');

  const rootElem = document.getElementById('root');

  const headerElem = appendChildElem(rootElem, 'header', 'header', ['header']);

  const headerTitleElem = appendChildElem(headerElem, 'h1', 'header-title', ['header-title']);
  headerTitleElem.innerText = 'My GitHub Pages profile';

  const headerSubtitleElem = appendChildElem(headerElem, 'h3', 'header-subtitle', ['header-subtitle']);
  headerSubtitleElem.innerHTML = '&#129489;&#8205;&#128187; Currently in works...';
});

/**
 * @param {HTMLElement} parentElem Parent element
 * @param {string} newElemTag New element tag
 * @param {string} newElemId New element ID
 * @param {string[]} newElemClassList New element class list
 * @returns {HTMLElement} Appended child element
 * @description Creates and appends new child element to parent element
 */
const appendChildElem = (parentElem, newElemTag, newElemId, newElemClassList) => {
  const newElem = document.createElement(newElemTag);
  newElem.id = newElemId;
  newElem.classList = newElemClassList;
  return parentElem.appendChild(newElem);
};
