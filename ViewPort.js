

function getViewportUnits(){
    const placeholder = document.getElementById("placeholder");
    const vh = placeholder.getBoundingClientRect().height;
    const vw = placeholder.getBoundingClientRect().width;
    console.log({vh: vh, vw: vw});
  }
