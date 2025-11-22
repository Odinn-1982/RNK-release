class r extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["rnk", "sheet", "actor"],
      template: "systems/rnk/templates/actor-sheet.hbs",
      width: 520,
      height: 480,
      resizable: !0
    });
  }
  getData(e) {
    var s;
    const n = super.getData(e);
    return n.rnk = {
      version: ((s = game.rnk) == null ? void 0 : s.version) || "unknown"
    }, n;
  }
  // Example listener hookup
  activateListeners(e) {
    super.activateListeners(e), e.find(".rnk-hello").on("click", () => {
      var n;
      return (n = ui.notifications) == null ? void 0 : n.info("Hello from RNK Actor Sheet");
    });
  }
}
Hooks.once("init", async () => {
  var t, e;
  console.log("RNK | Initializing RNK system v0.0.1"), (e = (t = game.settings) == null ? void 0 : t.register) == null || e.call(t, "rnk", "exampleSetting", {
    name: "RNK Example Setting",
    hint: "A demonstration setting stored by the system",
    scope: "world",
    config: !0,
    default: !0,
    type: Boolean
  });
});
Hooks.once("ready", async () => {
  console.log("RNK | Ready — system loaded"), game.rnk = game.rnk || {}, game.rnk.version = "0.0.1", Actors.registerSheet("rnk", "rnksheet", r, { types: ["character", "npc"], makeDefault: !0 });
});
Hooks.on("renderActorSheet", (t, e) => {
});
