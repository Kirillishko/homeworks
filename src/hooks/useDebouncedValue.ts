import { useEffect, useState } from "react";

const useDebouncedValue = <T>(initialValue: T, value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

    console.log("useDebouncedValue start");

    useEffect(() => {
        console.log("useDebouncedValue effect");
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebouncedValue;

// import {useEffect, useState} from "react";
//
// const useDebouncedValue = <T>(initialValue: T, callback: (...args: any) => T, delay: number, ...args: any): T => {
//     const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);
//
//     console.log("useDebouncedValue start");
//
//     useEffect(() => {
//         console.log("useDebouncedValue effect");
//         const handler = setTimeout(() => {
//             setDebouncedValue(callback(args));
//         }, delay);
//
//         return () => {
//             clearTimeout(handler);
//         };
//     }, [callback, args.length, delay]);
//
//     return debouncedValue;
// };
//
// export default useDebouncedValue;

// import { useCallback, useRef } from "react";
//
// export default function useDebouncedValue(callback: (...args: string[]) => void, delay: number) {
//     const timer = useRef<NodeJS.Timeout | null>(null);
//
//     return useCallback((...args: string[]) => {
//         if (timer.current)
//             clearTimeout(timer.current);
//
//         timer.current = setTimeout(() => {
//             callback(...args);
//         }, delay);
//     }, [callback, delay]);
// }