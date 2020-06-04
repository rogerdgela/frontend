function Animal() {
    this.tipo = 'Cao';
    this.cor = 'Preto';
    this.nome = 'Mylow';
    this.peso = 20;

    this.fazerCoco = function () {
        console.log("XIXIXIXIXI");
    }

    this.comer = function (kg) {
        for(i = 1; i <= kg; i++){
            this.mastigar(i);
        }

        console.log('Que totoso');
        this.peso = this.peso + (kg / 2);
    }

    this.mastigar = function (i) {
        console.log(i + ' - Nhan...');
    }
}

var animal1 = new Animal();
animal1.nome = 'Dolly';
animal1.tipo = 'Gato';
animal1.comer(10);

var animal2 = new Animal()
animal2.nome = 'Maia';
animal2.tipo = 'Cao';
