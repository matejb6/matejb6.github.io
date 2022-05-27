import { appendChildElem } from './util.js';

describe('util', () => {
  /**
   * @type HTMLElement
   * @description Parent element
   */
  let parentElem;

  beforeEach(() => {
    parentElem = document.createElement('div');
  });

  it('should append child element with correct tag', () => {
    appendChildElem(parentElem, 'span', 'child-elem-id', ['new-elem-first-class']);

    expect(parentElem.firstChild.tagName).toEqual('SPAN');
  });
  it('should append child element with correct id', () => {
    appendChildElem(parentElem, 'span', 'child-elem-id', ['new-elem-first-class']);

    expect(parentElem.firstChild.id).toEqual('child-elem-id');
  });
  it('should append child element with correct class', () => {
    appendChildElem(parentElem, 'span', 'child-elem-id', ['new-elem-first-class']);

    expect(parentElem.firstChild.className).toEqual('new-elem-first-class');
  });
});
