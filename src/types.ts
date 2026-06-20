/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PresetBusiness {
  label: string;
  leads: number;
}

export interface PresetValue {
  label: string;
  value: number;
}

export interface CalculatorInputs {
  monthlyLeads: number;
  avgValue: number;
  visibilityIncrease: number; // 10 to 100
  includeCroBooster: boolean; // 20% conversion booster
}

export interface CalculationResult {
  additionalLeads: number;
  potentialMonthlyIncrease: number;
  potentialAnnualIncrease: number;
  ROI3YearValue: number;
  actionsLabel: string;
}
