// База данных видеокарт
// Анимация появления элементов при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Анимация для карточек видеокарт
    const cards = document.querySelectorAll('.gpu-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Плавная прокрутка к результатам
    const compareBtn = document.getElementById('compare-btn');
    if (compareBtn) {
        compareBtn.addEventListener('click', function() {
            setTimeout(() => {
                const resultsSection = document.getElementById('results');
                if (resultsSection.style.display !== 'none') {
                    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 300);
        });
    }
});

// Добавление этой функции для улучшения UX на мобильных
function optimizeMobileUX() {
    // Улучшение касаний на мобильных
    if ('ontouchstart' in document.documentElement) {
        document.body.classList.add('touch-device');
        
        // Увеличиваем область клика для выпадающих списков
        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
            select.style.minHeight = '44px'; // Минимальный размер для удобного касания
        });
        
        // Увеличиваем область клика для кнопок
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.style.minHeight = '44px';
            button.classList.add('touch-button');
        });
    }
}

// Вызов функции оптимизации
optimizeMobileUX();
const graphicsCards = [
    {
        id: 1,
        name: "NVIDIA GeForce RTX 4090",
        manufacturer: "NVIDIA",
        releaseDate: "2022",
        memory: 24,
        memoryType: "GDDR6X",
        memoryBusWidth: 384,
        baseClock: 2235,
        boostClock: 2520,
        cudaCores: 16384,
        tdp: 450,
        price: 159999
    },
    {
        id: 2,
        name: "AMD Radeon RX 7900 XTX",
        manufacturer: "AMD",
        releaseDate: "2022",
        memory: 24,
        memoryType: "GDDR6",
        memoryBusWidth: 384,
        baseClock: 1900,
        boostClock: 2500,
        streamProcessors: 6144,
        tdp: 355,
        price: 99999
    },
    {
        id: 3,
        name: "NVIDIA GeForce RTX 4080",
        manufacturer: "NVIDIA",
        releaseDate: "2022",
        memory: 16,
        memoryType: "GDDR6X",
        memoryBusWidth: 256,
        baseClock: 2205,
        boostClock: 2505,
        cudaCores: 9728,
        tdp: 320,
        price: 109999
    },
    {
        id: 4,
        name: "AMD Radeon RX 7800 XT",
        manufacturer: "AMD",
        releaseDate: "2023",
        memory: 16,
        memoryType: "GDDR6",
        memoryBusWidth: 256,
        baseClock: 1800,
        boostClock: 2430,
        streamProcessors: 3840,
        tdp: 263,
        price: 57999
    },
    {
        id: 5,
        name: "NVIDIA GeForce RTX 4070 Ti",
        manufacturer: "NVIDIA",
        releaseDate: "2023",
        memory: 12,
        memoryType: "GDDR6X",
        memoryBusWidth: 192,
        baseClock: 2310,
        boostClock: 2610,
        cudaCores: 7680,
        tdp: 285,
        price: 79999
    },
     {
        id: 6,
        name: "NVIDIA GeForce RTX 3060 Ti",
        manufacturer: "NVIDIA",
        releaseDate: "2020",
        memory: 8,
        memoryType: "GDDR6",
        memoryBusWidth: 256,
        baseClock: 1410,
        boostClock: 1665,
        cudaCores: 4864,
        tdp: 200,
        price: 39999
    },
    {
        id: 7,
        name: "AMD Radeon RX 6700 XT",
        manufacturer: "AMD",
        releaseDate: "2021",
        memory: 12,
        memoryType: "GDDR6",
        memoryBusWidth: 192,
        baseClock: 2321,
        boostClock: 2581,
        streamProcessors: 2560,
        tdp: 230,
        price: 45999
    },
    {
        id: 8,
        name: "NVIDIA GeForce RTX 3070",
        manufacturer: "NVIDIA",
        releaseDate: "2020",
        memory: 8,
        memoryType: "GDDR6",
        memoryBusWidth: 256,
        baseClock: 1500,
        boostClock: 1725,
        cudaCores: 5888,
        tdp: 220,
        price: 49999
    },
    {
        id: 9,
        name: "AMD Radeon RX 6800",
        manufacturer: "AMD",
        releaseDate: "2020",
        memory: 16,
        memoryType: "GDDR6",
        memoryBusWidth: 256,
        baseClock: 1700,
        boostClock: 2105,
        streamProcessors: 3840,
        tdp: 250,
        price: 59999
    },
    {
        id: 10,
        name: "NVIDIA GeForce GTX 1660 Super",
        manufacturer: "NVIDIA",
        releaseDate: "2019",
        memory: 6,
        memoryType: "GDDR6",
        memoryBusWidth: 192,
        baseClock: 1530,
        boostClock: 1785,
        cudaCores: 1408,
        tdp: 125,
        price: 24999
    },
    {
        id: 11,
        name: "AMD Radeon RX 5700 XT",
        manufacturer: "AMD",
        releaseDate: "2019",
        memory: 8,
        memoryType: "GDDR6",
        memoryBusWidth: 256,
        baseClock: 1605,
        boostClock: 1905,
        streamProcessors: 2560,
        tdp: 225,
        price: 32999
    },
    {
        id: 12,
        name: "NVIDIA GeForce RTX 3090",
        manufacturer: "NVIDIA",
        releaseDate: "2020",
        memory: 24,
        memoryType: "GDDR6X",
        memoryBusWidth: 384,
        baseClock: 1395,
        boostClock: 1695,
        cudaCores: 10496,
        tdp: 350,
        price: 129999
    },
    {
        id: 13,
        name: "AMD Radeon RX 6600 XT",
        manufacturer: "AMD",
        releaseDate: "2021",
        memory: 8,
        memoryType: "GDDR6",
        memoryBusWidth: 128,
        baseClock: 1968,
        boostClock: 2589,
        streamProcessors: 2048,
        tdp: 160,
        price: 34999
    },
    {
        id: 14,
        name: "NVIDIA GeForce RTX 3050",
        manufacturer: "NVIDIA",
        releaseDate: "2022",
        memory: 8,
        memoryType: "GDDR6",
        memoryBusWidth: 128,
        baseClock: 1552,
        boostClock: 1777,
        cudaCores: 2560,
        tdp: 130,
        price: 27999
    },
    {
        id: 15,
        name: "AMD Radeon RX 6500 XT",
        manufacturer: "AMD",
        releaseDate: "2022",
        memory: 4,
        memoryType: "GDDR6",
        memoryBusWidth: 64,
        baseClock: 2310,
        boostClock: 2610,
        streamProcessors: 1024,
        tdp: 107,
        price: 19999
    },
     {
        id: 16,
        name: "NVIDIA GeForce RTX 2080 Ti",
        manufacturer: "NVIDIA",
        releaseDate: "2018",
        memory: 11,
        memoryType: "GDDR6",
        memoryBusWidth: 352,
        baseClock: 1350,
        boostClock: 1545,
        cudaCores: 4352,
        tdp: 250,
        price: 89999
    },
    {
        id: 17,
        name: "AMD Radeon RX 5700",
        manufacturer: "AMD",
        releaseDate: "2019",
        memory: 8,
        memoryType: "GDDR6",
        memoryBusWidth: 256,
        baseClock: 1465,
        boostClock: 1625,
        streamProcessors: 2304,
        tdp: 180,
        price: 29999
    },
    {
        id: 18,
        name: "NVIDIA GeForce RTX 2060 Super",
        manufacturer: "NVIDIA",
        releaseDate: "2019",
        memory: 8,
        memoryType: "GDDR6",
        memoryBusWidth: 256,
        baseClock: 1470,
        boostClock: 1650,
        cudaCores: 2176,
        tdp: 175,
        price: 34999
    },
    {
        id: 19,
        name: "AMD Radeon RX 5600 XT",
        manufacturer: "AMD",
        releaseDate: "2020",
        memory: 6,
        memoryType: "GDDR6",
        memoryBusWidth: 192,
        baseClock: 1375,
        boostClock: 1560,
        streamProcessors: 2304,
        tdp: 150,
        price: 25999
    },
    {
        id: 20,
        name: "NVIDIA GeForce GTX 1080 Ti",
        manufacturer: "NVIDIA",
        releaseDate: "2017",
        memory: 11,
        memoryType: "GDDR5X",
        memoryBusWidth: 352,
        baseClock: 1480,
        boostClock: 1582,
        cudaCores: 3584,
        tdp: 250,
        price: 59999
    },
    {
        id: 21,
        name: "AMD Radeon RX Vega 64",
        manufacturer: "AMD",
        releaseDate: "2017",
        memory: 8,
        memoryType: "HBM2",
        memoryBusWidth: 2048,
        baseClock: 1247,
        boostClock: 1546,
        streamProcessors: 4096,
        tdp: 295,
        price: 49999
    },
    {
        id: 22,
        name: "NVIDIA GeForce RTX 4070",
        manufacturer: "NVIDIA",
        releaseDate: "2023",
        memory: 12,
        memoryType: "GDDR6X",
        memoryBusWidth: 192,
        baseClock: 1920,
        boostClock: 2475,
        cudaCores: 5888,
        tdp: 200,
        price: 64999
    },
    {
        id: 23,
        name: "AMD Radeon RX 7600",
        manufacturer: "AMD",
        releaseDate: "2023",
        memory: 8,
        memoryType: "GDDR6",
        memoryBusWidth: 128,
        baseClock: 2250,
        boostClock: 2620,
        streamProcessors: 2048,
        tdp: 165,
        price: 31999
    },
    {
        id: 24,
        name: "NVIDIA GeForce RTX 4060 Ti",
        manufacturer: "NVIDIA",
        releaseDate: "2023",
        memory: 8,
        memoryType: "GDDR6",
        memoryBusWidth: 128,
        baseClock: 2310,
        boostClock: 2535,
        cudaCores: 4352,
        tdp: 160,
        price: 45999
    },
    {
        id: 25,
        name: "AMD Radeon RX 6950 XT",
        manufacturer: "AMD",
        releaseDate: "2022",
        memory: 16,
        memoryType: "GDDR6",
        memoryBusWidth: 256,
        baseClock: 1925,
        boostClock: 2310,
        streamProcessors: 5120,
        tdp: 335,
        price: 79999
    },
    {
        id: 26,
        name: "NVIDIA Titan RTX",
        manufacturer: "NVIDIA",
        releaseDate: "2018",
        memory: 24,
        memoryType: "GDDR6",
        memoryBusWidth: 384,
        baseClock: 1350,
        boostClock: 1770,
        cudaCores: 4608,
        tdp: 280,
        price: 199999
    },
    {
        id: 27,
        name: "AMD Radeon VII",
        manufacturer: "AMD",
        releaseDate: "2019",
        memory: 16,
        memoryType: "HBM2",
        memoryBusWidth: 4096,
        baseClock: 1400,
        boostClock: 1750,
        streamProcessors: 3840,
        tdp: 300,
        price: 69999
    },
    {
        id: 28,
        name: "NVIDIA GeForce GTX 1070",
        manufacturer: "NVIDIA",
        releaseDate: "2016",
        memory: 8,
        memoryType: "GDDR5",
        memoryBusWidth: 256,
        baseClock: 1506,
        boostClock: 1683,
        cudaCores: 1920,
        tdp: 150,
        price: 29999
    },
    {
        id: 29,
        name: "AMD Radeon RX 580",
        manufacturer: "AMD",
        releaseDate: "2017",
        memory: 8,
        memoryType: "GDDR5",
        memoryBusWidth: 256,
        baseClock: 1257,
        boostClock: 1340,
        streamProcessors: 2304,
        tdp: 185,
        price: 17999
    },
    {
        id: 30,
        name: "NVIDIA GeForce RTX 4060",
        manufacturer: "NVIDIA",
        releaseDate: "2023",
        memory: 8,
        memoryType: "GDDR6",
        memoryBusWidth: 128,
        baseClock: 1830,
        boostClock: 2460,
        cudaCores: 3072,
        tdp: 115,
        price: 34999
    },
    {
    "id": 10,
    "name": "AMD Radeon RX 5700",
    "manufacturer": "AMD",
    "releaseDate": "2019",
    "memory": 8,
    "memoryType": "GDDR6",
    "memoryBusWidth": 256,
    "baseClock": 1465,
    "boostClock": 1625,
    "streamProcessors": 2304,
    "tdp": 180,
    "price": 20000
},
{
    "id": 15,
    "name": "AMD Radeon RX 6600",
    "manufacturer": "AMD",
    "releaseDate": "2021",
    "memory": 8,
    "memoryType": "GDDR6",
    "memoryBusWidth": 128,
    "baseClock": 1626,
    "boostClock": 2491,
    "streamProcessors": 1792,
    "tdp": 132,
    "price": 29999 // Примерная ориентировочная цена в рублях
}
];

// Заполнение выпадающих списков
document.addEventListener('DOMContentLoaded', function() {
    const gpu1Select = document.getElementById('gpu1');
    const gpu2Select = document.getElementById('gpu2');
    const cardsContainer = document.getElementById('cards-container');
    
    // Заполняем выпадающие списки
    graphicsCards.forEach(card => {
        const option1 = document.createElement('option');
        option1.value = card.id;
        option1.textContent = card.name;
        gpu1Select.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = card.id;
        option2.textContent = card.name;
        gpu2Select.appendChild(option2);
    });
    
    // Создаем карточки видеокарт
    graphicsCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'gpu-card';
        cardElement.innerHTML = `
            <h3>${card.name}</h3>
            <p><strong>Производитель:</strong> ${card.manufacturer}</p>
            <p><strong>Память:</strong> ${card.memory} GB ${card.memoryType}</p>
            <p><strong>Тактовая частота:</strong> ${card.baseClock} MHz</p>
            <p><strong>TDP:</strong> ${card.tdp} W</p>
            <p><strong>Цена:</strong> ${card.price.toLocaleString()} руб.</p>
        `;
        cardsContainer.appendChild(cardElement);
    });
    
    // Обработчик кнопки сравнения
    document.getElementById('compare-btn').addEventListener('click', compareGPUs);
});

// Функция сравнения видеокарт
function compareGPUs() {
    const gpu1Id = document.getElementById('gpu1').value;
    const gpu2Id = document.getElementById('gpu2').value;
    
    if (!gpu1Id || !gpu2Id) {
        alert('Пожалуйста, выберите две видеокарты для сравнения');
        return;
    }
    
    const gpu1 = graphicsCards.find(card => card.id == gpu1Id);
    const gpu2 = graphicsCards.find(card => card.id == gpu2Id);
    
    if (!gpu1 || !gpu2) {
        alert('Ошибка: видеокарты не найдены');
        return;
    }
    
    // Заполняем таблицу сравнения
    document.getElementById('gpu1-name').textContent = gpu1.name;
    document.getElementById('gpu2-name').textContent = gpu2.name;
    
    const tbody = document.querySelector('.comparison-table tbody');
    tbody.innerHTML = '';
    
    // Добавляем строки сравнения
    addComparisonRow(tbody, 'Производитель', gpu1.manufacturer, gpu2.manufacturer);
    addComparisonRow(tbody, 'Год выпуска', gpu1.releaseDate, gpu2.releaseDate);
    addComparisonRow(tbody, 'Объем памяти', `${gpu1.memory} GB`, `${gpu2.memory} GB`, 
                     gpu1.memory, gpu2.memory, 'more');
    addComparisonRow(tbody, 'Тип памяти', gpu1.memoryType, gpu2.memoryType);
    addComparisonRow(tbody, 'Ширина шины памяти', `${gpu1.memoryBusWidth} bit`, `${gpu2.memoryBusWidth} bit`, 
                     gpu1.memoryBusWidth, gpu2.memoryBusWidth, 'more');
    addComparisonRow(tbody, 'Базовая частота', `${gpu1.baseClock} MHz`, `${gpu2.baseClock} MHz`, 
                     gpu1.baseClock, gpu2.baseClock, 'more');
    
    if (gpu1.boostClock && gpu2.boostClock) {
        addComparisonRow(tbody, 'Boost частота', `${gpu1.boostClock} MHz`, `${gpu2.boostClock} MHz`, 
                         gpu1.boostClock, gpu2.boostClock, 'more');
    }
    
    if (gpu1.cudaCores) {
        const gpu2Cores = gpu2.cudaCores || gpu2.streamProcessors;
        addComparisonRow(tbody, 'Количество ядер', gpu1.cudaCores, gpu2Cores, 
                         gpu1.cudaCores, gpu2Cores, 'more');
    } else if (gpu1.streamProcessors) {
        const gpu2Cores = gpu2.streamProcessors || gpu2.cudaCores;
        addComparisonRow(tbody, 'Количество ядер', gpu1.streamProcessors, gpu2Cores, 
                         gpu1.streamProcessors, gpu2Cores, 'more');
    }
    
    addComparisonRow(tbody, 'TDP', `${gpu1.tdp} W`, `${gpu2.tdp} W`, 
                     gpu1.tdp, gpu2.tdp, 'less');
    addComparisonRow(tbody, 'Цена', `${gpu1.price.toLocaleString()} руб.`, `${gpu2.price.toLocaleString()} руб.`, 
                     gpu1.price, gpu2.price, 'less');
    
    // Показываем результаты
    document.getElementById('results').style.display = 'block';
}

// Добавление строки в таблицу сравнения
function addComparisonRow(tbody, characteristic, value1, value2, num1 = null, num2 = null, comparisonType = null) {
    const row = document.createElement('tr');
    
    // Характеристика
    const charCell = document.createElement('td');
    charCell.textContent = characteristic;
    row.appendChild(charCell);
    
    // Значение первой видеокарты
    const value1Cell = document.createElement('td');
    value1Cell.textContent = value1;
    
    // Значение второй видеокарты
    const value2Cell = document.createElement('td');
    value2Cell.textContent = value2;
    
    // Сравнение числовых значений, если предоставлены
    if (num1 !== null && num2 !== null && comparisonType) {
        if (comparisonType === 'more') {
            if (num1 > num2) {
                value1Cell.classList.add('better');
                value2Cell.classList.add('worse');
            } else if (num1 < num2) {
                value1Cell.classList.add('worse');
                value2Cell.classList.add('better');
            }
        } else if (comparisonType === 'less') {
            if (num1 < num2) {
                value1Cell.classList.add('better');
                value2Cell.classList.add('worse');
            } else if (num1 > num2) {
                value1Cell.classList.add('worse');
                value2Cell.classList.add('better');
            }
        }
    }
    
    row.appendChild(value1Cell);
    row.appendChild(value2Cell);
    tbody.appendChild(row);
}