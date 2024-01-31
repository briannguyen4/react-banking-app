import "./App.css";
import List from "./List";
import { ListProvider } from "../contexts/ListContext";

function App() {
    return (
        <div className="App">
            <ListProvider initialList={[1, 2, 3]}>
                <List />
            </ListProvider>
        </div>
    );
}

export default App;
