# Wordle Solver

This solver can determine past, current and future wordle answers.

## Disclaimer

This was made for fun. I was curious about how Wordle works and wanted to share my findings. Please don't use this script to cheat or spoil Worlde solutions for dedicated players.

## Usage

Open [Wordle](https://www.powerlanguage.co.uk/wordle/) and run [this snippet](./index.js) in the console. Yesterday's, today's and tomorrow's wordle solution will be printed.

To find the solution for a custom date (past or future), run one of the following:

`determineWord(dateOffset:number)` - Determine wordle solution for a day by passing in an offset from the current date.
`determineWordByDate(targetDate:date)` - Determine wordle solution for a specific date

### Example

```js
const date = new Date();
date.setMonth(2);
date.setDate(21);
date.setYear(2022);

// Wordle word on March 21st, 2022 will be "saute"
determineWordByDate(date);
```

## How It Works

After parsing through the [Wordle source code](https://www.powerlanguage.co.uk/wordle/main.e65ce0a5.js), I noticed that the daily Wordle is automatically calculated using a preset list of words and the current date. This script fetches that list of words and calculates the Worldle answer for a specified date.
