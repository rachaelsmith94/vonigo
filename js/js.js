//Menu Toggle
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$(".btn-sidebar-menu").click(function() {
  $(".sidenav-right").toggleClass('collapsed');
  $(".page .content").toggleClass("expanded");
});