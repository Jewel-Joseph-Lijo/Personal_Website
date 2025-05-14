let count=1
function ChangeColor(){
    if(count==1){
        document.getElementById("main-body").style.backgroundColor="wheat"
        document.getElementById("ChangeColor").style.backgroundColor="#FFC0CB"
        count=count+1
    }
    else if(count==2){
        document.getElementById("main-body").style.backgroundColor="#FFC0CB"
        document.getElementById("ChangeColor").style.backgroundColor="#FFD700"
        count=count+1
    }
    else if(count==3){
        document.getElementById("main-body").style.backgroundColor="#FFD700"
        document.getElementById("ChangeColor").style.backgroundColor="#D3D3D3"
        count=count+1
    }
    else if(count==4){
        document.getElementById("main-body").style.backgroundColor="#D3D3D3"
        document.getElementById("ChangeColor").style.backgroundColor="#DDA0DD"
        count=count+1
    }
    else if(count==5){
        document.getElementById("main-body").style.backgroundColor="#DDA0DD"
        document.getElementById("ChangeColor").style.backgroundColor="#eaf4f9"
        count=count+1
    }
    else{
        document.getElementById("main-body").style.backgroundColor="#eaf4f9"
        document.getElementById("ChangeColor").style.backgroundColor="wheat"
        count=1
    }
}