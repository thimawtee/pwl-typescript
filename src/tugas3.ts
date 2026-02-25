class Lingkaran {

    constructor(public jariJari: number) {}

    public hitungLuas(): number {
        return Math.PI * this.jariJari * this.jariJari;
    }
}

const lingkaran = new Lingkaran(7);

console.log("Luas lingkaran: " + lingkaran.hitungLuas());