const nilai = [90,75,60,45,88];
let jumlahLulus = 0;
let jumlahTidakLulus = 0;
for (let i = 0; i <nilai.length; i++) {
    if (nilai[i] >= 75) {
        console.log("Nilai ke-" + (i+1) + " : " + nilai[i] + " -> lulus");
        jumlahLulus++;
    } else {
        console.log("Nilai ke-" + (i+1) + " : " + nilai[i] + " -> tidak lulus");
        jumlahTidakLulus++;
    }
}
console.log(`Jumlah siswa lulus:  ${jumlahLulus}
Jumlah siswa tidak lulus ${jumlahTidakLulus}`)