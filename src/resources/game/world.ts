import { Base } from "../base";
import { WorldObject, WorldOptions } from "../../types";

export default class World extends Base {
  /**
   * Get all world IDs
   *
   * @example
   * ```
   * await client.world.getAllIds()
   * ```
   *
   * @returns {Promise<Array<number>>} An array of world IDs
   */
  public getAllIds(): Promise<Array<number>> {
    return this.get("/world");
  }

  /**
   * Get a world by its ID
   *
   * @example
   * ```
   * await client.world.getById(4015)
   * ```
   *
   * @returns {Promise<WorldObject>} An object representing a specific world
   */
  public getById(worldId: number): Promise<WorldObject> {
    return this.get(`/world/${worldId}`);
  }

  /**
   * Get a list of worlds by their ID
   *
   * @example
   * ```
   * await client.world.getByListOfIds([4015,4839,6063])
   * ```
   *
   * @returns {Promise<Array<WorldObject>>} An array of objects for the specific world IDs
   */
  public getByListOfIds(worldIds: Array<number>): Promise<Array<WorldObject>> {
    return this.get(`/world/${worldIds.join(",")}`);
  }

  /**
   * Get a specific tile from a world
   *
   * @example
   * ```
   * await client.world.getTile("messenger", "vagrant.png")
   * ```
   *
   * @returns {Promise<string>} An image of a world tile
   */
  public getTile(options: WorldOptions): Promise<string> {
    return this.get(
      `/image/world/${options.worldFileName}${options.tileX}-${options.tileY}-0.png`
    );
  }
}
