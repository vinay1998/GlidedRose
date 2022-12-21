class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      // Update sell in value per day
      this.items[i].sellIn -= 1;
      if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') continue;
      if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = 0;
        }
        else if (this.items[i].sellIn <= 5) {
          // Checking quality for less than 48 because adding 3 should not increase quality above 50.
          if (this.items[i].quality < 48) this.items[i].quality = this.items[i].quality + 3;
        }
        else if (this.items[i].sellIn <= 10) {
          // Checking quality for less than 49 because adding 2 should not increase quality above 50.
          if (this.items[i].quality < 49) this.items[i].quality = this.items[i].quality + 2;
        }
        else {
          // Checking quality for less than 50 because adding 1 should not increase quality above 50.
          if (this.items[i].quality < 50) this.items[i].quality = this.items[i].quality + 1;
        }
      }
      else if (this.items[i].name === 'Aged Brie') {
        if (this.items[i].quality < 50) this.items[i].quality = this.items[i].quality + 1;
      }
      else {
        const qualityDecayValue = this.items[i].sellIn >= 0 ? 1 : 2;
        const updatedQuality = this.items[i].name === 'Conjured Mana Cake'
            ? this.items[i].quality - (qualityDecayValue * 2)
            : this.items[i].quality - qualityDecayValue;
        if (updatedQuality >= 0) this.items[i].quality = updatedQuality;
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
