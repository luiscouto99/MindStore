export const getAllProducts = async (setAllProducts: (value: React.SetStateAction<never[]>) => void, setIsLoading: (value: React.SetStateAction<boolean>) => void) => {
    const response = await fetch("/api/v1/users/products?direction=ASC&field=id&page=5&pagesize=3");
    const json = await response.json();
    setAllProducts(json);
    setTimeout(() => setIsLoading(false), 2000);
}