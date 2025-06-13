import React, { useState } from "react";
import styles from "./index.module.css";
import "./index.theme.css";

interface SearchInputProps {
    placeholder?: string;
    onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
    placeholder = "Search books...",
    onSearch,
}) => {
    const [query, setQuery] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.searchInput}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder={placeholder}
                className={styles.inputField}
            />
            <button type="submit" className={styles.searchButton}>
                ➡️
            </button>
        </form>
    );
};

export default SearchInput;
