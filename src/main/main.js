import { appendChildElem } from '../shared/utils/util.js';

/**
 * @description DOM content loaded event listener, main entry point of dynamic content loading
 */
const domContentLoadedEventListener = () => {
  console.log('matejb6 GitHub Pages profile web page loaded');

  const rootElem = document.getElementById('root');

  const headerElem = appendChildElem(rootElem, 'header', 'header', ['header']);

  const headerTitleElem = appendChildElem(headerElem, 'h1', 'header-title', ['header-title']);
  headerTitleElem.innerText = 'My GitHub Pages profile';

  const headerSubtitleElem = appendChildElem(headerElem, 'h3', 'header-subtitle', ['header-subtitle']);
  headerSubtitleElem.innerHTML = '&#129489;&#8205;&#128187; Currently in works...';
};

document.addEventListener('DOMContentLoaded', domContentLoadedEventListener);
