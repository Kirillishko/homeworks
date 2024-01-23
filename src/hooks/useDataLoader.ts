import { useEffect, useState } from "react";

const useDataLoader = <T>(fetch: () => Promise<T>, initialState: T): {
    isLoading: boolean,
    error: string,
    data: T
} => {

    console.log("useDataLoader");

    const [data, setData] = useState<T>(initialState);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        setIsLoading(true);
        fetch()
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    return {isLoading, error, data};
};

export default useDataLoader;