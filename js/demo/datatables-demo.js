// Call the dataTables jQuery plugin
const cargarPeliculas = async() => {
	try {
		const respuesta = await fetch('https://api.jikan.moe/v4/top/anime');
		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
      let animes = datos['data']
      for (objeto of animes) {
          const contentHtml=`<tr>
          <td>${objeto.title}</td>
          <td>${objeto.episodes}</td>
          <td>${objeto.source}</td>
          <td>${objeto.year}</td>
          <td>${objeto.aired.string}</td>
          <td>${objeto.score}
          </tr>
          `
          document.getElementById('infoTable').innerHTML += contentHtml
        console.log(objeto)
      }
		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('El anime que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
  await $(document).ready(function() {
    $('#dataTable').DataTable();
  });
}
cargarPeliculas()
// Call the dataTables jQuery plugin

