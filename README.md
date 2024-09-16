# Textifyer

**Textifyer** is a powerful npm package for analyzing text. It provides functionalities for character counts (with and without spaces), word count, sentence count, paragraph count, space count, and reading time estimation. Perfect for efficient text analysis and management.


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

- **Character Count (with and without spaces)**: Calculate the total number of characters in your text, including and excluding spaces.
- **Word Count**: Count the number of words in your text.
- **Sentence Count**: Determine the number of sentences in your text.
- **Paragraph Count**: Find out the number of paragraphs in your text.
- **Space Count**: Track the number of spaces in your text.
- **Reading Time**: Estimate how long it will take to read your text based on an average reading speed of 200 words per minute.


## Examples

```js
import * as textCounter from 'textifyer';

const sampleText = `This is a sample text. It has multiple sentences and paragraphs.

This is another paragraph!`;

console.log('Characters (with spaces):', textCounter.charCountInc(sampleText));
console.log('Characters (no spaces):', textCounter.charCountExc(sampleText));
console.log('Words:', textCounter.wordCount(sampleText));
console.log('Sentences:', textCounter.sentenceCount(sampleText));
console.log('Paragraphs:', textCounter.paragraphCount(sampleText));
console.log('Spaces:', textCounter.spaceCount(sampleText));
console.log('Reading Time:', textCounter.readingTime(sampleText));
```
