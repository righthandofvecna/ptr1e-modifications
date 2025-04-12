import * as settings from "./settings.mjs";
import * as character from "./character.mjs";


Hooks.once("init", () => {
  settings.register();
  character.register();
});