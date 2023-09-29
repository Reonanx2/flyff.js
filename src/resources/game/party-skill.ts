import { PartySkillObject } from "../../types";
import { Base } from "../base";

export default class PartySkill extends Base {
  /**
   * Get all party skill IDs
   *
   * @example
   * ```
   * await client.party.getAllIds()
   * ```
   *
   * @returns {Promise<Array<number>>} An array of party skill IDs
   */
  public getAllIds(): Promise<Array<number>> {
    return this.get("/partyskill");
  }

  /**
   * Get party skill by specific ID
   *
   * @example
   * ```
   * await client.party.getById(8037)
   * ```
   *
   * @returns {Promise<PartySkillObject>} An object representing a specific party skill
   */
  public getById(skillId: number): Promise<PartySkillObject> {
    return this.get(`/partyskill/${skillId}`);
  }

  /**
   * Get a list of party skills by their ID
   *
   * @example
   * ```
   * await client.skill.getByListOfIds([8037,2475,2651])
   * ```
   *
   * @returns {Promise<Array<PartySkillObject>>} An array of objects for the specific party skill IDs
   */
  public getByListOfIds(
    skillIds: Array<number>
  ): Promise<Array<PartySkillObject>> {
    return this.get(`/partyskill/${skillIds.join(",")}`);
  }
}
