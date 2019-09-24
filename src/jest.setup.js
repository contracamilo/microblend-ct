import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

window.matchMedia = window.matchMedia
  || function matchMedia() {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };
window.open = () => {};
window.scrollTo = () => {};
window.Promise.prototype.finally = () => {};
