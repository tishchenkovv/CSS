let rotX = 0,
    rotY = 0;


document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener("keydown", rotateCub);


});


function rotateCub(e) {

    cube = document.getElementsByClassName("cube");

    if (cube) {

        switch (e.keyCode) {

            case 37:
                rotY += 4;
                break;

            case 38:
                rotX += 4;
                break;

            case 39:
                rotY += 4;
                break;

            case 40:
                rotX -= 4;
                break;
            default:
                alert("Управление клавишами стрелками");
                break;

        }

        elemCube = cube[0];
        elemCube.style.transform = 'rotateX(' + rotX + 'deg)' + 'rotateY(' + rotY + 'deg)';

    }

}