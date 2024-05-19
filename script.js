function shtoVotim() {
    var emri = document.getElementById("emri").value;
    var mbiemri = document.getElementById("mbiemri").value;
    var shteti = document.getElementById("shteti").value;
    var gjinia;

    if (document.getElementById("mashkull").checked) {
        gjinia = "Mashkull";
    } else if (document.getElementById("femre").checked) {
        gjinia = "Femër";
    }
    var vleresimi = parseInt(document.getElementById("vleresimi").value);
  
    if (!emri || !mbiemri || !shteti || !gjinia || isNaN(vleresimi) || vleresimi < 1 || vleresimi > 10) {
        alert("Ju lutemi plotesoni te gjitha fushat ne menyre te vlefshme.");
        return;
    }

    var votaElement = document.createElement("div"); 
    votaElement.classList.add("vota");

    var imazhi = document.createElement("img");
    if (gjinia === "Mashkull") {
        imazhi.style.height = "50px"
        imazhi.style.width = "50px"
        imazhi.src = "male.png";
    } else if (gjinia === "Femër") {
        imazhi.style.height = "50px"
        imazhi.style.width="50px"
        imazhi.src = "female.png";
    }
    imazhi.alt = gjinia;
    votaElement.appendChild(imazhi);
    
    var teksti = document.createElement("div");
    teksti.classList.add("divl");
    var shtet = document.createElement("div");
    shtet.classList.add("divl");
    var vler = document.createElement("div");
    vler.classList.add("divl");


    teksti.textContent = emri + "   " + mbiemri;
    shtet.textContent = shteti;
    vler.textContent = vleresimi+ "/10";;
    votaElement.appendChild(teksti);
    votaElement.appendChild(shtet);
    votaElement.appendChild(vler);


    // Shto ne lista
    var rezultati = document.getElementById("rezultati");
    rezultati.appendChild(votaElement);

    // Pastro inputet
    document.getElementById("emri").value = "";
    document.getElementById("mbiemri").value = "";
    document.getElementById("shteti").value = "";
    document.getElementById("mashkull").checked = true;
    document.getElementById("vleresimi").value = "";
}
