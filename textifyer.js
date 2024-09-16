// Define functions
export const charCountIncSpaces = (text) => text.length;
export const charCountExcSpaces = (text) => text.replace(/\s+/g, '').length;
export const wordCount = (text) => text.trim().split(/\s+/).filter(word => word).length;
export const sentenceCount = (text) => text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0).length;
export const paragraphCount = (text) => text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;
export const spaceCount = (text) => text.split(' ').length - 1;
export const readingTime = (text) => Math.ceil(text.trim().split(/\s+/).length / 200) + ' min';
export const readabilityScore = (text) => {
    const sentences = text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0).length;
    const words = text.trim().split(/\s+/).filter(word => word).length;
    const syllables = text.split(/\s+/).reduce((acc, word) => acc + countSyllables(word), 0);

    const score = 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);
    return score.toFixed(2);
}
export const countSyllables = (word) => {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    word = word.replace(/(?:es|ed|e)$/i, '');
    word = word.replace(/(?:[^laeiouy]es|[^laeiouy]ed|[^laeiouy]e)$/i, '');
    return word.match(/[aeiouy]{1,2}/g) ? word.match(/[aeiouy]{1,2}/g).length : 0;
}
// Keyword Density
export const keywordDensity = (text, keyword) => {
    const words = text.toLowerCase().split(/\s+/);
    const keywordCount = words.filter(word => word === keyword.toLowerCase()).length;
    const totalWords = words.length;

    const density = ((keywordCount / totalWords) * 100).toFixed(2);
    return density + '%';
}
export const lexicalDiversity = (text) => {
    const words = text.trim().split(/\s+/).filter(word => word);
    const uniqueWords = new Set(words);
    return (uniqueWords.size / words.length).toFixed(2);
}
