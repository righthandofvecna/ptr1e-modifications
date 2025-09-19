



export function register() {
  const oldDefaultOptions = CONFIG.PTU.Item.sheetClasses.item.defaultOptions;
  Object.defineProperty(CONFIG.PTU.Item.sheetClasses.item, "defaultOptions", {
    get: function() {
      return foundry.utils.mergeObject(oldDefaultOptions, {
        scrollY: [".tab.active", ".tab.active .rules-list"]
      });
    }
  });
}

