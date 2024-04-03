global.rpg = {
  role(level) {
    level = parseInt(level);
    if (isNaN(level)) return { name: "", level: "" };

    const role = [
       { name: "Peon", level: 0 },
       { name: "Swordsman", level: 5 }, //»»————⍟——««\n
       { name: "Member", level: 10 },
       { name: "Executive", level: 15 },
       { name: "🈴 Captain", level: 20 },
       { name: "🈲 Vice-President", level: 25 }, //𐏓・,〔𒁷, 𒆜〢
       { name: "🉐 Commander", level: 30 },
       { name: "🈹 Lieutenant", level: 35 },
       { name: "🈺 Adviser", level: 40 },
       { name: "🈶 Division Leader", level: 45 },
       { name: "🈚 Vice-President", level: 50 },
       { name: "🈷️ Chief", level: 60 },
       { name: "🈸 Board Member", level: 70 },
       { name: "🈳 Supreme Commander", level: 80 },
       { name: "🈂️ The Boss", level: 90 },
       { name: "🈁 Emperor", level: 100 }, 
    ];

    return role.reverse().find((role) => level >= role.level);
  },
};
