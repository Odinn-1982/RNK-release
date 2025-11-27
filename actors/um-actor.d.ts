/**
 * Unhallowed Metropolis Actor Document
 *
 * Extends the base Foundry Actor with UM-specific data and calculations
 */
import { AttributeKey, SkillKey } from '../config';
export interface UMCharacterData {
    attributes: {
        vitality: {
            value: number;
            modifier: number;
        };
        coordination: {
            value: number;
            modifier: number;
        };
        wit: {
            value: number;
            modifier: number;
        };
        intellect: {
            value: number;
            modifier: number;
        };
        will: {
            value: number;
            modifier: number;
        };
        charm: {
            value: number;
            modifier: number;
        };
    };
    derived: {
        health: {
            value: number;
            max: number;
            temp: number;
        };
        mentalHealth: {
            value: number;
            max: number;
            temp: number;
        };
        initiative: number;
        actions: number;
        movement: number;
        corruptionThreshold: number;
    };
    skills: {
        [key: string]: {
            value: number;
            specializations: string[];
        };
    };
    corruption: {
        physical: {
            value: number;
            threshold: number;
        };
        mental: {
            value: number;
            threshold: number;
        };
        desire: string;
        drive: string;
    };
    details: {
        calling: string;
        socialClass: string;
        background: string;
        birthplace: string;
        age: number;
        gender: string;
        height: string;
        weight: string;
        appearance: string;
        notes: string;
    };
    currency: {
        pounds: number;
        shillings: number;
        pence: number;
    };
}
export declare class UMActor extends Actor {
    /**
     * Prepare base data - called before embedded documents
     */
    prepareBaseData(): void;
    /**
     * Prepare derived data - called after embedded documents
     */
    prepareDerivedData(): void;
    /**
     * Initialize the data structure for a new actor
     */
    private _initializeData;
    /**
     * Calculate derived statistics for characters
     */
    private _prepareCharacterData;
    /**
     * Calculate derived statistics for creatures (animates, vampires, etc.)
     */
    private _prepareCreatureData;
    /**
     * Roll an attribute check
     */
    rollAttribute(attributeKey: AttributeKey, options?: {
        bonus?: number;
        targetNumber?: number;
    }): Promise<Roll>;
    /**
     * Roll a skill check
     */
    rollSkill(skillKey: SkillKey, options?: {
        bonus?: number;
        targetNumber?: number;
    }): Promise<Roll>;
    /**
     * Roll initiative
     */
    rollInitiative(): Promise<Roll>;
    /**
     * Create a formatted chat message for a roll
     */
    private _createRollMessage;
    /**
     * Apply damage to the actor
     */
    applyDamage(amount: number, options?: {
        type?: string;
        location?: string;
    }): Promise<void>;
    /**
     * Apply mental damage
     */
    applyMentalDamage(amount: number): Promise<void>;
    /**
     * Add corruption points
     */
    addCorruption(amount: number, type?: 'physical' | 'mental'): Promise<void>;
}
