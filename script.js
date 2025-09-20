//inisiasi nilai
let nilai = [0, 0, 0]

//input nilai dari user
//nilai harus angka dan di dalam range 0 hingga 100
function cekNilai() {
    for (let i = 0;  i < nilai.length; i++) {
        nilai[i] = parseInt(prompt(`masukkan nilai dari range 0 hingga 100 | 1.UAS; 2.PTS; 3.Tugas | ${i+1}`))
        if(!isNaN(nilai[i]) && nilai[i] >=0 && nilai[i] <=100){
        } else {
            i = 0 - 1
            alert('invalid number... masukkan ulang')
        }
    }
}

cekNilai();

//memecah nilai ke kategori yang diinginkan, dan
//memberi bobot pada masing - masing dari kategori
let UAS = nilai[0] * 35 / 100;
let PTS = nilai[1] * 45 / 100;
let tugas = nilai[2] * 20 / 100;

//jumlah dari setiap kategori setelah dihitung dengan bobotnya dan dijumlahkan
//NSM = Nilai Skor Mata kuliah (90, 75, 80)
let NSM = UAS + PTS + tugas;

//NMK = Nilai Mata kuliah (A, AB, B)
let NMK = '';

//Konversi NSM ke NMK
if (NSM >= 85 && NSM <=100) {
    NMK = "A"
} else if (NSM >75 && NSM <=85) {
    NMK = "AB"
} else if (NSM >65 && NSM <=75) {
    NMK = "B"
} else if (NSM >60 && NSM <=65) {
    NMK = "BC"
} else if (NSM >50 && NSM <=60) {
    NMK = "C"
} else if (NSM >40 && NSM <=50) {
    NMK = "D"
} else if (NSM <=40) {
    NMK = "E"
}

// document.getElementById('output') = `
//     ${nilai}
//     UAS = ${UAS} ; PTS = ${PTS} ; tugas = ${tugas}
//     NSM = ${NSM}
//     NMK = ${NMK}
// `

console.log(nilai)
console.log(`UAS = ${UAS} ; PTS = ${PTS} ; tugas = ${tugas}`)
console.log(`NSM = ${NSM}`)
console.log(`NMK = ${NMK}`)