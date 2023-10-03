export type Language =
  | "en"
  | "ar"
  | "br"
  | "cns"
  | "de"
  | "fi"
  | "fil"
  | "fr"
  | "id"
  | "it"
  | "jp"
  | "kr"
  | "nl"
  | "pl"
  | "ru"
  | "sp"
  | "sw"
  | "th"
  | "tw"
  | "vi";

export type AttackFactors =
  | "sword"
  | "axe"
  | "staff"
  | "stick"
  | "knucke"
  | "yoyo"
  | "bow"
  | "wand";

export type Parameter =
  | "str"
  | "dex"
  | "int"
  | "sta"
  | "speed"
  | "attackspeed"
  | "attackspeedrate"
  | "jumpheight"
  | "bowrange"
  | "def"
  | "parry"
  | "reflectdamage"
  | "rangedblock"
  | "meleeblock"
  | "magicdefense"
  | "electricitydefense"
  | "firedefense"
  | "winddefense"
  | "waterdefense"
  | "earthdefense"
  | "attack"
  | "hitrate"
  | "magicattack"
  | "swordattack"
  | "axeattack"
  | "knuckleattack"
  | "yoyoattack"
  | "bowattack"
  | "earthmastery"
  | "firemastery"
  | "watermastery"
  | "electricitymastery"
  | "windmastery"
  | "damage"
  | "criticalchance"
  | "elementattack"
  | "skillchance"
  | "attribute"
  | "maxhp"
  | "maxmp"
  | "maxfp"
  | "hprecovery"
  | "mprecovery"
  | "fprecovery"
  | "hprecoveryafterkill"
  | "mprecoveryafterkill"
  | "fprecoveryafterkill"
  | "decresedmpconsumption"
  | "decreasedfpconsumption"
  | "minability"
  | "maxability"
  | "attributeimmunity"
  | "autohp"
  | "autohppvp"
  | "decreasedcastingtime"
  | "criticaldamage"
  | "skilldamage"
  | "hprestoration"
  | "criticalresist"
  | "healing"
  | "pvpdamagereduction"
  | "magicdefense"
  | "pvpdamage"
  | "pvedamage"
  | "penya"
  | "hp"
  | "mp"
  | "fp"
  | "allelementdefense"
  | "allstats"
  | "attackandmaxhp"
  | "defenseandhitrateincrease"
  | "cure"
  | "movement"
  | "allelementmastery"
  | "allrecovery"
  | "allrecoveryafterkill"
  | "decreasedfpandmpconsumption"
  | "removealldebuff"
  | "block"
  | "removedebuff"
  | "damageandstealhp"
  | "stealhp"
  | "explostdecreaseatrevival"
  | "cheerpoint"
  | "incomingdamage"
  | "spiritstrike"
  | "stealfp"
  | "exprate"
  | "droprate"
  | "fprecoveryautoattack"
  | "bleedandpoisonresist"
  | "pvedamagereduction"
  | "blockpenetration"
  | "damgeoffload"
  | "incominghealing"
  | "multistrike"
  | "monsterexp"
  | "mosterexpanddrop"
  | "hppercentrecovery";

export type JobIcon = "messenger" | "old_female" | "old_male" | "target";

export type WorldType = "main" | "prison" | "dungeon" | "instance" | "event";
export type WorldPlace =
  | "lodestar"
  | "lodelight"
  | "flyingstation"
  | "weaponstore"
  | "armorstore"
  | "foodstore"
  | "magicstore"
  | "generalstore"
  | "publicoffice"
  | "questoffice"
  | "dungeon"
  | "shieldstore"
  | "warpzone"
  | "instance";

export type WorldLocation = {
  world: number;
  x: number;
  y: number;
  z: number;
  continent?: number;
};

export type WorldOptions = {
  worldFileName: string;
  tileX: number;
  tileY: number;
};

export enum Job {
  VAGRANT = 9686,
  MERCENARY = 764,
  ASSIST = 8962,
  ACROBAT = 9098,
  MAGICIAN = 9581,
  BLADE = 2246,
  JESTER = 3545,
  KNIGHT = 5330,
  PSYKEEPER = 5709,
  BILLPOSTER = 7424,
  ELEMENTOR = 9150,
  RANGER = 9295,
  RINGMASTER = 9389,
}

export type MonsterRank =
  | "small"
  | "normal"
  | "captain"
  | "giant"
  | "violet"
  | "boss"
  | "material"
  | "super"
  | "guard"
  | "citizen"
  | "worldboss";
export type ItemCategory =
  | "weapon"
  | "armor"
  | "fashion"
  | "jewelry"
  | "flying"
  | "collector"
  | "quest"
  | "trans"
  | "fuel"
  | "booty"
  | "arrow"
  | "charm"
  | "recovery"
  | "blinkwing"
  | "firework"
  | "pickuppet"
  | "teleportring"
  | "material"
  | "buff"
  | "monsterball"
  | "pack"
  | "scroll"
  | "vendorskin"
  | "raisedpet"
  | "currency";
export type ItemSubcategory =
  | "armorcolor"
  | "axe"
  | "balloon"
  | "board"
  | "book"
  | "boots"
  | "bow"
  | "broom"
  | "car"
  | "cloak"
  | "cloth"
  | "drink"
  | "earring"
  | "elementcard"
  | "event"
  | "food"
  | "gauntlet"
  | "glove"
  | "glow"
  | "hat"
  | "helmet"
  | "inventorybag"
  | "knuckle"
  | "letter"
  | "mask"
  | "mineral"
  | "necklace"
  | "petfeed"
  | "piercingcard"
  | "piercingdice"
  | "pill"
  | "specialstone"
  | "staff"
  | "stick"
  | "suit"
  | "sword"
  | "townblinkwing"
  | "trans"
  | "upgradedice"
  | "wand"
  | "wings"
  | "yoyo"
  | "gacha"
  | "globalgacha"
  | "giftbox"
  | "ampexp"
  | "upgradescroll"
  | "awakescroll"
  | "visualcloak"
  | "gem"
  | "piece"
  | "ultimatedice"
  | "selectblinkwing"
  | "selectbox"
  | "hoverbike"
  | "guildbag"
  | "raisedpet"
  | "raisedpettransmute"
  | "harvestglove"
  | "battlepass"
  | "pkchip"
  | "namecolor"
  | "ticket"
  | "fcoin"
  | "rockpaperscissors";

export type NpcMenu =
  | "trade"
  | "dialog"
  | "changeelem"
  | "upgrade"
  | "inputreward"
  | "showreward"
  | "piercing"
  | "piercingremove"
  | "attribute"
  | "lodelight"
  | "bank"
  | "hairshop"
  | "itemrepair"
  | "post"
  | "skinshop"
  | "buff"
  | "arenaenter"
  | "arenaleave"
  | "guildbank"
  | "guildrank"
  | "guildrankwar"
  | "guildrankinfo"
  | "guildsiegeapply"
  | "guildsiegestate"
  | "guildsiegecancel"
  | "guildsiegejoin"
  | "guildsiegelineup"
  | "guildsiegejackpot"
  | "guildsiegebestplayer"
  | "guildsiegeranking"
  | "guildsiegejackpot2"
  | "guildsiegeinfo1"
  | "guildsiegeinfo2"
  | "guildsigeinfo3"
  | "guildsiegeinfo4"
  | "guildsiegeinfo80"
  | "guildsiegeapply80"
  | "guildsiegestate80"
  | "guildsiegejoin80"
  | "guildsiegelineup80"
  | "guildsiegeranking80"
  | "guildsiegecancel80"
  | "guildsiegeinfo60"
  | "guildsiegeapply60"
  | "guildsiegestate60"
  | "guildsiegejoin60"
  | "guildsiegelineup60"
  | "guildsiegeranking60"
  | "guildsiegecancel60"
  | "roshambo"
  | "exchangeroshambo"
  | "upgradecard"
  | "safeelementupgrade"
  | "safeupgrade"
  | "safepiercing"
  | "createshiningpowerdice"
  | "createjewels"
  | "createuniqueweapon"
  | "exchangerareitempieces"
  | "exchangecardpieces"
  | "removelevelreduction"
  | "removecostumeblessing"
  | "arenaranking"
  | "arenareward"
  | "accessoryupgrade"
  | "safeaccessoryupgrade"
  | "traderedchips"
  | "tradebluechips"
  | "petcandycrafting"
  | "petsacrificing"
  | "cosmeticwardrobe"
  | "dungeon"
  | "tradepkchips"
  | "exchangefwc"
  | "gachamachine"
  | "tradegreenchips"
  | "reshufflecard";

export type Spawn = {
  world: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
  continent?: number;
  aggressivity?: number;
};

export type SkillAwake = Record<
  string,
  { uncommon: Array<number>; rare: Array<number>; unique?: Array<number> }
>;

export type Ability = {
  parameter: Parameter;
  add?: number;
  set?: number;
  rate: boolean;
  attribute?:
    | "rooting"
    | "stun"
    | "hitrate"
    | "invisibility"
    | "poison"
    | "slow"
    | "double"
    | "bleeding"
    | "silent"
    | "counterattackdamage"
    | "counterattack"
    | "loot"
    | "moonbeam"
    | "hitrateandpoison"
    | "hitrateandpoisonandstun"
    | "lootandslow"
    | "poisonandbleedingandmoonbeam"
    | "stunandrooting"
    | "forcedblock";
  dotValue?: number;
  dotMode?: "currentdamage" | "standardattack" | "fixedvalue" | "stacks";
  skill?: number;
  skillLevel?: number;
  pvp?: boolean;
  pve?: boolean;
};
export interface BaseObject {
  id: number;
  name: Record<Language, string>;
}

export interface JobObject extends BaseObject {
  type: "beginner" | "expert" | "professional";
  icon: string;
  minLevel: number;
  maxLevel: number;
  parent: number;
  maxHP: number;
  maxFP: number;
  maxMP: number;
  attackSpeed: number;
  critical: number;
  autoAttackFactors: Record<AttackFactors, number>;
}

export interface MonsterObject extends BaseObject {
  event: boolean;
  levelHidden: boolean;
  level: number;
  rank: MonsterRank;
  area: "normal" | "dungeon";
  element: "fire" | "water" | "electricity" | "wind" | "earth" | "none";
  icon: string;
  booty?: number;
  mineral?: number;
  flying: boolean;
  hp: number;
  mp: number;
  minAttack: number;
  maxAttack: number;
  defense: number;
  magicDefense: number;
  sta: number;
  str: number;
  dex: number;
  int: number;
  hitRate: number;
  parry: number;
  runaway: boolean;
  resistFire: number;
  resistWater: number;
  resistWind: number;
  resistEarth: number;
  resistElectricity: number;
  summoned?: Array<number>;
  appliedSkills: Array<{ skill: number; level: number }>;
  avenge: Array<{ monster: number; skill: number; skillLevel: number }>;
  berserkThresholdHP?: number;
  berserkAttackPower?: number;
  recoveryThresholdHP?: number;
  recoveryAmountHP?: number;
  speed: number;
  experience: number;
  experienceSharing: "normal" | "area";
  experienceTable: Array<number>;
  minDropGold: number;
  maxDropGold: number;
  attacks: Array<{
    minAttack: number;
    maxAttack: number;
    attackRange: number;
    target: "area" | "single";
    triggerSkill?: number;
    triggerSkillLevel?: number;
    triggerSkillProbability?: number;
  }>;
  drops: Array<{ item: number; probabilityRange: string; common: boolean }>;
  location: WorldLocation;
  spawns: Array<Spawn>;
}

export interface ItemObject extends BaseObject {
  description: Record<Language, string>;
  icon: string;
  category: ItemCategory;
  subcategory?: ItemSubcategory;
  rarity: "common" | "uncommon" | "rare" | "veryrare" | "unique";
  class?: number;
  level: number;
  sex?: "female" | "male";
  stack: number;
  buyPrice?: number;
  sellPrice: number;
  cosumable: boolean;
  premium: boolean;
  deletable: boolean;
  tradeable: boolean;
  shining: boolean;
  element: "fire" | "water" | "electricity" | "wind" | "earth" | "none";
  durationRealTime: boolean;
  transy?: number;
  upgradeLevels?: Array<{
    upgradeLevel: number;
    requiredLevel: number;
    abilities: Array<Ability>;
  }>;
  cooldown?: number;
  casting?: number;
  duration?: number;
  flightSpeed?: number;
  guildContribution?: number;
  attackSpeed?:
    | "veryslow"
    | "slow"
    | "normal"
    | "fast"
    | "veryfast"
    | "fastest";
  attackSpeedValue?: number;
  attackRange?: number;
  twoHanded?: boolean;
  minAttack?: number;
  maxAttack?: number;
  additionalSkillDamage?: number;
  consumedMP?: number;
  consumedItem?: string;
  triggerSkill?: number;
  triggerSkillProbability?: number;
  minDefense?: number;
  maxDefense?: number;
  blinkwingTarget: WorldLocation;
  abilities: Array<Ability>;
  location: WorldLocation;
  spawns: Array<Spawn>;
}

export interface WorldObject extends BaseObject {
  type: WorldType;
  width: number;
  height: number;
  tileName: string;
  tileSize: number;
  flying: boolean;
  pk: boolean;
  inDoor: boolean;
  revivalWorld?: number;
  revivalKey?: string;
  places: Array<Record<WorldType, WorldLocation>>;
  lodestars: Array<{ key: string; location: WorldLocation }>;
  continents: Array<{
    id: number;
    name: Language;
    town: boolean;
    polygon: Array<{ x: number; z: number }>;
  }>;
}

export interface EquipSetObject extends BaseObject {
  transy: number;
  parts: Array<number>;
  bonus: Array<{ equipped: number; ability: Ability }>;
}

export interface SkillObject extends BaseObject {
  description: Record<Language, string>;
  icon: string;
  class?: number;
  level: number;
  element: "fire" | "water" | "electricity" | "wind" | "earth" | "none";
  abilities: Array<Ability>;
  magic: boolean;
  target: "party" | "line" | "area" | "single" | "currentplayer";
  combo: "general" | "step" | "circle" | "finish";
  debuff: boolean;
  flying: boolean;
  passive: boolean;
  consumedItem?: string;
  triggerSkill?: number;
  skillPoints?: number;
  weapon?: string;
  requirements: Array<{ skill: number; level: number }>;
  levels: Array<{
    minAttack: number;
    maxAttack: number;
    damageMultiplier: number;
    probability: number;
    probabilityPVP: number;
    flybackProbability: number;
    consumedMP: number;
    consumedFP: number;
    cooldown: number;
    casting: number;
    duration: number;
    durationPVP: number;
    dotTick: number;
    spellRange: number;
    wallLives: number;
    reflectedDamagePVE: number;
    reflectedDamagePVP: number;
    abilities: Array<Ability>;
    scalingParameters: Array<{
      parameter: string;
      stat: "str" | "sta" | "dex" | "int";
      scale: number;
      pvp: boolean;
      pve: boolean;
    }>;
  }>;
}

export interface PartySkillObject extends BaseObject {
  description: Record<Language, string>;
  icon: string;
  level: number;
  consumedPoints?: number;
  duration?: number;
}

export interface NpcObject extends BaseObject {
  menus: NpcMenu;
  locations: Array<WorldLocation>;
  image: string;
  place?: WorldPlace;
  shop: Array<{ name: Record<Language, string>; items: Array<number> }>;
}

export interface QuestObject extends BaseObject {
  type: "category" | "normal" | "repeat" | "chain" | "daily";
  repeatable: boolean;
  removable: boolean;
  partyShare: boolean;
  parent?: number;
  beginNPC?: number;
  minLevel?: number;
  maxLevel?: number;
  beginClasses?: Array<number>;
  beginQuests?: Array<{ quest: number; completed: boolean }>;
  beginReceiveItems?: Array<{ item: number; count: number }>;
  endNPC?: number;
  endNeededItems?: Array<{ item: number; count: number }>;
  endTimeLimit?: number;
  endTalkNPC?: number;
  endVisitPlace?: Spawn;
  endKillMonsters?: Array<{ monster: Array<number>; count: number }>;
  endRemoveItems?: Array<{ item: number; count?: number }>;
  endReceiveGold?: number | null;
  endReceiveExperience?: Array<number> | null;
  endReceiveInventorySpaces?: number | null;
  endReceiveSkillPoints?: number | null;
  endReceiveKarma?: string | null;
  endReceiveItems?: Array<{
    item: number;
    count: number;
    upgradeLevel?: number;
    soulLinked: boolean;
  }> | null;
  description?: Record<Language, string>;
  descriptionComplete?: Record<Language, string>;
  dialogsBegin?: Array<Record<Language, string>>;
  dialogsAccept?: Array<Record<Language, string>>;
  dialogsDecline?: Array<Record<Language, string>>;
  dialogsComplete?: Array<Record<Language, string>>;
  dialogsFail?: Array<Record<Language, string>>;
}

export interface PkObject {
  pointsPerKill: number;
  decreasePointDelaySec: number;
  decreasePointCount: number;
  dropChipPercentages: Array<{ stolenChipsCount: number; dropPercent: number }>;
}

export interface AchievementObject extends BaseObject {
  description: Record<Language, string>;
  type:
    | "killmonster"
    | "useitem"
    | "jump"
    | "stat"
    | "class"
    | "level"
    | "playtime"
    | "useskill"
    | "connection"
    | "hatchegg";
  category: "general" | "monsters" | "consumables" | "attendance";
  accountWide: boolean;
  badgeReward?: string;
  levels: Array<{
    value?: number;
    name?: Record<Language, string>;
    title?: Record<Language, string>;
    attackPower?: number;
    inventorySpaces?: number;
    gold?: number;
    items?: Array<{ item: number; count: number; soulLinked: boolean }>;
  }>;
  mainMonster?: number;
  monsters?: Array<number>;
  mainItem?: number;
  items: Array<number>;
  stats: "str" | "sta" | "dex" | "int";
  mainSkill: number;
  skills: Array<number>;
  mainClass: number;
  classes: Array<number>;
}

export interface UpgradeBonusObject {
  upgradeLevel: number;
  weaponAttack: number;
  helmetDefense?: number;
  suitDefense?: number;
  gauntletDefense?: number;
  bootsDefense?: number;
  shieldDefense?: number;
  setAbilities: Array<Ability>;
}

export interface AwakeObject {
  bow: {
    skills?: SkillAwake;
    parameters?: SkillAwake;
  };
  yoyo: {
    skills?: SkillAwake;
    parameters?: SkillAwake;
  };
  stick: {
    skills?: SkillAwake;
    parameters?: SkillAwake;
  };
  knuckle: {
    skills?: SkillAwake;
    parameters?: SkillAwake;
  };
  swordoraxe: {
    skills?: SkillAwake;
    parameters?: SkillAwake;
  };
  staff: {
    skills?: SkillAwake;
    parameters?: SkillAwake;
  };
  wandorstaff: {
    skills?: SkillAwake;
    parameters?: SkillAwake;
  };
  wand: {
    skills?: SkillAwake;
    parameters?: SkillAwake;
  };
  shield: {
    skills?: SkillAwake;
    parameters?: SkillAwake;
  };
}

export interface RaisedPetObject {
  petItemId: number;
  parameter:
    | "str"
    | "sta"
    | "dex"
    | "int"
    | "attack"
    | "def"
    | "maxhp"
    | "criticalchance"
    | "criticaldamage";
  rate?: boolean;
  values?: Array<number>;
  tiers: Array<{
    maxEnergy: number;
    exp: number;
    requiredCandyItem: number;
    graceSkill?: number;
    graceSkillCooldown?: number;
    graceSkillLevel?: number;
    graceSkillDuration?: number;
    graceSkillEnergyConsumption?: number;
  }>;
}

export interface DungeonObject extends BaseObject {
  type: "party" | "guild" | "solo" | "partyorsolo" | "guildorsolo";
  image: string;
  world: number;
  difficulty: "normal" | "medium" | "hard" | "extrahard" | "nightmare";
  minLevel: number;
  maxLevel: number;
  cooldownSecs: number;
  monsters: Array<number>;
  monsterMods?: Array<{
    parameter: string;
    value: number;
    maxPlayerCount?: number;
  }>;
  requiredCreatorQuest?: number;
  requiredCreatorItem?: number;
  requiredCreatorPenya?: number;
  minGuildLevel?: number;
  availableCurses: Array<{
    skill: number;
    skillLevel: number;
    costItem: number;
    costCount: number;
  }>;
}
