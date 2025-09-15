class Thesaurus {
    #hash(str, size = 16) {
    let total = 0;
    for (const ch of str) {
        total = (total * 31 + ch.codePointAt(0)) | 0; // mezcla con wrap
    }
    const index = (total >>> 0) % size;
    console.log(`Final total: ${total}, Index: ${index}`);
    return index;

}
    constructor() {
        this.thesaurus = new Array(16)
    }
    addSinonimus(word, sinonimus) {
    const index = this.#hash(word);
    let element = { key: word, value: sinonimus };

    if (!this.thesaurus[index]) {
        this.thesaurus[index] = [element];
    } else {
        this.thesaurus[index].push(element);
    }
}

    search(value) {
        if(!this.thesaurus[this.#hash(value)]) return 'Not Word found';
        let celda = this.thesaurus[this.#hash(value)]
        if (this.thesaurus[this.#hash(value)].length >= 1) {
            for (let i = 0; i < celda.length; i++) {
                if (celda[i].key === value) {
                    return celda[i].value
                }
            }
        }
        return 'Not Word found'
    }

    printAll() {
    for (let i = 0; i < this.thesaurus.length; i++) {
        const bucket = this.thesaurus[i];
        if (bucket) {
            console.log(`Bucket ${i}:`);
            for (const entry of bucket) {
                console.log(`  ${entry.key} → ${entry.value}`);
            }
        }
    }
}
    whatCell(arr) {
        let result =[]
        for (const el of arr) {
            result.push(`${el} => ${this.#hash(el)}`)
        }
        return result
    }
}

const thesaurus = new Thesaurus()

thesaurus.addSinonimus('BAD', 'evil')
/* thesaurus.addSinonimus('cab', 'taxi')
thesaurus.addSinonimus('ace', 'star')
thesaurus.addSinonimus('DAB', 'pat')
thesaurus.addSinonimus('aec', 'company')

console.log(thesaurus.search('aec'))
console.log(thesaurus.search('BAD')) */

console.log(thesaurus.printAll())
console.log(thesaurus.whatCell(["BAD", "DAB", "cab", "ace", "aec", "zzz"]))
