"use strict";
!(function (s) {
  s(document).ready(function () {
    s(".step__header, .step__body").addClass("fadeInRight"),
      s(".step__footer").addClass("fadeIn"),
      s(".next").on("click", function (e) {
        var t, a, d;
        e.preventDefault(),
          (t = s(this)),
          (a = t.closest(".step")),
          (d = t.closest(".step").next()),
          s(".main-bg__item.active")
            .fadeOut(1e3)
            .removeClass("active")
            .next()
            .fadeIn(1e3)
            .addClass("active"),
          window.width < 1024 &&
            s(".bg__item.active")
              .fadeOut(1e3)
              .removeClass("active")
              .next()
              .fadeIn(1e3)
              .addClass("active"),
          a.find(".step__header, .step__body").addClass("fadeOutRight"),
          a.find(".step__footer").addClass("fadeOut"),
          setTimeout(function () {
            d.show(),
              d.find(".step__header, .step__body").addClass("fadeInRight"),
              d.find(".step__footer").addClass("fadeIn");
          }, 800);
      });
  });
})(jQuery);
