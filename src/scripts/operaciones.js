const lettersOfNumbers = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15}

function validateNumber(number, baseOrigin, baseEnd) {
    number = number.toLowerCase()
    let error = {
        value: true,
        msj: '',
    }

    if (baseOrigin != baseEnd) {
        for (let i = 0; i < number.length; i++) {
            if (!isNaN(number.charAt(i))) {
                let digit = parseInt(number.charAt(i))
                if (digit >= baseOrigin) {
                    error.value = false
                    error.msj = 'Numero no pertenece al sistema numérico indicado'
                    return error
                }
            } else {
                let digit = number.charAt(i)
                if (Object.keys(lettersOfNumbers).includes(digit)) {
                    if (lettersOfNumbers[digit] >= baseOrigin) {
                        error.value = false
                        error.msj = 'Numero no pertenece al sistema numérico indicado'
                        return error
                    }
                } else {
                    error.value = false
                    error.msj = 'Existen caracteres inválidos'
                    return error
                }
            }
        }
    } else {
        error.value = false
        error.msj = 'No puede convertir al mismo sistema numérico'
        return error
    }
    return error
}

function baseNToDecimal(number, baseOrigin) {
    let total = 0
    number = number.toLowerCase()

    for (let i = 0; i < number.length; i++) {
        let exponent = number.length-1-i
        
        if (!isNaN(number.charAt(i))) {
            let digit = parseInt(number.charAt(i))
            total += digit * Math.pow(baseOrigin,exponent)
        } else {
            let digit = number.charAt(i)
            if (Object.keys(lettersOfNumbers).includes(digit)) {
                total += lettersOfNumbers[digit] * Math.pow(baseOrigin,exponent)
            }
        }
    }
    return total
}
function decimalToBaseN(number, baseEnd) {
    let strNumber = ''
    let listDigits = []
    number = parseInt(number)
    let result = number

    while (result >= baseEnd) {
        let residue = result % baseEnd
        result = (result-residue) / baseEnd
        listDigits.unshift(residue)
    }
    listDigits.unshift(result)
    listDigits = listDigits.map(function (value) {
        if (value > 9 && Object.values(lettersOfNumbers).includes(value)) {
            let letters = Object.keys(lettersOfNumbers)
            let numbers = Object.values(lettersOfNumbers)
            return letters[numbers.indexOf(value)]
        } else {
            return value
        }
    })
    strNumber = listDigits.join('')
    strNumber = strNumber.toUpperCase()
    return strNumber
}

const operaciones = {
    baseNToDecimal,
    validateNumber,
    decimalToBaseN
}

export default operaciones