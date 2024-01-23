import { useEffect, useState } from "react";
import { Primitives } from "Primitives";

export const useDebouncedValue = <T extends Primitives>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    console.log("useDebouncedValue start1");

    useEffect(() => {
        console.log("useDebouncedValue effect");

        const handler = setTimeout(() => {
            console.log("useDebouncedValue handler");
            setDebouncedValue(value);
        }, delay);

        return () => {
            console.log("useDebouncedValue return");
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};