
document.querySelector('select').addEventListener('change', () => {
    /** @param {HTMLSelectElement} select */
    const select = document.querySelector('select')
    const opt = select.options[select.selectedIndex]
    fetch('https://api.jikan.moe/v4/top/anime')// JSON response
        .then(r => r.text())
        .then(data => {
            const response = JSON.parse(data)
            /** @type {Array<Object>}  */
            const phrases = response['data']
            phrases.filter(phrase => phrase.mal_id == select.value)
                .forEach(phrase => {
                    const contentHtml = `
            <div class="card mb-3 text-center align-items-center justify-content-center">
            <div class="row">
                <div class="col-md-3 col-12 center-block">
                    <img src="${phrase.images.jpg.image_url}" class="img-responsive" alt="${opt.textContent}">
                </div>
                <div class="col-md-9">
                <div class="card-body">
                    <h4 class="card-title">${opt.textContent} </h4> <small class="text-muted">${phrase.year}</small>
                    <p class="card-text">${phrase.synopsis}</p>
                </div>
                </div>
            </div>
            </div>
            `
                    document.getElementById('frases').innerHTML = contentHtml
                })
        })
})
