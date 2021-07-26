// function hitungLuasPersegiPanjang(panjang, lebar) {
//     hasilLuas = panjang * lebar;
//     document.write("Panjang :" + panjang);
//     document.write("Lebar :" + lebar);
//     document.write("Hasil Luas Persegi Panjang :" + " " + hasilLuas);
// }
// hitungLuasPersegiPanjang(5, 9);

function hitungLuasPersegiPanjang(panjang, lebar) {
    luas = panjang * lebar;
    document.write("Panjang : " + panjang + "<br/>")
    document.write("Lebar : " + lebar + "<br/>" + "<br/>")
    document.write("Luas Persegi Panjang : " + luas);
}

panjang = prompt("Panjang?");
lebar = prompt("Lebar?");
hitungLuasPersegiPanjang(panjang, lebar);