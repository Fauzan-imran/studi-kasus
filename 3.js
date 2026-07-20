const hero = [
    "layla",
    "ling",
    "faranco",
    "fanny",
    "miya",
    "karina",
];
for (let i = 0; i <hero.length; i++) {
    if (hero[i].startsWith("f")) {
        console.log(hero[i] + " -> Hero Assasin/Tank Favorite");
    } else {
        console.log(hero[i] + " -> Hero biasa");
    }
}