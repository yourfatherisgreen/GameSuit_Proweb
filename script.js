// suit jari
const outputJari = document.getElementById("outputUserJari");
const outputLawanJari = document.getElementById("outputLawanJari");
const pilihanJari = ["jempol", "telunjuk", "kelingking"];
let counterSeri = 0;
let counterMenang = 0;
let counterKalah = 0;

function suitJariUser(event) {
    const pilihanUser = event.currentTarget.value;
    outputJari.value = pilihanUser;
    const pilihanLawan = pilihanJari[Math.floor(Math.random() * pilihanJari.length)];
    const hasilPilihanLawan = pilihanLawan;
    outputLawanJari.value = hasilPilihanLawan;
    let resultText = "";
    if (pilihanUser === pilihanLawan) {
        resultText = "Seri!";
        counterSeri++;
    } 
    else if (
        (pilihanUser === "jempol" && pilihanLawan === "telunjuk") ||
        (pilihanUser === "telunjuk" && pilihanLawan === "kelingking") ||
        (pilihanUser === "kelingking" && pilihanLawan === "jempol")
    ) {
        resultText = "Kamu Menang!";
        counterMenang++;
    } 
    else {
        resultText = "Kamu Kalah!";
        counterKalah++;
    }

    document.getElementById("result").textContent = "Hasil : " + resultText;
    document.getElementById("score").textContent = "Skor: Seri: " + counterSeri + ", Menang: " + counterMenang + ", Kalah: " + counterKalah;
}

// suit gajah
const outputGajah = document.getElementById("outputUserGajah");
const outputLawanGajah = document.getElementById("outputLawanGajah");
const pilihanGajah = ["gajah", "orang", "semut"];

function suitGajahUser(event) {
    const pilihanUser = event.currentTarget.value;
    outputGajah.value = pilihanUser;
    const pilihanLawan = pilihanGajah[Math.floor(Math.random() * pilihanGajah.length)];
    const hasilPilihanLawan = pilihanLawan;
    outputLawanGajah.value = hasilPilihanLawan;
    let resultText = "";
    if (pilihanUser === pilihanLawan) {
        resultText = "Seri!";
        counterSeri++;
    } 
    else if (
        (pilihanUser === "gajah" && pilihanLawan === "orang") ||
        (pilihanUser === "orang" && pilihanLawan === "semut") ||
        (pilihanUser === "semut" && pilihanLawan === "gajah")
    ) {
        resultText = "Kamu Menang!";
        counterMenang++;
    } 
    else {
        resultText = "Kamu Kalah!";
        counterKalah++;
    }

    document.getElementById("result").textContent = "Hasil : " + resultText;
    document.getElementById("score").textContent = "Skor: Seri: " + counterSeri + ", Menang: " + counterMenang + ", Kalah: " + counterKalah;
}

// suit batuta
const outputBatuta = document.getElementById("outputUserBatuta");
const outputLawanBatuta = document.getElementById("outputLawanBatuta");
const pilihanBatuta = ["batu", "gunting", "kertas"];

function suitBatutaUser(event) {
    const pilihanUser = event.currentTarget.value;
    outputBatuta.value = pilihanUser;
    const pilihanLawan = pilihanBatuta[Math.floor(Math.random() * pilihanBatuta.length)];
    const hasilPilihanLawan = pilihanLawan;
    outputLawanBatuta.value = hasilPilihanLawan;
    let resultText = "";
    if (pilihanUser === pilihanLawan) {
        resultText = "Seri!";
        counterSeri++;
    } 
    else if (
        (pilihanUser === "batu" && pilihanLawan === "gunting") ||
        (pilihanUser === "gunting" && pilihanLawan === "kertas") ||
        (pilihanUser === "kertas" && pilihanLawan === "batu")
    ) {
        resultText = "Kamu Menang!";
        counterMenang++;
    } 
    else {
        resultText = "Kamu Kalah!";
        counterKalah++;
    }

    document.getElementById("result").textContent = "Hasil : " + resultText;
    document.getElementById("score").textContent = "Skor: Seri: " + counterSeri + ", Menang: " + counterMenang + ", Kalah: " + counterKalah;

}