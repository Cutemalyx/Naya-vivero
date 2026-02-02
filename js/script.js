const btnMenuHamburguesa = document.getElementById('btnMenuHamburguesa');
const btnCerrarMenu = document.getElementById('btnCerrarMenu');
const menuLateral = document.getElementById('menuLateral');
const menuFondo = document.getElementById('menuFondo');
const menuCategorias = document.querySelector('.menu-categorias');

btnMenuHamburguesa.addEventListener('click', () => {
    menuLateral.classList.add('abierto');
});
btnCerrarMenu.addEventListener('click', () => {
    menuLateral.classList.remove('abierto');
});
menuFondo.addEventListener('click', () => {
    menuLateral.classList.remove('abierto');
});

if (menuCategorias) {
    const catalogoLink = menuCategorias.querySelector('.nav-link');
    catalogoLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        menuCategorias.classList.toggle('activo');
    });
}

const navLinks = document.querySelectorAll('.nav-link:not(.menu-categorias .nav-link), .submenu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuLateral.classList.remove('abierto');
    });
});

const itemsAcordeon = document.querySelectorAll('.item-acordeon');

itemsAcordeon.forEach(item => {
    const cabecera = item.querySelector('.cabecera-acordeon');
    
    cabecera.addEventListener('click', () => {
        itemsAcordeon.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('activo')) {
                otherItem.classList.remove('activo');
            }
        });
        item.classList.toggle('activo');
    });
});