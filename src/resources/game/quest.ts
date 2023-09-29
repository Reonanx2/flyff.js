import { QuestObject } from "../../types";
import { Base } from "../base";

export default class Quest extends Base {
  /**
   * Get all quest IDs
   *
   * @example
   * ```
   * await client.quest.getAllIds()
   * ```
   *
   * @returns {Promise<Array<number>>} An array of quest IDs
   */
  public getAllIds(): Promise<Array<number>> {
    return this.get("/quest");
  }

  /**
   * Get quest by specific ID
   *
   * @example
   * ```
   * await client.quest.getById(1840)
   * ```
   *
   * @returns {Promise<QuestObject>} An object representing a specific quest
   */
  public getById(questId: number): Promise<QuestObject> {
    return this.get(`/quest/${questId}`);
  }

  /**
   * Get a list of quests by their IDs
   *
   * @example
   * ```
   * await client.quest.getByListOfIds([1840,821,5260])
   * ```
   *
   * @returns {Promise<Array<QuestObject>>} An array of objects for the specific npc IDs
   */
  public getByListOfIds(questIds: Array<number>): Promise<Array<QuestObject>> {
    if (questIds.length <= 1) {
      throw new Error(
        "If you're fetching only one quest, it is probably better to use getById(). Otherwise specify an array of quest IDs."
      );
    }
    return this.get(`/quest/${questIds.join(",")}`);
  }
}
