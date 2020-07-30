const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
      this.items.push(itemName);
    },
    remove(itemName) {
      this.items = this.items.filter(item => item !== itemName);
    },
  };
  const invokeInventoryOperation = function(itemName, inventoryAction) {
    console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
    inventoryAction.call(inventory, itemName);
  };
  invokeInventoryOperation('Medkit', inventory.add)
  console.log(inventory.items); 
  invokeInventoryOperation('Gas mask', inventory.remove);
  console.log(inventory.items);