let state = document.querySelector('#state');

state.addEventListener('change', function (){
    switch(state.value) {
        case "":
            document.querySelector('.lagos').style.display="none";
            document.querySelector('.abia').style.display="none";
            document.querySelector('.abuja').style.display="none";
            document.querySelector('.ebonyi').style.display="none";
            document.querySelector('.anambra').style.display="none";
            document.querySelector('.empty').style.display="block";
            break;
        
        case "Lagos":
            document.querySelector('.lagos').style.display="block";
            document.querySelector('.abia').style.display="none";
            document.querySelector('.abuja').style.display="none";
            document.querySelector('.ebonyi').style.display="none";
            document.querySelector('.anambra').style.display="none";
            document.querySelector('.empty').style.display="none";
            break;
            case "Abia":
            document.querySelector('.lagos').style.display="none";
            document.querySelector('.abia').style.display="block";
            document.querySelector('.abuja').style.display="none";
            document.querySelector('.ebonyi').style.display="none";
            document.querySelector('.anambra').style.display="none";
            document.querySelector('.empty').style.display="none";
            break;
            case "Abuja":
            document.querySelector('.lagos').style.display="none";
            document.querySelector('.abia').style.display="none";
            document.querySelector('.abuja').style.display="block";
            document.querySelector('.ebonyi').style.display="none";
            document.querySelector('.anambra').style.display="none";
            document.querySelector('.empty').style.display="none";
            break;
            case "Ebonyi":
            document.querySelector('.lagos').style.display="none";
            document.querySelector('.abia').style.display="none";
            document.querySelector('.abuja').style.display="none";
            document.querySelector('.ebonyi').style.display="block";
            document.querySelector('.anambra').style.display="none";
            document.querySelector('.empty').style.display="none";
            break;
            case "Anambra":
            document.querySelector('.lagos').style.display="none";
            document.querySelector('.abia').style.display="none";
            document.querySelector('.abuja').style.display="none";
            document.querySelector('.ebonyi').style.display="none";
            document.querySelector('.anambra').style.display="block";
            document.querySelector('.empty').style.display="none";
            break;
    
        default:
            document.querySelector('.lagos').style.display="none";
            document.querySelector('.abia').style.display="none";
            document.querySelector('.abuja').style.display="none";
            document.querySelector('.ebonyi').style.display="none";
            document.querySelector('.anambra').style.display="none";
            document.querySelector('.empty').style.display="block";
    }
})