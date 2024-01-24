import { useEffect, useState } from "react";
import IProduct from "IProduct";
import { getItem, getItems } from "../api/api";

const useDataLoader = (id?: string | null): {
    isLoading: boolean,
    error: string | null,
    data: IProduct | IProduct[] | null;
} => {
    const [data, setData] = useState<IProduct | IProduct[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = () => {
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
        };

        if (id !== null) {
            loadData();
        }
    }, [id]);

    return {isLoading, error, data};
};

export default useDataLoader;