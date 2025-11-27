/**
 * Unhallowed Metropolis Psychic Powers System
 *
 * Handles psychic devotions, power activation, corruption risk,
 * and the dangerous world of Neo-Victorian mentalism.
 */
import { SkillKey } from '../config';
export interface PsychicPowerData {
    name: string;
    devotion: string;
    level: number;
    description: string;
    activation: {
        targetNumber: number;
        skill: SkillKey;
    };
    cost: {
        mentalHealth: number;
        corruptionRisk: boolean;
    };
    duration: string;
    range: string;
    effects: string;
}
export interface PowerActivationResult {
    success: boolean;
    roll: number;
    target: number;
    degrees: number;
    critical: boolean;
    botch: boolean;
    mentalCost: number;
    corruptionGained: boolean;
    corruptionAmount?: number;
}
export declare class PsychicPowerSystem {
    /**
     * Psychic Devotions and their associated skills
     */
    static readonly DEVOTIONS: {
        empathy: {
            label: string;
            skill: "athletics" | "brawl" | "endurance" | "concentration" | "drive" | "firearms" | "larceny" | "melee" | "stealth" | "animalHandling" | "awareness" | "empathy" | "gambling" | "academics" | "bureauracy" | "criminology" | "demolitions" | "engineering" | "medicine" | "occult" | "politics" | "science" | "survival" | "intimidation" | "meditation" | "artistry" | "etiquette" | "expression" | "leadership" | "negotiation" | "seduction" | "streetwise" | "subterfuge";
            attribute: string;
            description: string;
        };
        magnetism: {
            label: string;
            skill: "athletics" | "brawl" | "endurance" | "concentration" | "drive" | "firearms" | "larceny" | "melee" | "stealth" | "animalHandling" | "awareness" | "empathy" | "gambling" | "academics" | "bureauracy" | "criminology" | "demolitions" | "engineering" | "medicine" | "occult" | "politics" | "science" | "survival" | "intimidation" | "meditation" | "artistry" | "etiquette" | "expression" | "leadership" | "negotiation" | "seduction" | "streetwise" | "subterfuge";
            attribute: string;
            description: string;
        };
        necromancy: {
            label: string;
            skill: "athletics" | "brawl" | "endurance" | "concentration" | "drive" | "firearms" | "larceny" | "melee" | "stealth" | "animalHandling" | "awareness" | "empathy" | "gambling" | "academics" | "bureauracy" | "criminology" | "demolitions" | "engineering" | "medicine" | "occult" | "politics" | "science" | "survival" | "intimidation" | "meditation" | "artistry" | "etiquette" | "expression" | "leadership" | "negotiation" | "seduction" | "streetwise" | "subterfuge";
            attribute: string;
            description: string;
        };
        clairvoyance: {
            label: string;
            skill: "athletics" | "brawl" | "endurance" | "concentration" | "drive" | "firearms" | "larceny" | "melee" | "stealth" | "animalHandling" | "awareness" | "empathy" | "gambling" | "academics" | "bureauracy" | "criminology" | "demolitions" | "engineering" | "medicine" | "occult" | "politics" | "science" | "survival" | "intimidation" | "meditation" | "artistry" | "etiquette" | "expression" | "leadership" | "negotiation" | "seduction" | "streetwise" | "subterfuge";
            attribute: string;
            description: string;
        };
        psychokinesis: {
            label: string;
            skill: "athletics" | "brawl" | "endurance" | "concentration" | "drive" | "firearms" | "larceny" | "melee" | "stealth" | "animalHandling" | "awareness" | "empathy" | "gambling" | "academics" | "bureauracy" | "criminology" | "demolitions" | "engineering" | "medicine" | "occult" | "politics" | "science" | "survival" | "intimidation" | "meditation" | "artistry" | "etiquette" | "expression" | "leadership" | "negotiation" | "seduction" | "streetwise" | "subterfuge";
            attribute: string;
            description: string;
        };
        telepathy: {
            label: string;
            skill: "athletics" | "brawl" | "endurance" | "concentration" | "drive" | "firearms" | "larceny" | "melee" | "stealth" | "animalHandling" | "awareness" | "empathy" | "gambling" | "academics" | "bureauracy" | "criminology" | "demolitions" | "engineering" | "medicine" | "occult" | "politics" | "science" | "survival" | "intimidation" | "meditation" | "artistry" | "etiquette" | "expression" | "leadership" | "negotiation" | "seduction" | "streetwise" | "subterfuge";
            attribute: string;
            description: string;
        };
    };
    /**
     * Activate a psychic power
     */
    static activatePower(actor: Actor, powerItem: Item, options?: {
        targetNumber?: number;
        modifier?: number;
    }): Promise<PowerActivationResult>;
    /**
     * Create chat message for power activation
     */
    static createPowerActivationMessage(actor: Actor, power: Item, result: PowerActivationResult, dice: number[]): Promise<void>;
    /**
     * Get all psychic powers for an actor
     */
    static getPowers(actor: Actor): Item[];
    /**
     * Get powers organized by devotion
     */
    static getPowersByDevotion(actor: Actor): Record<string, Item[]>;
    /**
     * Check if actor can use psychic powers (has meditation skill)
     */
    static canUsePsychicPowers(actor: Actor): boolean;
    /**
     * Calculate psychic strain for sustained powers
     */
    static calculatePsychicStrain(actor: Actor): number;
}
