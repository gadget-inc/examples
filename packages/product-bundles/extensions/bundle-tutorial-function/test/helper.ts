import { execSync } from "child_process";
import { unlinkSync, writeFileSync } from "fs";

export const functionRunner = (input: string) => {
  const inputJsonFile = "./test/input.json";
  const createInputFile = (input: string) => writeFileSync(inputJsonFile, input);
  const outputByFunctionRunner = () => execSync(`function-runner -f build/debug.wasm ${inputJsonFile} -j | jq .output.JsonOutput`);
  const reset = () => unlinkSync(inputJsonFile);

  createInputFile(input);
  const output = outputByFunctionRunner();
  reset();

  return output.toString();
};
