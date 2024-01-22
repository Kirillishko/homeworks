import {useEffect, useState} from "react";

const useDebouncedValue = <T>(initialValue: T, value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [initialValue]);

    return debouncedValue;
};

export default useDebouncedValue;