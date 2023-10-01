import Version from "./resources/game//version";
import Job from "./resources/game/job";
import World from "./resources/game/world";
import Monster from "./resources/game/monster";
import Item from "./resources/game/item";
import EquipmentSet from "./resources/game/equipment-set";
import Skill from "./resources/game/skill";
import PartySkill from "./resources/game/party-skill";
import Npc from "./resources/game/npc";
import Quest from "./resources/game/quest";
import PK from "./resources/game/pk";
import UpgradeBonus from "./resources/game/bonus";
import Awake from "./resources/game/awake";
import RaisedPet from "./resources/game/pet";
import Dungeon from "./resources/game/dungeon";
class FlyffClient {
  public version: Version;
  public job: Job;
  public world: World;
  public monster: Monster;
  public item: Item;
  public equip: EquipmentSet;
  public skill: Skill;
  public party: PartySkill;
  public npc: Npc;
  public quest: Quest;
  public pk: PK;
  public bonus: UpgradeBonus;
  public awake: Awake;
  public pet: RaisedPet;
  public dungeon: Dungeon;
  constructor() {
    this.version = new Version();
    this.job = new Job();
    this.world = new World();
    this.monster = new Monster();
    this.item = new Item();
    this.equip = new EquipmentSet();
    this.skill = new Skill();
    this.party = new PartySkill();
    this.npc = new Npc();
    this.quest = new Quest();
    this.pk = new PK();
    this.bonus = new UpgradeBonus();
    this.awake = new Awake();
    this.pet = new RaisedPet();
    this.dungeon = new Dungeon();
  }
}

export {
  FlyffClient,
  Version,
  Job,
  World,
  Monster,
  Item,
  EquipmentSet,
  Skill,
  PartySkill,
  Npc,
  Quest,
  PK,
  UpgradeBonus,
  Awake,
  RaisedPet,
  Dungeon,
};
