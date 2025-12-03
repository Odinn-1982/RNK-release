/**
 * Unhallowed Metropolis Item Sheet
 *
 * Sheet for editing items
 */
declare const ItemSheetBase: typeof ItemSheet;
export declare class UMItemSheet extends ItemSheetBase {
    static get defaultOptions(): any;
    /**
     * Return the correct template based on item type
     */
    get template(): string;
    getData(options?: Partial<ItemSheet.Options>): ItemSheet.Data;
    /**
     * Get list of skills that can be used for weapons
     */
    private _getWeaponSkills;
    activateListeners(html: JQuery<HTMLElement>): void;
}
export {};
