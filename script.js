//console.log(1);
function sutitZinu()
{
    console.log('sutitZinu()Darbojas');
    let zina= document.querySelector('zina').value;
    let zinas= document.querySelector('cataZina').value;
    zinas.innerHTML = zinas.innerHTML+ '<br>'+zina.value;
}