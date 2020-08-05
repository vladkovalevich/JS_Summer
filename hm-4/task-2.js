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
  invokeInventoryOperation('Medkit', inventory.add.bind(inventory))
  console.log(inventory.items); 
  invokeInventoryOperation('Gas mask', inventory.remove.bind(inventory));
  console.log(inventory.items);