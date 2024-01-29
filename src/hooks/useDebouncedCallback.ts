import { useCallback, useRef } from 'react';

const useDebouncedCallback = (callback: (...args: any) => void, delay: number) => {
    const timer = useRef<NodeJS.Timeout | null>(null);

    return useCallback((...args: string[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
};