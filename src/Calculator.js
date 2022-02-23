import { useState } from 'react';
import './Calculator.css';

const Calculator = (props) => {
    const [total, setTotal] = useState(0);

    const clearHandler = () => {
        // User Story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.
        setTotal(0);
    };

    return (
        <div className="container">
            <div className="grid">
                <div id="display" className="display">
                    {total}
                </div>
                <button id="clear" value="ac" className="button ac" onClick={clearHandler}>
                    AC
                </button>
                <button id="divide" value="/" className="button divide operator">
                    /
                </button>
                <button id="multiply" value="x" className="button multiply operator">
                    x
                </button>
                <button id="seven" value="7" className="button seven">
                    7
                </button>
                <button id="eight" value="8" className="button eight">
                    8
                </button>
                <button id="nine" value="9" className="button nine">
                    9
                </button>

                <button id="subtract" value="-" className="button subtract operator">
                    -
                </button>
                <button id="four" value="4" className="button four">
                    4
                </button>
                <button id="five" value="5" className="button five">
                    5
                </button>
                <button id="six" value="6" className="button six">
                    6
                </button>
                <button id="add" value="+" className="button add operator">
                    +
                </button>
                <button id="one" value="1" className="button one">
                    1
                </button>
                <button id="two" value="2" className="button two">
                    2
                </button>
                <button id="three" value="3" className="button three">
                    3
                </button>
                <button id="negative" value="negative" className="button operator negative">
                    +/-
                </button>
                <button id="zero" value="0" className="button zero">
                    0
                </button>
                <button id="decimal" value="." className="button decimal">
                    .
                </button>
                <button id="equals" value="=" className="button equals">
                    =
                </button>
            </div>
        </div>
    );
};

export default Calculator;

// User Story #8: As I input numbers, I should be able to see my input in the element with the id of display.

// User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

// User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.

// User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.

// User Story #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

// User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).

// User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

// User Story #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

// Note On Calculator Logic: It should be noted that there are two main schools of thought on calculator input logic: immediate execution logic and formula logic. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different results than ours for certain equations (see below example). As long as your math can be verified by another production calculator, please do not consider this a bug.

// EXAMPLE: 3 + 5 x 6 - 2 / 4 =

// Immediate Execution Logic: 11.5
// Formula/Expression Logic: 32.5
