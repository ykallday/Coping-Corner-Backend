'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('resources', [
      {
        user_id: 1,
        title: "Feel Empowered",
        type_meditation: false,
        type_movement: false,
        type_mind_body: true,
        type_distraction: true,
        type_grounding: false,
        type_affirmation: false,
        feeling_angry: false,
        feeling_blah: true,
        feeling_fine: false,
        feeling_bad: false,
        feeling_afraid: false,
        feeling_overwhelmed: false,
        feeling_under_stimulated: false,
        feeling_calm: false,
        feeling_lonely: false,
        feeling_guilty: false,
        feeling_disconnected: true,
        feeling_tired: false,
        feeling_good: false,
        feeling_sad: true,
        feeling_self_doubt: false,
        feeling_depressed: false,
        feeling_frustrated: false,
        feeling_happy: false,
        feeling_totally_distraught: false,
        feeling_extremely_irritable: false,
        time_requirement: "5 minutes",
        preview_text: "Need a boost?",
        content: "Take a deep breath, look yourself in the mirror and say: I AM AWESOME",
        likes: 2,
        optional_image: "https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        optional_link: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        title: "Box Breathing",
        type_meditation: true,
        type_movement: false,
        type_mind_body: true,
        type_distraction: false,
        type_grounding: true,
        type_affirmation: false,
        feeling_angry: false,
        feeling_blah: false,
        feeling_fine: false,
        feeling_bad: false,
        feeling_afraid: true,
        feeling_overwhelmed: true,
        feeling_under_stimulated: false,
        feeling_calm: false,
        feeling_lonely: false,
        feeling_guilty: false,
        feeling_disconnected: true,
        feeling_tired: false,
        feeling_good: false,
        feeling_sad: false,
        feeling_self_doubt: false,
        feeling_depressed: false,
        feeling_frustrated: false,
        feeling_happy: false,
        feeling_totally_distraught: true,
        feeling_extremely_irritable: true,
        time_requirement: "10 minutes",
        preview_text: "A breathing exercise for when you're feeling overwhelmed.",
        content: "Breathe in for 4 seconds, hold for 4 seconds, breathe out for 4 seconds, hold for 4 seconds and repeat!",
        likes: 10,
        optional_image: null,
        optional_link: "https://www.boxbreathing.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        title: "Get Un-frozen",
        type_meditation: true,
        type_movement: true,
        type_mind_body: true,
        type_distraction: false,
        type_grounding: true,
        type_affirmation: false,
        feeling_angry: false,
        feeling_blah: false,
        feeling_fine: false,
        feeling_bad: false,
        feeling_afraid: false,
        feeling_overwhelmed: true,
        feeling_under_stimulated: true,
        feeling_calm: false,
        feeling_lonely: false,
        feeling_guilty: false,
        feeling_disconnected: true,
        feeling_tired: true,
        feeling_good: false,
        feeling_sad: false,
        feeling_self_doubt: false,
        feeling_depressed: false,
        feeling_frustrated: false,
        feeling_happy: false,
        feeling_totally_distraught: false,
        feeling_extremely_irritable: false,
        time_requirement: "3 minutes",
        preview_text: "Shake it off!",
        content: "Do 30 jumping jacks and don't cry about it.",
        likes: 0,
        optional_image: null,
        optional_link: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        title: "Sun Salutation",
        type_meditation: true,
        type_movement: true,
        type_mind_body: true,
        type_distraction: false,
        type_grounding: true,
        type_affirmation: false,
        feeling_angry: false,
        feeling_blah: true,
        feeling_fine: true,
        feeling_bad: false,
        feeling_afraid: true,
        feeling_overwhelmed: true,
        feeling_under_stimulated: false,
        feeling_calm: true,
        feeling_lonely: false,
        feeling_guilty: false,
        feeling_disconnected: true,
        feeling_tired: false,
        feeling_good: true,
        feeling_sad: false,
        feeling_self_doubt: false,
        feeling_depressed: true,
        feeling_frustrated: false,
        feeling_happy: true,
        feeling_totally_distraught: true,
        feeling_extremely_irritable: true,
        time_requirement: "5 minutes",
        preview_text: "Reconnect with your body.",
        content: "Traditional yoga flows meet mindfullness in this mind-body-connecting technique. BLAH BLAH BLAH.",
        likes: 8,
        optional_image: null,
        optional_link: "http://www.yoga.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        title: "Take a Walk",
        type_meditation: false,
        type_movement: true,
        type_mind_body: true,
        type_distraction: true,
        type_grounding: true,
        type_affirmation: false,
        feeling_angry: true,
        feeling_blah: true,
        feeling_fine: true,
        feeling_bad: true,
        feeling_afraid: true,
        feeling_overwhelmed: true,
        feeling_under_stimulated: true,
        feeling_calm: true,
        feeling_lonely: false,
        feeling_guilty: false,
        feeling_disconnected: true,
        feeling_tired: true,
        feeling_good: true,
        feeling_sad: true,
        feeling_self_doubt: false,
        feeling_depressed: true,
        feeling_frustrated: true,
        feeling_happy: true,
        feeling_totally_distraught: false,
        feeling_extremely_irritable: false,
        time_requirement: "15 minutes",
        preview_text: "Get out of your current environment",
        content: "Take a walk outside and something something something, it'll do your mind something something.",
        likes: 6,
        optional_image: null,
        optional_link: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('resources')
  }
};