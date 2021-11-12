import { Dropdown } from "./dropdown.iterface";

export interface SidebarSection {
    displaySectionHeader: boolean,
    sectionHeaderName: string,
    displayFilters: string,
    dropdownDataList: Array<Dropdown>
}