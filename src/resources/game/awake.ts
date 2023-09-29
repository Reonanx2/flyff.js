import { AwakeObject } from "../../types";
import { Base } from "../base";

export default class Awake extends Base {
  /**
   * Get info about the skill awakes
   *
   * @example
   * ```
   * await client.awake.getSkillAwakes()
   * ```
   *
   * @returns {Promise<AwakeObject>} An object containing info about the skill awakes
   */
  public getSkillAwakes(): Promise<AwakeObject> {
    return this.get("/skillawake");
  }
}
