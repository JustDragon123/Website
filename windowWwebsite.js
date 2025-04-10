/*
<div class="window">

    <div class="windowheader">
      <div class="simulwebsitetitle" style="flex-grow: 10; text-align: left;"></div>
      <span class="material-symbols-outlined minimize" style="width: 1em;">remove</span>
      <span class="material-symbols-outlined close" style="width: 1em;">close</span>
    </div>

  <iframe src="https://pagisz.hu/" sandbox="allow-same-origin allow-scripts"></iframe>
</div>

.window {
    position: absolute;
    z-index: 9;
    right: 10vh;
    background-color: #f1f1f1;
    border: 3px solid #d3d3d3;
    text-align: right;
    height: 60vh; 
    width: 100vh;
    object-fit: contain;
    overflow: hidden;
}

.window iframe{
    max-width: inherit;
    max-height: inherit;
    height: inherit;
    width: inherit;
    overflow: hidden;
    object-fit: cover;
    image-rendering:optimizeSpeed;
}


.window.collapsed  {
    height: 4vh;
    width: 50vh;
}

.window.collapsed  iframe{
    visibility: hidden;
}

.window.closed  {
    height: 4vh;
    width: 50vh;
    visibility: hidden;
}

.window.closed  iframe{
    visibility: hidden;
}
  
  
.windowheader {
    display: flex;
    align-items: stretch;
    cursor: move;
    z-index: 10;
    background-color: gray;
    color: #fff;
}

.windowheader a{
    color: #fff;
    text-decoration: none;
    
    align-self: center;
    margin: 0;
    padding: 0;
    height: 24px;
}


.windowheader span{
    cursor: pointer;
}



.simulwebsitetitle{
    padding: 5px;
}
*/

document.querySelectorAll('.window').forEach((elmnt) => {
  dragElement(elmnt);

  const iframe = elmnt.querySelector('iframe');
  const titleElement = elmnt.querySelector('.windowheader .simulwebsitetitle');

  // Check if both iframe and title element exist
  if (iframe && titleElement) {
    try {
      // Try accessing the iframe's document title (only works if iframe content is same-origin)
      iframe.addEventListener('load', () => {
        try {
          const iframeTitle = iframe.contentDocument.title;
          titleElement.textContent = iframeTitle || 'Untitled';
        } catch (error) {
          // Fallback to iframe src if cross-origin
          titleElement.textContent = iframe.getAttribute('src') || 'Unknown Title';
        }
      });
    } catch (error) {
      // Fallback if iframe content is cross-origin
      titleElement.textContent = iframe.getAttribute('src') || 'Unknown Title';
    }
  }




  //Minimize window by changeing its class
  const buttonminimze = elmnt.querySelector('.minimize');
  if (buttonminimze) {
    buttonminimze.addEventListener('click', () => {
      if (elmnt.classList.contains('collapsed')) {
        elmnt.classList.remove('collapsed');
      } else {
        elmnt.classList.add('collapsed');
      } 
    });
  }
    //Close window by changeing its class
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



function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const header = elmnt.querySelector('.windowheader');

  if (header) {

    header.onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

