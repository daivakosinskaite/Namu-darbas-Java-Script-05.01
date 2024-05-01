function generuotiLentele() {
    const stulpeliai = parseInt(document.getElementById('stulpeliai').value);
    const eilutes = parseInt(document.getElementById('eilutes').value);
    let lentele = '<table>';

    lentele += '<tr>';
    for (let i = 1; i <= stulpeliai; i++) {
        lentele += `<th></th>`; 
    }
    lentele += '</tr>';

    
    for (let i = 1; i <= eilutes; i++) {
        lentele += '<tr>';
        for (let j = 1; j <= stulpeliai; j++) {
            lentele += `<td></td>`; 
        }
        lentele += '</tr>';
    }

    lentele += '</table>';

    document.getElementById('lenteleContainer').innerHTML = lentele;
}
