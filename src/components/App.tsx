import "./App.css";
import { BankingProvider } from "../contexts/BankingContext";
import Homepage from "./Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckingAccount from "./CheckingAccount";
import SavingsAccount from "./SavingAccount";

function App() {
  return (
    <div className="App">
      <BankingProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/checking" element={<CheckingAccount />} />
            <Route path="/savings" element={<SavingsAccount />} />
          </Routes>
        </BrowserRouter>
      </BankingProvider>
    </div>
  );
}

export default App;
