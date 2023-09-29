import { MonsterObject } from "../../types";
import { Base } from "../base";

export default class Monster extends Base {
  /**
   * Get all monster IDs
   *
   * @example
   * ```
   * await client.monster.getAllIds()
   * ```
   *
   * @returns {Promise<Array<number>>} An array of monster IDs
   */
  public getAllIds(): Promise<Array<number>> {
    return this.get("/monster");
  }

  /**
   * Get monster by a specific ID
   *
   * @example
   * ```
   * await client.monster.getById()
   * ```
   *
   * @returns {Promise<string>} An object representing a specific monster
   */
  public getById(monsterId: number): Promise<MonsterObject> {
    return this.get(`/monster/${monsterId}`);
  }

  /**
   * Get a list of monsters by their ID
   *
   * @example
   * ```
   * await client.monster.getByListOfIds([5858, 26, 6047])
   * ```
   *
   * @returns {Promise<Array<MonsterObject>>} An array of objects for the specific monster IDs
   */
  public getByListOfIds(
    monsterIds: Array<number>
  ): Promise<Array<MonsterObject>> {
    if (monsterIds.length <= 1) {
      throw new Error(
        "If you're fetching only 1 job, it is probably better to use getById(). Otherwise specify an array of job IDs."
      );
    }
    return this.get(`/monster/${monsterIds.join(",")}`);
  }

  /**
   * Get the monster icon for a specific monster
   *
   * @example
   * ```
   * await client.monster.getImage("vagrant.png")
   * ```
   *
   * @returns {Promise<string>} An image of a monster icon
   */
  public getImage(fileName: string): Promise<string> {
    return this.get(`/image/monster/${fileName}`);
  }
}
