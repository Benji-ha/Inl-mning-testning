
import App from "./App";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// 1. Testar om sidan renderar

test("Render headline", () => {
    render(<App />);
    expect(screen.getByText("Benji's dictionary")).toBeInTheDocument();
});

// 2. Testar om sökomponent renderar

test("Should render search bar component", () => {
    render(<App />);
    expect(screen.getByText("Search")).toBeInTheDocument();
});

// 3. Testar felmeddelande vid tomt sök

test("Gives error if no word is searched", async () => {
    render(<App />);

    expect(screen.getByText("Benji's dictionary")).toBeInTheDocument();

    expect(screen.getByText("Search")).toBeInTheDocument();

    const user = userEvent.setup()

    const input = screen.getByRole('textbox');

    expect (input).toHaveValue('');

    await user.click(screen.getByText("Search"));

    await waitFor(() => expect(screen.getByText("Please enter a word to search")).toBeInTheDocument());


});


// 4. Testar om sök svar renderar

test("Testing search functionality", async () => {
  
    render(<App />);

    expect(screen.getByText("Benji's dictionary")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();

    const input = screen.getByRole('textbox');

    const user = userEvent.setup()

    await user.type(input, 'hello');

    expect(input).toHaveValue('hello');

    await user.click(screen.getByText("Search"));

    await waitFor(() => expect(screen.getByText('Definition 1', { exact: false })).toBeInTheDocument());
    expect(screen.getByText('Definition 2', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('noun', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('verb', { exact: false })).toBeInTheDocument();

    screen.debug();

    // Lägg till fler expect?

  
});


    // 5. Testar om ljud komponenten renderar

    test("Tests that the audio player renders", async () => {

        render(<App />);

        expect(screen.getByText("Benji's dictionary")).toBeInTheDocument();

        expect(screen.getByText("Search")).toBeInTheDocument();
    
        const input = screen.getByRole('textbox');
    
        const user = userEvent.setup()
    
        await user.type(input, 'hello');
    
        expect(input).toHaveValue('hello');
    
        await user.click(screen.getByText("Search"));

        await waitFor(() => expect(screen.getByText('Definition 1', { exact: false })).toBeInTheDocument());


        const audio = screen.getByLabelText("Play-pronunciation");

        expect(audio).toBeInTheDocument();

        screen.debug();

    }) 



    // Testa för "Enter"