var percent=0;


setInterval(function(){
  $(".loadingtext").text(" "+percent+"%");
  percent++;
},20);


setTimeout(function(){
  $(".page").addClass("finishloading");
},2000);


$("h1").click(function(){
  

  percent=0;
  $(".page").removeClass("finishloading")
  setTimeout(function(){
    $(".page").addClass("finishloading");
  },2000);
});