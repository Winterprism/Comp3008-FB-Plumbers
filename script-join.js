function showjoinUsPopup() {
    event.preventDefault();
    
    const companyName = document.getElementById("companyName").value;
    const contactName = document.getElementById("contactName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const serviceArea = document.getElementById("serviceArea").value;
    const servicesOffered = document.getElementById("servicesOffered").value;
    const certifications = document.getElementById("certifications").value;
    
    if (companyName && contactName && email && phone && serviceArea && servicesOffered && certifications) {

        document.getElementById("joinUsPopup").style.display = "block";

        document.querySelector("form").reset();

    } else {
        alert("Please fill in all required fields.");
    }
    
}
  
function closejoinUsPopup() {
    document.getElementById("joinUsPopup").style.display = "none";
}
  
  
