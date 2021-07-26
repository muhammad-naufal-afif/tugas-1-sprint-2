// function hitungVolumedanLuasPermukaanBalok(panjang, lebar, tinggi) {
//     hitungLuasBalok =  2 * ( (panjang * lebar) + (panjang * tinggi) + (lebar * tinggi) );
//     hitungVolume = panjang * lebar * tinggi;
//     console.log(hitungLuasBalok , hitungVolume);
// }
// hitungVolumedanLuasPermukaanBalok(90, 75, 95);

function hitungVolumedanLuasPermukaanBalok(panjang, lebar, tinggi) {
    luasPermukaanBalok = 2 * ( (panjang * lebar) + (panjang * tinggi) + (lebar * tinggi) );
    volumeBalok = panjang * lebar * tinggi;
    document.write("Panjang : " + panjang + "<br/>");
    document.write("Lebar : " + lebar + "<br/>");
    document.write("Tinggi : " + tinggi + "<br/>" + "<br/>");
    document.write("Volume Balok : " + volumeBalok + "<br/>");
    document.write("Luas Permukaan Balok : " + luasPermukaanBalok + "<br/>");
}

panjang = prompt("Panjang balok?");
lebar = prompt("Lebar Balok?");
tinggi = prompt("Tinggi Balok?");
hitungVolumedanLuasPermukaanBalok(panjang, lebar, tinggi);