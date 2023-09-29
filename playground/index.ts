import { FlyffClient } from "../src/";
import { Job } from "../src/types";

const client = new FlyffClient();

client.job.getByListOfIds([Job.ACROBAT, Job.ASSIST]);
client.job.getImage("target", "vagrant.png");
