/**
 * Unhallowed Metropolis Item Document
 *
 * Base item class for all UM items
 */
export declare class UMItem extends Item {
    /**
     * Prepare base data
     */
    prepareBaseData(): void;
    /**
     * Prepare derived data
     */
    prepareDerivedData(): void;
    /**
     * Prepare weapon-specific data
     */
    private _prepareWeaponData;
    /**
     * Prepare armor-specific data
     */
    private _prepareArmorData;
    /**
     * Roll this item (for weapons, this is an attack roll)
     */
    roll(): Promise<void>;
    /**
     * Roll a weapon attack
     */
    private _rollWeaponAttack;
    /**
     * Roll damage for this weapon
     */
    rollDamage(): Promise<Roll | null>;
    /**
     * Show an item description card in chat
     */
    private _showItemCard;
    /**
     * Reload a ranged weapon
     */
    reload(): Promise<void>;
}
