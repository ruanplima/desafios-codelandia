let $password = document.getElementById('senha')
let $image = document.getElementById('imagem')

function OpenClose(){
    if($password.type == 'password'){
        $password.setAttribute('type' , 'text')
        $image.setAttribute('src' , 'images-password/img-close.png')
    } else{
        $password.setAttribute('type' , 'password')
        $image.setAttribute('src' , 'images-password/img-open.png')
    }
}