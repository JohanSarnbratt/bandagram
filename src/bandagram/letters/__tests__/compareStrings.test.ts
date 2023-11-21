import {compareStrings} from "../compareStrings";

describe('compareStrings', () => {
  it('should say strings are equal ignoring spaces', () => {
    expect(compareStrings('sex' , 'sex')).toEqual(true)
    expect(compareStrings('sex' , 's e x')).toEqual(true)
    expect(compareStrings('s e x' , 'sex')).toEqual(true)
  })
})