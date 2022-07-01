import React, {useContext, useState} from "react";

export const SearchValueContext = React.createContext(undefined);

export function SearchValueContextProvider({children}) {
    const [searchValue, setSearchValue] = useState("");

    return (
        <SearchValueContext.Provider
            value={{
                setSearchValue,
                searchValue
            }}
        >
            {children}
        </SearchValueContext.Provider>
    );
}

export const useSearchValue = () => useContext(SearchValueContext);