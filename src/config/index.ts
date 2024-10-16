import { type IConfig } from '@/types/common';

const parseUrl = (url: string) => (url.endsWith('/') ? url.slice(0, -1) : url);

export const config: IConfig = {
    apiUrl: parseUrl(import.meta.env.VITE_API_URL || 'https://reqres.in/api'),
};
