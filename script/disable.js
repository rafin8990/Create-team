function disabledButton(event, elementId){
    const selectButton=event.target.innerText;
    const disableButton= document.getElementById(elementId);
    if(selectButton==='Select'){
        disableButton.setAttribute('disabled', true)
        disableButton.style.backgroundColor='gray'
        disableButton.style.color='white'
    } 
}
document.getElementById('btn-sakib').addEventListener('click', function(event){
disabledButton(event, 'btn-sakib' );
})
document.getElementById('btn-kohli').addEventListener('click', function(event){
    disabledButton(event, 'btn-kohli' );

})
document.getElementById('btn-mashrafee'). addEventListener('click', function(event){
disabledButton(event,'btn-mashrafee')
})
document.getElementById('btn-mccullum').addEventListener('click', function(event){
    disabledButton(event,'btn-mccullum')
})
document.getElementById('btn-dhoni').addEventListener('click', function(event){
    disabledButton(event,'btn-dhoni')
})
document.getElementById('btn-guptil').addEventListener('click', function(event){
    disabledButton(event,'btn-guptil')
})