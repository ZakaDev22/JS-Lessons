
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

