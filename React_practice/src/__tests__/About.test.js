import React from "react";
import { render, screen } from "@testing-library/react";
import fetchMock from 'jest-fetch-mock';
import About from "../Routes/About";
import '@testing-library/jest-dom';

describe("App", () => {
  
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("renders users when API call succeeds", async () => {
    const fakeUsers = [
      { id: 1, name: "Leanne Graham" },
      { id: 2, name: "Ervin Howell" },
    ];
    fetchMock.mockResolvedValue({
      status: 200,
      json: jest.fn(() => fakeUsers),
    });

    render(<About />);

    // expect(screen.getByRole('heading')).toHaveTextContent('List of Users')

    expect(await screen.findByText("Leanne Graham")).toBeInTheDocument();
    expect(await screen.findByText("Ervin Howell")).toBeInTheDocument();

    // expect(screen.queryByText("No users found")).not.toBeInTheDocument();
  });

  test.skip('renders error when API call fails', async () => {
    fetchMock.mockReject(() => Promise.reject('API error'));
  
    render(<About />)
  
    expect(await screen.findByText('Something went wrong!')).toBeInTheDocument()
    expect(await screen.findByText('No users found')).toBeInTheDocument()
  })
});

