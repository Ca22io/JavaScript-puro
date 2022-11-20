var p = document.getElementsByTagName('p');

//p

alert(p[0].innerHTML);

for( var i; i < 10; i++){
    alert(p[i].innerHTML) = 'Manipulando via JS! - ' + i;
}