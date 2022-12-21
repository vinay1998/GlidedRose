const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("Dexterity Vest sell in greater than 0", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });
  it("Dexterity Vest sell in less than 0", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", -1, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(18);
  });
  it("Dexterity Vest min quality", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });
  it("Aged Brie", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(1);
  });
  it("Aged Brie max quality", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(50);
  });
  it("Elixir of the Mongoose", function() {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 5, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(6);
  });
  it("Sulfuras 1", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(80);
  });
  it("Sulfuras 2", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(80);
  });
  it("Backstage passes sell in greater than 10", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(21);
  });
  it("Backstage passes sell in greater than 10 max quality", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(50);
  });
  it("Backstage passes sell in greater than 5", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(47);
  });
  it("Backstage passes sell in greater than 5 max quality", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
  });
  it("Backstage passes sell in greater than 0", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(48);
  });
  it("Backstage passes sell in greater than 0 max quality", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(50);
  });
  it("Backstage passes sell in less than 0", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });
  it("Conjured", function() {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(4);
  });
  it("Conjured min quality", function() {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(0);
  });
});
