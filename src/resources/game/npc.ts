import { NpcObject } from "../../types";
import { Base } from "../base";

export default class Npc extends Base {
  /**
   * Get all npc IDs
   *
   * @example
   * ```
   * await client.npc.getAllIds()
   * ```
   *
   * @returns {Promise<Array<number>>} An array of npc IDs
   */
  public getAllIds(): Promise<Array<number>> {
    return this.get("/npc");
  }

  /**
   * Get npc by specific ID
   *
   * @example
   * ```
   * await client.npc.getById(1689)
   * ```
   *
   * @returns {Promise<NpcObject>} An object representing a specific npc
   */
  public getById(npcId: number): Promise<NpcObject> {
    return this.get(`/npc/${npcId}`);
  }

  /**
   * Get a list of npcs by their IDs
   *
   * @example
   * ```
   * await client.npc.getByListOfIds([1689,296,2881])
   * ```
   *
   * @returns {Promise<Array<NpcObject>>} An array of objects for the specific npc IDs
   */
  public getByListOfIds(npcIds: Array<number>): Promise<Array<NpcObject>> {
    if (npcIds.length <= 1) {
      throw new Error(
        "If you're fetching only one npc, it is probably better to use getById(). Otherwise specify an array of npc IDs."
      );
    }
    return this.get(`/npc/${npcIds.join(",")}`);
  }

  /**
   * Get npc dialog image
   *
   * @example
   * ```
   * await client.npc.getImage("marche.png")
   * ```
   *
   * @returns {Promise<string>} An image of a skill icon
   */
  public getImage(fileName: string): Promise<string> {
    return this.get(`/image/npc/${fileName}`);
  }
}
