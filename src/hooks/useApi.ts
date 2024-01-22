import {useEffect, useState} from "react";

const useApi = <T>(fetch: () => Promise<T>, initialState: T): [boolean, T] => {

    const [resultData, setData] = useState<T>(initialState);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        fetch()
            .then(data => setData(data))
            .finally(() => setIsLoading(false));
    }, []);

    return [isLoading, resultData];
};

export default useApi;