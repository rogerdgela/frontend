function Animal() {
    this.tipo = 'Cao';
    this.cor = 'Preto';
    this.nome = 'Mylow';
    this.peso = 20;

    this.fazerCoco = function () {
        console.log("XIXIXIXIXI");
    }

    this.comer = function (kg) {
        console.log('Que totoso');
        this.peso = this.peso + (kg / 2);
    }
}

var animal1 = new Animal();
animal1.nome = 'Dolly';
animal1.tipo = 'Gato';

var animal2 = new Animal()
animal2.nome = 'Maia';
animal2.tipo = 'Cao';
