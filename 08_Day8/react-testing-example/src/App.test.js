import App from './App';
import {shallow} from 'enzyme';


// setup
const setup = () => shallow(<App/>);
const findByAttr = (wrapper, value) => wrapper.find(`[data-test='${value}']`)

test('renders App without an error', () => {
  const wrapper = setup(); 
  const appComponent = findByAttr(wrapper, 'component-app');
  // assertion
  expect(appComponent.length).toBe(1);
})

test('renders a button', () => {
  const wrapper = setup();
  const button = findByAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});


test('renders counter display', () => {
  const wrapper = setup();
  const display = findByAttr(wrapper, 'counter-display');
  expect(display.length).toBe(1);
})


// test inital state value
test('initial count should be 0', () => {
  const wrapper = setup();
  const count = findByAttr(wrapper, 'count').text(); // will return string
  expect(count).toBe('0');
})

// simulate that click increment
test('clicking the button should increment count by 1', () => {
  const wrapper = setup();
  const button = findByAttr(wrapper, 'increment-button');
  // simulate
  button.simulate('click');
  // find the count display, test if count is incremented
  const count = findByAttr(wrapper, 'count').text();
  expect(count).toBe('1'); 
})
