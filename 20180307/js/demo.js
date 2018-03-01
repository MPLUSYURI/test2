window.onload = function () {
  let sections = $('section');
  // for(let i=0;i<sections.length;i++){
  //   sections[i].style.width = "640px";
  //   sections[i].style.height = "1008px";
  //   sections[i].style.position = "absolute";
  // }
  let secs = {
    sec1:sections[0],
    sec2:sections[1]
  };
  //home点击
  $('#igo').bind('touchstart',function(){
    secs.sec1.style.animation = 'igo 0.3s linear forwards';
    secs.sec2.style.display = 'none';
    clear([secs.sec1]);
  });
  //倒计时开始
  $('#go').bind('touchstart',function(){
    $(secs.sec2).children(".curtain").css("display","block");
    $("#countdown").css('animation','num 1s linear infinite');
    goTime(3,$(secs.sec2));
  });
}