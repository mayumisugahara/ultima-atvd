// Dados para o gráfico de pessoas que gostam de séries globalmente
const dataGlobal = [
    {
        x: ['Drama', 'Comédia', 'Ficção Científica', 'Fantasia', 'Terror'],
        y: [35, 25, 15, 15, 10], // Percentagens de interesse global
        type: 'bar',
        marker: {
            color: ['#ff4500', '#ff6a33', '#ff8f66', '#ffb399', '#ffd6cc']
        }
    }
];

const layoutGlobal = {
    title: {
        text: 'Preferências Globais de Séries (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Gêneros de Séries',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#f8f9fa',
    paper_bgcolor: '#f8f9fa'
};

// Exibe o gráfico na seção com id 'grafico'
Plotly.newPlot('grafico', dataGlobal, layoutGlobal);

// Dados para o gráfico de pessoas que gostam de séries no Colégio Morelli
const dataMorelli = [
    {
        x: ['Drama', 'Comédia', 'Ficção Científica', 'Fantasia', 'Terror'],
        y: [30, 30, 20, 10, 10], // Percentagens específicas do Colégio Morelli
        type: 'bar',
        marker: {
            color: ['#ff4500', '#ff6a33', '#ff8f66', '#ffb399', '#ffd6cc']
        }
    }
];

const layoutMorelli = {
    title: {
        text: 'Preferências de Séries no Colégio Morelli (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Gêneros de Séries',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#f8f9fa',
    paper_bgcolor: '#f8f9fa'
};

// Exibe o gráfico na seção com id 'grafico-morelli'
Plotly.newPlot('grafico-morelli', dataMorelli, layoutMorelli);

