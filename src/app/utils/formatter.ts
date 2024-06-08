export function filterDigits(maxDigits: number, viewString: string) {

    const regex = /\d+/g;

    // Extrai todos os dígitos da string usando a expressão regular
    const digitsArray = viewString.match(regex);

    if (!digitsArray) {
        return '';
    }

    const concat = digitsArray.join('')

    return concat.slice(0, maxDigits)
}

export function maskCpf(value: string) {
    let cpf = filterDigits(11, value)
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

export function maskCnpj(value: string) {
    let cnpj = filterDigits(14, value)
    cnpj = cnpj.replace(/\D/g, "")
    cnpj = cnpj.replace(/(\d{2})(\d)/, "$1.$2")
    cnpj = cnpj.replace(/(\d{3})(\d)/, "$1.$2")
    cnpj = cnpj.replace(/(\d{3})(\d)/, "$1/$2")
    cnpj = cnpj.replace(/(\d{4})(\d{1,2})$/, "$1-$2")
    return cnpj
}


export function maskPhone(value: string) {
    let data = filterDigits(8, value)
    if(data.length === 0) return ''

    let x = data.match(/(\d{2})(\d{5})(\d*)/);
    if (x) {
        return `(${x[1]}) ${x[2]}-${x[2]}`
    }

    x = data.match(/(\d{2})(\d*)/);
    if (x) {
        console.log('Ta aquiiii => ', x[1].length )
        return `(${x[1]}) ${x[2]} `
    }

    x = data.match(/(\d*)/);
    if (x) {
        return `(${x[1]} `
    }

    return data.length > 0 ? '(' + data : ''
}