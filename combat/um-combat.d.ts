/**
 * Unhallowed Metropolis Combat Utilities
 *
 * Hit location tables, damage application, and combat automation
 */
export interface HitLocationResult {
    location: string;
    label: string;
    roll: number;
}
export interface DamageResult {
    total: number;
    dice: number[];
    formula: string;
    location?: HitLocationResult;
}
export declare class UMCombat {
    /**
     * Roll for hit location (d10)
     */
    static rollHitLocation(): Promise<HitLocationResult>;
    /**
     * Roll damage from a formula
     */
    static rollDamage(formula: string, critical?: boolean): Promise<DamageResult>;
    /**
     * Calculate armor reduction for a location
     */
    static calculateArmorReduction(actor: Actor, location: string): number;
    /**
     * Apply damage to an actor with hit location and armor
     */
    static applyDamageWithLocation(actor: Actor, baseDamage: number, options?: {
        location?: string;
        damageType?: string;
        ignoreArmor?: boolean;
    }): Promise<{
        finalDamage: number;
        location: string;
        armorReduction: number;
    }>;
    /**
     * Create a formatted damage chat card
     */
    static createDamageCard(attacker: Actor, target: Actor, damageResult: DamageResult, locationResult: HitLocationResult, armorReduction: number, finalDamage: number): Promise<void>;
}
/**
 * Combat Tracker Hooks for Initiative
 */
export declare function registerCombatHooks(): void;
