export function randomString(length: number, random: () => number): string {
  let text = "";
  //Letters appearing according to how common they are in dailyquiz.ts
  const possible = "AAAAABBCCCDDDEEEEEFFGGHHHIIIIJJKKLLLLMMMNNNNOOOOPPQRRRRSSSSTTTTUUVWWXYYZÅÄÖ";

  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(random() * possible.length));

  return text;
}