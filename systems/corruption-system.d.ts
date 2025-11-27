/**
 * Unhallowed Metropolis Corruption System
 *
 * Handles physical and mental corruption mechanics, affliction triggers,
 * and the dark consequences of living in the Neo-Victorian world.
 */
export interface CorruptionGainOptions {
    type: 'physical' | 'mental';
    amount: number;
    source?: string;
    silent?: boolean;
}
export interface AfflictionTriggerResult {
    triggered: boolean;
    severity: 'minor' | 'moderate' | 'severe';
    roll: number;
    threshold: number;
    existingAfflictions: number;
}
export declare class CorruptionSystem {
    /**
     * Physical Corruption Sources (from the rulebook)
     */
    static readonly PHYSICAL_SOURCES: {
        animateBite: {
            amount: number;
            label: string;
        };
        vampireFeed: {
            amount: number;
            label: string;
        };
        plagueExposure: {
            amount: number;
            label: string;
        };
        alchemicalMutation: {
            amount: number;
            label: string;
        };
        galvanicSurgery: {
            amount: number;
            label: string;
        };
        dhampirPowers: {
            amount: number;
            label: string;
        };
        necroticWound: {
            amount: number;
            label: string;
        };
    };
    /**
     * Mental Corruption Sources
     */
    static readonly MENTAL_SOURCES: {
        witnessHorror: {
            amount: number;
            label: string;
        };
        killInnocent: {
            amount: number;
            label: string;
        };
        useDeadlyForce: {
            amount: number;
            label: string;
        };
        psychicOverreach: {
            amount: number;
            label: string;
        };
        betrayal: {
            amount: number;
            label: string;
        };
        torture: {
            amount: number;
            label: string;
        };
        consortUndead: {
            amount: number;
            label: string;
        };
        darkRitual: {
            amount: number;
            label: string;
        };
    };
    /**
     * Apply corruption to an actor
     */
    static applyCorruption(actor: Actor, options: CorruptionGainOptions): Promise<AfflictionTriggerResult | null>;
    /**
     * Create a chat message for corruption gain
     */
    static createCorruptionMessage(actor: Actor, options: CorruptionGainOptions, newValue: number, threshold: number): Promise<void>;
    /**
     * Trigger an affliction check when threshold is reached
     */
    static triggerAfflictionCheck(actor: Actor, type: 'physical' | 'mental'): Promise<AfflictionTriggerResult>;
    /**
     * Create affliction check result message
     */
    static createAfflictionCheckMessage(actor: Actor, result: {
        type: 'physical' | 'mental';
        roll: number;
        threshold: number;
        triggered: boolean;
        severity: 'minor' | 'moderate' | 'severe';
        existingAfflictions: number;
    }): Promise<void>;
    /**
     * Quick corruption buttons for GM use
     */
    static getQuickCorruptionSources(type: 'physical' | 'mental'): Array<{
        key: string;
        amount: number;
        label: string;
    }>;
    /**
     * Get corruption status summary for an actor
     */
    static getCorruptionStatus(actor: Actor): {
        physical: {
            value: number;
            threshold: number;
            percent: number;
            danger: string;
        };
        mental: {
            value: number;
            threshold: number;
            percent: number;
            danger: string;
        };
    };
}
