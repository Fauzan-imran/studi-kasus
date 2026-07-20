const nama = "budi";
const umur = 25;
const harga = [12000, 15000, 20000, 25000];
let total = 0;
for (let i = 0; i < harga.length; i++) {
    total += harga[i];
}
console.log("nama: " + nama);
console.log("umur: " + umur);
console.log("total belanja: " + total);
 if (total >= 30000) {
    console.log("Status:  Mendapatkan diskon");
 } else {
    console.log("Status: Tidak mendapatkan diskon");
 }