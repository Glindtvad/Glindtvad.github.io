

var canadamap = document.getElementById("canada-map"),
        WorldInfo = document.getElementById("provinceInfo"),
        allProvinces = canadamap.querySelectorAll("g");

        function myFunction(e){
            if(WorldInfo.classList.contains("show")){
                WorldInfo.classList.remove("show")
            }
            else {
                var province = e.target.parentNode;
                if(e.target.nodeName == "path") {
                for (var i=0; i < allProvinces.length; i++) {
                    allProvinces[i].classList.remove("active");
                }
                province.classList.add("active");
                var provinceName = province.querySelector("title").innerHTML,
                provincePara = province.querySelector("desc p");
                sourceImg = province.querySelector("img"),
                imgPath = "./images/";
                WorldInfo.innerHTML = "";
                WorldInfo.insertAdjacentHTML("afterbegin", "<img src="+imgPath + sourceImg.getAttribute('xlink:href')+" alt='"+sourceImg.getAttribute('alt')+"'><h1>"+provinceName+"</h1><p>"+provincePara.innerHTML+"</p>");
                WorldInfo.classList.add("show");
                }
            }
        }
        canadamap.addEventListener("click", myFunction)
