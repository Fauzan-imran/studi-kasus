const stok = [12,0,5,8,0,20];
let BarangHabis = 0;
let barangTersedia = 0;
for (let i = 0; i < stok.length; i++) {
    if (stok[i] === 0) {
        BarangHabis++;
    } else {
        barangTersedia++;
    }
}
console.log("Jumlah barang habis: " + BarangHabis);
console.log("Jumlah barang tersedia: " + barangTersedia);