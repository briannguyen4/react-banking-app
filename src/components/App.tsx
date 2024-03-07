import React from "react";
import "./App.css";
import CheckingAccount from "./CheckingAccount";
import SavingsAccount from "./SavingAccount";
import { BankingProvider } from "../contexts/BankingContext";

function App() {
    return (
        <div className="App">
            <BankingProvider>
                <CheckingAccount />
                <SavingsAccount />
            </BankingProvider>
        </div>
    );
}

export default App;
