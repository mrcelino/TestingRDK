// utils/cookie.ts
export const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop()?.split(';').shift() || null;
    }
    return null;
};

export const setCookie = (name: string, value: string, days = 365) => {
    const maxAge = days * 24 * 60 * 60 * 1000;
    document.cookie = `${name}=${value};path=/;max-age=${maxAge};samesite=lax`;
};