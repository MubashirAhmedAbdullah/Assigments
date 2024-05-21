

var user_input = document.getElementById('userinput');
var command_btn = document.getElementsByClassName('btn');
var font_family = document.getElementById('font-family');
var size = document.getElementById('font-size');
var font_colour = document.getElementById('colour');


for(i = 0 ; i < command_btn.length ; i++){
    command_btn[i].addEventListener('click' , function(){
        switch (this.innerText) {
            case 'BOLD':
                if(user_input.style.fontWeight == 'bold'){
                    user_input.style.fontWeight = 'normal'
                }
                else{
                    
                    user_input.style.fontWeight = 'bold'
                }
                break;
                case 'ITALIC':
                    if(user_input.style.fontStyle == 'italic'){
                        user_input.style.fontStyle = 'normal'
                    }
                    else{
                    user_input.style.fontStyle = 'italic'

                }
                break;
                case 'UNDERLINE':
                user_input.style.textDecorationLine == 'underline'
                if(user_input.style.textDecorationLine = 'underline'){
                    user_input.style.textDecorationLine = 'normal'
                }
                else{
                    user_input.style.textDecorationLine = 'underline'
                }
                break;
                case 'LEFT':
                user_input.style.textAlign == 'left'
                if(user_input.style.textAlign = 'left'){
                    user_input.style.textAlign = 'left'
                }
                else{
                    user_input.style.textAlign = 'left'
                }
                break;
                case 'CENTER':
                if(user_input.style.textAlign == 'center'){
                    user_input.style.textAlign = 'left'
                 }
                else{
                        
                    user_input.style.textAlign = 'CENTER'
                }
                break;
                case 'RIGHT':
                if(user_input.style.textAlign == 'right'){
                    user_input.style.textAlign = 'left'
                }
                else{
                    user_input.style.textAlign = 'right'
                    
                }
                break;
        
            default:
                break;
        }
    })
}




font_family.addEventListener('change' , function(){
    if(this.value ==='Arial'){
        user_input.style.fontFamily = 'Arial';
    }
    if(this.value ==='Calibri'){
        user_input.style.fontFamily = 'Calibri';
    }
    if(this.value ==='Times New Roman'){
        user_input.style.fontFamily = 'Times New Roman';
    }
    if(this.value ==='Algerian'){
        user_input.style.fontFamily = 'Algerian';
    }
    if(this.value ==='Aptos'){
        user_input.style.fontFamily = 'Aptos';
    }
    if(this.value ==='Sarif'){
        user_input.style.fontFamily = 'Sarif';
    }
    if(this.value ==='San Sarif'){
        user_input.style.fontFamily = 'San Sarif';
    }
    if(this.value ==='San Sarif'){
        user_input.style.fontFamily = 'San Sarif';
    }

    if(this.value ==='your family'){
        user_input.style.fontFamily = 'normal';
    }

    
})

size.addEventListener('change' , function(){
    if(this.value == 12){
        user_input.style.fontSize = '12pt'
    }
    if(this.value == 14){
        user_input.style.fontSize = '14pt'
    }
    if(this.value == 16){
        user_input.style.fontSize = '16pt'
    }
    if(this.value == 18){
        user_input.style.fontSize = '18pt'
    }
    if(this.value == 20){
        user_input.style.fontSize = '20pt'
    }
    if(this.value == 22){
        user_input.style.fontSize = '22pt'
    }
    if(this.value == 24){
        user_input.style.fontSize = '24pt'
    }
    if(this.value == 36){
        user_input.style.fontSize = '36pt'
    }
    if(this.value == 48){
        user_input.style.fontSize = '48pt'
    }
    if(this.value == 56){
        user_input.style.fontSize = '56pt'
    }
    if(this.value == 72){
        user_input.style.fontSize = '72pt'
    }
})

font_colour.addEventListener('change' , function(){
    if(this.value == 'red'){
        user_input.style.color = 'red'
    }

    if(this.value == 'blue'){
        user_input.style.color = 'blue'
    }
    if(this.value == 'green'){
        user_input.style.color = 'green'
    }
    if(this.value == 'yellow'){
        user_input.style.color = 'yellow'
    }
    if(this.value == 'aqua'){
        user_input.style.color = 'aqua'
    }
    if(this.value == 'orange'){
        user_input.style.color = 'orange'
    }
    if(this.value == 'white'){
        user_input.style.color = 'white'
    }
    if(this.value == 'black'){
        user_input.style.color = 'black'
    }
    if(this.value == 'oranged'){
        user_input.style.color = 'orangered'
    }
    if(this.value == 'brown'){
        user_input.style.color = 'brown'
    }
    if(this.value == 'bisque'){
        user_input.style.color = 'bisque'
    }
    if(this.value == 'aquamarine'){
        user_input.style.color = 'aquamarine'
    }
    if(this.value == 'blueviolet'){
        user_input.style.color = 'blueviolet'
    }
    if(this.value == 'purple'){
        user_input.style.color = 'purple'
    }
    if(this.value == 'pink'){
        user_input.style.color = 'pink'
    }
})
