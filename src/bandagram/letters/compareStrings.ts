export function compareStrings(str1: string, str2:string): boolean {
  //add more whitespace?
  return str1.toLowerCase().replace(' ', '') === str2.toLowerCase().replace(' ', '');
}