$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('animation');
    $("#gallery").fadeTo(300, 1);
    }, 300);
    });
    });









    function switchStyle() {
        if (document.getElementById('styleSwitch').checked) {
          document.getElementById('gallery').classList.add("custom");
          document.getElementById('exampleModal').classList.add("custom");
        } else {
          document.getElementById('gallery').classList.remove("custom");
          document.getElementById('exampleModal').classList.remove("custom");
        }
      }

      $(document).on("click", '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
      });