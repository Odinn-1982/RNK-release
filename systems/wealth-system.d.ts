/**
 * Unhallowed Metropolis Wealth System
 *
 * Handles the Neo-Victorian currency system (Pounds, Shillings, Pence),
 * transactions, and wealth-based checks.
 */
export interface Currency {
    pounds: number;
    shillings: number;
    pence: number;
}
export interface TransactionResult {
    success: boolean;
    newBalance: Currency;
    message: string;
}
export declare class WealthSystem {
    /**
     * Currency conversion rates (historical British system)
     * 12 pence = 1 shilling
     * 20 shillings = 1 pound
     * Therefore: 240 pence = 1 pound
     */
    static readonly PENCE_PER_SHILLING = 12;
    static readonly SHILLINGS_PER_POUND = 20;
    static readonly PENCE_PER_POUND = 240;
    /**
     * Social class starting wealth
     */
    static readonly STARTING_WEALTH: Record<string, Currency>;
    /**
     * Common item prices for reference
     */
    static readonly COMMON_PRICES: {
        mealCheap: {
            pounds: number;
            shillings: number;
            pence: number;
            label: string;
        };
        mealDecent: {
            pounds: number;
            shillings: number;
            pence: number;
            label: string;
        };
        mealFine: {
            pounds: number;
            shillings: number;
            pence: number;
            label: string;
        };
        flophouseNight: {
            pounds: number;
            shillings: number;
            pence: number;
            label: string;
        };
        innNight: {
            pounds: number;
            shillings: number;
            pence: number;
            label: string;
        };
        hotelNight: {
            pounds: number;
            shillings: number;
            pence: number;
            label: string;
        };
        cabRide: {
            pounds: number;
            shillings: number;
            pence: number;
            label: string;
        };
        trainTicket: {
            pounds: number;
            shillings: number;
            pence: number;
            label: string;
        };
        doctorVisit: {
            pounds: number;
            shillings: number;
            pence: number;
            label: string;
        };
        undertakerBasic: {
            pounds: number;
            shillings: number;
            pence: number;
            label: string;
        };
        pistolCheap: {
            pounds: number;
            shillings: number;
            pence: number;
            label: string;
        };
        pistolQuality: {
            pounds: number;
            shillings: number;
            pence: number;
            label: string;
        };
        swordCane: {
            pounds: number;
            shillings: number;
            pence: number;
            label: string;
        };
        bulletBox: {
            pounds: number;
            shillings: number;
            pence: number;
            label: string;
        };
    };
    /**
     * Convert currency to total pence for calculations
     */
    static toPence(currency: Currency): number;
    /**
     * Convert total pence back to currency
     */
    static fromPence(totalPence: number): Currency;
    /**
     * Add two currency values
     */
    static add(a: Currency, b: Currency): Currency;
    /**
     * Subtract currency (b from a)
     */
    static subtract(a: Currency, b: Currency): Currency;
    /**
     * Check if actor can afford a cost
     */
    static canAfford(actor: Actor, cost: Currency): boolean;
    /**
     * Process a purchase transaction
     */
    static purchase(actor: Actor, cost: Currency, itemName: string): Promise<TransactionResult>;
    /**
     * Add currency to actor (payment received, loot found, etc.)
     */
    static addFunds(actor: Actor, amount: Currency, source: string): Promise<TransactionResult>;
    /**
     * Format currency for display
     */
    static format(currency: Currency): string;
    /**
     * Parse a string like "2/6" (2 shillings 6 pence) or "£5" into Currency
     */
    static parse(str: string): Currency;
    /**
     * Create transaction chat message
     */
    static createTransactionMessage(actor: Actor, transaction: {
        type: 'purchase' | 'income';
        item: string;
        amount: Currency;
        balance: Currency;
    }): Promise<void>;
    /**
     * Get actor's current balance
     */
    static getBalance(actor: Actor): Currency;
    /**
     * Transfer funds between actors
     */
    static transfer(from: Actor, to: Actor, amount: Currency, reason: string): Promise<TransactionResult>;
}
