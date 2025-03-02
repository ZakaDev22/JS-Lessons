
let usd = document.getElementById('usd');
let mad = document.getElementById('mad');

usd.addEventListener('input', () => {
    let usdValue = parseFloat(usd.value);
    let Value = usdValue * 10;
    document.getElementById('mad').value = Value;
});


mad.addEventListener('input', () => {
    let madValue = parseFloat(mad.value);
    let Value = madValue * 0.10;
    document.getElementById('usd').value = Value;
});


usd.addEventListener('mouseout', () => {
   
    if (usd.value === '') {
        usd.style.border = '2px solid red';
    }
    else
    {
        usd.style.border = '2px solid green';
    }
});


mad.addEventListener('mouseout', () => {
    
     if (mad.value === '') {
          mad.style.border = '2px solid red';
     }
     else
     {
          mad.style.border = '2px solid green';
     }
});
