// @ts-nocheck
export const getSearchedItems = async (searchTerm) => {
    const response = await fetch(`/api/v1/users/products/name?title=${searchTerm}&page=1&pagesize=6`);
    if (response.status === 404) return { status: 404 }
    const json = await response.json();
    return json;
}