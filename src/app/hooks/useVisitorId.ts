// hooks/useVisitorId.ts
import { useState, useEffect } from 'react';
import { getCookie } from '../utils/cookie';

export const useVisitorId = () => {
    const [visitorId, setVisitorId] = useState<string | null>(null);

    useEffect(() => {
        // Cek cookie yang ada
        const existingVisitorId = getCookie('visitor_id');
        if (existingVisitorId) {
            setVisitorId(existingVisitorId);
        }
    }, []);

    return visitorId;
};