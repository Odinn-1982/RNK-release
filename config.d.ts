/**
 * Unhallowed Metropolis System Configuration
 *
 * Core game data structures, attributes, skills, and constants
 * Based on Unhallowed Metropolis Revised
 */
export declare const UM: {
    /**
     * Core Attributes - The six fundamental character attributes
     * Each rated 1-5 for humans (some creatures may exceed this)
     */
    attributes: {
        vitality: string;
        coordination: string;
        wit: string;
        intellect: string;
        will: string;
        charm: string;
    };
    /**
     * Attribute abbreviations for compact display
     */
    attributeAbbreviations: {
        vitality: string;
        coordination: string;
        wit: string;
        intellect: string;
        will: string;
        charm: string;
    };
    /**
     * Derived Statistics - Calculated from attributes
     */
    derivedStats: {
        health: string;
        mentalHealth: string;
        initiative: string;
        actions: string;
        movement: string;
        corruptionThreshold: string;
    };
    /**
     * Skills organized by governing attribute
     */
    skills: {
        athletics: {
            label: string;
            attribute: string;
        };
        brawl: {
            label: string;
            attribute: string;
        };
        endurance: {
            label: string;
            attribute: string;
        };
        concentration: {
            label: string;
            attribute: string;
        };
        drive: {
            label: string;
            attribute: string;
        };
        firearms: {
            label: string;
            attribute: string;
        };
        larceny: {
            label: string;
            attribute: string;
        };
        melee: {
            label: string;
            attribute: string;
        };
        stealth: {
            label: string;
            attribute: string;
        };
        animalHandling: {
            label: string;
            attribute: string;
        };
        awareness: {
            label: string;
            attribute: string;
        };
        empathy: {
            label: string;
            attribute: string;
        };
        gambling: {
            label: string;
            attribute: string;
        };
        academics: {
            label: string;
            attribute: string;
        };
        bureauracy: {
            label: string;
            attribute: string;
        };
        criminology: {
            label: string;
            attribute: string;
        };
        demolitions: {
            label: string;
            attribute: string;
        };
        engineering: {
            label: string;
            attribute: string;
        };
        medicine: {
            label: string;
            attribute: string;
        };
        occult: {
            label: string;
            attribute: string;
        };
        politics: {
            label: string;
            attribute: string;
        };
        science: {
            label: string;
            attribute: string;
        };
        survival: {
            label: string;
            attribute: string;
        };
        intimidation: {
            label: string;
            attribute: string;
        };
        meditation: {
            label: string;
            attribute: string;
        };
        artistry: {
            label: string;
            attribute: string;
        };
        etiquette: {
            label: string;
            attribute: string;
        };
        expression: {
            label: string;
            attribute: string;
        };
        leadership: {
            label: string;
            attribute: string;
        };
        negotiation: {
            label: string;
            attribute: string;
        };
        seduction: {
            label: string;
            attribute: string;
        };
        streetwise: {
            label: string;
            attribute: string;
        };
        subterfuge: {
            label: string;
            attribute: string;
        };
    };
    /**
     * Character Callings - Professional backgrounds
     */
    callings: {
        aristocrat: string;
        criminal: string;
        deathwatchSoldier: string;
        detective: string;
        dhampir: string;
        doctor: string;
        medium: string;
        mourner: string;
        promethean: string;
        undertaker: string;
        soldier: string;
        inventor: string;
        clergy: string;
        courtesan: string;
        journalist: string;
        alchemist: string;
        servant: string;
        psychic: string;
        entertainer: string;
    };
    /**
     * Social Classes
     */
    socialClasses: {
        gutter: string;
        working: string;
        middle: string;
        upperMiddle: string;
        upper: string;
        aristocracy: string;
    };
    /**
     * Corruption Types
     */
    corruptionTypes: {
        physical: string;
        mental: string;
        desire: string;
        drive: string;
    };
    /**
     * Afflictions - Physical corruption manifestations
     */
    afflictionSeverity: {
        minor: string;
        moderate: string;
        severe: string;
    };
    /**
     * Item Types
     */
    itemTypes: {
        weapon: string;
        armor: string;
        equipment: string;
        quality: string;
        affliction: string;
        disorder: string;
        calling: string;
        talent: string;
        psychicPower: string;
    };
    /**
     * Psychic Devotions
     */
    psychicDevotions: {
        empathy: string;
        magnetism: string;
        necromancy: string;
        clairvoyance: string;
        psychokinesis: string;
        telepathy: string;
    };
    /**
     * Weapon Types
     */
    weaponTypes: {
        melee: string;
        ranged: string;
        thrown: string;
    };
    /**
     * Damage Types
     */
    damageTypes: {
        bashing: string;
        lethal: string;
        aggravated: string;
    };
    /**
     * Hit Locations
     */
    hitLocations: {
        head: {
            label: string;
            range: number[];
        };
        torso: {
            label: string;
            range: number[];
        };
        rightArm: {
            label: string;
            range: number[];
        };
        leftArm: {
            label: string;
            range: number[];
        };
        rightLeg: {
            label: string;
            range: number[];
        };
        leftLeg: {
            label: string;
            range: number[];
        };
    };
    /**
     * Roll result thresholds
     */
    rollThresholds: {
        criticalFailure: number;
        failure: number;
        success: number;
        exceptionalSuccess: number;
        criticalSuccess: number;
    };
    /**
     * Action economy constants
     */
    actionCosts: {
        attack: number;
        move: number;
        aim: number;
        dodge: number;
        parry: number;
        reload: number;
        useItem: number;
    };
    /**
     * Default target numbers
     */
    targetNumbers: {
        easy: number;
        average: number;
        challenging: number;
        difficult: number;
        heroic: number;
        legendary: number;
    };
    /**
     * Actor types for the system
     */
    actorTypes: string[];
    /**
     * Currency denominations (Victorian-era)
     */
    currency: {
        pounds: string;
        shillings: string;
        pence: string;
    };
};
export type AttributeKey = keyof typeof UM.attributes;
export type SkillKey = keyof typeof UM.skills;
export type CallingKey = keyof typeof UM.callings;
