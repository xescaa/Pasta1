const tagUl = document.createElement("ul")
const tagLi = document.createElement("li")
tagLi.innerText = "repetir cada vez mais"
const tagMain = document.getElementById("root")
tagMain.appendChild(tagUl)
tagUl.appendChild(tagLi)