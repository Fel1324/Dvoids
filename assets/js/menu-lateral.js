function openMenu(){
  document.querySelector('aside.menu').classList.add('menu-ativo');
  document.body.style.overflow = 'hidden';
}

function closeMenu(){
  document.querySelector('aside.menu').classList.remove('menu-ativo');
  document.body.style.overflow = 'auto';
}
