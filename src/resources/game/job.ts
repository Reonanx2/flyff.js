import { Base } from "../base";
import { JobObject, Job as JobEnum, JobIcon } from "../../types";

export default class Job extends Base {
  /**
   * Get all job IDs
   *
   * @example
   * ```
   * await client.job.getAllIds()
   * ```
   *
   * @returns {Promise<Array<number>>} An array of job IDs
   */
  public getAllIds(): Promise<Array<number>> {
    return this.get("/class");
  }

  /**
   * Get a job by a specific ID
   *
   * @example
   * ```
   * await client.job.getById(Job.MERCENARY)
   * ```
   *
   * @returns {Promise<JobObject>} An object representing a specific job
   */
  public getById(jobId: JobEnum): Promise<JobObject> {
    return this.get(`/class/${jobId}`);
  }

  /**
   * Get a list of jobs by their ID
   *
   * @example
   * ```
   * await client.job.getByListOfIds([Job.MERCENARY, Job.ASSIST])
   * ```
   *
   * @returns {Promise<Array<JobObject>>} An array of objects for the specific job IDs
   */
  public getByListOfIds(jobIds: Array<JobEnum>): Promise<Array<JobObject>> {
    if (jobIds.length <= 1) {
      throw new Error(
        "If you're fetching only 1 job, it is probably better to use getById(). Otherwise specify an array of job IDs."
      );
    }
    return this.get(`/class/${jobIds.join(",")}`);
  }

  /**
   * Get the class icon for a specific job
   *
   * @example
   * ```
   * await client.job.getImage("messenger", "vagrant.png")
   * ```
   *
   * @returns {Promise<string>} An image of a job icon
   */
  public getImage(style: JobIcon, fileName: string): Promise<string> {
    return this.get(`/image/class/${style}/${fileName}`);
  }
}
