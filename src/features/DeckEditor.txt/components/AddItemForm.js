import { useState } from "react";

function AddItemForm({ onAdd }) {
    // {} instead of props just allows us to not do props. everywhere
    // <> </> allows us to render consecutive components as siblings (and lets us fragment this component)

    const [prompt, setPrompt] = useState(""); //pass in our default val
    const [answer, setAnswer] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        onAdd({ prompt, answer })
        setPrompt("");
        setAnswer("");
    }

    return (
        <form
            onSubmit={submitForm}
        >
            <input
                type="text"
                required={true}
                placeholder="Type your prompt here"
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
            />
            <br />
            <textarea
                type="text"
                required={false}
                placeholder="Type the answer to the prompt here"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
            />
            <button
                type="submit"
            >
                Add
            </button>
        </form>
    )
}

export default AddItemForm;
