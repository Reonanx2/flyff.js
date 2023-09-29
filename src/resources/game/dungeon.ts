import { DungeonObject } from "../../types";
import { Base } from "../base";

export default class Dungeon extends Base {
  /**
   * Get info about all of the available dungeons
   *
   * @example
   * ```
   * await client.dungeon.getAllDungeons()
   * ```
   *
   * @returns {Promise<Array<DungeonObject>>} An array of objects containing information about each dungeon
   */
  public getAllDungeons(): Promise<Array<DungeonObject>> {
    return this.get("/dungeon");
  }
}
