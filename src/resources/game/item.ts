import { ItemObject } from "../../types";
import { Base } from "../base";

export default class Item extends Base {
  /**
   * Get all item IDs
   *
   * @example
   * ```
   * await client.item.getALlIds()
   * ```
   *
   * @returns {Promise<Array<number>>} An array of item IDs
   */
  public getAllIds(): Promise<Array<number>> {
    return this.get("/item");
  }

  /**
   * Get item by a specific ID
   *
   * @example
   * ```
   * await client.item.getById(7635)
   * ```
   *
   * @returns {Promise<ItemObject>} An object representing a specific monster
   */
  public getById(itemId: number): Promise<ItemObject> {
    return this.get(`/item/${itemId}`);
  }

  /**
   * Get a list of items by their ID
   *
   * @example
   * ```
   * await client.item.getByListOfIds([7635,9814,3070])
   * ```
   *
   * @returns {Promise<Array<ItemObject>>} An array of objects for the specific item IDs
   */
  public getByListOfIds(itemIds: Array<number>): Promise<Array<ItemObject>> {
    if (itemIds.length <= 1) {
      throw new Error(
        "If you're fetching only 1 job, it is probably better to use getById(). Otherwise specify an array of job IDs."
      );
    }
    return this.get(`/item/${itemIds.join(",")}`);
  }

  /**
   * Get the item icon for a specific item
   *
   * @example
   * ```
   * await client.item.getImage("weaswonormal.png")
   * ```
   *
   * @returns {Promise<string>} An image of a item icon
   */
  public getImage(fileName: string): Promise<string> {
    return this.get(`/image/item/${fileName}`);
  }
}
