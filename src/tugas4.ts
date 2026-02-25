function sapaan(data: string | number): string {

    if (typeof data === "string") {
        return "Halo, " + data;
    } else {
        return "Umur: " + data + " tahun";
    }
}

console.log(sapaan("Timothy"));
console.log(sapaan(19));