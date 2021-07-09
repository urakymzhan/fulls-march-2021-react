import { shallow } from "enzyme";
import AsyncComponent from "./AsyncComponent";

describe("async code test", () => {
  const errorMessage = "ERROR";
  const successResult = "Some data";
  // mock functions
  const getSucess = jest.fn(() => Promise.resolve(successResult));
//   const getFail = jest.fn(() => Promise.reject(new Error()));

  it("should display the string returned from the get function", async () => {
    //
    const wrapper = shallow(<AsyncComponent get={getSucess} />);
    const displayBeforeClick = wrapper.find(".display");
    // test if display element doesn't exist
    expect(displayBeforeClick.exists()).toBe(false);

    const getButton = wrapper.find("button");
    getButton.simulate("click");


    // TODO: Fix the code
    // Enzyme doesn't have a way to wait until element added
    // setImmediate, setTimeout
    setTimeout(() => {
      const displayAfterClick = wrapper.find(".display");
      expect(displayAfterClick.exists()).toBe(false);
    //   expect(displayAfterClick.text()).toBe(errorMessage);
      // jest.done();
    }, 0);
  });
});
