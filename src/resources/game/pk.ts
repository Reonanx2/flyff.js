import { PkObject } from "../../types";
import { Base } from "../base";

export default class PK extends Base {
  /**
   * Get info about the PK system
   *
   * @example
   * ```
   * await client.pk.getPKInfo()
   * ```
   *
   * @returns {Promise<PkObject>} An object containing info about the PK system
   */
  public getPKInfo(): Promise<PkObject> {
    return this.get("/pk");
  }
}
