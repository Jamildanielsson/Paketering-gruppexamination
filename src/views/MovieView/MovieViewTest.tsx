
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import MovieView from './MovieView';
import user from "@testing-library/user-event";


// test add and remove bookmarks
// test movie is showing

describe('Check search', () => {
  it("Should display error message if search bar is empty", async () => {
    render(<MovieView />);

    const searchBtn = screen.getByRole("button");
    await user.click(searchBtn);
   
    expect(await screen.findByText("Sorry pal, we couldn't see any Bookmarks ")).toBeInTheDocument();
  });

  it("Should show a title 'The Shawshank Redemption' ");
  render(<MovieView />);

  // it("Should display error message if search bar contains word with no definition", async () => {
  //   render(<MovieView />);

  //   const input = screen.getByPlaceholderText('Search...');
  //   const searchBtn = screen.getByRole("button");
  //   await user.type(input, 'asd');
  //   await user.click(searchBtn);
   
  //   expect(await screen.findByText("Sorry pal, we couldn't find definitions for the word you were looking for.")).toBeInTheDocument();
  // });

});