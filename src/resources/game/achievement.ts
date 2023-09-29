import { AchievementObject } from "../../types";
import { Base } from "../base";

export default class Achievement extends Base {
  /**
   * Get all achievement IDs
   *
   * @example
   * ```
   * await client.achievement.getAllIds()
   * ```
   *
   * @returns {Promise<Array<number>>} An array of achievement IDs
   */
  public getAllIds(): Promise<Array<number>> {
    return this.get("/achievement");
  }

  /**
   * Get achievment by specific ID
   *
   * @example
   * ```
   * await client.achievement.getById(1840)
   * ```
   *
   * @returns {Promise<AchievementObject>} An object representing a specific achievement
   */
  public getById(achievementId: number): Promise<AchievementObject> {
    return this.get(`/achievement/${achievementId}`);
  }

  /**
   * Get a list of achievements by their IDs
   *
   * @example
   * ```
   * await client.achievement.getByListOfIds([58,77,182])
   * ```
   *
   * @returns {Promise<Array<AchievementObject>>} An array of objects for the specific achievement IDs
   */
  public getByListOfIds(
    achievementIds: Array<number>
  ): Promise<Array<AchievementObject>> {
    if (achievementIds.length <= 1) {
      throw new Error(
        "If you're fetching only one achievement, it is probably better to use getById(). Otherwise specify an array of achievement IDs."
      );
    }
    return this.get(`/achievement/${achievementIds.join(",")}`);
  }
}
