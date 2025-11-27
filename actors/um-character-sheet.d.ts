/**
 * Unhallowed Metropolis Character Sheet
 *
 * The main character sheet for player characters
 */
export declare class UMCharacterSheet extends ActorSheet {
    static get defaultOptions(): any;
    /**
     * Prepare data for the template
     */
    getData(options?: Partial<ActorSheet.Options>): ActorSheet.Data;
    /**
     * Prepare attributes data for the template
     */
    private _prepareAttributes;
    /**
     * Prepare skills organized by governing attribute
     */
    private _prepareSkills;
    /**
     * Organize items by type for the sheet
     */
    private _prepareItems;
    /**
     * Activate event listeners
     */
    activateListeners(html: JQuery<HTMLElement>): void;
    /**
     * Handle attribute roll clicks
     */
    private _onAttributeRoll;
    /**
     * Handle skill roll clicks
     */
    private _onSkillRoll;
    /**
     * Handle clicking on attribute dots to change value
     */
    private _onAttributeDotClick;
    /**
     * Handle clicking on skill dots to change value
     */
    private _onSkillDotClick;
    /**
     * Handle health bar clicks
     */
    private _onHealthClick;
    /**
     * Handle mental health bar clicks
     */
    private _onMentalClick;
    /**
     * Handle corruption pip clicks
     */
    private _onCorruptionClick;
    /**
     * Handle creating a new item
     */
    private _onItemCreate;
    /**
     * Handle editing an item
     */
    private _onItemEdit;
    /**
     * Handle deleting an item
     */
    private _onItemDelete;
    /**
     * Handle rolling an item (e.g., weapon attack)
     */
    private _onItemRoll;
    /**
     * Handle psychic power activation
     */
    private _onPowerActivate;
}
