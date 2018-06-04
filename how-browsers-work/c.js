var scriptA = document.createElement("script");
scriptA.src="a.js";
scriptA.async=false;
var scriptB = document.createElement("script");
scriptB.src="b.js";
scriptB.async=false;
document.getElementsByTagName("head")[0].appendChild(scriptB);
document.getElementsByTagName("head")[0].appendChild(scriptA);