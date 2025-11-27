/**
 * Unhallowed Metropolis PC Hub
 *
 * The player command center - quick access to rolls, powers,
 * combat actions, and character management.
 */
export declare class PCHub extends Application {
    private actor;
    constructor(actor: Actor, options?: Partial<ApplicationOptions>);
    static get defaultOptions(): ApplicationOptions;
    get title(): string;
    getData(): object;
    activateListeners(html: JQuery): void;
    /**
     * Roll an attribute check
     */
    private _onRollAttribute;
    /**
     * Roll a skill check
     */
    private _onRollSkill;
    /**
     * Make a weapon attack
     */
    private _onWeaponAttack;
    /**
     * Make an aimed attack
     */
    private _onAimedAttack;
    /**
     * Autofire attack
     */
    private _onAutofire;
    /**
     * Activate a psychic power
     */
    private _onActivatePower;
    /**
     * Take physical damage
     */
    private _onTakeDamage;
    /**
     * Heal health
     */
    private _onHealHealth;
    /**
     * Take mental damage
     */
    private _onTakeMentalDamage;
    /**
     * Heal mental health
     */
    private _onHealMental;
    /**
     * Add corruption
     */
    private _onAddCorruption;
    /**
     * Add funds
     */
    private _onAddFunds;
    /**
     * Spend funds
     */
    private _onSpendFunds;
    /**
     * Roll initiative
     */
    private _onRollInitiative;
    /**
     * Open character sheet
     */
    private _onOpenSheet;
    /**
     * Roll an item
     */
    private _onItemRoll;
    /**
     * Edit an item
     */
    private _onItemEdit;
    /**
     * Select hit location dialog
     */
    private _selectHitLocation;
    /**
     * Prompt for number input
     */
    private _promptForNumber;
    /**
     * Prompt for currency input
     */
    private _promptForCurrency;
    /**
     * Static method to open PC Hub for an actor
     */
    static open(actor: Actor): PCHub;
}
