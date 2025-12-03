/**
 * Unhallowed Metropolis - Hotbar Hub Integration
 *
 * Replaces hotbar slots 1-4 with system-specific hub buttons:
 * Slot 1: Corruption Hub (Purple/Red)
 * Slot 2: Psychic Hub (Purple/Blue)
 * Slot 3: Combat Hub (Red/Orange)
 * Slot 4: Wealth Hub (Gold)
 */
interface HubSlotConfig {
    slot: number;
    id: string;
    name: string;
    icon: string;
    color: string;
    gradient: string;
    description: string;
}
declare const HUB_SLOTS: HubSlotConfig[];
/**
 * Base class for all system hub windows
 */
export declare class SystemHub extends Application {
    protected config: HubSlotConfig;
    protected actor: Actor | null;
    constructor(config: HubSlotConfig, options?: Partial<ApplicationOptions>);
    static get defaultOptions(): ApplicationOptions;
    get title(): string;
    getData(): any;
    protected _getControlledActor(): Actor | null;
    activateListeners(html: JQuery): void;
}
export declare class CorruptionHub extends SystemHub {
    static _instance: CorruptionHub | null;
    constructor();
    static get defaultOptions(): ApplicationOptions;
    getData(): any;
    activateListeners(html: JQuery): void;
    private _onAddCorruption;
    private _onRemoveCorruption;
    private _onRollAfflictionCheck;
    private _onViewItem;
    static toggle(): void;
}
export declare class PsychicHub extends SystemHub {
    static _instance: PsychicHub | null;
    constructor();
    static get defaultOptions(): ApplicationOptions;
    getData(): any;
    activateListeners(html: JQuery): void;
    private _onActivatePower;
    private _onViewPower;
    private _onRollDevotion;
    static toggle(): void;
}
export declare class CombatHub extends SystemHub {
    static _instance: CombatHub | null;
    private selectedWeapon;
    constructor();
    static get defaultOptions(): ApplicationOptions;
    getData(): any;
    activateListeners(html: JQuery): void;
    private _onSelectWeapon;
    private _onPerformAttack;
    private _onRollHitLocation;
    private _onRollInitiative;
    private _onAimedShotToggle;
    static toggle(): void;
}
export declare class WealthHub extends SystemHub {
    static _instance: WealthHub | null;
    constructor();
    static get defaultOptions(): ApplicationOptions;
    getData(): any;
    activateListeners(html: JQuery): void;
    private _onAddCurrency;
    private _onSubtractCurrency;
    private _onQuickTransaction;
    private _parseCost;
    private _onRollWealthCheck;
    private _onConvertCurrency;
    static toggle(): void;
}
/**
 * Manages the hotbar slot replacements with system hubs
 */
export declare class HotbarHubManager {
    private static initialized;
    /**
     * Initialize the hotbar hub integration
     */
    static init(): void;
    /**
     * Inject custom hub buttons into hotbar slots
     */
    private static _onRenderHotbar;
    /**
     * Open the specified hub
     */
    private static _openHub;
    /**
     * Register keyboard shortcuts for hubs
     */
    private static _registerKeybindings;
}
export { HUB_SLOTS };
