const nilai = [90,75,60,45,88];
let nilaiTerbesar = 0;
let nilaiTerkecil = 50;
for (let i = 0; i < nilai.length; i++) {
    if (nilai[i]  > nilaiTerbesar) {
        nilaiTerbesar = nilai[i];
    }else if (nilai[i]  < nilaiTerkecil) {
        nilaiTerkecil = nilai[i];
    }
}
console.log("Nilai terbesar: " + nilaiTerbesar);
console.log("Nilai terkecil: " + nilaiTerkecil);       