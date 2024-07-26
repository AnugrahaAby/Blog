const itemsData = [
    { text: 'Item 1', additionalInfo: 'Info 1' },
    { text: 'Item 2', additionalInfo: 'Info 2' },
    { text: 'Item 3', additionalInfo: 'Info 3' },
    { text: 'Item 4', additionalInfo: 'Info 4' }
];


const container = document.getElementById('container');


const itemElements = itemsData.map((item, index) => {
    
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.textContent = `${item.text} - ${item.additionalInfo}`;

   

    return itemDiv;
});


itemElements.forEach(item => container.appendChild(item));
