// @ts-nocheck
export const getSearchedItems = async (inputSearch, setIsLoading, setItemsFromSearch, setAllProducts) => {
    const response = await fetch(`/api/v1/users/products/name?title=${(inputSearch as unknown as React.RefObject<HTMLInputElement>).current?.value}&page=1&pagesize=6`);
    if (response.status === 404) {
        setIsLoading(false);
        setItemsFromSearch(`No results found for the search: "${inputSearch.current.value}"`);
        setAllProducts([]);
        return;
    }
    const json = await response.json();
    setAllProducts(json);
    setIsLoading(false);
}