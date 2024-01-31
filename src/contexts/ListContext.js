import { createContext, useContext, useState } from "react";

const ListContext = createContext();

export const ListProvider = ({ children, initialList }) => {
    const [list, setList] = useState(initialList || []);
    const [newItem, setNewItem] = useState("");

    const handleDelete = (i) => {
        setList(list.filter((_, id) => id !== i));
    };

    const handleAdd = () => {
        setList([...list, newItem]);
        setNewItem("");
    };

    return (
        <ListContext.Provider
            value={{ list, newItem, setNewItem, handleAdd, handleDelete }}
        >
            {children}
        </ListContext.Provider>
    );
};

export const useListContext = () => useContext(ListContext);
