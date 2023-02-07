const alunno = document.querySelector("#alunno")
const classe = document.querySelector("#classe")
const tbody = document.querySelector("#tbody")

let lastRow = 1

function creaAttributo(tag, name, value) {
    let attr = document.createAttribute(name)
    attr.value = value
    tag.setAttributeNode(attr)
}

function creaColonnaDato(riga, val) {
    let td = document.createElement('td') 
    creaAttributo(td,"scope","col")   
    let nodoTesto = document.createTextNode(val)
    td.appendChild(nodoTesto)
    riga.appendChild(td)
}

function creaBottone(riga, title, id) {
    let btn = document.createElement('button')
    let nodoTesto = document.createTextNode(title)
    btn.appendChild(nodoTesto)
    creaAttributo(btn,"type","button")
    creaAttributo(btn,"onclick","elimina("+ id + ")")
    btn.classList.add("btn")
    btn.classList.add("btn-outline-danger")
    riga.appendChild(btn)
}
    
function creaRiga() {
    let tr = document.createElement('tr')
    creaAttributo(tr,"id","riga"+lastRow)
    creaColonnaDato(tr, alunno.value)
    creaColonnaDato(tr, classe.value)
    creaBottone(tr, "Elimina", lastRow)
    tbody.appendChild(tr)
    lastRow += 1
}

function aggiungi() {
    if ( alunno.value.trim().length < 4 ) return false
    if ( classe.value == 0 ) return false
    
    creaRiga()
    
    alunno.value = ""
    classe.value = ""
}

function elimina(riga) {
    let row = document.querySelector('#riga'+riga)
    tbody.removeChild(row)

}