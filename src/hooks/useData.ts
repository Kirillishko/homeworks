import { useEffect, useState } from "react";
import IProduct from "IProduct";
import { getItem, getItems } from "../api/api";

const useData = (id?: string | null): {
    isLoading: boolean,
    error: string | null,
    data: IProduct | IProduct[] | null;
} => {
    const [data, setData] = useState<IProduct | IProduct[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id !== undefined) {
            setIsLoading(true);
            const fetch = id ? () => getItem(id) : getItems;
            fetch()
                .then(data => {
                    setData(data);
                })
                .catch(error => {
                    setError(error.message);
                }).finally(() => {
                setIsLoading(false);
            });
        }
    }, [id]);

    return {isLoading, error, data};
};

export default useData;