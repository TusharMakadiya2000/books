import { useContext } from "react";
import bookContext from "../context/books";

function useBooksContext() {
    return useContext(bookContext);
}

export default useBooksContext;
