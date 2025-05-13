import { useState, useRef } from "react";
import "./App.css";

function App() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    function plus(e) {
        // stops the default behavior of the event,
        // preventing this form submission, so the page doesn’t reload.
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value));
    }

    function minus(e) {
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value));
    }

    function times(e) {
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value));
    }

    function divide(e) {
        e.preventDefault();
        const input = Number(inputRef.current.value);
        if (input == 0) {
            alert("Not possible to be divide by zero");
        }
        setResult((result) => result / input);
    }

    //  takes an event object e as its parameter. To be called when the "Reset Input" button is clicked.
    function resetInput(e) {
        e.preventDefault();

        // The .current property points to the actual DOM node of the input box. This line checks if the input element is mounted and accessible before trying to manipulate it, preventing potential errors.
        if (inputRef.current) {
            inputRef.current.value = "";

            // moves the keyboard focus back to the input box,
            // so the user can immediately start typing a new number
            inputRef.current.focus();
        }
    }

    function resetResult(e) {
        e.preventDefault();
        setResult(0);
    }

    return (
        <div className="App">
            <div>
                <h1>Simplest Working Calc</h1>
            </div>
            <form>
                <p ref={resultRef}>Total: {result}</p>
                <input
                    pattern="[0-9]"
                    ref={inputRef}
                    type="number"
                    placeholder="Type a number"
                />
                <button onClick={plus}>add</button>
                <button onClick={minus}>subtract</button>
                <button onClick={times}>multiply</button>
                <button onClick={divide}>divide</button>
                <button onClick={resetInput} class="orange">
                    reset input
                </button>
                <button onClick={resetResult} class="orange">
                    reset result
                </button>
            </form>
        </div>
    );
}

export default App;
