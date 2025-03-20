import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function normalizeString(input: string): string {
	return input.toLowerCase().replace(/[.\s]/g, '');
}

export function extractCharacters(text: string): string[] {
	const charArray = [...text].map((char) => char);
	return charArray;
}

