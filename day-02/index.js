function manufacture(gifts, materials) {
    return gifts.filter(gift => gift.split('').every(letter => materials.includes(letter)))
}

gifts = ['tren', 'oso', 'pelota']
materials = 'tronesa'

console.log(manufacture(gifts, materials)) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

gifts = ['juego', 'puzzle']
materials = 'jlepuz'

console.log(manufacture(gifts, materials)) // ["puzzle"]

gifts = ['libro', 'ps5']
materials = 'psli'

console.log(manufacture(gifts, materials)) // []
