import { useListContext } from "../contexts/ListContext";
import { Btn } from "./lib/Btn";

function List() {
    const { list, newItem, setNewItem, handleAdd, handleDelete } =
        useListContext();

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>
                        {item}
                        <button onClick={() => handleDelete(i)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                value={newItem}
                type="text"
                onChange={(e) => setNewItem(e.target.value)}
            />
            <Btn fn={handleAdd} btnText={"Add item"} />
        </div>
    );
}
export default List;
