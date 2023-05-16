import React from "react";
import Contact from "../Routes/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import fetchMock from "jest-fetch-mock";

import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });

describe("Contact", () => {
  it("renders correctly", () => {
    shallow(<Contact />);
  });

  test("Rendering", async () => {
    render(<Contact />);
    expect(await screen.findByText("Error Boundary")).toBeInTheDocument();
  });

  test("for count", () => {
    let wrapper = shallow(<Contact />);
    const count = 3;
    fetchMock.mockResolvedValue(count);
    render(wrapper);
    wrapper.find("button").simulate("click");
    expect(wrapper.find("button").simulate("click")).toEqual({ count: 3 });
  });
});
