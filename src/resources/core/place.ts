import { Base } from "../base";

export default class Place extends Base {
  /**
   * Get icon for the specified file name
   *
   * @example
   * ```
   * await client.place.getImage("publicoffice.png")
   * ```
   *
   * @returns {Promise<string>} Returns icon for the specified file name
   */
  public getImage(fileName: string): Promise<string> {
    return this.get(`/image/place/${fileName}`);
  }
}
