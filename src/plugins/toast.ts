import { POSITION, useToast, type PluginOptions } from 'vue-toastification';

export const options: PluginOptions = {
    position: POSITION.BOTTOM_RIGHT,
    hideProgressBar: true,
    maxToasts: 3,
    icon: false,
    timeout: 3000
};

const toastObj = useToast();

export function toast(content: string, type: 'success' | 'info' | 'warning' = 'success', options = {}) {
    toastObj[type](content, options);
}

export function toastError(content?: string) {
    toastObj.error(content || 'Something went wrong');
}
