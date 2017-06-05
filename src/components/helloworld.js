/**
 * Created by suxin on 5/13/17.
 */
export default (text = 'Hello world') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    return element;
};