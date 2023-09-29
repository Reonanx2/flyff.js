import { SkillObject } from "../../types";
import { Base } from "../base";

export default class Skill extends Base {
  /**
   * Get all skill IDs
   *
   * @example
   * ```
   * await client.skill.getAllIds()
   * ```
   *
   * @returns {Promise<Array<number>>} An array of skill IDs
   */
  public getAllIds(): Promise<Array<number>> {
    return this.get("/skill");
  }

  /**
   * Get skill by specific ID
   *
   * @example
   * ```
   * await client.skill.getById(6482)
   * ```
   *
   * @returns {Promise<SkillObject>} An object representing a specific skill
   */
  public getById(skillId: number): Promise<SkillObject> {
    return this.get(`/skill/${skillId}`);
  }

  /**
   * Get a list of skills by their ID
   *
   * @example
   * ```
   * await client.skill.getByListOfIds([6482,2030,7395])
   * ```
   *
   * @returns {Promise<Array<SkillObject>>} An array of objects for the specific skill IDs
   */
  public getByListOfIds(skillIds: Array<number>): Promise<Array<SkillObject>> {
    return this.get(`/skill/${skillIds.join(",")}`);
  }

  /**
   * Get the skill icon for a specific skill
   *
   * @example
   * ```
   * await client.skill.getImage("acrbowaimeds.png")
   * ```
   *
   * @returns {Promise<string>} An image of a skill icon
   */
  public getImage(style: "colored" | "old", fileName: string): Promise<string> {
    return this.get(`/image/skill/${style}/${fileName}`);
  }
}
