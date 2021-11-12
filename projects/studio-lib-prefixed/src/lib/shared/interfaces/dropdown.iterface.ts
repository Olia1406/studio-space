import { DropdownItem } from "./dropdownItems.interface";

export interface Dropdown {
    name: string,
    dropdownHeader: string,
    dropdownValue: string,
    filter: boolean,
    filterby: string,
    placeholder: string,
    dropdownItems: Array<DropdownItem>
}