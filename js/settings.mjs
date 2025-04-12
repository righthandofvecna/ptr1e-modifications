import { MODULENAME } from "./utils.mjs";

export function register() {
  game.settings.register(MODULENAME, "playersControlLoyalty", {
		name: "Players Control Loyalty",
		default: true,
		type: Boolean,
		scope: "world",
		requiresReload: false,
		config: true,
		hint: "Whether players can control the loyalty of characters they have edit access to. If disabled, only the GM can control the loyalty of characters (the default).",
	});
};