function hitungLuas(panjang, lebar) {
  return panjang * lebar;
}

function hitungKeliling(panjang, lebar) {
  return 2 * (panjang + lebar);
}

// Contoh penggunaan
let panjang = 20;
let lebar = 5;

let luas = hitungLuas(panjang, lebar);
console.log("Luas persegi Panjang = " + luas);

let keliling = hitungKeliling(panjang, lebar);
console.log("Keliling persegi Panjang = " + lebar);

console.log("Luas persegi panjang:", luas);
console.log("Keliling persegi panjang:", keliling);
