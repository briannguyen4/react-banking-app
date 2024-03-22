import { useBankingContext } from "../contexts/BankingContext";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const { savingsBalance, checkingBalance } = useBankingContext();

  const navigate = useNavigate();

  return (
    <>
      <h1>Account Information</h1>
      <div>
        <button onClick={() => navigate("/checking")}>
          <h2>Checking Account</h2>
        </button>
        <h3>Current Balance: {checkingBalance}</h3>{" "}
        <button onClick={() => navigate("/savings")}>
          <h2>Savings Account</h2>
        </button>
        <h3>Current Balance: {savingsBalance}</h3>{" "}
      </div>
    </>
  );
};
export default Homepage;
