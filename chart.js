 //----------------------Gráficos de Barras------------------------------------------

 let bar = new Chart(document.getElementById("barras"),{
    type: 'bar',
    data: {
        labels: ["Palio", "Gol", "Corsa", "Uno", "Onix", "Up"],
        datasets: [
            {
                label: "Realizao",
                data: [10, 35, 24, 11, 12, 19],
                backgroundColor: "#0F0F0F"

            },
            {
                label: "Planejado",
                data: [8, 25, 12, 6, 9, 9],
                backgroundColor: "#FFAA00"

            }  
    ] 
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'

            },
            title: {
                display:true,
                text:"Vendas de Veículos"
            }
        }

    }

 }); 
   
//--------------------------------------------Gráfico de linhas------------------------------------

let linhas = new Chart(document.getElementById("linhas"),{
    type: 'line', 
    data: {
        labels: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    
        datasets: [
        {
            label: "Casos Confirmados",
            data: [1123, 1109, 1159, 156, 5555, 1666, 5000],
            borderColor: "rgb(60,186,159)",
            backgroundColor: "rgb(60, 186, 186, 159, 0.1)"
            
        },
        {
            label: "Número de Óbitos",
            data: [123, 109, 159, 156, 555, 666, 500],
            borderColor: "rgb(255,140,13",
            backgroundColor: "rgb(255, 140, 13, 0.1)"
        }
],
},
    options:{
        responsive: true,
        plugins:{
            legend: {
                display:true,
                position: 'top', //top, bottom, left, right
            },
            title: {
                display: true,
                text:"Curva de Covid"
            },
            layout:{
                padding:{
                    left: 100,
                    right: 100,
                    top:50,
                    bottom:10
                }
            }
        }
    }
});
 

//------------------------Gráfico de Pizza------------------------------------

