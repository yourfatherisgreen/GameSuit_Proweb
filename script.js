// suit jari
const outputJari = document.getElementById("outputUserJari");
const outputLawanJari = document.getElementById("outputLawanJari");
const pilihan = ["jempol", "telunjuk", "kelingking"];

function suitJariUser(event) {
    const pilihanUser = event.currentTarget.value;
    outputJari.value = pilihanUser;
    const pilihanLawan = pilihan[Math.floor(Math.random() * pilihan.length)];
    const hasilPilihanLawan = pilihanLawan;
    outputLawanJari.value = hasilPilihanLawan;
    let resultText = "";
    if (pilihanUser === pilihanLawan) {
        resultText = "Seri!";
    } 
    else if (
        (pilihanUser === "jempol" && pilihanLawan === "telunjuk") ||
        (pilihanUser === "telunjuk" && pilihanLawan === "kelingking") ||
        (pilihanUser === "kelingking" && pilihanLawan === "jempol")
    ) {
        resultText = "Kamu Menang!";
    } 
    else {
        resultText = "Kamu Kalah!";
    }

    document.getElementById("result").textContent = "Pemenang: " + resultText;
}