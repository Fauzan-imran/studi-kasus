const skor = [100,450,800,150,900];
for (let i = 0; i < skor.length; i++) {
    if (skor[i] >= 800) {
        console.log("player " + (i + 1) + " : " + skor[i] + "-> Mythic");
    }else if (skor[i] >= 500) {
        console.log("player " + (i + 1) + " : " + skor[i] + " -> Legendary");
    }else if (skor[i] >= 300) {
        console.log("player " + (i + 1) + " : " + skor[i] + " -> EPIC");
    }else{
        console.log("player " + (i + 1) + " : " + skor[i] + " -> Warrior");
    }
}