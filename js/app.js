
var API = "https://api.jikan.moe/"
var COLORES= ["#0d6efd","#4e73df",
"#1cc88a","#36b9cc","#f6c23e","#e74a3b","#20c997","#0dcaf0","#dc3545","#d63384","#495057"]
var COLORS=["primary","success","secondary","danger","dark","warning","info"]
var topAnimeId=""
const cargarDatos = () => {
    const ids=[]
    fetch(API+'v4/top/anime')
    .then((response) => response.json())
    .then(data => {
        let animes = data['data'].slice(0,4)
        const select = document.getElementsByTagName('top-cards')
        let i=0;
        for(objeto of animes){
            ids.push(objeto.mal_id)
           const contentCard=`
           <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-${COLORS[i]} shadow h-100 py-2">
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
           i+=1;
           document.getElementById('top-cards').innerHTML += contentCard

        }
    })
    return ids;
}
/*
      
*/
var idsTop=cargarDatos()
console.log(idsTop)

