'use strict';
$('.carousel').carousel({
  interval: 3000
})

$(".blok").click(function (event) {
	event.preventDefault();
});


$(document).ready(function () {
	$('[data-toggle="popover"]').popover();
});
