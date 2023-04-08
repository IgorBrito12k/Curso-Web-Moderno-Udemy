function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Igor')
p1.falar()
const p2 = new Pessoa('Camila')
p2.falar()
const p3 = new Pessoa('Thalita')
p3.falar()