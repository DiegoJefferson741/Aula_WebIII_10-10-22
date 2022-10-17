
var campo = document.querySelector("#txtCpf");
campo.addEventListener("blur", function(){
    var texto = this.value;
    var span = document.querySelector("#cpf");
    if(texto.length==11){
        var cpfFormatado = texto.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");
        this.value = cpfFormatado;
        span.textContent = "";
    }else{
        span.textContent = "CPF Inválido!";
    }
});




campo.addEventListener("keyup", function(){
    var texto = this.value;
    var digitos = texto.replace(/[^0-9]/, "");
    this.value = digitos;
});

campo.addEventListener("keypress", function(){
    var texto = this.value;
    var digitos = texto.replace(/[^0-9]/, "");
    this.value = digitos;
});


function validaTelefone(){
    var filter = /^\([1-9]{2}\) (?:[2-8] | 9[1-9])[0-9]{3}\-[0-9]{4}$/;
    var telefone = document.querySelector("#txtTelefone").value;
    var span = document.querySelector("#telefone");
        if (!filter.test(telefone)){
            span.textContent = "Telefone Invalido";
        }else{
            span.textContent = "";
        }
}

var txtTelefone = document.querySelector("#txtTelefone");
txtTelefone.addEventListener("blur", validaTelefone);



/*
var campo = document.querySelector("#txtCpf");

txtCpf.addEventListener("blur", function(){
   if(txtCpf.value) txtCpf.value = txtCpf.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-");
});
*/