import { useState } from "react";
import "./App.css";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters</p>
    );
};

function App() {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    let [role, setRole] = useState("role");

    const getIsFormValid = () => {
        return (
            firstName.trim() !== "" &&
            lastName.trim() !== "" &&
            validateEmail(email) &&
            password.value.length >= 8 &&
            role.trim() !== "role"
        );
    };

    const clearForm = () => {
        setFirstName = "";
        setLastName = "";
        setEmail = "";
        setPassword({
            value: "",
            isTouched: false,
        });
        setRole = "role";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className="Field">
                        <label>
                            First name <sup>*</sup>
                        </label>
                        <input
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                        ></input>
                    </div>
                    <div className="Field">
                        <label>
                            Last name <sup>*</sup>
                        </label>
                        <input
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                        ></input>
                    </div>
                    <div className="Field">
                        <label>
                            Email <sup>*</sup>
                        </label>
                        <input
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                        ></input>
                    </div>
                    {/* Password */}
                    <div className="Field">
                        <label>
                            Password <sup>*</sup>
                        </label>
                        <input
                            placeholder="Password"
                            value={password.value}
                            onChange={(e) => {
                                setPassword({
                                    ...password,
                                    value: e.target.value,
                                });
                            }}
                            onBlur={() =>
                                setPassword({
                                    ...password,
                                    isTouched: true,
                                })
                            }
                            type="password" // obscured input
                        />
                        {password.isTouched && password.value.length < 8 ? (
                            <PasswordErrorMessage />
                        ) : null}
                    </div>
                    <div className="Field">
                        <label>
                            Role <sup>*</sup>
                        </label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="role">role</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <button type="submit" disabled={!getIsFormValid()}>
                        Create account
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default App;
