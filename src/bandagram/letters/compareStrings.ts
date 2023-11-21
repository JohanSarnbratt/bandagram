export function compareStrings(str1: string, str2:string): boolean {
  return cleanString(str1) === cleanString(str2)
}

function cleanString(str: string): string {
  //add more whitespace?
  return str.toLowerCase().replaceAll(' ', '').trim();
}