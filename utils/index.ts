export const readFileInput = (fileName: string) => {
  const decoder = new TextDecoder("utf-8");
  const data = Deno.readFileSync(`./inputs/${fileName}`);
  return decoder.decode(data);
};
