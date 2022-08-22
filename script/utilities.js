const selectedPlayer=[];


function displayPlayerName(player){
    const selectedPlayerName=document.getElementById('selected-player')
    selectedPlayerName.innerHTML='';
    for(let i=0; i<player.length; i++){

        if(i>=5){
            alert('you can not add player anymore')
        }
        else{
            const playerName=selectedPlayer[i]
            const tr =document.createElement('tr')
            tr.innerHTML=`
            <td>${i + 1}</td>
            <td> ${playerName}</td>
            `
            selectedPlayerName.appendChild(tr)
        }

       

    }
}

function addToSelectArea(Element){  
    const addedPlayer=Element.parentNode.children[0].innerText
    selectedPlayer.push(addedPlayer);
    
    displayPlayerName(selectedPlayer)
}