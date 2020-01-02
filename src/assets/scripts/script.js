function servicesBusinessStepsTabs() {
    var li = document.querySelectorAll(".bs-li");

    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function () {
            for (var j = 0; j < li.length; j++) {
                li[j].removeAttribute("class", "active-tab");
                this.setAttribute("class", "active-tab");
            }
        });
    }

    var _li = document.querySelectorAll(".pricing-tabs");
    for (var i = 0; i < _li.length; i++) {
        _li[i].addEventListener("click", function () {
            for (var j = 0; j < _li.length; j++) {
                _li[j].removeAttribute("class", "active-tab");
                this.setAttribute("class", "active-tab");
            }
        });
    }

    $(".container").click(function(){
        $(".container").removeClass("active-pricing-card");
        $(this).addClass("active-pricing-card");
      });
}