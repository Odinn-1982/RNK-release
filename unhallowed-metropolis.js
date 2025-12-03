const u = {
  /**
   * Core Attributes - The six fundamental character attributes
   * Each rated 1-5 for humans (some creatures may exceed this)
   */
  attributes: {
    vitality: "UM.Attributes.Vitality",
    coordination: "UM.Attributes.Coordination",
    wit: "UM.Attributes.Wit",
    intellect: "UM.Attributes.Intellect",
    will: "UM.Attributes.Will",
    charm: "UM.Attributes.Charm"
  },
  /**
   * Attribute abbreviations for compact display
   */
  attributeAbbreviations: {
    vitality: "UM.Attributes.VitalityAbbr",
    coordination: "UM.Attributes.CoordinationAbbr",
    wit: "UM.Attributes.WitAbbr",
    intellect: "UM.Attributes.IntellectAbbr",
    will: "UM.Attributes.WillAbbr",
    charm: "UM.Attributes.CharmAbbr"
  },
  /**
   * Derived Statistics - Calculated from attributes
   */
  derivedStats: {
    health: "UM.Derived.Health",
    // Vitality × 2 + 10
    mentalHealth: "UM.Derived.MentalHealth",
    // Will × 2 + 10
    initiative: "UM.Derived.Initiative",
    // Wit + Coordination
    actions: "UM.Derived.Actions",
    // Based on Coordination
    movement: "UM.Derived.Movement",
    // Based on Coordination
    corruptionThreshold: "UM.Derived.CorruptionThreshold"
    // Will × 2
  },
  /**
   * Skills organized by governing attribute
   */
  skills: {
    // Vitality-based skills
    athletics: { label: "UM.Skills.Athletics", attribute: "vitality" },
    brawl: { label: "UM.Skills.Brawl", attribute: "vitality" },
    endurance: { label: "UM.Skills.Endurance", attribute: "vitality" },
    // Coordination-based skills
    concentration: { label: "UM.Skills.Concentration", attribute: "coordination" },
    drive: { label: "UM.Skills.Drive", attribute: "coordination" },
    firearms: { label: "UM.Skills.Firearms", attribute: "coordination" },
    larceny: { label: "UM.Skills.Larceny", attribute: "coordination" },
    melee: { label: "UM.Skills.Melee", attribute: "coordination" },
    stealth: { label: "UM.Skills.Stealth", attribute: "coordination" },
    // Wit-based skills
    animalHandling: { label: "UM.Skills.AnimalHandling", attribute: "wit" },
    awareness: { label: "UM.Skills.Awareness", attribute: "wit" },
    empathy: { label: "UM.Skills.Empathy", attribute: "wit" },
    gambling: { label: "UM.Skills.Gambling", attribute: "wit" },
    // Intellect-based skills
    academics: { label: "UM.Skills.Academics", attribute: "intellect" },
    bureaucracy: { label: "UM.Skills.Bureaucracy", attribute: "intellect" },
    criminology: { label: "UM.Skills.Criminology", attribute: "intellect" },
    demolitions: { label: "UM.Skills.Demolitions", attribute: "intellect" },
    engineering: { label: "UM.Skills.Engineering", attribute: "intellect" },
    medicine: { label: "UM.Skills.Medicine", attribute: "intellect" },
    occult: { label: "UM.Skills.Occult", attribute: "intellect" },
    politics: { label: "UM.Skills.Politics", attribute: "intellect" },
    science: { label: "UM.Skills.Science", attribute: "intellect" },
    survival: { label: "UM.Skills.Survival", attribute: "intellect" },
    // Will-based skills
    intimidation: { label: "UM.Skills.Intimidation", attribute: "will" },
    meditation: { label: "UM.Skills.Meditation", attribute: "will" },
    // Charm-based skills
    artistry: { label: "UM.Skills.Artistry", attribute: "charm" },
    etiquette: { label: "UM.Skills.Etiquette", attribute: "charm" },
    expression: { label: "UM.Skills.Expression", attribute: "charm" },
    leadership: { label: "UM.Skills.Leadership", attribute: "charm" },
    negotiation: { label: "UM.Skills.Negotiation", attribute: "charm" },
    seduction: { label: "UM.Skills.Seduction", attribute: "charm" },
    streetwise: { label: "UM.Skills.Streetwise", attribute: "charm" },
    subterfuge: { label: "UM.Skills.Subterfuge", attribute: "charm" }
  },
  /**
   * Character Callings - Professional backgrounds
   */
  callings: {
    aristocrat: "UM.Callings.Aristocrat",
    criminal: "UM.Callings.Criminal",
    deathwatchSoldier: "UM.Callings.DeathwatchSoldier",
    detective: "UM.Callings.Detective",
    dhampir: "UM.Callings.Dhampir",
    doctor: "UM.Callings.Doctor",
    medium: "UM.Callings.Medium",
    mourner: "UM.Callings.Mourner",
    promethean: "UM.Callings.Promethean",
    undertaker: "UM.Callings.Undertaker",
    soldier: "UM.Callings.Soldier",
    inventor: "UM.Callings.Inventor",
    clergy: "UM.Callings.Clergy",
    courtesan: "UM.Callings.Courtesan",
    journalist: "UM.Callings.Journalist",
    alchemist: "UM.Callings.Alchemist",
    servant: "UM.Callings.Servant",
    psychic: "UM.Callings.Psychic",
    entertainer: "UM.Callings.Entertainer"
  },
  /**
   * Social Classes
   */
  socialClasses: {
    gutter: "UM.SocialClass.Gutter",
    working: "UM.SocialClass.Working",
    middle: "UM.SocialClass.Middle",
    upperMiddle: "UM.SocialClass.UpperMiddle",
    upper: "UM.SocialClass.Upper",
    aristocracy: "UM.SocialClass.Aristocracy"
  },
  /**
   * Corruption Types
   */
  corruptionTypes: {
    physical: "UM.Corruption.Physical",
    mental: "UM.Corruption.Mental",
    desire: "UM.Corruption.Desire",
    drive: "UM.Corruption.Drive"
  },
  /**
   * Afflictions - Physical corruption manifestations
   */
  afflictionSeverity: {
    minor: "UM.Affliction.Minor",
    moderate: "UM.Affliction.Moderate",
    severe: "UM.Affliction.Severe"
  },
  /**
   * Item Types
   */
  itemTypes: {
    weapon: "UM.ItemTypes.Weapon",
    armor: "UM.ItemTypes.Armor",
    equipment: "UM.ItemTypes.Equipment",
    quality: "UM.ItemTypes.Quality",
    affliction: "UM.ItemTypes.Affliction",
    disorder: "UM.ItemTypes.Disorder",
    calling: "UM.ItemTypes.Calling",
    talent: "UM.ItemTypes.Talent",
    psychicPower: "UM.ItemTypes.PsychicPower"
  },
  /**
   * Psychic Devotions
   */
  psychicDevotions: {
    empathy: "UM.Devotions.Empathy",
    magnetism: "UM.Devotions.Magnetism",
    necromancy: "UM.Devotions.Necromancy",
    clairvoyance: "UM.Devotions.Clairvoyance",
    psychokinesis: "UM.Devotions.Psychokinesis",
    telepathy: "UM.Devotions.Telepathy"
  },
  /**
   * Weapon Types
   */
  weaponTypes: {
    melee: "UM.WeaponTypes.Melee",
    ranged: "UM.WeaponTypes.Ranged",
    thrown: "UM.WeaponTypes.Thrown"
  },
  /**
   * Damage Types
   */
  damageTypes: {
    bashing: "UM.DamageTypes.Bashing",
    lethal: "UM.DamageTypes.Lethal",
    aggravated: "UM.DamageTypes.Aggravated"
  },
  /**
   * Hit Locations
   */
  hitLocations: {
    head: { label: "UM.HitLocations.Head", range: [1, 1] },
    torso: { label: "UM.HitLocations.Torso", range: [2, 4] },
    rightArm: { label: "UM.HitLocations.RightArm", range: [5, 5] },
    leftArm: { label: "UM.HitLocations.LeftArm", range: [6, 6] },
    rightLeg: { label: "UM.HitLocations.RightLeg", range: [7, 8] },
    leftLeg: { label: "UM.HitLocations.LeftLeg", range: [9, 10] }
  },
  /**
   * Roll result thresholds
   */
  rollThresholds: {
    criticalFailure: 4,
    // Both dice show 2 or less
    failure: 11,
    // Below target number
    success: 0,
    // Meet or exceed TN
    exceptionalSuccess: 5,
    // Exceed TN by 5+
    criticalSuccess: 10
    // Exceed TN by 10+ or double 10s
  },
  /**
   * Action economy constants
   */
  actionCosts: {
    attack: 1,
    move: 1,
    aim: 1,
    dodge: 1,
    parry: 1,
    reload: 1,
    useItem: 1
  },
  /**
   * Default target numbers
   */
  targetNumbers: {
    easy: 7,
    average: 11,
    challenging: 15,
    difficult: 19,
    heroic: 23,
    legendary: 27
  },
  /**
   * Actor types for the system
   */
  actorTypes: ["character", "npc", "animate", "vampire", "creature"],
  /**
   * Currency denominations (Victorian-era)
   */
  currency: {
    pounds: "UM.Currency.Pounds",
    shillings: "UM.Currency.Shillings",
    pence: "UM.Currency.Pence"
  }
}, te = foundry.appv1?.sheets?.ActorSheet ?? ActorSheet;
class ae extends te {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["unhallowed-metropolis", "sheet", "actor", "character"],
      template: "systems/unhallowed-metropolis/templates/actors/character-sheet.hbs",
      width: 720,
      height: 800,
      tabs: [
        { navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "attributes" }
      ],
      resizable: !0,
      scrollY: [".sheet-body"]
    });
  }
  /**
   * Prepare data for the template
   */
  getData(e) {
    const t = super.getData(e);
    t.config = u;
    const a = this.actor;
    return t.system = a.system, t.flags = a.flags, t.attributes = this._prepareAttributes(t.system.attributes), t.skillsByAttribute = this._prepareSkills(t.system.skills), t.items = this._prepareItems(a.items), t.healthPercent = Math.round(t.system.derived.health.value / t.system.derived.health.max * 100), t.mentalPercent = Math.round(t.system.derived.mentalHealth.value / t.system.derived.mentalHealth.max * 100), t.physicalCorruptionPercent = Math.round(t.system.corruption.physical.value / t.system.corruption.physical.threshold * 100), t.mentalCorruptionPercent = Math.round(t.system.corruption.mental.value / t.system.corruption.mental.threshold * 100), t;
  }
  /**
   * Prepare attributes data for the template
   */
  _prepareAttributes(e) {
    const t = [];
    for (const [a, s] of Object.entries(u.attributes)) {
      const i = e[a] || { value: 2, modifier: 0 };
      t.push({
        key: a,
        label: game.i18n.localize(s),
        abbr: game.i18n.localize(u.attributeAbbreviations[a]),
        value: i.value,
        modifier: i.modifier
      });
    }
    return t;
  }
  /**
   * Prepare skills organized by governing attribute
   */
  _prepareSkills(e) {
    const t = {
      vitality: [],
      coordination: [],
      wit: [],
      intellect: [],
      will: [],
      charm: []
    };
    for (const [a, s] of Object.entries(u.skills)) {
      const i = s, n = e[a] || { value: 0, specializations: [] };
      t[i.attribute].push({
        key: a,
        label: game.i18n.localize(i.label),
        value: n.value,
        specializations: n.specializations || [],
        attribute: i.attribute
      });
    }
    return t;
  }
  /**
   * Organize items by type for the sheet
   */
  _prepareItems(e) {
    const t = {
      weapons: [],
      armor: [],
      equipment: [],
      qualities: [],
      afflictions: [],
      disorders: [],
      talents: [],
      psychicPowers: [],
      callings: []
    };
    for (const a of e) {
      const s = a;
      switch (s.type) {
        case "weapon":
          t.weapons.push(s);
          break;
        case "armor":
          t.armor.push(s);
          break;
        case "equipment":
          t.equipment.push(s);
          break;
        case "quality":
          t.qualities.push(s);
          break;
        case "affliction":
          t.afflictions.push(s);
          break;
        case "disorder":
          t.disorders.push(s);
          break;
        case "talent":
          t.talents.push(s);
          break;
        case "psychicPower":
          t.psychicPowers.push(s);
          break;
        case "calling":
          t.callings.push(s);
          break;
        default:
          t.equipment.push(s);
      }
    }
    return t;
  }
  /**
   * Activate event listeners
   */
  activateListeners(e) {
    if (super.activateListeners(e), !!this.isEditable && (e.find(".attribute-roll").on("click", this._onAttributeRoll.bind(this)), e.find(".skill-roll").on("click", this._onSkillRoll.bind(this)), e.find(".attribute-dot").on("click", this._onAttributeDotClick.bind(this)), e.find(".skill-dot").on("click", this._onSkillDotClick.bind(this)), e.find(".health-bar").on("click", this._onHealthClick.bind(this)), e.find(".mental-bar").on("click", this._onMentalClick.bind(this)), e.find(".corruption-pip").on("click", this._onCorruptionClick.bind(this)), e.find(".item-create").on("click", this._onItemCreate.bind(this)), e.find(".item-edit").on("click", this._onItemEdit.bind(this)), e.find(".item-delete").on("click", this._onItemDelete.bind(this)), e.find(".item-roll").on("click", this._onItemRoll.bind(this)), e.find(".power-activate").on("click", this._onPowerActivate.bind(this)), this.actor.isOwner)) {
      const t = (a) => this._onDragStart(a);
      e.find(".item").each((a, s) => {
        s.setAttribute("draggable", "true"), s.addEventListener("dragstart", t, !1);
      });
    }
  }
  /**
   * Handle attribute roll clicks
   */
  async _onAttributeRoll(e) {
    e.preventDefault();
    const a = e.currentTarget.dataset.attribute;
    a && await this.actor.rollAttribute(a, { targetNumber: 11 });
  }
  /**
   * Handle skill roll clicks
   */
  async _onSkillRoll(e) {
    e.preventDefault();
    const a = e.currentTarget.dataset.skill;
    a && await this.actor.rollSkill(a, { targetNumber: 11 });
  }
  /**
   * Handle clicking on attribute dots to change value
   */
  async _onAttributeDotClick(e) {
    e.preventDefault();
    const t = e.currentTarget, a = parseInt(t.dataset.value || "1"), i = $(t).closest(".attribute-row").data("attribute");
    i && await this.actor.update({
      [`system.attributes.${i}.value`]: a
    });
  }
  /**
   * Handle clicking on skill dots to change value
   */
  async _onSkillDotClick(e) {
    e.preventDefault();
    const t = e.currentTarget, a = parseInt(t.dataset.value || "0"), i = $(t).closest(".skill-row").data("skill");
    i && await this.actor.update({
      [`system.skills.${i}.value`]: a
    });
  }
  /**
   * Handle health bar clicks
   */
  async _onHealthClick(e) {
    e.preventDefault();
    const a = this.actor.system.derived.health.max, s = e.currentTarget.getBoundingClientRect(), i = (e.clientX - s.left) / s.width, n = Math.round(i * a);
    await this.actor.update({
      "system.derived.health.value": Math.max(0, Math.min(a, n))
    });
  }
  /**
   * Handle mental health bar clicks
   */
  async _onMentalClick(e) {
    e.preventDefault();
    const a = this.actor.system.derived.mentalHealth.max, s = e.currentTarget.getBoundingClientRect(), i = (e.clientX - s.left) / s.width, n = Math.round(i * a);
    await this.actor.update({
      "system.derived.mentalHealth.value": Math.max(0, Math.min(a, n))
    });
  }
  /**
   * Handle corruption pip clicks
   */
  async _onCorruptionClick(e) {
    e.preventDefault();
    const t = e.currentTarget, a = parseInt(t.dataset.index || "0"), i = $(t).closest(".corruption-track").data("type"), o = this.actor.system.corruption[i].value, l = a < o ? a : a + 1;
    await this.actor.update({
      [`system.corruption.${i}.value`]: l
    });
  }
  /**
   * Handle creating a new item
   */
  async _onItemCreate(e) {
    e.preventDefault();
    const a = e.currentTarget.dataset.type || "equipment", s = {
      name: game.i18n.format("UM.Item.New", { type: game.i18n.localize(`UM.ItemTypes.${a.charAt(0).toUpperCase() + a.slice(1)}`) }),
      type: a
    };
    await Item.create(s, { parent: this.actor });
  }
  /**
   * Handle editing an item
   */
  _onItemEdit(e) {
    e.preventDefault();
    const a = $(e.currentTarget).closest(".item").data("item-id"), s = this.actor.items.get(a);
    s && s.sheet?.render(!0);
  }
  /**
   * Handle deleting an item
   */
  async _onItemDelete(e) {
    e.preventDefault();
    const a = $(e.currentTarget).closest(".item").data("item-id"), s = this.actor.items.get(a);
    s && await s.delete();
  }
  /**
   * Handle rolling an item (e.g., weapon attack)
   */
  async _onItemRoll(e) {
    e.preventDefault();
    const a = $(e.currentTarget).closest(".item").data("item-id"), s = this.actor.items.get(a);
    s && typeof s.roll == "function" && await s.roll();
  }
  /**
   * Handle psychic power activation
   */
  async _onPowerActivate(e) {
    e.preventDefault();
    const a = $(e.currentTarget).closest(".item").data("item-id"), s = this.actor.items.get(a);
    if (!s) return;
    const i = s.name, n = s.system?.discipline || "Unknown", o = s.system?.cost || 0, l = s.system?.rules || s.system?.description || "", h = `
      <div class="um-power-card">
        <div class="power-header">
          <img src="${s.img}" alt="${i}" width="36" height="36"/>
          <div class="power-title">
            <h3>${i}</h3>
            <span class="power-discipline">${n}</span>
          </div>
        </div>
        <div class="power-details">
          ${o ? `<p><strong>Cost:</strong> ${o} Instability</p>` : ""}
          ${l ? `<div class="power-rules">${l}</div>` : ""}
        </div>
      </div>
    `;
    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: h,
      flavor: `${this.actor.name} activates a psychic power`
    });
  }
}
const se = foundry.appv1?.sheets?.ActorSheet ?? ActorSheet;
class ie extends se {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["unhallowed-metropolis", "sheet", "actor", "npc"],
      template: "systems/unhallowed-metropolis/templates/actors/npc-sheet.hbs",
      width: 520,
      height: 480,
      tabs: [
        { navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "stats" }
      ],
      resizable: !0
    });
  }
  getData(e) {
    const t = super.getData(e);
    t.config = u;
    const a = this.actor;
    t.system = a.system, t.flags = a.flags, t.items = {
      weapons: [],
      abilities: [],
      equipment: []
    };
    for (const s of a.items) {
      const i = s;
      i.type === "weapon" ? t.items.weapons.push(i) : i.type === "talent" || i.type === "quality" ? t.items.abilities.push(i) : t.items.equipment.push(i);
    }
    return t;
  }
  activateListeners(e) {
    super.activateListeners(e), this.isEditable && (e.find(".attribute-roll").on("click", this._onAttributeRoll.bind(this)), e.find(".item-create").on("click", this._onItemCreate.bind(this)), e.find(".item-edit").on("click", this._onItemEdit.bind(this)), e.find(".item-delete").on("click", this._onItemDelete.bind(this)), e.find(".item-roll").on("click", this._onItemRoll.bind(this)));
  }
  async _onAttributeRoll(e) {
    e.preventDefault();
    const a = e.currentTarget.dataset.attribute;
    a && await this.actor.rollAttribute(a, { targetNumber: 11 });
  }
  async _onItemCreate(e) {
    e.preventDefault();
    const a = e.currentTarget.dataset.type || "equipment", s = {
      name: `New ${a}`,
      type: a
    };
    await Item.create(s, { parent: this.actor });
  }
  _onItemEdit(e) {
    e.preventDefault();
    const a = $(e.currentTarget).closest(".item").data("item-id"), s = this.actor.items.get(a);
    s && s.sheet?.render(!0);
  }
  async _onItemDelete(e) {
    e.preventDefault();
    const a = $(e.currentTarget).closest(".item").data("item-id"), s = this.actor.items.get(a);
    s && await s.delete();
  }
  async _onItemRoll(e) {
    e.preventDefault();
    const a = $(e.currentTarget).closest(".item").data("item-id"), s = this.actor.items.get(a);
    s && typeof s.roll == "function" && await s.roll();
  }
}
const ne = foundry.appv1?.sheets?.ActorSheet ?? ActorSheet;
class oe extends ne {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["unhallowed-metropolis", "sheet", "actor", "creature"],
      template: "systems/unhallowed-metropolis/templates/actors/creature-sheet.hbs",
      width: 560,
      height: 520,
      tabs: [
        { navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "stats" }
      ],
      resizable: !0
    });
  }
  getData(e) {
    const t = super.getData(e);
    t.config = u;
    const a = this.actor;
    t.system = a.system, t.flags = a.flags, t.items = {
      weapons: [],
      abilities: [],
      equipment: []
    };
    for (const s of a.items) {
      const i = s;
      i.type === "weapon" ? t.items.weapons.push(i) : i.type === "talent" || i.type === "quality" ? t.items.abilities.push(i) : t.items.equipment.push(i);
    }
    return t;
  }
  activateListeners(e) {
    super.activateListeners(e), this.isEditable && (e.find(".attribute-roll").on("click", this._onAttributeRoll.bind(this)), e.find(".item-create").on("click", this._onItemCreate.bind(this)), e.find(".item-edit").on("click", this._onItemEdit.bind(this)), e.find(".item-delete").on("click", this._onItemDelete.bind(this)), e.find(".item-roll").on("click", this._onItemRoll.bind(this)));
  }
  async _onAttributeRoll(e) {
    e.preventDefault();
    const a = e.currentTarget.dataset.attribute;
    a && await this.actor.rollAttribute(a, { targetNumber: 11 });
  }
  async _onItemCreate(e) {
    e.preventDefault();
    const a = e.currentTarget.dataset.type || "equipment", s = {
      name: `New ${a}`,
      type: a
    };
    await Item.create(s, { parent: this.actor });
  }
  _onItemEdit(e) {
    e.preventDefault();
    const a = $(e.currentTarget).closest(".item").data("item-id"), s = this.actor.items.get(a);
    s && s.sheet?.render(!0);
  }
  async _onItemDelete(e) {
    e.preventDefault();
    const a = $(e.currentTarget).closest(".item").data("item-id"), s = this.actor.items.get(a);
    s && await s.delete();
  }
  async _onItemRoll(e) {
    e.preventDefault();
    const a = $(e.currentTarget).closest(".item").data("item-id"), s = this.actor.items.get(a);
    s && typeof s.roll == "function" && await s.roll();
  }
}
class Z extends Actor {
  /**
   * Prepare base data - called before embedded documents
   */
  prepareBaseData() {
    super.prepareBaseData();
    const t = this.system;
    this._initializeData(t);
  }
  /**
   * Prepare derived data - called after embedded documents
   */
  prepareDerivedData() {
    super.prepareDerivedData();
    const e = this, t = e.system, a = e.type;
    a === "character" || a === "npc" ? this._prepareCharacterData(t) : (a === "animate" || a === "vampire" || a === "creature") && this._prepareCreatureData(t, a);
  }
  /**
   * Initialize the data structure for a new actor
   */
  _initializeData(e) {
    e.attributes = e.attributes || {};
    for (const t of Object.keys(u.attributes))
      e.attributes[t] = e.attributes[t] || { value: 2, modifier: 0 };
    e.skills = e.skills || {};
    for (const t of Object.keys(u.skills))
      e.skills[t] = e.skills[t] || { value: 0, specializations: [] };
    e.derived = e.derived || {
      health: { value: 14, max: 14, temp: 0 },
      mentalHealth: { value: 14, max: 14, temp: 0 },
      initiative: 4,
      actions: 2,
      movement: 5,
      corruptionThreshold: 4
    }, e.corruption = e.corruption || {
      physical: { value: 0, threshold: 4 },
      mental: { value: 0, threshold: 4 },
      desire: "",
      drive: ""
    }, e.details = e.details || {
      calling: "",
      socialClass: "",
      background: "",
      birthplace: "",
      age: 25,
      gender: "",
      height: "",
      weight: "",
      appearance: "",
      notes: ""
    }, e.currency = e.currency || {
      pounds: 0,
      shillings: 0,
      pence: 0
    };
  }
  /**
   * Calculate derived statistics for characters
   */
  _prepareCharacterData(e) {
    const t = e.attributes, a = (t.vitality?.value || 2) * 2 + 10;
    e.derived.health.max = a, e.derived.health.value > a && (e.derived.health.value = a);
    const s = (t.will?.value || 2) * 2 + 10;
    e.derived.mentalHealth.max = s, e.derived.mentalHealth.value > s && (e.derived.mentalHealth.value = s), e.derived.initiative = (t.wit?.value || 2) + (t.coordination?.value || 2);
    const i = t.coordination?.value || 2;
    i <= 1 ? e.derived.actions = 1 : i <= 3 ? e.derived.actions = 2 : i <= 4 ? e.derived.actions = 3 : e.derived.actions = 4, e.derived.movement = i + 3;
    const n = t.will?.value || 2;
    e.derived.corruptionThreshold = n * 2, e.corruption.physical.threshold = n * 2, e.corruption.mental.threshold = n * 2;
  }
  /**
   * Calculate derived statistics for creatures (animates, vampires, etc.)
   */
  _prepareCreatureData(e, t) {
    const a = e.attributes, s = t === "vampire" ? 3 : 2.5, i = Math.floor((a.vitality?.value || 3) * s + 10);
    e.derived.health.max = i, e.derived.health.value > i && (e.derived.health.value = i);
    const n = t === "vampire" ? 3 : 2, o = Math.floor((a.will?.value || 3) * n + 10);
    e.derived.mentalHealth.max = o, e.derived.mentalHealth.value > o && (e.derived.mentalHealth.value = o), e.derived.initiative = (a.wit?.value || 2) + (a.coordination?.value || 2);
    const l = a.coordination?.value || 2;
    l <= 1 ? e.derived.actions = 1 : l <= 3 ? e.derived.actions = 2 : l <= 4 ? e.derived.actions = 3 : e.derived.actions = 4, t === "vampire" && (e.bloodPool = e.bloodPool || { value: 10, max: 10 }, e.bloodPool.max = (a.vitality?.value || 3) * 3 + 5), e.derived.movement = (a.coordination?.value || 2) + 4;
  }
  /**
   * Roll an attribute check
   */
  async rollAttribute(e, t = {}) {
    const a = this.system, s = a.attributes[e]?.value || 2, i = a.attributes[e]?.modifier || 0, n = t.bonus || 0, o = `2d10 + ${s} + ${i} + ${n}`, l = new Roll(o);
    return await l.evaluate(), await this._createRollMessage(l, {
      title: game.i18n.localize(u.attributes[e]),
      targetNumber: t.targetNumber
    }), l;
  }
  /**
   * Roll a skill check
   */
  async rollSkill(e, t = {}) {
    const a = this.system, s = u.skills[e], i = a.skills[e]?.value || 0, n = s.attribute, o = a.attributes[n]?.value || 2, l = t.bonus || 0, h = `2d10 + ${o} + ${i} + ${l}`, c = new Roll(h);
    return await c.evaluate(), await this._createRollMessage(c, {
      title: `${game.i18n.localize(s.label)} (${game.i18n.localize(u.attributes[n])})`,
      targetNumber: t.targetNumber
    }), c;
  }
  /**
   * Roll initiative
   */
  async rollInitiative() {
    const a = `1d10 + ${this.system.derived.initiative || 4}`, s = new Roll(a);
    return await s.evaluate(), s;
  }
  /**
   * Create a formatted chat message for a roll
   */
  async _createRollMessage(e, t) {
    const a = e.total || 0, s = t.targetNumber || 11;
    let i = "failure", n = "Failure";
    const o = a - s;
    o >= 10 ? (i = "critical-success", n = "Critical Success!") : o >= 5 ? (i = "exceptional-success", n = "Exceptional Success") : o >= 0 ? (i = "success", n = "Success") : o >= -5 ? (i = "failure", n = "Failure") : (i = "critical-failure", n = "Critical Failure!");
    const l = `
      <div class="um-roll-card">
        <h3>${t.title}</h3>
        <div class="roll-result ${i}">
          <span class="total">${a}</span>
          <span class="vs">vs TN ${s}</span>
          <span class="result-text">${n}</span>
        </div>
        <div class="roll-details">
          <span class="formula">${e.formula}</span>
          <span class="dice">${e.dice.map((h) => h.results.map((c) => c.result).join(", ")).join(" + ")}</span>
        </div>
      </div>
    `;
    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: l,
      roll: e,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    });
  }
  /**
   * Apply damage to the actor
   */
  async applyDamage(e, t = {}) {
    const a = this.system, s = a.derived.health.value, i = Math.max(0, s - e);
    await this.update({
      "system.derived.health.value": i
    });
    const n = t.type || "lethal";
    ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: `<div class="um-damage-notice">${this.name} takes ${e} ${n} damage${t.location ? ` to the ${t.location}` : ""}. (${i}/${a.derived.health.max} HP)</div>`
    });
  }
  /**
   * Apply mental damage
   */
  async applyMentalDamage(e) {
    const t = this.system, a = t.derived.mentalHealth.value, s = Math.max(0, a - e);
    await this.update({
      "system.derived.mentalHealth.value": s
    }), ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: `<div class="um-damage-notice">${this.name} takes ${e} mental damage. (${s}/${t.derived.mentalHealth.max} Mental Health)</div>`
    });
  }
  /**
   * Add corruption points
   */
  async addCorruption(e, t = "physical") {
    const a = this.system, s = a.corruption[t].value, i = a.corruption[t].threshold, n = s + e;
    await this.update({
      [`system.corruption.${t}.value`]: n
    }), n >= i && ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: `<div class="um-corruption-warning">${this.name} has exceeded their ${t} corruption threshold! An affliction may manifest...</div>`
    });
  }
}
class ee extends Item {
  /**
   * Prepare base data
   */
  prepareBaseData() {
    super.prepareBaseData();
  }
  /**
   * Prepare derived data
   */
  prepareDerivedData() {
    super.prepareDerivedData();
    const e = this;
    switch (e.type) {
      case "weapon":
        this._prepareWeaponData(e.system);
        break;
      case "armor":
        this._prepareArmorData(e.system);
        break;
    }
  }
  /**
   * Prepare weapon-specific data
   */
  _prepareWeaponData(e) {
    e.damage = e.damage || "1d10", e.damageType = e.damageType || "lethal", e.range = e.range || 0, e.rof = e.rof || 1, e.capacity = e.capacity || 0, e.currentAmmo = e.currentAmmo ?? e.capacity, e.skill = e.skill || "melee", e.qualities = e.qualities || [];
  }
  /**
   * Prepare armor-specific data
   */
  _prepareArmorData(e) {
    e.protection = e.protection || 0, e.coverage = e.coverage || [], e.penalty = e.penalty || 0;
  }
  /**
   * Roll this item (for weapons, this is an attack roll)
   */
  async roll() {
    const e = this;
    if (!this.actor) {
      ui.notifications?.warn("This item is not owned by an actor.");
      return;
    }
    switch (e.type) {
      case "weapon":
        await this._rollWeaponAttack();
        break;
      default:
        await this._showItemCard();
        break;
    }
  }
  /**
   * Roll a weapon attack
   */
  async _rollWeaponAttack() {
    const e = this, t = this.actor, a = e.system, s = a.skill || "melee", i = u.skills[s];
    if (!i) {
      ui.notifications?.error(`Unknown skill: ${s}`);
      return;
    }
    const n = i.attribute, o = t.system.attributes[n]?.value || 2, l = t.system.skills[s]?.value || 0, h = `2d10 + ${o} + ${l}`, c = new Roll(h);
    await c.evaluate();
    const f = await renderTemplate("systems/unhallowed-metropolis/templates/chat/weapon-roll.hbs", {
      actor: t,
      item: this,
      roll: c,
      total: c.total,
      damage: a.damage,
      damageType: a.damageType,
      range: a.range,
      isRanged: a.weaponType === "ranged",
      ammo: a.currentAmmo,
      capacity: a.capacity
    });
    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      content: f,
      roll: c,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    }), a.weaponType === "ranged" && a.currentAmmo > 0 && await this.update({
      "system.currentAmmo": a.currentAmmo - 1
    });
  }
  /**
   * Roll damage for this weapon
   */
  async rollDamage() {
    const e = this;
    if (e.type !== "weapon")
      return null;
    const t = e.system.damage || "1d10", a = new Roll(t);
    return await a.evaluate(), await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${this.name} - Damage`,
      content: `
        <div class="um-damage-roll">
          <span class="damage-total">${a.total}</span>
          <span class="damage-type">${e.system.damageType || "lethal"}</span>
        </div>
      `,
      roll: a,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    }), a;
  }
  /**
   * Show an item description card in chat
   */
  async _showItemCard() {
    const e = this, t = `
      <div class="um-item-card">
        <header class="card-header">
          <img src="${this.img}" alt="${this.name}" width="36" height="36"/>
          <h3>${this.name}</h3>
        </header>
        <div class="card-content">
          ${e.system.description || "<p>No description available.</p>"}
        </div>
      </div>
    `;
    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: t,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    });
  }
  /**
   * Reload a ranged weapon
   */
  async reload() {
    const e = this;
    e.type !== "weapon" || e.system.weaponType !== "ranged" || (await this.update({
      "system.currentAmmo": e.system.capacity
    }), ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: `<div class="um-reload-notice">${this.actor?.name} reloads their ${this.name}.</div>`
    }));
  }
}
const re = foundry.appv1?.sheets?.ItemSheet ?? ItemSheet;
class le extends re {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["unhallowed-metropolis", "sheet", "item"],
      width: 520,
      height: 480,
      tabs: [
        { navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }
      ],
      resizable: !0
    });
  }
  /**
   * Return the correct template based on item type
   */
  get template() {
    return `systems/unhallowed-metropolis/templates/items/${this.item.type}-sheet.hbs`;
  }
  getData(e) {
    const t = super.getData(e);
    t.config = u;
    const a = this.item;
    switch (t.system = a.system, t.flags = a.flags, a.type) {
      case "weapon":
        t.skills = this._getWeaponSkills(), t.damageTypes = u.damageTypes, t.weaponTypes = u.weaponTypes;
        break;
      case "armor":
        t.hitLocations = u.hitLocations;
        break;
      case "affliction":
        t.severityLevels = u.afflictionSeverity;
        break;
    }
    return t;
  }
  /**
   * Get list of skills that can be used for weapons
   */
  _getWeaponSkills() {
    return {
      melee: game.i18n.localize("UM.Skills.Melee"),
      brawl: game.i18n.localize("UM.Skills.Brawl"),
      firearms: game.i18n.localize("UM.Skills.Firearms"),
      athletics: game.i18n.localize("UM.Skills.Athletics")
      // For thrown weapons
    };
  }
  activateListeners(e) {
    super.activateListeners(e), this.isEditable;
  }
}
function ce() {
  Hooks.on("combatStart", async (r) => {
    console.log("UM | Combat started");
  }), Hooks.on("preCreateCombatant", (r, e, t, a) => {
    const s = r.actor;
    s && (s.system?.derived?.initiative, r.updateSource({ initiative: null }));
  });
}
const G = class G {
  /**
   * Apply corruption to an actor
   */
  static async applyCorruption(e, t) {
    const i = e.system.corruption, n = i[t.type].value, o = i[t.type].threshold, l = n + t.amount;
    return await e.update({
      [`system.corruption.${t.type}.value`]: l
    }), t.silent || await this.createCorruptionMessage(e, t, l, o), l >= o ? await this.triggerAfflictionCheck(e, t.type) : null;
  }
  /**
   * Create a chat message for corruption gain
   */
  static async createCorruptionMessage(e, t, a, s) {
    const i = t.type === "physical" ? "Physical" : "Mental", n = Math.round(a / s * 100), o = n >= 100 ? "danger" : n >= 75 ? "warning" : "", l = `
      <div class="um-corruption-card ${t.type}">
        <header>
          <h3><i class="fas fa-${t.type === "physical" ? "biohazard" : "brain"}"></i> ${i} Corruption</h3>
        </header>
        <div class="corruption-details">
          <div class="source">${t.source || "Unknown Source"}</div>
          <div class="amount">+${t.amount} Corruption</div>
          <div class="progress-container">
            <div class="progress-bar ${o}" style="width: ${Math.min(n, 100)}%"></div>
            <span class="progress-text">${a} / ${s}</span>
          </div>
          ${a >= s ? `
            <div class="threshold-warning">
              <i class="fas fa-exclamation-triangle"></i>
              Threshold Reached! Rolling for Affliction...
            </div>
          ` : ""}
        </div>
      </div>
    `;
    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: e }),
      content: l,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    });
  }
  /**
   * Trigger an affliction check when threshold is reached
   */
  static async triggerAfflictionCheck(e, t) {
    const a = e.items, s = Array.from(a.values()).filter((c) => c.type === "affliction" && c.system.corruptionType === t).length, i = new Roll("1d10");
    await i.evaluate();
    const n = i.total || 1, o = Math.max(1, 6 - s), l = n <= o;
    let h = "minor";
    return n <= 2 ? h = "severe" : n <= 4 && (h = "moderate"), await e.update({
      [`system.corruption.${t}.value`]: 0
    }), await this.createAfflictionCheckMessage(e, {
      type: t,
      roll: n,
      threshold: o,
      triggered: l,
      severity: h,
      existingAfflictions: s
    }), {
      triggered: l,
      severity: h,
      roll: n,
      threshold: o,
      existingAfflictions: s
    };
  }
  /**
   * Create affliction check result message
   */
  static async createAfflictionCheckMessage(e, t) {
    const a = t.type === "physical" ? "Physical Affliction" : "Mental Disorder", s = t.type === "physical" ? "disease" : "head-side-virus", i = `
      <div class="um-affliction-check ${t.triggered ? "triggered" : "resisted"}">
        <header>
          <h3><i class="fas fa-${s}"></i> ${a} Check</h3>
        </header>
        <div class="check-details">
          <div class="roll-result">
            <span class="dice">🎲 ${t.roll}</span>
            <span class="vs">vs</span>
            <span class="threshold">${t.threshold}</span>
          </div>
          <div class="existing-count">
            Existing ${t.type === "physical" ? "Afflictions" : "Disorders"}: ${t.existingAfflictions}
          </div>
          ${t.triggered ? `
            <div class="outcome failure">
              <i class="fas fa-skull"></i>
              <strong>AFFLICTION GAINED!</strong>
              <span class="severity ${t.severity}">${t.severity.toUpperCase()}</span>
            </div>
            <div class="instruction">
              Open the ${t.type === "physical" ? "Afflictions" : "Disorders"} compendium 
              and select a ${t.severity} entry.
            </div>
          ` : `
            <div class="outcome success">
              <i class="fas fa-shield-alt"></i>
              <strong>Resisted!</strong>
              <span>Corruption reset to 0</span>
            </div>
          `}
        </div>
      </div>
    `;
    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: e }),
      content: i,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    });
  }
  /**
   * Quick corruption buttons for GM use
   */
  static getQuickCorruptionSources(e) {
    const t = e === "physical" ? this.PHYSICAL_SOURCES : this.MENTAL_SOURCES;
    return Object.entries(t).map(([a, s]) => ({
      key: a,
      amount: s.amount,
      label: s.label
    }));
  }
  /**
   * Get corruption status summary for an actor
   */
  static getCorruptionStatus(e) {
    const a = e.system.corruption, s = Math.round(a.physical.value / a.physical.threshold * 100), i = Math.round(a.mental.value / a.mental.threshold * 100);
    return {
      physical: {
        value: a.physical.value,
        threshold: a.physical.threshold,
        percent: s,
        danger: s >= 100 ? "critical" : s >= 75 ? "high" : s >= 50 ? "medium" : "low"
      },
      mental: {
        value: a.mental.value,
        threshold: a.mental.threshold,
        percent: i,
        danger: i >= 100 ? "critical" : i >= 75 ? "high" : i >= 50 ? "medium" : "low"
      }
    };
  }
};
G.PHYSICAL_SOURCES = {
  animateBite: { amount: 1, label: "Animate Bite" },
  vampireFeed: { amount: 2, label: "Vampire Feeding" },
  plagueExposure: { amount: 1, label: "Plague Exposure" },
  alchemicalMutation: { amount: 1, label: "Alchemical Mutation" },
  galvanicSurgery: { amount: 2, label: "Galvanic Surgery" },
  dhampirPowers: { amount: 1, label: "Dhampir Power Use" },
  necroticWound: { amount: 1, label: "Necrotic Wound" }
}, G.MENTAL_SOURCES = {
  witnessHorror: { amount: 1, label: "Witness Horror" },
  killInnocent: { amount: 2, label: "Kill an Innocent" },
  useDeadlyForce: { amount: 1, label: "Unnecessary Deadly Force" },
  psychicOverreach: { amount: 1, label: "Psychic Overreach" },
  betrayal: { amount: 2, label: "Major Betrayal" },
  torture: { amount: 2, label: "Commit Torture" },
  consortUndead: { amount: 1, label: "Consort with Undead" },
  darkRitual: { amount: 2, label: "Perform Dark Ritual" }
};
let y = G;
const Q = class Q {
  /**
   * Activate a psychic power
   */
  static async activatePower(e, t, a = {}) {
    const s = e, i = t.system, n = s.system, o = this.DEVOTIONS[i.devotion];
    if (!o)
      throw new Error(`Unknown devotion: ${i.devotion}`);
    const l = n.skills[o.skill]?.value || 0, h = n.attributes[o.attribute]?.value || 2, c = a.modifier || 0, f = a.targetNumber || i.targetNumber || 15, U = `2d10 + ${h} + ${l} + ${c}`, C = new Roll(U);
    await C.evaluate();
    const M = C.total || 0, v = C.dice[0].results.map((O) => O.result), S = v[0] === 10 && v[1] === 10, d = v[0] === 1 && v[1] === 1, w = M >= f, D = Math.abs(M - f), N = Math.floor(D / 4) + (w ? 1 : 0);
    let m = i.mentalCost || 1;
    d && (m *= 2), S && w && (m = 0);
    const g = n.derived.mentalHealth.value;
    await e.update({
      "system.derived.mentalHealth.value": Math.max(0, g - m)
    });
    let T = !1, R = 0;
    (d || i.corruptionRisk && !w) && (R = d ? 2 : 1, T = !0, await y.applyCorruption(e, {
      type: "mental",
      amount: R,
      source: `Psychic Overreach: ${t.name}`
    }));
    const I = {
      success: w,
      roll: M,
      target: f,
      degrees: N,
      critical: S,
      botch: d,
      mentalCost: m,
      corruptionGained: T,
      corruptionAmount: R
    };
    return await this.createPowerActivationMessage(e, t, I, v), I;
  }
  /**
   * Create chat message for power activation
   */
  static async createPowerActivationMessage(e, t, a, s) {
    const i = t.system, n = this.DEVOTIONS[i.devotion], o = a.critical ? "critical-success" : a.botch ? "critical-failure" : a.success ? "success" : "failure", l = `
      <div class="um-power-card ${o}">
        <header>
          <h3><i class="fas fa-hand-sparkles"></i> ${t.name}</h3>
          <span class="devotion">${n?.label || i.devotion}</span>
        </header>
        
        <div class="roll-section">
          <div class="dice-display">
            <span class="die ${s[0] === 10 ? "max" : s[0] === 1 ? "min" : ""}">${s[0]}</span>
            <span class="die ${s[1] === 10 ? "max" : s[1] === 1 ? "min" : ""}">${s[1]}</span>
          </div>
          <div class="roll-result">
            <span class="total">${a.roll}</span>
            <span class="vs">vs TN</span>
            <span class="target">${a.target}</span>
          </div>
        </div>

        <div class="outcome ${o}">
          ${a.critical ? '<i class="fas fa-star"></i> CRITICAL SUCCESS!' : a.botch ? '<i class="fas fa-skull-crossbones"></i> BOTCH!' : a.success ? `<i class="fas fa-check"></i> Success (${a.degrees} Degree${a.degrees > 1 ? "s" : ""})` : '<i class="fas fa-times"></i> Failure'}
        </div>

        <div class="costs">
          ${a.mentalCost > 0 ? `
            <div class="cost mental">
              <i class="fas fa-brain"></i>
              <span>-${a.mentalCost} Mental Health</span>
            </div>
          ` : ""}
          ${a.corruptionGained ? `
            <div class="cost corruption">
              <i class="fas fa-head-side-virus"></i>
              <span>+${a.corruptionAmount} Mental Corruption</span>
            </div>
          ` : ""}
        </div>

        ${i.effect ? `
          <div class="effect-description">
            <label>Effect:</label>
            <p>${i.effect}</p>
          </div>
        ` : ""}
      </div>
    `;
    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: e }),
      content: l,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    });
  }
  /**
   * Get all psychic powers for an actor
   */
  static getPowers(e) {
    const t = e.items;
    return Array.from(t.values()).filter((a) => a.type === "psychicPower");
  }
  /**
   * Get powers organized by devotion
   */
  static getPowersByDevotion(e) {
    const t = this.getPowers(e), a = {};
    for (const [s] of Object.entries(this.DEVOTIONS))
      a[s] = [];
    for (const s of t) {
      const i = s.system.devotion;
      a[i] && a[i].push(s);
    }
    return a;
  }
  /**
   * Check if actor can use psychic powers (has meditation skill)
   */
  static canUsePsychicPowers(e) {
    return (e.system.skills?.meditation?.value || 0) > 0;
  }
  /**
   * Calculate psychic strain for sustained powers
   */
  static calculatePsychicStrain(e) {
    const t = this.getPowers(e);
    let a = 0;
    for (const s of t) {
      const i = s.system;
      i.sustained && i.active && (a += i.strainCost || 1);
    }
    return a;
  }
};
Q.DEVOTIONS = {
  empathy: {
    label: "Empathy",
    skill: "empathy",
    attribute: "wit",
    description: "Sense and manipulate emotions"
  },
  magnetism: {
    label: "Magnetism",
    skill: "concentration",
    attribute: "coordination",
    description: "Influence and control minds"
  },
  necromancy: {
    label: "Necromancy",
    skill: "occult",
    attribute: "intellect",
    description: "Commune with and control the dead"
  },
  clairvoyance: {
    label: "Clairvoyance",
    skill: "awareness",
    attribute: "wit",
    description: "See beyond normal perception"
  },
  psychokinesis: {
    label: "Psychokinesis",
    skill: "concentration",
    attribute: "coordination",
    description: "Move objects with the mind"
  },
  telepathy: {
    label: "Telepathy",
    skill: "meditation",
    attribute: "will",
    description: "Read and transmit thoughts"
  }
};
let k = Q;
const A = class A {
  /**
   * Convert currency to total pence for calculations
   */
  static toPence(e) {
    return e.pounds * this.PENCE_PER_POUND + e.shillings * this.PENCE_PER_SHILLING + e.pence;
  }
  /**
   * Convert total pence back to currency
   */
  static fromPence(e) {
    const t = Math.floor(e / this.PENCE_PER_POUND), a = e % this.PENCE_PER_POUND, s = Math.floor(a / this.PENCE_PER_SHILLING), i = a % this.PENCE_PER_SHILLING;
    return { pounds: t, shillings: s, pence: i };
  }
  /**
   * Add two currency values
   */
  static add(e, t) {
    const a = this.toPence(e) + this.toPence(t);
    return this.fromPence(a);
  }
  /**
   * Subtract currency (b from a)
   */
  static subtract(e, t) {
    const a = Math.max(0, this.toPence(e) - this.toPence(t));
    return this.fromPence(a);
  }
  /**
   * Check if actor can afford a cost
   */
  static canAfford(e, t) {
    const s = e.system.currency;
    return this.toPence(s) >= this.toPence(t);
  }
  /**
   * Process a purchase transaction
   */
  static async purchase(e, t, a) {
    const i = e.system.currency;
    if (!this.canAfford(e, t))
      return {
        success: !1,
        newBalance: i,
        message: `Cannot afford ${a}!`
      };
    const n = this.subtract(i, t);
    return await e.update({
      "system.currency.pounds": n.pounds,
      "system.currency.shillings": n.shillings,
      "system.currency.pence": n.pence
    }), await this.createTransactionMessage(e, {
      type: "purchase",
      item: a,
      amount: t,
      balance: n
    }), {
      success: !0,
      newBalance: n,
      message: `Purchased ${a}`
    };
  }
  /**
   * Add currency to actor (payment received, loot found, etc.)
   */
  static async addFunds(e, t, a) {
    const i = e.system.currency, n = this.add(i, t);
    return await e.update({
      "system.currency.pounds": n.pounds,
      "system.currency.shillings": n.shillings,
      "system.currency.pence": n.pence
    }), await this.createTransactionMessage(e, {
      type: "income",
      item: a,
      amount: t,
      balance: n
    }), {
      success: !0,
      newBalance: n,
      message: `Received funds from ${a}`
    };
  }
  /**
   * Format currency for display
   */
  static format(e) {
    const t = [];
    return e.pounds > 0 && t.push(`£${e.pounds}`), e.shillings > 0 && t.push(`${e.shillings}s`), (e.pence > 0 || t.length === 0) && t.push(`${e.pence}d`), t.join(" ");
  }
  /**
   * Parse a string like "2/6" (2 shillings 6 pence) or "£5" into Currency
   */
  static parse(e) {
    const t = { pounds: 0, shillings: 0, pence: 0 }, a = e.match(/£(\d+)|(\d+)L/i);
    a && (t.pounds = parseInt(a[1] || a[2]));
    const s = e.match(/(\d+)\/(\d+)|(\d+)s\s*(\d*)d?|(\d+)d/i);
    return s && (s[1] && s[2] ? (t.shillings = parseInt(s[1]), t.pence = parseInt(s[2])) : s[3] ? (t.shillings = parseInt(s[3]), t.pence = parseInt(s[4] || "0")) : s[5] && (t.pence = parseInt(s[5]))), t;
  }
  /**
   * Create transaction chat message
   */
  static async createTransactionMessage(e, t) {
    const a = t.type === "purchase", s = a ? "fa-coins" : "fa-hand-holding-usd", i = a ? "expense" : "income", n = `
      <div class="um-transaction-card ${t.type}">
        <header>
          <h3><i class="fas ${s}"></i> ${a ? "Purchase" : "Income"}</h3>
        </header>
        <div class="transaction-details">
          <div class="item-name">${t.item}</div>
          <div class="amount ${i}">
            ${a ? "-" : "+"}${this.format(t.amount)}
          </div>
          <div class="balance">
            <label>New Balance:</label>
            <span>${this.format(t.balance)}</span>
          </div>
        </div>
      </div>
    `;
    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: e }),
      content: n,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    });
  }
  /**
   * Get actor's current balance
   */
  static getBalance(e) {
    return e.system.currency;
  }
  /**
   * Transfer funds between actors
   */
  static async transfer(e, t, a, s) {
    if (!this.canAfford(e, a))
      return {
        success: !1,
        newBalance: this.getBalance(e),
        message: `${e.name} cannot afford this transfer!`
      };
    const n = e.system.currency, o = this.subtract(n, a);
    await e.update({
      "system.currency.pounds": o.pounds,
      "system.currency.shillings": o.shillings,
      "system.currency.pence": o.pence
    });
    const h = t.system.currency, c = this.add(h, a);
    await t.update({
      "system.currency.pounds": c.pounds,
      "system.currency.shillings": c.shillings,
      "system.currency.pence": c.pence
    });
    const f = `
      <div class="um-transaction-card transfer">
        <header>
          <h3><i class="fas fa-exchange-alt"></i> Fund Transfer</h3>
        </header>
        <div class="transaction-details">
          <div class="transfer-parties">
            <span class="from">${e.name}</span>
            <i class="fas fa-arrow-right"></i>
            <span class="to">${t.name}</span>
          </div>
          <div class="amount">${this.format(a)}</div>
          <div class="reason">${s}</div>
        </div>
      </div>
    `;
    return await ChatMessage.create({
      content: f,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    }), {
      success: !0,
      newBalance: o,
      message: `Transferred ${this.format(a)} to ${t.name}`
    };
  }
};
A.PENCE_PER_SHILLING = 12, A.SHILLINGS_PER_POUND = 20, A.PENCE_PER_POUND = 240, A.STARTING_WEALTH = {
  gutter: { pounds: 0, shillings: 5, pence: 0 },
  working: { pounds: 1, shillings: 0, pence: 0 },
  middle: { pounds: 5, shillings: 0, pence: 0 },
  upperMiddle: { pounds: 20, shillings: 0, pence: 0 },
  upper: { pounds: 100, shillings: 0, pence: 0 },
  aristocracy: { pounds: 500, shillings: 0, pence: 0 }
}, A.COMMON_PRICES = {
  // Basic necessities
  mealCheap: { pounds: 0, shillings: 0, pence: 3, label: "Cheap Meal" },
  mealDecent: { pounds: 0, shillings: 1, pence: 0, label: "Decent Meal" },
  mealFine: { pounds: 0, shillings: 5, pence: 0, label: "Fine Dining" },
  // Lodging
  flophouseNight: { pounds: 0, shillings: 0, pence: 6, label: "Flophouse (night)" },
  innNight: { pounds: 0, shillings: 2, pence: 0, label: "Inn (night)" },
  hotelNight: { pounds: 0, shillings: 10, pence: 0, label: "Hotel (night)" },
  // Transportation
  cabRide: { pounds: 0, shillings: 1, pence: 0, label: "Cab Ride" },
  trainTicket: { pounds: 0, shillings: 5, pence: 0, label: "Train Ticket" },
  // Services
  doctorVisit: { pounds: 0, shillings: 10, pence: 0, label: "Doctor Visit" },
  undertakerBasic: { pounds: 2, shillings: 0, pence: 0, label: "Basic Funeral" },
  // Weapons & Gear
  pistolCheap: { pounds: 1, shillings: 0, pence: 0, label: "Cheap Pistol" },
  pistolQuality: { pounds: 5, shillings: 0, pence: 0, label: "Quality Pistol" },
  swordCane: { pounds: 3, shillings: 0, pence: 0, label: "Sword Cane" },
  // Ammunition
  bulletBox: { pounds: 0, shillings: 2, pence: 0, label: "Box of Bullets (20)" }
};
let p = A;
const H = class H {
  /**
   * Make an attack roll
   */
  static async attack(e, t = {}) {
    const s = e.system, i = t.weapon;
    let n = "brawl", o = "vitality";
    if (i) {
      const g = i.system.weaponType;
      g === "ranged" ? (n = "firearms", o = "coordination") : g === "melee" ? (n = "melee", o = "coordination") : g === "thrown" && (n = "athletics", o = "coordination");
    }
    const l = s.skills[n]?.value || 0, h = s.attributes[o]?.value || 2;
    let c = t.modifier || 0;
    t.calledShot && t.aimedLocation && (c += this.CALLED_SHOT_MODIFIERS[t.aimedLocation] || 0), t.aimed && (c += 2), t.autofire && (c -= 2);
    const f = t.targetNumber || 15, U = `2d10 + ${h} + ${l} + ${c}`, C = new Roll(U);
    await C.evaluate();
    const M = C.total || 0, v = C.dice[0].results.map((g) => g.result), S = v[0] === 10 && v[1] === 10, d = v[0] === 1 && v[1] === 1, w = M >= f || S, D = Math.abs(M - f), N = w ? Math.floor(D / 4) + 1 : 0, m = {
      success: w && !d,
      roll: M,
      target: f,
      degrees: N,
      critical: S,
      botch: d,
      effects: []
    };
    if (m.success) {
      if (t.calledShot && t.aimedLocation ? m.hitLocation = {
        location: t.aimedLocation,
        label: t.aimedLocation.replace(/([A-Z])/g, " $1").trim(),
        roll: 0,
        modifier: this.CALLED_SHOT_MODIFIERS[t.aimedLocation] || 0
      } : m.hitLocation = await this.rollHitLocation(), i) {
        const g = i.system.damage || "1d10", T = Math.floor(s.attributes.vitality?.value / 2) || 0, I = `(${g} + ${T}) * ${S ? 2 : 1}`, O = new Roll(I);
        if (await O.evaluate(), m.damage = O.total || 0, m.damageRoll = I, t.autofire && N > 1) {
          const J = Math.min(N - 1, 3);
          m.effects.push(`${J} additional hits!`), m.damage = m.damage * (1 + J);
        }
      } else {
        const g = s.attributes.vitality?.value || 2;
        m.damage = g, m.damageRoll = `${g} (Vitality)`;
      }
      if (m.damage !== void 0) {
        const g = this.getWoundSeverity(m.damage);
        if (m.hitLocation) {
          const T = this.WOUND_EFFECTS[m.hitLocation.location]?.[g];
          T && m.effects.push(...T.effects);
        }
      }
    }
    return S && m.effects.push("CRITICAL HIT! Double damage!"), d && m.effects.push("BOTCH! Weapon jam, dropped, or friendly fire!"), await this.createAttackMessage(e, m, i, t), m;
  }
  /**
   * Roll hit location
   */
  static async rollHitLocation() {
    const e = new Roll("1d10");
    await e.evaluate();
    const t = e.total || 1;
    return {
      ...this.HIT_LOCATIONS[t] || this.HIT_LOCATIONS[6],
      roll: t,
      modifier: 0
    };
  }
  /**
   * Get wound severity from damage
   */
  static getWoundSeverity(e) {
    return e >= this.WOUND_THRESHOLDS.mortal ? "mortal" : e >= this.WOUND_THRESHOLDS.critical ? "critical" : e >= this.WOUND_THRESHOLDS.serious ? "serious" : "light";
  }
  /**
   * Apply damage to target with armor consideration
   */
  static async applyDamage(e, t, a, s = {}) {
    const n = e.system;
    let o = 0;
    s.ignoreArmor || (o = this.getArmorAtLocation(e, a));
    const l = Math.min(t, o), h = Math.max(0, t - o);
    if (h > 0) {
      const c = n.derived.health.value;
      await e.update({
        "system.derived.health.value": Math.max(0, c - h)
      });
    }
    return { finalDamage: h, absorbed: l };
  }
  /**
   * Get total armor protection at a location
   */
  static getArmorAtLocation(e, t) {
    const a = e.items;
    let s = 0;
    for (const i of a.values()) {
      if (i.type !== "armor") continue;
      const n = i.system;
      if (!n.equipped) continue;
      const o = n.coverage || {};
      (o[t] || o.all) && (s += n.protection || 0);
    }
    return s;
  }
  /**
   * Create attack chat message
   */
  static async createAttackMessage(e, t, a, s) {
    const i = a?.name || "Unarmed", n = t.critical ? "critical-success" : t.botch ? "critical-failure" : t.success ? "success" : "failure", o = `
      <div class="um-attack-card ${n}">
        <header>
          <h3><i class="fas fa-crosshairs"></i> Attack: ${i}</h3>
          ${s.calledShot ? `<span class="called-shot">Called Shot: ${s.aimedLocation}</span>` : ""}
          ${s.aimed ? '<span class="aimed"><i class="fas fa-bullseye"></i> Aimed</span>' : ""}
          ${s.autofire ? '<span class="autofire"><i class="fas fa-bolt"></i> Autofire</span>' : ""}
        </header>

        <div class="roll-section">
          <div class="roll-result">
            <span class="total">${t.roll}</span>
            <span class="vs">vs TN</span>
            <span class="target">${t.target}</span>
          </div>
        </div>

        <div class="outcome ${n}">
          ${t.critical ? '<i class="fas fa-star"></i> CRITICAL HIT!' : t.botch ? '<i class="fas fa-skull-crossbones"></i> BOTCH!' : t.success ? `<i class="fas fa-check"></i> Hit! (${t.degrees} Degree${t.degrees > 1 ? "s" : ""})` : '<i class="fas fa-times"></i> Miss!'}
        </div>

        ${t.success ? `
          <div class="damage-section">
            <div class="hit-location">
              <i class="fas fa-body"></i>
              <label>Hit Location:</label>
              <span>${t.hitLocation?.label || "Unknown"}</span>
              ${t.hitLocation?.roll ? `<span class="roll">(${t.hitLocation.roll})</span>` : ""}
            </div>
            <div class="damage">
              <i class="fas fa-heart-broken"></i>
              <label>Damage:</label>
              <span class="damage-value">${t.damage}</span>
            </div>
            ${t.effects.length > 0 ? `
              <div class="effects">
                <label>Effects:</label>
                <ul>
                  ${t.effects.map((l) => `<li>${l}</li>`).join("")}
                </ul>
              </div>
            ` : ""}
          </div>
          <div class="apply-damage">
            <button type="button" class="apply-damage-btn" data-damage="${t.damage}" data-location="${t.hitLocation?.location}">
              <i class="fas fa-user-injured"></i> Apply Damage to Target
            </button>
          </div>
        ` : ""}
      </div>
    `;
    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: e }),
      content: o,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    });
  }
  /**
   * Get available weapons for an actor
   */
  static getWeapons(e) {
    const t = e.items;
    return Array.from(t.values()).filter((a) => a.type === "weapon");
  }
  /**
   * Quick attack with a specific weapon
   */
  static async quickAttack(e, t) {
    const a = e.items.get(t);
    if (!a)
      throw new Error("Weapon not found");
    return this.attack(e, { weapon: a, targetNumber: 15 });
  }
};
H.HIT_LOCATIONS = {
  1: { location: "head", label: "Head" },
  2: { location: "rightArm", label: "Right Arm" },
  3: { location: "rightArm", label: "Right Arm" },
  4: { location: "leftArm", label: "Left Arm" },
  5: { location: "leftArm", label: "Left Arm" },
  6: { location: "torso", label: "Torso" },
  7: { location: "torso", label: "Torso" },
  8: { location: "rightLeg", label: "Right Leg" },
  9: { location: "rightLeg", label: "Right Leg" },
  10: { location: "leftLeg", label: "Left Leg" }
}, H.CALLED_SHOT_MODIFIERS = {
  head: -6,
  torso: 0,
  rightArm: -4,
  leftArm: -4,
  rightLeg: -4,
  leftLeg: -4,
  hand: -8,
  eye: -10,
  heart: -8
}, H.WOUND_THRESHOLDS = {
  light: 1,
  // 1-4 damage
  serious: 5,
  // 5-8 damage
  critical: 9,
  // 9-12 damage
  mortal: 13
  // 13+ damage
}, H.WOUND_EFFECTS = {
  head: {
    light: { location: "head", severity: "light", penalty: -1, effects: ["Stunned for 1 round"] },
    serious: { location: "head", severity: "serious", penalty: -2, effects: ["Stunned 1d5 rounds", "Bleeding"] },
    critical: { location: "head", severity: "critical", penalty: -4, effects: ["Unconscious", "Severe bleeding"] },
    mortal: { location: "head", severity: "mortal", penalty: -6, effects: ["Death imminent", "Massive trauma"] }
  },
  torso: {
    light: { location: "torso", severity: "light", penalty: 0, effects: ["Winded"] },
    serious: { location: "torso", severity: "serious", penalty: -1, effects: ["Internal bleeding"] },
    critical: { location: "torso", severity: "critical", penalty: -3, effects: ["Organ damage", "Severe bleeding"] },
    mortal: { location: "torso", severity: "mortal", penalty: -5, effects: ["Dying", "Massive internal trauma"] }
  },
  rightArm: {
    light: { location: "rightArm", severity: "light", penalty: -1, effects: ["Arm -1 to actions"] },
    serious: { location: "rightArm", severity: "serious", penalty: -2, effects: ["Arm useless this round"] },
    critical: { location: "rightArm", severity: "critical", penalty: -3, effects: ["Arm disabled"] },
    mortal: { location: "rightArm", severity: "mortal", penalty: -4, effects: ["Arm destroyed"] }
  },
  leftArm: {
    light: { location: "leftArm", severity: "light", penalty: -1, effects: ["Arm -1 to actions"] },
    serious: { location: "leftArm", severity: "serious", penalty: -2, effects: ["Arm useless this round"] },
    critical: { location: "leftArm", severity: "critical", penalty: -3, effects: ["Arm disabled"] },
    mortal: { location: "leftArm", severity: "mortal", penalty: -4, effects: ["Arm destroyed"] }
  },
  rightLeg: {
    light: { location: "rightLeg", severity: "light", penalty: -1, effects: ["Movement -1"] },
    serious: { location: "rightLeg", severity: "serious", penalty: -2, effects: ["Movement halved", "Knocked prone"] },
    critical: { location: "rightLeg", severity: "critical", penalty: -3, effects: ["Cannot walk"] },
    mortal: { location: "rightLeg", severity: "mortal", penalty: -4, effects: ["Leg destroyed"] }
  },
  leftLeg: {
    light: { location: "leftLeg", severity: "light", penalty: -1, effects: ["Movement -1"] },
    serious: { location: "leftLeg", severity: "serious", penalty: -2, effects: ["Movement halved", "Knocked prone"] },
    critical: { location: "leftLeg", severity: "critical", penalty: -3, effects: ["Cannot walk"] },
    mortal: { location: "leftLeg", severity: "mortal", penalty: -4, effects: ["Leg destroyed"] }
  }
};
let b = H;
class _ extends Application {
  constructor() {
    super(...arguments), this.trackedNPCs = /* @__PURE__ */ new Map(), this.encounter = null, this.sessionNotes = "", this.partyCorruption = /* @__PURE__ */ new Map();
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      id: "um-gm-hub",
      title: "GM Hub - Unhallowed Metropolis",
      template: "systems/unhallowed-metropolis/templates/apps/gm-hub.hbs",
      classes: ["unhallowed-metropolis", "gm-hub"],
      width: 800,
      height: 700,
      resizable: !0,
      tabs: [
        { navSelector: ".hub-tabs", contentSelector: ".hub-content", initial: "encounter" }
      ]
    });
  }
  getData() {
    const e = game.actors?.filter(
      (i) => i.type === "character" && i.hasPlayerOwner
    ) || [], t = game.actors?.filter(
      (i) => i.type === "npc" || i.type === "creature" || i.type === "animate" || i.type === "vampire"
    ) || [], a = e.map((i) => {
      const n = y.getCorruptionStatus(i);
      return {
        id: i.id,
        name: i.name,
        img: i.img,
        physical: n.physical,
        mental: n.mental
      };
    }), s = Array.from(this.trackedNPCs.values()).map((i) => ({
      id: i.actor.id,
      name: i.actor.name,
      img: i.actor.img,
      currentHealth: i.actor.system.derived.health.value,
      maxHealth: i.actor.system.derived.health.max,
      healthPercent: Math.round(i.actor.system.derived.health.value / i.actor.system.derived.health.max * 100),
      actionsRemaining: i.actionsRemaining,
      maxActions: i.actor.system.derived.actions,
      conditions: i.conditions,
      notes: i.notes
    }));
    return {
      playerCharacters: e,
      worldNPCs: t,
      trackedNPCs: s,
      partyCorruption: a,
      encounter: this.encounter,
      sessionNotes: this.sessionNotes,
      targetNumbers: this.getTargetNumberReference(),
      hitLocations: b.HIT_LOCATIONS,
      corruptionSources: {
        physical: y.getQuickCorruptionSources("physical"),
        mental: y.getQuickCorruptionSources("mental")
      },
      commonPrices: p.COMMON_PRICES
    };
  }
  /**
   * Target Number Reference Table
   */
  getTargetNumberReference() {
    return [
      { tn: 7, difficulty: "Very Easy", description: "Routine tasks anyone can do" },
      { tn: 11, difficulty: "Easy", description: "Simple tasks with minimal training" },
      { tn: 15, difficulty: "Average", description: "Standard difficulty for trained individuals" },
      { tn: 19, difficulty: "Challenging", description: "Requires skill and concentration" },
      { tn: 23, difficulty: "Difficult", description: "Taxing even for experts" },
      { tn: 27, difficulty: "Extreme", description: "Nearly impossible feats" },
      { tn: 31, difficulty: "Legendary", description: "Tales will be told of this" }
    ];
  }
  activateListeners(e) {
    super.activateListeners(e), e.find(".add-npc-to-tracker").on("click", this._onAddNPCToTracker.bind(this)), e.find(".remove-npc-from-tracker").on("click", this._onRemoveNPCFromTracker.bind(this)), e.find(".npc-quick-action").on("click", this._onNPCQuickAction.bind(this)), e.find(".reset-npc-actions").on("click", this._onResetNPCActions.bind(this)), e.find(".npc-damage-btn").on("click", this._onNPCDamage.bind(this)), e.find(".npc-heal-btn").on("click", this._onNPCHeal.bind(this)), e.find(".open-npc-sheet").on("click", this._onOpenNPCSheet.bind(this)), e.find(".start-encounter").on("click", this._onStartEncounter.bind(this)), e.find(".end-encounter").on("click", this._onEndEncounter.bind(this)), e.find(".next-round").on("click", this._onNextRound.bind(this)), e.find(".roll-group-initiative").on("click", this._onRollGroupInitiative.bind(this)), e.find(".apply-corruption-btn").on("click", this._onApplyCorruption.bind(this)), e.find(".quick-corruption").on("click", this._onQuickCorruption.bind(this)), e.find(".gm-quick-roll").on("click", this._onGMQuickRoll.bind(this)), e.find(".roll-hit-location").on("click", this._onRollHitLocation.bind(this)), e.find(".roll-d10").on("click", this._onRollD10.bind(this)), e.find(".roll-2d10").on("click", this._onRoll2D10.bind(this)), e.find(".session-notes-input").on("change", this._onSessionNotesChange.bind(this)), e.find(".npc-list .npc-entry").each((t, a) => {
      a.addEventListener("dragstart", (s) => this._onDragNPC(s));
    }), e.find(".npc-tracker").on("drop", this._onDropNPC.bind(this)), e.find(".npc-tracker").on("dragover", (t) => t.preventDefault());
  }
  /**
   * Add NPC to tracker
   */
  async _onAddNPCToTracker(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("actor-id"), a = game.actors?.get(t);
    a && !this.trackedNPCs.has(t) && (this.trackedNPCs.set(t, {
      actor: a,
      currentHealth: a.system.derived.health.value,
      maxHealth: a.system.derived.health.max,
      actionsRemaining: a.system.derived.actions,
      conditions: [],
      notes: ""
    }), this.render(!1));
  }
  /**
   * Remove NPC from tracker
   */
  async _onRemoveNPCFromTracker(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("actor-id");
    this.trackedNPCs.delete(t), this.render(!1);
  }
  /**
   * NPC Quick Action (use one action)
   */
  async _onNPCQuickAction(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("actor-id"), a = this.trackedNPCs.get(t);
    a && a.actionsRemaining > 0 && (a.actionsRemaining--, this.render(!1));
  }
  /**
   * Reset NPC actions
   */
  async _onResetNPCActions(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("actor-id"), a = this.trackedNPCs.get(t);
    a && (a.actionsRemaining = a.actor.system.derived.actions, this.render(!1));
  }
  /**
   * Apply damage to NPC
   */
  async _onNPCDamage(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("actor-id"), a = this.trackedNPCs.get(t);
    if (a) {
      const s = await this._promptForNumber("Damage Amount", 1);
      if (s > 0) {
        const i = a.actor.system;
        await a.actor.update({
          "system.derived.health.value": Math.max(0, i.derived.health.value - s)
        }), this.render(!1);
      }
    }
  }
  /**
   * Heal NPC
   */
  async _onNPCHeal(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("actor-id"), a = this.trackedNPCs.get(t);
    if (a) {
      const s = await this._promptForNumber("Healing Amount", 1);
      if (s > 0) {
        const i = a.actor.system;
        await a.actor.update({
          "system.derived.health.value": Math.min(i.derived.health.max, i.derived.health.value + s)
        }), this.render(!1);
      }
    }
  }
  /**
   * Open NPC sheet
   */
  async _onOpenNPCSheet(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("actor-id"), a = game.actors?.get(t);
    a && a.sheet?.render(!0);
  }
  /**
   * Start new encounter
   */
  async _onStartEncounter(e) {
    e.preventDefault(), this.encounter = {
      name: `Encounter ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`,
      npcs: Array.from(this.trackedNPCs.values()),
      round: 1,
      active: !0
    };
    for (const t of this.trackedNPCs.values())
      t.actionsRemaining = t.actor.system.derived.actions;
    await ChatMessage.create({
      content: `<div class="um-encounter-start">
        <h3><i class="fas fa-swords"></i> Encounter Started!</h3>
        <p>Round 1 begins with ${this.trackedNPCs.size} combatants.</p>
      </div>`,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    }), this.render(!1);
  }
  /**
   * End encounter
   */
  async _onEndEncounter(e) {
    e.preventDefault(), this.encounter && await ChatMessage.create({
      content: `<div class="um-encounter-end">
          <h3><i class="fas fa-flag-checkered"></i> Encounter Ended!</h3>
          <p>Combat concluded after ${this.encounter.round} rounds.</p>
        </div>`,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    }), this.encounter = null, this.render(!1);
  }
  /**
   * Advance to next round
   */
  async _onNextRound(e) {
    if (e.preventDefault(), this.encounter) {
      this.encounter.round++;
      for (const t of this.trackedNPCs.values())
        t.actionsRemaining = t.actor.system.derived.actions;
      await ChatMessage.create({
        content: `<div class="um-round-advance">
          <h3><i class="fas fa-hourglass-half"></i> Round ${this.encounter.round}</h3>
          <p>All combatants refresh their actions.</p>
        </div>`,
        type: CONST.CHAT_MESSAGE_STYLES.OTHER
      }), this.render(!1);
    }
  }
  /**
   * Roll initiative for all tracked NPCs
   */
  async _onRollGroupInitiative(e) {
    e.preventDefault();
    const t = [];
    for (const s of this.trackedNPCs.values()) {
      const n = s.actor.system.derived.initiative || 4, o = new Roll("1d10");
      await o.evaluate(), t.push({
        name: s.actor.name || "Unknown",
        roll: o.total || 0,
        init: n,
        total: (o.total || 0) + n
      });
    }
    t.sort((s, i) => i.total - s.total);
    const a = `
      <div class="um-group-initiative">
        <h3><i class="fas fa-sort-numeric-down"></i> Initiative Order</h3>
        <ol class="initiative-list">
          ${t.map((s) => `
            <li>
              <span class="name">${s.name}</span>
              <span class="total">${s.total}</span>
              <span class="breakdown">(${s.roll} + ${s.init})</span>
            </li>
          `).join("")}
        </ol>
      </div>
    `;
    await ChatMessage.create({
      content: a,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    });
  }
  /**
   * Apply corruption to a character
   */
  async _onApplyCorruption(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("actor-id"), a = $(e.currentTarget).data("type"), s = game.actors?.get(t);
    if (s) {
      const i = await this._promptForNumber(`${a} Corruption Amount`, 1);
      i > 0 && (await y.applyCorruption(s, {
        type: a,
        amount: i,
        source: "GM Applied"
      }), this.render(!1));
    }
  }
  /**
   * Quick corruption from predefined sources
   */
  async _onQuickCorruption(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("actor-id"), a = $(e.currentTarget).data("type"), s = $(e.currentTarget).data("source"), i = parseInt($(e.currentTarget).data("amount")), n = game.actors?.get(t);
    n && i > 0 && (await y.applyCorruption(n, {
      type: a,
      amount: i,
      source: s
    }), this.render(!1));
  }
  /**
   * GM Quick Roll
   */
  async _onGMQuickRoll(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("formula") || "2d10", a = $(e.currentTarget).data("label") || "GM Roll", s = new Roll(t);
    await s.evaluate(), await ChatMessage.create({
      content: `<div class="um-gm-roll">
        <h3><i class="fas fa-dice"></i> ${a}</h3>
        <div class="roll-result">${s.total}</div>
        <div class="formula">${t}</div>
      </div>`,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER,
      whisper: game.users?.filter((i) => i.isGM).map((i) => i.id) || []
    });
  }
  /**
   * Roll hit location
   */
  async _onRollHitLocation(e) {
    e.preventDefault();
    const t = await b.rollHitLocation();
    await ChatMessage.create({
      content: `<div class="um-hit-location">
        <h3><i class="fas fa-crosshairs"></i> Hit Location</h3>
        <div class="location">${t.label}</div>
        <div class="roll">🎲 ${t.roll}</div>
      </div>`,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    });
  }
  /**
   * Roll 1d10
   */
  async _onRollD10(e) {
    e.preventDefault();
    const t = new Roll("1d10");
    await t.evaluate(), await ChatMessage.create({
      content: `<div class="um-quick-roll">
        <span class="dice">🎲</span>
        <span class="result">${t.total}</span>
      </div>`,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    });
  }
  /**
   * Roll 2d10
   */
  async _onRoll2D10(e) {
    e.preventDefault();
    const t = new Roll("2d10");
    await t.evaluate(), await ChatMessage.create({
      content: `<div class="um-quick-roll">
        <span class="dice">🎲🎲</span>
        <span class="result">${t.total}</span>
      </div>`,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    });
  }
  /**
   * Session notes change handler
   */
  _onSessionNotesChange(e) {
    this.sessionNotes = $(e.currentTarget).val();
  }
  /**
   * Drag NPC handler
   */
  _onDragNPC(e) {
    const t = $(e.currentTarget).data("actor-id");
    e.dataTransfer?.setData("text/plain", t);
  }
  /**
   * Drop NPC handler
   */
  async _onDropNPC(e) {
    e.preventDefault();
    const t = e.originalEvent?.dataTransfer?.getData("text/plain");
    if (t) {
      const a = game.actors?.get(t);
      a && !this.trackedNPCs.has(t) && (this.trackedNPCs.set(t, {
        actor: a,
        currentHealth: a.system.derived.health.value,
        maxHealth: a.system.derived.health.max,
        actionsRemaining: a.system.derived.actions,
        conditions: [],
        notes: ""
      }), this.render(!1));
    }
  }
  /**
   * Prompt for a number input
   */
  async _promptForNumber(e, t) {
    return new Promise((a) => {
      new Dialog({
        title: e,
        content: `
          <form>
            <div class="form-group">
              <label>Amount:</label>
              <input type="number" name="amount" value="${t}" min="0" />
            </div>
          </form>
        `,
        buttons: {
          ok: {
            icon: '<i class="fas fa-check"></i>',
            label: "OK",
            callback: (s) => {
              const i = parseInt(s.find('[name="amount"]').val());
              a(isNaN(i) ? 0 : i);
            }
          },
          cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: "Cancel",
            callback: () => a(0)
          }
        },
        default: "ok"
      }).render(!0);
    });
  }
  /**
   * Static method to open the GM Hub
   */
  static open() {
    const e = new _();
    return e.render(!0), e;
  }
}
class E extends Dialog {
  constructor(e) {
    const t = E.buildDialogData(e);
    super(t, {
      classes: ["um-dialog", "roll-dialog"],
      width: 350
    }), this.options = e;
  }
  static buildDialogData(e) {
    const t = e.attribute ? {
      label: game.i18n.localize(u.attributes[e.attribute]),
      value: e.attributeValue || 2
    } : null, a = e.skill ? {
      label: game.i18n.localize(u.skills[e.skill].label),
      value: e.skillValue || 0
    } : null, s = (t?.value || 0) + (a?.value || 0), i = `
      <form class="um-roll-dialog">
        ${t ? `
          <div class="form-group">
            <label>${game.i18n.localize("UM.Dialog.Attribute")}</label>
            <span class="attribute-name">${t.label} (${t.value})</span>
          </div>
        ` : ""}
        ${a ? `
          <div class="form-group">
            <label>${game.i18n.localize("UM.Dialog.Skill")}</label>
            <span class="skill-name">${a.label} (${a.value})</span>
          </div>
        ` : ""}
        <div class="form-group">
          <label for="target-number">${game.i18n.localize("UM.Dialog.TargetNumber")}</label>
          <select id="target-number" name="targetNumber">
            <option value="7" ${e.defaultTN === 7 ? "selected" : ""}>${game.i18n.localize("UM.TargetNumbers.VeryEasy")} (7)</option>
            <option value="11" ${e.defaultTN === 11 ? "selected" : ""}>${game.i18n.localize("UM.TargetNumbers.Easy")} (11)</option>
            <option value="15" ${e.defaultTN === 15 || !e.defaultTN ? "selected" : ""}>${game.i18n.localize("UM.TargetNumbers.Average")} (15)</option>
            <option value="19" ${e.defaultTN === 19 ? "selected" : ""}>${game.i18n.localize("UM.TargetNumbers.Challenging")} (19)</option>
            <option value="23" ${e.defaultTN === 23 ? "selected" : ""}>${game.i18n.localize("UM.TargetNumbers.Difficult")} (23)</option>
            <option value="27" ${e.defaultTN === 27 ? "selected" : ""}>${game.i18n.localize("UM.TargetNumbers.Extreme")} (27)</option>
          </select>
        </div>
        <div class="form-group">
          <label for="modifier">${game.i18n.localize("UM.Dialog.Modifier")}</label>
          <input type="number" id="modifier" name="modifier" value="0" />
        </div>
        ${e.specializations && e.specializations.length > 0 ? `
          <div class="form-group">
            <label for="specialization">${game.i18n.localize("UM.Dialog.Specialization")}</label>
            <select id="specialization" name="specialization">
              <option value="">${game.i18n.localize("UM.Dialog.None")}</option>
              ${e.specializations.map((n) => `<option value="${n}">${n} (+2)</option>`).join("")}
            </select>
          </div>
        ` : ""}
        <div class="formula-preview">
          <label>${game.i18n.localize("UM.Dialog.Formula")}</label>
          <span class="formula">2d10 + ${s}</span>
        </div>
      </form>
    `;
    return {
      title: e.title,
      content: i,
      buttons: {
        roll: {
          icon: '<i class="fas fa-dice"></i>',
          label: game.i18n.localize("UM.Dialog.Roll"),
          callback: (n) => {
            const o = n.find("form")[0], l = new FormData(o);
            e.callback({
              targetNumber: parseInt(l.get("targetNumber")) || 15,
              modifier: parseInt(l.get("modifier")) || 0,
              specialization: l.get("specialization") || "",
              cancelled: !1
            });
          }
        },
        cancel: {
          icon: '<i class="fas fa-times"></i>',
          label: game.i18n.localize("UM.Dialog.Cancel"),
          callback: () => {
            e.callback({
              targetNumber: 15,
              modifier: 0,
              specialization: "",
              cancelled: !0
            });
          }
        }
      },
      default: "roll",
      close: () => {
      }
    };
  }
  /**
   * Create and show a roll dialog
   */
  static async show(e) {
    return new Promise((t) => {
      new E({
        ...e,
        callback: (s) => {
          t(s);
        }
      }).render(!0);
    });
  }
}
class L extends Application {
  constructor(e, t) {
    super(t), this.actor = e;
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      id: "um-pc-hub",
      title: "PC Hub",
      template: "systems/unhallowed-metropolis/templates/apps/pc-hub.hbs",
      classes: ["unhallowed-metropolis", "pc-hub"],
      width: 700,
      height: 650,
      resizable: !0,
      tabs: [
        { navSelector: ".hub-tabs", contentSelector: ".hub-content", initial: "actions" }
      ]
    });
  }
  get title() {
    return `${this.actor.name} - PC Hub`;
  }
  getData() {
    const t = this.actor.system, a = Object.entries(u.attributes).map(([d, w]) => ({
      key: d,
      label: game.i18n.localize(w),
      value: t.attributes[d]?.value || 2,
      modifier: t.attributes[d]?.modifier || 0
    })), s = {};
    for (const d of Object.keys(u.attributes))
      s[d] = [];
    for (const [d, w] of Object.entries(u.skills)) {
      const D = w;
      s[D.attribute].push({
        key: d,
        label: game.i18n.localize(D.label),
        value: t.skills[d]?.value || 0,
        attribute: D.attribute,
        attributeValue: t.attributes[D.attribute]?.value || 2
      });
    }
    const i = b.getWeapons(this.actor).map((d) => ({
      id: d.id,
      name: d.name,
      img: d.img,
      damage: d.system.damage,
      weaponType: d.system.weaponType,
      equipped: d.system.equipped
    })), n = k.getPowersByDevotion(this.actor), o = k.canUsePsychicPowers(this.actor), l = y.getCorruptionStatus(this.actor), h = {
      current: t.derived.health.value,
      max: t.derived.health.max,
      temp: t.derived.health.temp || 0,
      percent: Math.round(t.derived.health.value / t.derived.health.max * 100)
    }, c = {
      current: t.derived.mentalHealth.value,
      max: t.derived.mentalHealth.max,
      temp: t.derived.mentalHealth.temp || 0,
      percent: Math.round(t.derived.mentalHealth.value / t.derived.mentalHealth.max * 100)
    }, f = p.getBalance(this.actor), U = p.format(f), C = {
      initiative: t.derived.initiative,
      actions: t.derived.actions,
      movement: t.derived.movement
    }, M = this.actor.items, v = Array.from(M.values()).filter((d) => d.type === "affliction"), S = Array.from(M.values()).filter((d) => d.type === "disorder");
    return {
      actor: this.actor,
      system: t,
      attributes: a,
      skillsByAttribute: s,
      weapons: i,
      powers: n,
      hasPowers: o,
      corruption: l,
      health: h,
      mentalHealth: c,
      currency: f,
      formattedCurrency: U,
      combatStats: C,
      afflictions: v,
      disorders: S,
      devotions: k.DEVOTIONS
    };
  }
  activateListeners(e) {
    super.activateListeners(e), e.find(".roll-attribute").on("click", this._onRollAttribute.bind(this)), e.find(".roll-skill").on("click", this._onRollSkill.bind(this)), e.find(".weapon-attack").on("click", this._onWeaponAttack.bind(this)), e.find(".weapon-aimed-attack").on("click", this._onAimedAttack.bind(this)), e.find(".weapon-autofire").on("click", this._onAutofire.bind(this)), e.find(".activate-power").on("click", this._onActivatePower.bind(this)), e.find(".take-damage").on("click", this._onTakeDamage.bind(this)), e.find(".heal-health").on("click", this._onHealHealth.bind(this)), e.find(".take-mental-damage").on("click", this._onTakeMentalDamage.bind(this)), e.find(".heal-mental").on("click", this._onHealMental.bind(this)), e.find(".add-corruption").on("click", this._onAddCorruption.bind(this)), e.find(".add-funds").on("click", this._onAddFunds.bind(this)), e.find(".spend-funds").on("click", this._onSpendFunds.bind(this)), e.find(".roll-initiative").on("click", this._onRollInitiative.bind(this)), e.find(".open-sheet").on("click", this._onOpenSheet.bind(this)), e.find(".item-roll").on("click", this._onItemRoll.bind(this)), e.find(".item-edit").on("click", this._onItemEdit.bind(this));
  }
  /**
   * Roll an attribute check
   */
  async _onRollAttribute(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("attribute"), a = await E.show({
      title: `${game.i18n.localize(u.attributes[t])} Check`,
      attribute: t,
      attributeValue: this.actor.system.attributes[t]?.value || 2,
      defaultTN: 15,
      callback: () => {
      }
    });
    a.cancelled || await this.actor.rollAttribute(t, {
      bonus: a.modifier,
      targetNumber: a.targetNumber
    });
  }
  /**
   * Roll a skill check
   */
  async _onRollSkill(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("skill"), a = u.skills[t], s = await E.show({
      title: `${game.i18n.localize(a.label)} Check`,
      skill: t,
      skillValue: this.actor.system.skills[t]?.value || 0,
      attribute: a.attribute,
      attributeValue: this.actor.system.attributes[a.attribute]?.value || 2,
      specializations: this.actor.system.skills[t]?.specializations || [],
      defaultTN: 15,
      callback: () => {
      }
    });
    if (!s.cancelled) {
      let i = s.modifier;
      s.specialization && (i += 2), await this.actor.rollSkill(t, {
        bonus: i,
        targetNumber: s.targetNumber
      });
    }
  }
  /**
   * Make a weapon attack
   */
  async _onWeaponAttack(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("weapon-id"), a = this.actor.items.get(t);
    a && await b.attack(this.actor, {
      weapon: a,
      targetNumber: 15
    });
  }
  /**
   * Make an aimed attack
   */
  async _onAimedAttack(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("weapon-id"), a = this.actor.items.get(t);
    if (a) {
      const s = await this._selectHitLocation();
      s && await b.attack(this.actor, {
        weapon: a,
        targetNumber: 15,
        aimed: !0,
        calledShot: !0,
        aimedLocation: s
      });
    }
  }
  /**
   * Autofire attack
   */
  async _onAutofire(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("weapon-id"), a = this.actor.items.get(t);
    a && await b.attack(this.actor, {
      weapon: a,
      targetNumber: 15,
      autofire: !0
    });
  }
  /**
   * Activate a psychic power
   */
  async _onActivatePower(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("power-id"), a = this.actor.items.get(t);
    a && (await k.activatePower(this.actor, a), this.render(!1));
  }
  /**
   * Take physical damage
   */
  async _onTakeDamage(e) {
    e.preventDefault();
    const t = await this._promptForNumber("Damage Amount", 1);
    if (t > 0) {
      const a = this.actor.system;
      await this.actor.update({
        "system.derived.health.value": Math.max(0, a.derived.health.value - t)
      }), this.render(!1);
    }
  }
  /**
   * Heal health
   */
  async _onHealHealth(e) {
    e.preventDefault();
    const t = await this._promptForNumber("Healing Amount", 1);
    if (t > 0) {
      const a = this.actor.system;
      await this.actor.update({
        "system.derived.health.value": Math.min(a.derived.health.max, a.derived.health.value + t)
      }), this.render(!1);
    }
  }
  /**
   * Take mental damage
   */
  async _onTakeMentalDamage(e) {
    e.preventDefault();
    const t = await this._promptForNumber("Mental Damage Amount", 1);
    if (t > 0) {
      const a = this.actor.system;
      await this.actor.update({
        "system.derived.mentalHealth.value": Math.max(0, a.derived.mentalHealth.value - t)
      }), this.render(!1);
    }
  }
  /**
   * Heal mental health
   */
  async _onHealMental(e) {
    e.preventDefault();
    const t = await this._promptForNumber("Mental Healing Amount", 1);
    if (t > 0) {
      const a = this.actor.system;
      await this.actor.update({
        "system.derived.mentalHealth.value": Math.min(a.derived.mentalHealth.max, a.derived.mentalHealth.value + t)
      }), this.render(!1);
    }
  }
  /**
   * Add corruption
   */
  async _onAddCorruption(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("type"), a = await this._promptForNumber(`${t} Corruption`, 1);
    a > 0 && (await y.applyCorruption(this.actor, {
      type: t,
      amount: a,
      source: "Self Applied"
    }), this.render(!1));
  }
  /**
   * Add funds
   */
  async _onAddFunds(e) {
    e.preventDefault();
    const t = await this._promptForCurrency("Add Funds");
    p.toPence(t) > 0 && (await p.addFunds(this.actor, t, "Funds Received"), this.render(!1));
  }
  /**
   * Spend funds
   */
  async _onSpendFunds(e) {
    e.preventDefault();
    const t = await this._promptForCurrency("Spend Funds");
    p.toPence(t) > 0 && (await p.purchase(this.actor, t, "Expense"), this.render(!1));
  }
  /**
   * Roll initiative
   */
  async _onRollInitiative(e) {
    e.preventDefault(), await this.actor.rollInitiative();
  }
  /**
   * Open character sheet
   */
  _onOpenSheet(e) {
    e.preventDefault(), this.actor.sheet?.render(!0);
  }
  /**
   * Roll an item
   */
  async _onItemRoll(e) {
    e.preventDefault();
    const t = $(e.currentTarget).closest(".item").data("item-id"), a = this.actor.items.get(t);
    if (a) {
      const s = a;
      s.type === "weapon" ? await b.attack(this.actor, { weapon: a }) : s.type === "psychicPower" && await k.activatePower(this.actor, a);
    }
  }
  /**
   * Edit an item
   */
  _onItemEdit(e) {
    e.preventDefault();
    const t = $(e.currentTarget).closest(".item").data("item-id");
    this.actor.items.get(t)?.sheet?.render(!0);
  }
  /**
   * Select hit location dialog
   */
  async _selectHitLocation() {
    return new Promise((e) => {
      const t = [
        { key: "head", label: "Head (-6)" },
        { key: "torso", label: "Torso (0)" },
        { key: "rightArm", label: "Right Arm (-4)" },
        { key: "leftArm", label: "Left Arm (-4)" },
        { key: "rightLeg", label: "Right Leg (-4)" },
        { key: "leftLeg", label: "Left Leg (-4)" }
      ];
      new Dialog({
        title: "Select Target Location",
        content: `
          <form>
            <div class="form-group">
              <label>Location:</label>
              <select name="location">
                ${t.map((a) => `<option value="${a.key}">${a.label}</option>`).join("")}
              </select>
            </div>
          </form>
        `,
        buttons: {
          confirm: {
            icon: '<i class="fas fa-crosshairs"></i>',
            label: "Aim",
            callback: (a) => {
              const s = a.find('[name="location"]').val();
              e(s);
            }
          },
          cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: "Cancel",
            callback: () => e(null)
          }
        },
        default: "confirm"
      }).render(!0);
    });
  }
  /**
   * Prompt for number input
   */
  async _promptForNumber(e, t) {
    return new Promise((a) => {
      new Dialog({
        title: e,
        content: `
          <form>
            <div class="form-group">
              <label>Amount:</label>
              <input type="number" name="amount" value="${t}" min="0" />
            </div>
          </form>
        `,
        buttons: {
          ok: {
            icon: '<i class="fas fa-check"></i>',
            label: "OK",
            callback: (s) => {
              const i = parseInt(s.find('[name="amount"]').val());
              a(isNaN(i) ? 0 : i);
            }
          },
          cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: "Cancel",
            callback: () => a(0)
          }
        },
        default: "ok"
      }).render(!0);
    });
  }
  /**
   * Prompt for currency input
   */
  async _promptForCurrency(e) {
    return new Promise((t) => {
      new Dialog({
        title: e,
        content: `
          <form class="currency-input">
            <div class="form-group">
              <label>Pounds (£):</label>
              <input type="number" name="pounds" value="0" min="0" />
            </div>
            <div class="form-group">
              <label>Shillings (s):</label>
              <input type="number" name="shillings" value="0" min="0" max="19" />
            </div>
            <div class="form-group">
              <label>Pence (d):</label>
              <input type="number" name="pence" value="0" min="0" max="11" />
            </div>
          </form>
        `,
        buttons: {
          ok: {
            icon: '<i class="fas fa-coins"></i>',
            label: "OK",
            callback: (a) => {
              t({
                pounds: parseInt(a.find('[name="pounds"]').val()) || 0,
                shillings: parseInt(a.find('[name="shillings"]').val()) || 0,
                pence: parseInt(a.find('[name="pence"]').val()) || 0
              });
            }
          },
          cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: "Cancel",
            callback: () => t({ pounds: 0, shillings: 0, pence: 0 })
          }
        },
        default: "ok"
      }).render(!0);
    });
  }
  /**
   * Static method to open PC Hub for an actor
   */
  static open(e) {
    const t = new L(e);
    return t.render(!0), t;
  }
}
const P = [
  {
    slot: 1,
    id: "corruption",
    name: "Corruption",
    icon: "fa-biohazard",
    color: "#8b0000",
    gradient: "linear-gradient(135deg, #2d1f3d 0%, #4a1f2d 50%, #8b0000 100%)",
    description: "Track corruption, afflictions, and disorders"
  },
  {
    slot: 2,
    id: "psychic",
    name: "Psychic",
    icon: "fa-brain",
    color: "#9966cc",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2d1f4d 50%, #9966cc 100%)",
    description: "Manage psychic powers and devotions"
  },
  {
    slot: 3,
    id: "combat",
    name: "Combat",
    icon: "fa-crosshairs",
    color: "#cc3300",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #4d1f1f 50%, #cc3300 100%)",
    description: "Combat actions, wounds, and hit locations"
  },
  {
    slot: 4,
    id: "wealth",
    name: "Wealth",
    icon: "fa-coins",
    color: "#d4af37",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #3d3d1f 50%, #d4af37 100%)",
    description: "Manage currency and transactions"
  }
];
class Y extends Application {
  constructor(e, t) {
    super(t), this.actor = null, this.config = e;
  }
  static get defaultOptions() {
    return {
      id: "system-hub",
      title: "System Hub",
      template: "systems/unhallowed-metropolis/templates/apps/system-hub.hbs",
      width: 400,
      height: 500,
      classes: ["unhallowed-metropolis", "system-hub"],
      resizable: !0,
      minimizable: !0
    };
  }
  get title() {
    return `UM | ${this.config.name} Hub`;
  }
  getData() {
    return this.actor = this._getControlledActor(), {
      config: this.config,
      actor: this.actor,
      isGM: game.user?.isGM
    };
  }
  _getControlledActor() {
    const e = canvas?.tokens?.controlled?.[0];
    return e?.actor ? e.actor : game.user?.character || null;
  }
  activateListeners(e) {
    super.activateListeners(e), e.find(".hub-close").on("click", () => this.close());
  }
}
const V = class V extends Y {
  constructor() {
    super(P[0]);
  }
  static get defaultOptions() {
    return {
      ...super.defaultOptions,
      id: "corruption-hub",
      template: "systems/unhallowed-metropolis/templates/apps/corruption-hub.hbs",
      width: 450,
      height: 600,
      classes: ["unhallowed-metropolis", "system-hub", "corruption-hub"]
    };
  }
  getData() {
    const e = super.getData(), t = this.actor;
    if (t) {
      const a = t.system;
      e.corruption = {
        physical: {
          value: a.corruption?.physical?.value || 0,
          threshold: a.corruption?.physical?.threshold || 10,
          percent: Math.round((a.corruption?.physical?.value || 0) / (a.corruption?.physical?.threshold || 10) * 100)
        },
        mental: {
          value: a.corruption?.mental?.value || 0,
          threshold: a.corruption?.mental?.threshold || 10,
          percent: Math.round((a.corruption?.mental?.value || 0) / (a.corruption?.mental?.threshold || 10) * 100)
        }
      }, e.afflictions = t.items.filter((s) => s.type === "affliction") || [], e.disorders = t.items.filter((s) => s.type === "disorder") || [];
    }
    return e.quickAmounts = [1, 2, 3, 5], e;
  }
  activateListeners(e) {
    super.activateListeners(e), e.find(".add-physical-corruption").on("click", (t) => this._onAddCorruption(t, "physical")), e.find(".add-mental-corruption").on("click", (t) => this._onAddCorruption(t, "mental")), e.find(".remove-physical-corruption").on("click", (t) => this._onRemoveCorruption(t, "physical")), e.find(".remove-mental-corruption").on("click", (t) => this._onRemoveCorruption(t, "mental")), e.find(".roll-affliction-check").on("click", () => this._onRollAfflictionCheck()), e.find(".view-affliction, .view-disorder").on("click", (t) => this._onViewItem(t));
  }
  async _onAddCorruption(e, t) {
    e.preventDefault();
    const a = parseInt($(e.currentTarget).data("amount")) || 1;
    this.actor && (await y.applyCorruption(this.actor, { type: t, amount: a, source: "Manual adjustment" }), this.render(!1));
  }
  async _onRemoveCorruption(e, t) {
    e.preventDefault();
    const a = parseInt($(e.currentTarget).data("amount")) || 1;
    if (this.actor) {
      const i = this.actor.system.corruption?.[t]?.value || 0, n = Math.max(0, i - a);
      await this.actor.update({ [`system.corruption.${t}.value`]: n }), this.render(!1);
    }
  }
  async _onRollAfflictionCheck() {
    this.actor && await y.triggerAfflictionCheck(this.actor, "physical");
  }
  _onViewItem(e) {
    const t = $(e.currentTarget).data("item-id");
    this.actor?.items.get(t)?.sheet?.render(!0);
  }
  static toggle() {
    this._instance?.rendered ? this._instance.close() : (this._instance || (this._instance = new V()), this._instance.render(!0));
  }
};
V._instance = null;
let x = V;
const q = class q extends Y {
  constructor() {
    super(P[1]);
  }
  static get defaultOptions() {
    return {
      ...super.defaultOptions,
      id: "psychic-hub",
      template: "systems/unhallowed-metropolis/templates/apps/psychic-hub.hbs",
      width: 500,
      height: 650,
      classes: ["unhallowed-metropolis", "system-hub", "psychic-hub"]
    };
  }
  getData() {
    const e = super.getData(), t = this.actor;
    if (e.devotions = k.DEVOTIONS, t) {
      const a = t.system, s = t.items.filter((i) => i.type === "psychicPower") || [];
      e.powersByDevotion = {};
      for (const i of Object.keys(k.DEVOTIONS))
        e.powersByDevotion[i] = s.filter(
          (n) => n.system.devotion?.toLowerCase() === i.toLowerCase()
        );
      e.powers = s, e.mentalHealth = {
        value: a.derived?.mentalHealth?.value || 0,
        max: a.derived?.mentalHealth?.max || 10,
        percent: Math.round((a.derived?.mentalHealth?.value || 0) / (a.derived?.mentalHealth?.max || 10) * 100)
      }, e.corruption = {
        mental: a.corruption?.mental || { value: 0, threshold: 10 }
      };
    }
    return e;
  }
  activateListeners(e) {
    super.activateListeners(e), e.find(".activate-power").on("click", (t) => this._onActivatePower(t)), e.find(".view-power").on("click", (t) => this._onViewPower(t)), e.find(".roll-devotion").on("click", (t) => this._onRollDevotion(t));
  }
  async _onActivatePower(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("power-id"), a = this.actor?.items.get(t);
    this.actor && a && (await k.activatePower(this.actor, a), this.render(!1));
  }
  _onViewPower(e) {
    const t = $(e.currentTarget).data("power-id");
    this.actor?.items.get(t)?.sheet?.render(!0);
  }
  async _onRollDevotion(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("devotion");
    if (this.actor) {
      const s = this.actor.system.attributes?.will?.value || 2, i = new Roll("2d10 + @will", { will: s });
      await i.evaluate(), await ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        content: `
          <div class="um-devotion-roll">
            <header><h3>${t} Check</h3></header>
            <div class="roll-result">
              <span class="dice">🎲</span>
              <span class="total">${i.total}</span>
            </div>
            <div class="formula">${i.formula} = ${i.result}</div>
          </div>
        `
      });
    }
  }
  static toggle() {
    this._instance?.rendered ? this._instance.close() : (this._instance || (this._instance = new q()), this._instance.render(!0));
  }
};
q._instance = null;
let z = q;
const W = class W extends Y {
  constructor() {
    super(P[2]), this.selectedWeapon = null;
  }
  static get defaultOptions() {
    return {
      ...super.defaultOptions,
      id: "combat-hub",
      template: "systems/unhallowed-metropolis/templates/apps/combat-hub.hbs",
      width: 550,
      height: 700,
      classes: ["unhallowed-metropolis", "system-hub", "combat-hub"]
    };
  }
  getData() {
    const e = super.getData(), t = this.actor;
    if (e.hitLocations = b.HIT_LOCATIONS, e.attackTypes = [
      { id: "melee", name: "Melee", icon: "fa-fist-raised" },
      { id: "ranged", name: "Ranged", icon: "fa-crosshairs" },
      { id: "burst", name: "Burst Fire", icon: "fa-burst" },
      { id: "spread", name: "Spread", icon: "fa-expand" },
      { id: "grapple", name: "Grapple", icon: "fa-hand-fist" }
    ], t) {
      const a = t.system;
      e.weapons = t.items.filter((s) => s.type === "weapon") || [], e.selectedWeapon = this.selectedWeapon, e.health = {
        value: a.derived?.health?.value || 0,
        max: a.derived?.health?.max || 10,
        percent: Math.round((a.derived?.health?.value || 0) / (a.derived?.health?.max || 10) * 100)
      }, e.combatStats = {
        initiative: a.derived?.initiative || 0,
        actions: a.derived?.actions || 2,
        defense: a.derived?.defense || 10
      }, e.wounds = a.wounds || [];
    }
    return e;
  }
  activateListeners(e) {
    super.activateListeners(e), e.find(".select-weapon").on("click", (t) => this._onSelectWeapon(t)), e.find(".perform-attack").on("click", (t) => this._onPerformAttack(t)), e.find(".roll-hit-location").on("click", () => this._onRollHitLocation()), e.find(".roll-initiative").on("click", () => this._onRollInitiative()), e.find(".aimed-shot-toggle").on("change", (t) => this._onAimedShotToggle(t));
  }
  _onSelectWeapon(e) {
    const t = $(e.currentTarget).data("weapon-id");
    this.selectedWeapon = this.actor?.items.get(t), this.render(!1);
  }
  async _onPerformAttack(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("attack-type") || "melee";
    if (!this.actor) {
      ui.notifications?.warn("No actor selected");
      return;
    }
    const a = {
      type: t
    }, s = $('input[name="aimed-location"]:checked').val();
    s && (a.calledShot = s), t === "burst" && (a.autofire = !0), await b.attack(this.actor, a);
  }
  async _onRollHitLocation() {
    await b.rollHitLocation();
  }
  async _onRollInitiative() {
    if (this.actor) {
      const t = this.actor.system.attributes?.wit?.value || 2, a = new Roll("2d10 + @wit", { wit: t });
      await a.evaluate(), await ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        content: `
          <div class="um-initiative-roll">
            <header><h3>Initiative</h3></header>
            <div class="roll-result">
              <span class="dice">🎲</span>
              <span class="total">${a.total}</span>
            </div>
            <div class="formula">${a.formula} = ${a.result}</div>
          </div>
        `
      });
    }
  }
  _onAimedShotToggle(e) {
  }
  static toggle() {
    this._instance?.rendered ? this._instance.close() : (this._instance || (this._instance = new W()), this._instance.render(!0));
  }
};
W._instance = null;
let F = W;
const j = class j extends Y {
  constructor() {
    super(P[3]);
  }
  static get defaultOptions() {
    return {
      ...super.defaultOptions,
      id: "wealth-hub",
      template: "systems/unhallowed-metropolis/templates/apps/wealth-hub.hbs",
      width: 400,
      height: 500,
      classes: ["unhallowed-metropolis", "system-hub", "wealth-hub"]
    };
  }
  getData() {
    const e = super.getData(), t = this.actor;
    if (e.commonPrices = [
      { name: "Meal (common)", cost: "3d" },
      { name: "Meal (fine)", cost: "2s" },
      { name: "Lodging (night)", cost: "6d - 5s" },
      { name: "Cab fare", cost: "1s" },
      { name: "Pistol ammunition (10)", cost: "5s" },
      { name: "Rifle ammunition (10)", cost: "8s" },
      { name: "First aid kit", cost: "15s" },
      { name: "Lantern", cost: "7s" },
      { name: "Rope (50ft)", cost: "3s" }
    ], t) {
      const a = t.system;
      e.currency = {
        pounds: a.wealth?.pounds || 0,
        shillings: a.wealth?.shillings || 0,
        pence: a.wealth?.pence || 0,
        totalPence: p.toPence({
          pounds: a.wealth?.pounds || 0,
          shillings: a.wealth?.shillings || 0,
          pence: a.wealth?.pence || 0
        })
      }, e.wealthLevel = a.wealth?.level || "Poor";
    }
    return e;
  }
  activateListeners(e) {
    super.activateListeners(e), e.find(".add-currency").on("click", (t) => this._onAddCurrency(t)), e.find(".subtract-currency").on("click", (t) => this._onSubtractCurrency(t)), e.find(".quick-transaction").on("click", (t) => this._onQuickTransaction(t)), e.find(".roll-wealth-check").on("click", () => this._onRollWealthCheck()), e.find(".convert-currency").on("click", () => this._onConvertCurrency());
  }
  async _onAddCurrency(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("type"), a = parseInt($(e.currentTarget).data("amount")) || 1;
    if (this.actor) {
      const s = { pounds: 0, shillings: 0, pence: 0, [t]: a };
      await p.addFunds(this.actor, s, "Manual adjustment"), this.render(!1);
    }
  }
  async _onSubtractCurrency(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("type"), a = parseInt($(e.currentTarget).data("amount")) || 1;
    if (this.actor) {
      const s = { pounds: 0, shillings: 0, pence: 0, [t]: a };
      await p.purchase(this.actor, s, "Manual deduction"), this.render(!1);
    }
  }
  async _onQuickTransaction(e) {
    e.preventDefault();
    const t = $(e.currentTarget).data("cost"), a = $(e.currentTarget).data("name");
    if (this.actor) {
      const s = p.parse(t);
      s && (await p.purchase(this.actor, s, a), this.render(!1));
    }
  }
  _parseCost(e) {
    const t = {}, a = e.match(/(\d+)£/);
    a && (t.pounds = parseInt(a[1]));
    const s = e.match(/(\d+)s/);
    s && (t.shillings = parseInt(s[1]));
    const i = e.match(/(\d+)d/);
    return i && (t.pence = parseInt(i[1])), Object.keys(t).length > 0 ? t : null;
  }
  async _onRollWealthCheck() {
    if (this.actor) {
      const e = p.getBalance(this.actor);
      ui.notifications?.info(`Current balance: ${p.format(e)}`);
    }
  }
  async _onConvertCurrency() {
    if (this.actor) {
      const e = this.actor.system, t = p.toPence({
        pounds: e.wealth?.pounds || 0,
        shillings: e.wealth?.shillings || 0,
        pence: e.wealth?.pence || 0
      }), a = p.fromPence(t);
      await this.actor.update({
        "system.wealth.pounds": a.pounds,
        "system.wealth.shillings": a.shillings,
        "system.wealth.pence": a.pence
      }), ui.notifications?.info("Currency normalized"), this.render(!1);
    }
  }
  static toggle() {
    this._instance?.rendered ? this._instance.close() : (this._instance || (this._instance = new j()), this._instance.render(!0));
  }
};
j._instance = null;
let B = j;
const X = class X {
  /**
   * Initialize the hotbar hub integration
   */
  static init() {
    this.initialized || (Hooks.on("renderHotbar", this._onRenderHotbar.bind(this)), this._registerKeybindings(), this.initialized = !0, console.log("UM | Hotbar Hub Manager initialized"));
  }
  /**
   * Inject custom hub buttons into hotbar slots
   */
  static _onRenderHotbar(e, t) {
    const a = t.find("#action-bar");
    if (a.length)
      for (const s of P) {
        const i = a.find(`.slot[data-slot="${s.slot}"]`);
        if (!i.length) continue;
        const n = $(`
        <li class="slot um-hub-slot ${s.id}-hub" 
            data-hub="${s.id}"
            data-slot="${s.slot}"
            data-tooltip="${s.name} Hub"
            style="background: ${s.gradient}; border: 1px solid ${s.color}40;"
            role="button"
            aria-label="${s.name} Hub">
          <i class="fa-solid ${s.icon}" style="color: ${s.color}; font-size: 24px;"></i>
          <span class="key">${s.slot}</span>
          <span class="hub-label">${s.name}</span>
        </li>
      `);
        i.replaceWith(n), n.on("click", (o) => {
          o.preventDefault(), o.stopPropagation(), this._openHub(s.id);
        }), n.on("mouseenter", function() {
          $(this).css("transform", "scale(1.1)"), $(this).css("box-shadow", `0 0 15px ${s.color}80`);
        }), n.on("mouseleave", function() {
          $(this).css("transform", "scale(1)"), $(this).css("box-shadow", "none");
        });
      }
  }
  /**
   * Open the specified hub
   */
  static _openHub(e) {
    switch (e) {
      case "corruption":
        x.toggle();
        break;
      case "psychic":
        z.toggle();
        break;
      case "combat":
        F.toggle();
        break;
      case "wealth":
        B.toggle();
        break;
    }
  }
  /**
   * Register keyboard shortcuts for hubs
   */
  static _registerKeybindings() {
    document.addEventListener("keydown", (e) => {
      document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName;
    });
  }
};
X.initialized = !1;
let K = X;
(() => {
  try {
    const r = globalThis;
    if (typeof r.io == "object" && (typeof r.io.default == "function" ? (r.io = r.io.default, console.log("UM | Normalized window.io from default export")) : typeof r.io.io == "function" && (r.io = r.io.io, console.log("UM | Normalized window.io from nested `io` property"))), typeof r.io == "function" && typeof r.io.connect != "function")
      try {
        r.io.connect = r.io;
      } catch {
      }
  } catch {
  }
})();
Hooks.once("init", async () => {
  console.log("UM | Initializing Unhallowed Metropolis System"), game.unhallowedMetropolis = {
    UMActor: Z,
    UMItem: ee,
    config: u,
    // Expose systems for macro/module use
    systems: {
      CorruptionSystem: y,
      PsychicPowerSystem: k,
      WealthSystem: p,
      EnhancedCombatSystem: b
    },
    // Expose hub applications
    apps: {
      GMHub: _,
      PCHub: L,
      CorruptionHub: x,
      PsychicHub: z,
      CombatHub: F,
      WealthHub: B
    }
  }, CONFIG.Actor.documentClass = Z, CONFIG.Item.documentClass = ee, game.settings.register("unhallowed-metropolis", "corruptionTracking", {
    name: "UM.Settings.CorruptionTracking",
    hint: "UM.Settings.CorruptionTrackingHint",
    scope: "world",
    config: !0,
    default: !0,
    type: Boolean
  }), game.settings.register("unhallowed-metropolis", "automaticDegrees", {
    name: "UM.Settings.AutomaticDegrees",
    hint: "UM.Settings.AutomaticDegreesHint",
    scope: "world",
    config: !0,
    default: !0,
    type: Boolean
  }), await de(), ue(), ce();
  const r = foundry.appv1?.sheets?.ActorSheet ?? ActorSheet, e = foundry.appv1?.sheets?.ItemSheet ?? ItemSheet, t = foundry.documents?.collections?.Actors ?? Actors, a = foundry.documents?.collections?.Items ?? Items;
  t.unregisterSheet("core", r), t.registerSheet("unhallowed-metropolis", ae, {
    types: ["character"],
    makeDefault: !0,
    label: "UM.SheetLabels.Character"
  }), t.registerSheet("unhallowed-metropolis", ie, {
    types: ["npc"],
    makeDefault: !0,
    label: "UM.SheetLabels.NPC"
  }), t.registerSheet("unhallowed-metropolis", oe, {
    types: ["animate", "vampire", "creature"],
    makeDefault: !0,
    label: "UM.SheetLabels.Creature"
  }), a.unregisterSheet("core", e), a.registerSheet("unhallowed-metropolis", le, {
    makeDefault: !0,
    label: "UM.SheetLabels.Item"
  }), game.keybindings?.register("unhallowed-metropolis", "openGMHub", {
    name: "UM.Keybindings.OpenGMHub",
    hint: "UM.Keybindings.OpenGMHubHint",
    editable: [{ key: "KeyG", modifiers: ["Control", "Shift"] }],
    onDown: () => (game.user?.isGM && _.open(), !0)
  });
});
Hooks.once("ready", async () => {
  console.log("UM | Unhallowed Metropolis System Ready"), console.log("UM | Welcome to Neo-Victorian London. The dead walk, and the living hide behind walls of brass and steel."), K.init(), console.log("UM | Hotbar Hubs initialized (Slots 1-4: Corruption, Psychic, Combat, Wealth)");
});
Hooks.on("renderActorSheet", (r, e, t) => {
  const a = r.actor;
  if (a.type !== "character" || !a.isOwner) return;
  const s = $(`
    <a class="header-button pc-hub-btn" title="Open PC Hub">
      <i class="fas fa-rocket"></i>
    </a>
  `);
  s.on("click", (i) => {
    i.preventDefault(), L.open(a);
  }), e.find(".window-header .window-title").after(s);
});
Hooks.on("getActorDirectoryEntryContext", (r, e) => {
  e.push({
    name: "UM.ContextMenu.OpenPCHub",
    icon: '<i class="fas fa-rocket"></i>',
    condition: (t) => {
      const a = game.actors?.get(t.data("documentId"));
      return a && a.type === "character" && a.isOwner;
    },
    callback: (t) => {
      const a = game.actors?.get(t.data("documentId"));
      a && L.open(a);
    }
  });
});
Hooks.on("getSceneControlButtons", (r) => {
  if (!game.user?.isGM) return;
  let e = null;
  if (Array.isArray(r) ? e = r.find((t) => t.name === "token") : r?.controls && Array.isArray(r.controls) ? e = r.controls.find((t) => t.name === "token") : r?.groups ? e = (r.groups instanceof Map ? Array.from(r.groups.values()) : Object.values(r.groups)).find((a) => a.name === "token") : r?.token && (e = r.token), e) {
    const t = e.tools;
    Array.isArray(t) ? t.push({
      name: "gm-hub",
      title: "UM.Controls.GMHub",
      icon: "fas fa-skull-crossbones",
      button: !0,
      onClick: () => _.open()
    }) : t instanceof Map ? t.set("gm-hub", {
      name: "gm-hub",
      title: "UM.Controls.GMHub",
      icon: "fas fa-skull-crossbones",
      button: !0,
      onClick: () => _.open()
    }) : typeof t == "object" && (t["gm-hub"] = {
      name: "gm-hub",
      title: "UM.Controls.GMHub",
      icon: "fas fa-skull-crossbones",
      button: !0,
      onClick: () => _.open()
    });
  }
});
async function de() {
  const r = [
    // Actor sheets
    "systems/unhallowed-metropolis/templates/actors/character-sheet.hbs",
    "systems/unhallowed-metropolis/templates/actors/npc-sheet.hbs",
    "systems/unhallowed-metropolis/templates/actors/creature-sheet.hbs",
    // Item sheets
    "systems/unhallowed-metropolis/templates/items/weapon-sheet.hbs",
    "systems/unhallowed-metropolis/templates/items/armor-sheet.hbs",
    "systems/unhallowed-metropolis/templates/items/equipment-sheet.hbs",
    "systems/unhallowed-metropolis/templates/items/quality-sheet.hbs",
    "systems/unhallowed-metropolis/templates/items/affliction-sheet.hbs",
    "systems/unhallowed-metropolis/templates/items/disorder-sheet.hbs",
    "systems/unhallowed-metropolis/templates/items/talent-sheet.hbs",
    "systems/unhallowed-metropolis/templates/items/calling-sheet.hbs",
    "systems/unhallowed-metropolis/templates/items/psychicPower-sheet.hbs",
    // Chat templates
    "systems/unhallowed-metropolis/templates/chat/roll-card.hbs",
    "systems/unhallowed-metropolis/templates/chat/weapon-roll.hbs",
    // Dialog templates
    "systems/unhallowed-metropolis/templates/dialogs/roll-dialog.hbs",
    // App templates (GM Hub & PC Hub)
    "systems/unhallowed-metropolis/templates/apps/gm-hub.hbs",
    "systems/unhallowed-metropolis/templates/apps/pc-hub.hbs",
    // Hotbar Hub templates
    "systems/unhallowed-metropolis/templates/apps/corruption-hub.hbs",
    "systems/unhallowed-metropolis/templates/apps/psychic-hub.hbs",
    "systems/unhallowed-metropolis/templates/apps/combat-hub.hbs",
    "systems/unhallowed-metropolis/templates/apps/wealth-hub.hbs"
  ];
  return (foundry.applications?.handlebars?.loadTemplates ?? loadTemplates)(r);
}
function ue() {
  Handlebars.registerHelper("times", function(r, e) {
    let t = "";
    for (let a = 0; a < r; a++)
      t += e.fn({ index: a, first: a === 0, last: a === r - 1 });
    return t;
  }), Handlebars.registerHelper("corruptionPips", function(r, e) {
    let t = "";
    for (let a = 0; a < e; a++) {
      const s = a < r ? "filled" : "empty";
      t += `<span class="corruption-pip ${s}" data-index="${a}"></span>`;
    }
    return new Handlebars.SafeString(t);
  }), Handlebars.registerHelper("attributeDots", function(r, e = 5) {
    let t = "";
    for (let a = 1; a <= e; a++) {
      const s = a <= r ? "filled" : "empty";
      t += `<span class="attribute-dot ${s}" data-value="${a}"></span>`;
    }
    return new Handlebars.SafeString(t);
  }), Handlebars.registerHelper("eq", function(r, e) {
    return r === e;
  }), Handlebars.registerHelper("gt", function(r, e) {
    return r > e;
  }), Handlebars.registerHelper("lt", function(r, e) {
    return r < e;
  }), Handlebars.registerHelper("add", function(r, e) {
    return r + e;
  }), Handlebars.registerHelper("subtract", function(r, e) {
    return r - e;
  });
}
