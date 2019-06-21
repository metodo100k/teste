var addID = document.getElementsByClassName("numberWhatsapp")[0];
addID.id="numberWhatsapp";
var wCookie = Cookies.get('numberWhatsappCookie');
if(wCookie){
    var link = document.getElementById('numberWhatsapp');
    link.href = wCookie;
}else{
    var wNumber = new Array();
    /*Amanda*/ wNumber[0] = "https://api.whatsapp.com/send?phone=5521986795459&text=Eu%20Quero%20Saber%20Como%20Recuperar%20a%20Juventude%20Em%20Até%2010%20Anos%20Sem%20Fazer%20Cirugias!";
    /*Raissa*/ wNumber[1] = "https://api.whatsapp.com/send?phone=5521959030021&text=Eu%20Quero%20Saber%20Como%20Recuperar%20a%20Juventude%20Em%20Até%2010%20Anos%20Sem%20Fazer%20Cirugias!";
    /*Daiane*/ wNumber[2] = "https://api.whatsapp.com/send?phone=5521969371557&text=Eu%20Quero%20Saber%20Como%20Recuperar%20a%20Juventude%20Em%20Até%2010%20Anos%20Sem%20Fazer%20Cirugias!";
    /*Valéria*/ wNumber[3] = "https://api.whatsapp.com/send?phone=5521989317780&text=Eu%20Quero%20Saber%20Como%20Recuperar%20a%20Juventude%20Em%20Até%2010%20Anos%20Sem%20Fazer%20Cirugias!";
   /*Stefanie*/ wNumber[4] = "https://api.whatsapp.com/send?phone=5521996562007&text=Eu%20Quero%20Saber%20Como%20Recuperar%20a%20Juventude%20Em%20Até%2010%20Anos%20Sem%20Fazer%20Cirugias!";
    /*Alexandre*/ wNumber[5] = "https://api.whatsapp.com/send?phone=5521986848596&text=Eu%20Quero%20Saber%20Como%20Recuperar%20a%20Juventude%20Em%20Até%2010%20Anos%20Sem%20Fazer%20Cirugias!";
	/*Michele*/ wNumber[6] = "https://api.whatsapp.com/send?phone=5521990691353&text=Eu%20Quero%20Saber%20Como%20Recuperar%20a%20Juventude%20Em%20Até%2010%20Anos%20Sem%20Fazer%20Cirugias!";
    /*Lais*/ wNumber[7] = "https://api.whatsapp.com/send?phone=5521990629159&text=Eu%20Quero%20Saber%20Como%20Recuperar%20a%20Juventude%20Em%20Até%2010%20Anos%20Sem%20Fazer%20Cirugias!";
    var i = Math.floor(8*Math.random());
    var link = document.getElementById('numberWhatsapp');
    link.href = wNumber[i];
    Cookies.set('numberWhatsappCookie', wNumber[i], { expires: 30 });

//https://api.whatsapp.com/send?phone=5521986848596&text=Eu%20Quero%20Saber%Como%Recuperar%20a%20Juventude%20Em%20At%C3%A9%2010%20Anos%20Sem%20Fazer%20Cirugias!
//https://api.whatsapp.com/send?phone=5521990691353&text=Eu%20Quero%20Saber%20Mais%20Sobre%20o%20Botox%20Em%20C%C3%A1psulas!
}


