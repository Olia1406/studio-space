import { ITab } from "./tab.interface";

export class Tab implements ITab {
    constructor(
        public title:string = '',
        public onClick = () => {}
    ) {}
}