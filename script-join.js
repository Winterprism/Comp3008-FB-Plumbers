function showjoinUsPopup() {
    event.preventDefault();
    document.getElementById("joinUsPopup").style.display = "block";

    document.querySelector("form").reset();
  }
  
  function closejoinUsPopup() {
    document.getElementById("joinUsPopup").style.display = "none";
  }
  
  