const cargarDatos = () => {
    // alert('Hola mundo')
    fetch('https://api.jikan.moe/v4/top/anime')
        .then((response) => response.json())
        .then(data => {
            let animes = data['data']
            let ntop=1;
            const select = document.getElementsByTagName('select')[0]
            for (objeto of animes) {
                const optElement = document.createElement('option')
                optElement.innerText = objeto.title
                optElement.value = objeto.mal_id
                if(select!= null){ select.appendChild(optElement);}
                else{
                const contentCard=`
           <div class="col-xl-3 col-md-6 col-6 p-2">
                <div class="card border-left-${COLORS[ntop]} shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    ${objeto.title}</div>                            
                                <div class="h5 mb-0 font-weight-bold text-gray-800">${objeto.score} <i class="fas fa-star fa-1x "></i></div>              
                            </div>
                            <div class="col-sm">
                            <img src="${objeto.images.jpg.image_url}" class="img-fluid" alt="${objeto.title}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           `;
           if(ntop<5)document.getElementById('top-cards').innerHTML += contentCard
        }
        ntop+=1;
            }
        })
}
document.addEventListener('DOMContentLoaded', cargarDatos);
