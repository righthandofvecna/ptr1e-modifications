import * as settings from "./settings.mjs";
import * as character from "./character.mjs";
import * as saveTabScrolls from "./save-tab-scrolls.mjs";


Hooks.once("init", () => {
  settings.register();
  character.register();
  saveTabScrolls.register();
});