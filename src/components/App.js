import "./App.css";
import CheckingAccount from "./CheckingAccount";
import { CheckingProvider } from "../contexts/CheckingContext";
import { SavingsProvider } from "../contexts/SavingsContext";
import SavingsAccount from "./SavingAccount";

function App() {
    return (
        <div className="App">
            <CheckingProvider>
                <CheckingAccount />
            </CheckingProvider>
            <SavingsProvider>
                <SavingsAccount />
            </SavingsProvider>
        </div>
    );
}

export default App;
