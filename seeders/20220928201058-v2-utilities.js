'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date()

    await queryInterface.bulkInsert('Utilities', [
      {
        name: 'Mysterious Key 1',
        description: 'Can be revealed and turn into a Bronze (60% chance), Silver (30% chance), or Gold (10% chance) Key 1',
        icon: 'Mysterious_Key1.png',
        type: 'Utility: Mysterious Item',
        rarity: 'Rare',
        durability: null,
        effect_description: null,
        stack: 99,
        key: 1,
        category: 'Mysterious',
        is_active: true,
        luck_rate_bonus: null,
        gold_gain_bonus: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Mysterious Key 2',
        description: 'Can be revealed and turn into a Bronze (60% chance), Silver (30% chance), or Gold (10% chance) Key 2',
        icon: 'Mysterious_Key2.png',
        type: 'Utility: Mysterious Item',
        rarity: 'Rare',
        durability: null,
        effect_description: null,
        stack: 99,
        key: 2,
        category: 'Mysterious',
        is_active: true,
        luck_rate_bonus: null,
        gold_gain_bonus: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Mysterious Key 3',
        description: 'Can be revealed and turn into a Bronze (60% chance), Silver (30% chance), or Gold (10% chance) Key 3',
        icon: 'Mysterious_Key3.png',
        type: 'Utility: Mysterious Item',
        rarity: 'Rare',
        durability: null,
        effect_description: null,
        stack: 99,
        key: 3,
        category: 'Mysterious',
        is_active: true,
        luck_rate_bonus: null,
        gold_gain_bonus: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Mysterious Key 4',
        description: 'Can be revealed and turn into a Bronze (60% chance), Silver (30% chance), or Gold (10% chance) Key 4',
        icon: 'Mysterious_Key4.png',
        type: 'Utility: Mysterious Item',
        rarity: 'Rare',
        durability: null,
        effect_description: null,
        stack: 99,
        key: 4,
        category: 'Mysterious',
        is_active: true,
        luck_rate_bonus: null,
        gold_gain_bonus: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Bronze Legendary Key 1',
        description: 'Legendary Mission Access',
        icon: 'Key1.png',
        type: 'Utility Item',
        rarity: 'Common',
        durability: 100,
        effect_description: 'Luck Rate plus 10%',
        stack: null,
        key: 1,
        category: 'Bronze',
        is_active: true,
        luck_rate_bonus: 10,
        gold_gain_bonus: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Silver Legendary Key 1',
        description: 'Legendary Mission Access',
        icon: 'Key1.png',
        type: 'Utility Item',
        rarity: 'Rare',
        durability: 250,
        effect_description: 'Luck Rate plus 25% and Gold gain +5%',
        stack: null,
        key: 1,
        category: 'Silver',
        is_active: true,
        luck_rate_bonus: 25,
        gold_gain_bonus: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Gold Legendary Key 1',
        description: 'Legendary Mission Access',
        icon: 'Key1.png',
        type: 'Utility Item',
        rarity: 'Epic',
        durability: 500,
        effect_description: 'Luck Rate plus 50% and Gold gain +10%',
        stack: null,
        key: 1,
        category: 'Gold',
        is_active: true,
        luck_rate_bonus: 50,
        gold_gain_bonus: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Bronze Legendary Key 2',
        description: 'Legendary Mission Access',
        icon: 'Key2.png',
        type: 'Utility Item',
        rarity: 'Common',
        durability: 100,
        effect_description: 'Luck Rate plus 10%',
        stack: null,
        key: 2,
        category: 'Bronze',
        is_active: true,
        luck_rate_bonus: 10,
        gold_gain_bonus: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Silver Legendary Key 2',
        description: 'Legendary Mission Access',
        icon: 'Key2.png',
        type: 'Utility Item',
        rarity: 'Rare',
        durability: 250,
        effect_description: 'Luck Rate plus 25% and Gold gain +5%',
        stack: null,
        key: 2,
        category: 'Silver',
        is_active: true,
        luck_rate_bonus: 25,
        gold_gain_bonus: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Gold Legendary Key 2',
        description: 'Legendary Mission Access',
        icon: 'Key2.png',
        type: 'Utility Item',
        rarity: 'Epic',
        durability: 500,
        effect_description: 'Luck Rate plus 50% and Gold gain +10%',
        stack: null,
        key: 2,
        category: 'Gold',
        is_active: true,
        luck_rate_bonus: 50,
        gold_gain_bonus: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Bronze Legendary Key 3',
        description: 'Legendary Mission Access',
        icon: 'Key3.png',
        type: 'Utility Item',
        rarity: 'Common',
        durability: 100,
        effect_description: 'Luck Rate plus 10%',
        stack: null,
        key: 3,
        category: 'Bronze',
        is_active: true,
        luck_rate_bonus: 10,
        gold_gain_bonus: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Silver Legendary Key 3',
        description: 'Legendary Mission Access',
        icon: 'Key3.png',
        type: 'Utility Item',
        rarity: 'Rare',
        durability: 250,
        effect_description: 'Luck Rate plus 25% and Gold gain +5%',
        stack: null,
        key: 3,
        category: 'Silver',
        is_active: true,
        luck_rate_bonus: 25,
        gold_gain_bonus: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Gold Legendary Key 3',
        description: 'Legendary Mission Access',
        icon: 'Key3.png',
        type: 'Utility Item',
        rarity: 'Epic',
        durability: 500,
        effect_description: 'Luck Rate plus 50% and Gold gain +10%',
        stack: null,
        key: 3,
        category: 'Gold',
        is_active: true,
        luck_rate_bonus: 50,
        gold_gain_bonus: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Bronze Legendary Key 4',
        description: 'Legendary Mission Access',
        icon: 'Key4.png',
        type: 'Utility Item',
        rarity: 'Common',
        durability: 100,
        effect_description: 'Luck Rate plus 10%',
        stack: null,
        key: 4,
        category: 'Bronze',
        is_active: true,
        luck_rate_bonus: 10,
        gold_gain_bonus: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Silver Legendary Key 4',
        description: 'Legendary Mission Access',
        icon: 'Key4.png',
        type: 'Utility Item',
        rarity: 'Rare',
        durability: 250,
        effect_description: 'Luck Rate plus 25% and Gold gain +5%',
        stack: null,
        key: 4,
        category: 'Silver',
        is_active: true,
        luck_rate_bonus: 25,
        gold_gain_bonus: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Gold Legendary Key 4',
        description: 'Legendary Mission Access',
        icon: 'Key4.png',
        type: 'Utility Item',
        rarity: 'Epic',
        durability: 500,
        effect_description: 'Luck Rate plus 50% and Gold gain +10%',
        stack: null,
        key: 4,
        category: 'Gold',
        is_active: true,
        luck_rate_bonus: 50,
        gold_gain_bonus: 10,
        createdAt: now,
        updatedAt: now,
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
