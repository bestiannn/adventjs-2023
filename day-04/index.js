function decode(message) {
    let stack = []
    let i = 0
    while (i < message.length) {
        const char = message[i]
        if (char === '(') {
            stack.push(i)
        } else if (char === ')') {
            const start = stack.pop()
            const end = i
            const reversed = message.slice(start + 1, end).split('').reverse().join('')
            message = message.slice(0, start) + reversed + message.slice(end + 1)
            i = start
        }
        i++
    }
    return message
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus

const d = decode('asd')
console.log(d) // ''