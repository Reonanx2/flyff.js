import { Base } from "../base";

export default class Element extends Base {
  /**
   * Get icon for the specified file name
   *
   * @example
   * ```
   * await client.place.getImage('pc', "fire.png")
   * ```
   *
   * @returns {Promise<string>} Returns icon for the specified file name
   */
  public getImage(
    style: "pc" | "mobile" | "masquerade",
    fileName: string
  ): Promise<string> {
    return this.get(`/image/element/style/${fileName}`);
  }
}
