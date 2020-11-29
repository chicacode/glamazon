function diasEntreFech(fecha1, fecha2) {
    const undia = 1000 * 60 * 60 * 24
    const diffe = Math.abs(fecha1 - fecha2)

    return Math.floor(diffe / undia)
}

const hoy = new Date()
const nacimiento = new Date(1987, 4, 22)