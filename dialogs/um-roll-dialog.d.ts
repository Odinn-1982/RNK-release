/**
 * Unhallowed Metropolis Roll Dialog
 *
 * Handles skill and attribute roll dialogs with modifier selection
 */
import { AttributeKey, SkillKey } from '../config';
export interface RollDialogOptions {
    title: string;
    attribute?: AttributeKey;
    attributeValue?: number;
    skill?: SkillKey;
    skillValue?: number;
    specializations?: string[];
    defaultTN?: number;
    callback: (result: RollDialogResult) => void;
}
export interface RollDialogResult {
    targetNumber: number;
    modifier: number;
    specialization: string;
    cancelled: boolean;
}
export declare class UMRollDialog extends Dialog {
    private options;
    constructor(options: RollDialogOptions);
    static buildDialogData(options: RollDialogOptions): DialogData;
    /**
     * Create and show a roll dialog
     */
    static show(options: RollDialogOptions): Promise<RollDialogResult>;
}
