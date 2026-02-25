interface Buku {
    judul: string;
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean;
}

function cetakBuku(buku: Buku): void {
    console.log("Judul: " + buku.judul);
    console.log("Pengarang: " + buku.pengarang);
    console.log("Tahun Terbit: " + buku.tahunTerbit);
    console.log("Tersedia: " + buku.tersedia);
}

const data: Buku = {
    judul: "Pemrograman Web Lanjut",
    pengarang: "Timothy Walukow",
    tahunTerbit: 2024,
    tersedia: true
};

cetakBuku(data);