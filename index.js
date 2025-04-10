document.querySelectorAll('.Closable').forEach((elmnt) => {
    const buttonClose = elmnt.querySelector('.close');
    if (buttonClose) {
      buttonClose.addEventListener('click', () => {
        if (elmnt.classList.contains('closed')) {
          elmnt.classList.remove('closed');
        } else {
          elmnt.classList.add('closed');
        } 
      });
    }
  });
