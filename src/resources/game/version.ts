import { Base } from "../base";

export default class Version extends Base {
  /**
   * Get the current game version
   *
   * @example
   * ```
   * await client.version.getGameVersion()
   * ```
   *
   * @returns {Promise<number>} Game version
   */
  public getGameVersion(): Promise<number> {
    return this.get("/version/data");
  }

  /**
   * Get the current API version
   *
   * @example
   * ```
   * await client.version.getAPIVersion()
   * ```
   *
   * @returns {Promise<string>} API version
   */
  public getAPIVersion(): Promise<string> {
    return this.get("/version/api");
  }
}
