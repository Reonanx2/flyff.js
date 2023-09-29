import { RaisedPetObject } from "../../types";
import { Base } from "../base";

export default class RaisedPet extends Base {
  /**
   * Get info about the pet system
   *
   * @example
   * ```
   * await client.pet.getRaisedPetInfo()
   * ```
   *
   * @returns {Promise<Array<RaisedPetObject>>} An array of objects containing info about the pet system
   */
  public getRaisedPetInfo(): Promise<Array<RaisedPetObject>> {
    return this.get("/raisedpet");
  }
}
