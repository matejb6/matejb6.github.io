/**
 * @param {HTMLElement} parentElem Parent element
 * @param {string} newElemTag New element tag
 * @param {string} newElemId New element ID
 * @param {string[]} newElemClassList New element class list
 * @returns {HTMLElement} Appended child element
 * @description Creates and appends new child element to parent element
 */
export const appendChildElem = (parentElem, newElemTag, newElemId, newElemClassList) => {
  const newElem = document.createElement(newElemTag);
  newElem.id = newElemId;
  newElem.classList = newElemClassList;
  return parentElem.appendChild(newElem);
};
