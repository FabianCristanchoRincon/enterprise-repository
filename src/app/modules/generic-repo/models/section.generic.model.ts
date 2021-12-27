import { FileGeneric } from "./file.generic.model";

export class SectionGeneric {
  id: number = 0;
  name: string = '';
  files: Array<FileGeneric> = [];
}
