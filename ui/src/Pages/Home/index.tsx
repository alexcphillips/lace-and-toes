import css from "./index.module.css";
import SearchInput from "../../Components/SearchInput";

export default function Home() {
    const books = [<Card></Card>];
    const handleSearch = (query: string) => {
        console.log("you searched for:", query);
        return books[query];
    };

    const title = "Page Turners Anonymous Book Club";
    return (
        <>
            <h2 className={css["title"]}>{title}</h2>

            <SearchInput
                onSearch={handleSearch}
                placeholder="🔎 Search for books"
            />
        </>
    );
}
