import { writable } from 'svelte/store';

export const imagesFiles = writable([]);
export const csvFile = writable(null);
export const userIPFSToken = writable('');
