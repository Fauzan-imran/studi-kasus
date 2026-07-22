const kehadiran = [
    true,
    false,
    true,
    true,
    false,
    true
];
let jumlahHadir = 0;
let jumlahTidakHadir = 0;
for (let i = 0; i < kehadiran.length; i++) {
    if (kehadiran[i] === false) {
        jumlahTidakHadir++;
        console.log("Siswa tidak hadir");
    } else {
        jumlahHadir++;
        console.log("Siswa hadir");
    }
}
console.log(`Jumlah siswa hadir:  ${jumlahHadir}
Jumlah siswa tidak hadir: ${jumlahTidakHadir}`
)