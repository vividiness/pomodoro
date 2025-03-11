setTimeout(() =>{
    document.getElementById("frase").style.opacity = '1';
        setTimeout(() => {
            document.getElementById("frase").style.opacity = '0';
                setTimeout(() => {
                    document.getElementById("boas_vindas").style.opacity = '1';
        }, 1500); //tempo do último pra aparecer. 
    }, 1500); //tempo do primeiro até sumir
}, 700); //tempo do primeiro aparecer
