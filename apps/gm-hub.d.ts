/**
 * Unhallowed Metropolis GM Hub
 *
 * The command center for Game Masters - manage encounters, track NPCs,
 * monitor party corruption, and access quick reference tools.
 */
export declare class GMHub extends Application {
    private trackedNPCs;
    private encounter;
    private sessionNotes;
    private partyCorruption;
    static get defaultOptions(): ApplicationOptions;
    getData(): object;
    /**
     * Target Number Reference Table
     */
    getTargetNumberReference(): Array<{
        tn: number;
        difficulty: string;
        description: string;
    }>;
    activateListeners(html: JQuery): void;
    /**
     * Add NPC to tracker
     */
    private _onAddNPCToTracker;
    /**
     * Remove NPC from tracker
     */
    private _onRemoveNPCFromTracker;
    /**
     * NPC Quick Action (use one action)
     */
    private _onNPCQuickAction;
    /**
     * Reset NPC actions
     */
    private _onResetNPCActions;
    /**
     * Apply damage to NPC
     */
    private _onNPCDamage;
    /**
     * Heal NPC
     */
    private _onNPCHeal;
    /**
     * Open NPC sheet
     */
    private _onOpenNPCSheet;
    /**
     * Start new encounter
     */
    private _onStartEncounter;
    /**
     * End encounter
     */
    private _onEndEncounter;
    /**
     * Advance to next round
     */
    private _onNextRound;
    /**
     * Roll initiative for all tracked NPCs
     */
    private _onRollGroupInitiative;
    /**
     * Apply corruption to a character
     */
    private _onApplyCorruption;
    /**
     * Quick corruption from predefined sources
     */
    private _onQuickCorruption;
    /**
     * GM Quick Roll
     */
    private _onGMQuickRoll;
    /**
     * Roll hit location
     */
    private _onRollHitLocation;
    /**
     * Roll 1d10
     */
    private _onRollD10;
    /**
     * Roll 2d10
     */
    private _onRoll2D10;
    /**
     * Session notes change handler
     */
    private _onSessionNotesChange;
    /**
     * Drag NPC handler
     */
    private _onDragNPC;
    /**
     * Drop NPC handler
     */
    private _onDropNPC;
    /**
     * Prompt for a number input
     */
    private _promptForNumber;
    /**
     * Static method to open the GM Hub
     */
    static open(): GMHub;
}
