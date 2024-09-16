// Define functions
export const charCountIncSpaces = (text) => text.length;
export const charCountExcSpaces = (text) => text.replace(/\s+/g, '').length;
export const wordCount = (text) => text.trim().split(/\s+/).filter(word => word).length;
export const sentenceCount = (text) => text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0).length;
export const paragraphCount = (text) => text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;
export const spaceCount = (text) => text.split(' ').length - 1;
export const readingTime = (text) => Math.ceil(text.trim().split(/\s+/).length / 200) + ' min';
