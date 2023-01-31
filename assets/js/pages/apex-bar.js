document.addEventListener('DOMContentLoaded', function () {

    var apex = document.getElementById('graphics');
    var bar = document.querySelector("#bar");
    var line = document.querySelector("#line");
    var pie = document.querySelector("#pie");
    var radial = document.querySelector("#radial");

    if (apex) {
        
        if(bar){chartTypeBar(bar);}
        chartTypeLine(line);
        chartTypePie(pie);
        chartTypeRadial(radial)

    } else {
        console.log('There is no, Graphics');
    }

});

function chartTypeBar(element) {

    var options = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'sales',
            data: [30, 40, 35, 50, 49, 60, 70]
        }],
        xaxis: {
            categories: ['janeiro','fevereiro', 'março','abril','maio','junho', 'julho']
        }
    }

    var chart = new ApexCharts(element, options);
    chart.render();
}

function chartTypeLine(element) {

    var options = {
        chart: {
            type: 'line'
        },
        series: [{
            name: 'sales',
            data: [30, 40, 35, 50, 49, 60, 70]
        }],
        xaxis: {
            categories: ['janeiro','fevereiro', 'março','abril','maio','junho', 'julho']
        }
    }

    var chart = new ApexCharts(element, options);
    chart.render();
}

function chartTypePie(element) {

    var options = {
        chart: {
            type: 'pie'
        },
        series: [44, 55, 13, 33],
        labels: ['Presenças', 'Faltas', 'Ocorrências', 'Premiações'],
        plotOptions: {
            pie: {
                customScale: 0.8,
                labels: {
                    show: false,
                }
            }
            
        }
    }

    var chart = new ApexCharts(element, options);
    chart.render();
}

function chartTypeRadial(element) {

    var options = {
        chart: {
            type: 'radialBar'
        },
        series: [75],
        labels: ['Frequência'],
    }

    var chart = new ApexCharts(element, options);
    chart.render();
}
