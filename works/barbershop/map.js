var mapOpen = document.querySelector(".open-map");
var mapPop = document.querySelector(".modal-content-map");
var mapClose = mapPop.querySelector(".modal-content-close");

      mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPop.classList.add("modal-content-show");
      });

      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPop.classList.remove("modal-content-show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (mapPop.classList.contains("modal-content-show")) {
            mapPop.classList.remove("modal-content-show");
          }
        }
      });