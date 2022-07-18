// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
async function cargarMapa() {
  const response = await fetch('https://api.jikan.moe/v4/top/anime');
  const datos=await response.json();
  const animes= datos['data']

  const labelsT = [];
  const values = [];
  for(anime of animes){
    generos= anime.genres
    nombre= anime.title

    for(genero of generos){
      gen = genero.name;
      if(!(labelsT.includes(gen))){
        labelsT.push(gen)
        values.push(1)
      }else{
        values[labelsT.indexOf(gen)]+=1
      }
    }
  }
  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: labelsT,
    datasets: [{
      data: values,
      backgroundColor: COLORES,
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf','#2e59d9', '#17a673', '#2c9faf','#2e59d9', '#17a673', '#2c9faf',"pink","black"],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
  llenarLabelsChart(labelsT,COLORES);
}
cargarMapa()
const llenarLabelsChart = (labels,colores) => {
for(i in labels){
 const contentCard=`
    <span class="mr-2">
        <i class="fas fa-circle" style="color:${colores[i]}"}></i>${labels[i]}
    </span>
  `;
 document.getElementById('labelsPieChart').innerHTML += contentCard
}
}