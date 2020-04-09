function tune(arr) {
    const frequencies = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];
    const predicates = [(x) => x <= -3, (x) => x < 0, (x) => x == 0, (x) => x > 0, (x) => x >= 3];
    const symbols = [">>•", ">•", "OK", "•<", "•<<"];
    return arr.map((freq, index) => (freq != 0 ? (symbols[predicates.findIndex((elem) => (elem((freq - frequencies[index])/frequencies[index])))]) : "-"));
}