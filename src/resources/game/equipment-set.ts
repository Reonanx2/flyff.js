import { EquipSetObject } from "../../types";
import { Base } from "../base";

export default class EquipmentSet extends Base {
  /**
   * Get all equipment set IDs
   *
   * @example
   * ```
   * await client.equip.getAllIds()
   * ```
   *
   * @returns {Promise<Array<number>>} An array of equipment set IDs
   */
  public getAllIds(): Promise<Array<number>> {
    return this.get("/equipset");
  }

  /**
   * Get equipment set by a specific ID
   *
   * @example
   * ```
   * await client.equip.getById(5670)
   * ```
   *
   * @returns {Promise<EquipSetObject>} An object representing a specific equipment set
   */
  public getById(equipSetId: number): Promise<EquipSetObject> {
    return this.get(`/equipset/${equipSetId}`);
  }

  /**
   * Get a list of equipment sets by their ID
   *
   * @example
   * ```
   * await client.equip.getByListOfIds([5670,4267,5303])
   * ```
   *
   * @returns {Promise<Array<EquipSetObject>>} An array of objects for the specific equipment set IDs
   */
  public getByListOfIds(
    equipSetIds: Array<number>
  ): Promise<Array<EquipSetObject>> {
    return this.get(`/equipset/${equipSetIds.join(",")}`);
  }
}
