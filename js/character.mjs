import { MODULENAME } from "./utils.mjs";

function OnRenderPTUPokemonSheet(sheet, html, context) {
  if (!context.editable) return;
  if (!game.settings.get(MODULENAME, "playersControlLoyalty")) return;

  const loyalty = html.find(`input[name="system.friendship"]`);
  loyalty.prop("disabled", false);
}


export function register() {
  Hooks.on("renderPTUPokemonSheet", OnRenderPTUPokemonSheet);
}