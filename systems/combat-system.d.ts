/**
 * Unhallowed Metropolis Enhanced Combat System
 *
 * Full combat automation including attack rolls, defense,
 * hit locations, wounds, and special attack types.
 */
export interface AttackOptions {
    weapon?: Item;
    targetNumber?: number;
    modifier?: number;
    aimed?: boolean;
    aimedLocation?: string;
    calledShot?: boolean;
    autofire?: boolean;
    burst?: boolean;
}
export interface AttackResult {
    success: boolean;
    roll: number;
    target: number;
    degrees: number;
    critical: boolean;
    botch: boolean;
    damage?: number;
    damageRoll?: string;
    hitLocation?: HitLocationResult;
    effects: string[];
}
export interface HitLocationResult {
    location: string;
    label: string;
    roll: number;
    modifier: number;
}
export interface WoundEffect {
    location: string;
    severity: 'light' | 'serious' | 'critical' | 'mortal';
    penalty: number;
    effects: string[];
}
export declare class EnhancedCombatSystem {
    /**
     * Hit Location Table (d10)
     */
    static readonly HIT_LOCATIONS: Record<number, {
        location: string;
        label: string;
    }>;
    /**
     * Called Shot Modifiers
     */
    static readonly CALLED_SHOT_MODIFIERS: Record<string, number>;
    /**
     * Wound Severity Thresholds (damage dealt)
     */
    static readonly WOUND_THRESHOLDS: {
        light: number;
        serious: number;
        critical: number;
        mortal: number;
    };
    /**
     * Wound Effects by Location and Severity
     */
    static readonly WOUND_EFFECTS: Record<string, Record<string, WoundEffect>>;
    /**
     * Make an attack roll
     */
    static attack(attacker: Actor, options?: AttackOptions): Promise<AttackResult>;
    /**
     * Roll hit location
     */
    static rollHitLocation(): Promise<HitLocationResult>;
    /**
     * Get wound severity from damage
     */
    static getWoundSeverity(damage: number): 'light' | 'serious' | 'critical' | 'mortal';
    /**
     * Apply damage to target with armor consideration
     */
    static applyDamage(target: Actor, damage: number, location: string, options?: {
        ignoreArmor?: boolean;
        damageType?: string;
    }): Promise<{
        finalDamage: number;
        absorbed: number;
    }>;
    /**
     * Get total armor protection at a location
     */
    static getArmorAtLocation(actor: Actor, location: string): number;
    /**
     * Create attack chat message
     */
    static createAttackMessage(attacker: Actor, result: AttackResult, weapon: any, options: AttackOptions): Promise<void>;
    /**
     * Get available weapons for an actor
     */
    static getWeapons(actor: Actor): Item[];
    /**
     * Quick attack with a specific weapon
     */
    static quickAttack(attacker: Actor, weaponId: string): Promise<AttackResult>;
}
