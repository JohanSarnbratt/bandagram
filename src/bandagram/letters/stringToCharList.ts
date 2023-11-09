export function stringToCharList(str: string): string[] {
  return str.toLowerCase()
    .split("")
    .filter((char) => char !== " ")
}