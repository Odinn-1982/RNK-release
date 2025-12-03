/**
 * Unhallowed Metropolis NPC Sheet
 *
 * A simplified sheet for NPCs and creatures
 */
declare const ActorSheetBase: typeof ActorSheet;
export declare class UMNPCSheet extends ActorSheetBase {
    static get defaultOptions(): any;
    getData(options?: Partial<ActorSheet.Options>): ActorSheet.Data;
    activateListeners(html: JQuery<HTMLElement>): void;
    private _onAttributeRoll;
    private _onItemCreate;
    private _onItemEdit;
    private _onItemDelete;
    private _onItemRoll;
}
export {};
