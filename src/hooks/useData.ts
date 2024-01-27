import { useEffect, useState } from "react";
import IProduct from "IProduct";

const useData = (fetch?: (() => Promise<IProduct | IProduct[]>) | null): {
    isLoading: boolean,
    error: string | null,
    data: IProduct | IProduct[] | null;
} => {
    const [data, setData] = useState<IProduct | IProduct[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (fetch) {
            setIsLoading(true);
            fetch().then((data: IProduct | IProduct[]) => {
                setData(data);
            }).catch((error: Error) => {
                setError(error.message);
            }).finally(() => {
                setIsLoading(false);
            });
        }
    }, [fetch]);
    return { isLoading, error, data };
};

export default useData;