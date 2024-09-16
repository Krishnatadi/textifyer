# Textifyer

**Textifyer** is a powerful package for analyzing text. It provides functionalities for character counts (with/without spaces), word, sentence, and paragraph counts, space count, reading time estimation, readability score, keyword density, lexical diversity, and syllable counting..


## Table of Contents

* [Installation](#installation)
* [Features](#features)
* [Examples](#examples)


## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

To install `textifyer`, use npm:
```console
$ npm install textifyer
```


## Features

- **Character Count (with spaces)**: Returns the total number of characters in the text, including spaces.
- **Character Count (without spaces)**: Returns the number of characters in the text, excluding spaces.
- **Word Count**: Counts the total number of words in the text.
- **Sentence Count**: Counts the number of sentences in the text based on punctuation marks (., !, ?).
- **Paragraph Count**: Counts the number of paragraphs in the text, assuming paragraphs are separated by newline characters.
- **Space Count**: Counts the number of spaces in the text.
- **Reading Time**: Estimates the time it will take to read the text, assuming an average reading speed of 200 words per minute.
- **Readability Score**: Calculates the Flesch-Kincaid readability score to assess the readability of the text. A higher score indicates easier readability.
- **Keyword Density**: Measures the percentage of occurrences of a specific keyword in relation to the total number of words in the text.
- **Lexical Diversity**: Measures the diversity of vocabulary in the text, calculated as the ratio of unique words to total words.
- **Syllable Count**: Estimates the number of syllables in each word to support readability analysis.


## Examples

```js
import * as textCounter from 'textifyer';

const sampleText = `This is a sample text. It has multiple sentences and paragraphs.

This is another paragraph!`;

// Running tests
console.log('Characters (with spaces):', textCounter.charCountIncSpaces(sampleText));
console.log('Characters (no spaces):', textCounter.charCountExcSpaces(sampleText));
console.log('Words:', textCounter.wordCount(sampleText));
console.log('Sentences:', textCounter.sentenceCount(sampleText));
console.log('Paragraphs:', textCounter.paragraphCount(sampleText));
console.log('Spaces:', textCounter.spaceCount(sampleText));
console.log('Reading Time:', textCounter.readingTime(sampleText));
console.log('Readability Score:', textCounter.readabilityScore(sampleText));
console.log('Keyword Density:', textCounter.keywordDensity(sampleText, 'sample'));
console.log('lexicalDiversity:', textCounter.lexicalDiversity(sampleText));
console.log('Syllable Count:', textCounter.countSyllables(sampleText));
```
