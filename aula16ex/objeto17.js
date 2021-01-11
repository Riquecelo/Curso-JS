let amigo = {
    nome:'Marcelo',
    peso: 65,
    altura: '1.59',
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)