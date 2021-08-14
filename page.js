function changestate() {
    body = document.getElementsByTagName('body')[0];
    button = document.getElementsByTagName('button')[0];
    bodyClass = body.classList;
    if(bodyClass.contains('lightmode')) {
        button.innerHTML = 'TOGGLE LIGHT';
        bodyClass.replace('lightmode', 'darkmode');
    } else { 
        button.innerHTML = 'TOGGLE DARK';
        bodyClass.replace('darkmode', 'lightmode');
    }
}