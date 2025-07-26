$(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });

  $(document).scroll(function () {
    $('body').css("background-color", "yellow");
  })
});
