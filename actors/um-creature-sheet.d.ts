/**
 * Unhallowed Metropolis Creature Sheet
 *
 * Sheet for animates, vampires, thropes, and other creatures
 */
declare const ActorSheetBase: typeof ActorSheet;
export declare class UMCreatureSheet extends ActorSheetBase {
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
