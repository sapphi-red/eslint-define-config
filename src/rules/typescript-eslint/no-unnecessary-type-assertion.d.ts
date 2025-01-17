import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnnecessaryTypeAssertionOption {
  typesToIgnore?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type NoUnnecessaryTypeAssertionOptions = [
  NoUnnecessaryTypeAssertionOption?,
];

/**
 * Disallow type assertions that do not change the type of an expression.
 *
 * @see [no-unnecessary-type-assertion](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)
 */
export type NoUnnecessaryTypeAssertionRuleConfig =
  RuleConfig<NoUnnecessaryTypeAssertionOptions>;

/**
 * Disallow type assertions that do not change the type of an expression.
 *
 * @see [no-unnecessary-type-assertion](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)
 */
export interface NoUnnecessaryTypeAssertionRule {
  /**
   * Disallow type assertions that do not change the type of an expression.
   *
   * @see [no-unnecessary-type-assertion](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)
   */
  '@typescript-eslint/no-unnecessary-type-assertion': NoUnnecessaryTypeAssertionRuleConfig;
}
