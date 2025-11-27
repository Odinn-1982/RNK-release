/**
 * Unhallowed Metropolis Item Sheet
 *
 * Sheet for editing items
 */
export declare class UMItemSheet extends ItemSheet {
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
