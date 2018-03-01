//隐藏上一层,清空动画属性
function clear(arr) {
  var timer = setTimeout(function(){
    for(let i=0;i<arr.length;i++){
      arr[i].style.display = 'none';
      arr[i].style.animation = '';
      $('section')[1].style.display = 'block';
      $('section')[1].style.animation = 'rule 0.2s linear forwards';
    }
    clearTimeout(timer);
    timer = null;
  },500);
}
//倒计时3秒
function goTime(s,obj){
  var timer = setTimeout(function(){
    var countdown = obj.children('.curtain').children('#num').children('#countdown');
    s--;
    countdown[0].className = 'num'+s;
    clearTimeout(timer);
    timer = null;
    if(s>0){
      goTime(s,obj);
    }else{
      obj.hide();
      console.log(obj.children(".curtain").css("display","none"));
      obj.children('#curtain').css('display','none');
      obj.css('animation','');
      countdown.attr('class','num3');
      countdown.css('animation','');
      console.log('用户开始答题');
    }
  },1000);
}