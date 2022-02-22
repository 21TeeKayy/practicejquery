$(document).ready(function(){
  $('#s').click(function(){
    $('#p').attr('type', $(this).is(':checked') ? 'text' : 'password');
  });
  $('#s2').click(function(){
    $('#p2').attr('type', $(this).is(':checked') ? 'text' : 'password');
  });
  var submit = $("#submit").hide();
  $('#ch').click(function(){
    $('#submit').fadeToggle(2000);
  });
  $('#up').click(function(){
  $("html, body").animate({ scrollTop: 0}, 1000);
});
  $('#click').click(function(){
    $('#click2').fadeTo(2500, 0.5);
  });
  $('#btn1').click(function(){
    $('#box').height(250);
    $('#box').width(250);
  });
  $('#btn2').click(function(){
    $('#box').height(100);
    $('#box').width(100);
  });
});
