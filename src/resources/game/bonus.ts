import { UpgradeBonusObject } from "../../types";
import { Base } from "../base";

export default class UpgradeBonus extends Base {
  /**
   * Get info about the upgrade bonus levels
   *
   * @example
   * ```
   * await client.bonus.getUpgradeBonuses()
   * ```
   *
   * @returns {Promise<Array<UpgradeBonusObject>>} An array of upgrade bonus levels
   */
  public getUpgradeBonuses(): Promise<Array<UpgradeBonusObject>> {
    return this.get("/upgradelevelbonus");
  }
}
