import {evaluateLetters} from "../generateActiveRow";

describe('evaluateLetters', () => {
  it('should not mark duplicate letters as guessed until you guess it twice', () => {
    expect(evaluateLetters('sex' , ['s','e','x','x','y']))
      .toEqual([
        {letter: 's', guessed: true},
        {letter: 'e', guessed: true},
        {letter: 'x', guessed: true},
        {letter: 'x', guessed: false},
        {letter: 'y', guessed: false},
      ])
  })
  it('should mark duplicate letters as guessed when you guess it twice', () => {
    expect(evaluateLetters('sexx' , ['s','e','x','x','y']))
      .toEqual([
        {letter: 's', guessed: true},
        {letter: 'e', guessed: true},
        {letter: 'x', guessed: true},
        {letter: 'x', guessed: true},
        {letter: 'y', guessed: false},
      ])
  })
})