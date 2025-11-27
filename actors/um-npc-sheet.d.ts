/**
 * Unhallowed Metropolis NPC Sheet
 *
 * A simplified sheet for NPCs and creatures
 */
export declare class UMNPCSheet extends ActorSheet {
    static get defaultOptions(): any;
    getData(options?: Partial<ActorSheet.Options>): ActorSheet.Data;
    activateListeners(html: JQuery<HTMLElement>): void;
    private _onAttributeRoll;
    private _onItemCreate;
    private _onItemEdit;
    private _onItemDelete;
    private _onItemRoll;
}
