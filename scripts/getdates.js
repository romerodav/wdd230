let year = new Date().getFullYear();
document.querySelector("footer p").append(year);

document.getElementById("lastModified").innerHTML = "Last Modification " + document.lastModified;

/*document.getElementById("lastModified").textContent = "any text";*/