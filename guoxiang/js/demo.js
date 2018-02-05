const p1 = 1,p2 = 2,p3 = 3,p4 = 4,p5 = 5,p6 = 6,p7 = 7,p8 = 8;
var state = false;
var statr = false;
var s = 1,iu =0,io = 0;
var drawNum = 0;
window.onload = function () {
  var loadingTime = {
    time:12//设置加载时间
  };
  function loadTime() {
    var time = setTimeout(function () {
      loadingTime.time--;
      clearTimeout(time);
      time = null;
      if(loadingTime.time > 0){
        loadTime();
      }else if(loadingTime.time > -1){
        $('.loading')[0].style.animation = 'tras1 1s linear forwards';
        loadTime();
      }else{
        $('.loading')[0].style.display = 'none';
        $('.mbtn')[0].style.display = 'block';
        state = p1;
      }
    }, 1000);
  }
  loadTime();
  //开始
  $('#btn1').bind('touchstart',function(){
    $('.intro')[0].style.animation = 'tras1 0.6s linear';
    disappear();
    state = p2;
  });
  //body
  var cy,ty;
  $('body').bind('touchstart',function(){
    cy = (event.changedTouches[0].clientY);
  });
  $('body').bind('touchmove',function(){
    ty = (event.changedTouches[0].clientY);
  });
  $('body').bind('touchend',function(){
    if(statr){
      if(cy > ty+100){
        arrowF();
        tops(state);
        s = 1;
        iu = 0;
        io = 0;
        console.log('上滑');
      }else if(cy < ty-100){
        console.log('下滑');
      }
    }
  });
}
//-------------------------------------------------------------------------------------------
function tops(pNum){
  // console.log(pNum-1);
  $('#p'+(pNum-1)+'')[0].style.animation = 'top 0.3s linear forwards';
  console.log(state+'----------------------------------');
  if(state < p7){
    times();
  }else{
    timeTwo();
  }
  state++;
}
function times() {
  // console.log(s);
  var timer = setTimeout(function(){
    switch (s){
      case 1:
        $('.wp'+(state-1)+'T1')[0].style.animation = 'yue 0.2s ease forwards';
        s++;
        break;
      case 2:
        if(iu == 0){
          drawNum = 0;
          $('.wp'+(state-1)+'T3')[0].style.animation = 'tras2 1s linear forwards';
          // s++;
          draw($('.wp'+(state-1)+'T3')[0]);
        }
        iu++;
        break;
      case 3:
        $('.wp'+(state-1)+'T2')[0].style.animation = 'tras2 0.5s linear forwards';
        s++;
        break;
      case 4:
        $('.wp'+(state-1)+'T6')[0].style.animation = 'tras2 0.5s linear forwards';
        s++;
        break;
      case 5:
        if(io == 0){
          drawNum = 0;
          $('.wp'+(state-1)+'T5')[0].style.animation = 'tras2 1s linear forwards';
          // s++;
          draw($('.wp'+(state-1)+'T5')[0]);
        }
        io++;
        // $('.wp'+(state-1)+'T5')[0].style.animation = 'tras2 0.5s linear forwards';
        // s++;
        break;
      case 6:
        $('.wp'+(state-1)+'T4')[0].style.animation = 'tras2 0.5s linear forwards';
        s++;
        break;
      case 7:
        $('.wp'+(state-1)+'T7')[0].style.animation = 'wtop1 0.5s linear forwards';
        s++;
        break;
      case 8:
        $('.wp'+(state-1)+'T8')[0].style.animation = 'wtop2 0.5s linear forwards';
        arrowT();
        s++;
        console.log('动画已过，下一阶段');
        break;
    }
    if(s < 9){
      times();
    }
    clearTimeout(timer);
    timer = null;
  },1000);
}
//23520 46560 42720 40800 83490
function draw(obj){
  var time = setTimeout(function(){
    clearTimeout(time);
    time = null;
    // console.log(state);
    if(state == p3){
      if(drawNum < 23520){
        obj.style.backgroundPosition = '0px '+(drawNum+=480)+'px';
        draw(obj);
        if(drawNum == 9600){
          s++;
          console.log('draw执行9600');
        }
      }
    }else if(state == p4){
      if(drawNum < 46560){
        obj.style.backgroundPosition = '0px '+(drawNum+=480)+'px';
        draw(obj);
        if(drawNum == 24000){
          s++;
          console.log('draw执行33600');
        }
      }
    }else if(state == p5){
      if(drawNum < 42720){
        obj.style.backgroundPosition = '0px '+(drawNum+=480)+'px';
        draw(obj);
        if(drawNum == 24000){
          s++;
          console.log('draw执行33600');
        }
      }
    }else if(state == p6){
      if(drawNum < 40800){
        obj.style.backgroundPosition = '0px '+(drawNum+=480)+'px';
        draw(obj);
        if(drawNum == 24000){
          s++;
          console.log('draw执行33600');
        }
      }
    }else if(state == p7){
      if( s >= 4){
        if(drawNum < 37760){
          obj.style.backgroundPosition = '0px '+(drawNum+=472)+'px';
          draw(obj);
          if(drawNum == 23600){
            s++;
            console.log('draw执行56640');
          }
        }
      }else if(s <= 3){
        if(drawNum < 83490){
          obj.style.backgroundPosition = '0px '+(drawNum+=506)+'px';
          draw(obj);
          if(drawNum == 50600){
            s++;
            console.log('draw执行75900');
          }
        }
      }
    }

  },40);
}
//-------------------------------------------------------------------------------------------
function disappear() {
  var timer = setTimeout(function () {
    $('.intro')[0].style.animation = '';
    $('.intro')[0].style.display = 'none';
    $('.logo')[0].style.animation = 'tras2 0.25s linear forwards';
    $('#wrap')[0].style.display = 'block';
    time1();
    clearTimeout(timer);
    timer = null;
  },500);
}
var pt1 = 3;
function time1() {
  var timer = setTimeout(function () {
    if(pt1 >= 3){
      $('.wp1Text1')[0].style.animation = 'tras2 1.2s linear forwards';
      time1();
    }else if(pt1 >= 2){
      $('.wp1Text2')[0].style.animation = 'tras2 1.2s linear forwards';
      time1();
    }else if(pt1 >= 1){
      $('.wp1Text3')[0].style.animation = 'tras2 1.2s linear forwards';
      time1();
    }else{
      arrowT();
    }
    pt1--;
    clearTimeout(timer);
    timer = null;
  },800);
}
function arrowT() {
  $('.arrow')[0].style.display = 'block';
  statr = true;
}
function arrowF() {
  $('.arrow')[0].style.display = 'none';
  statr = false;
}
var te = 0;
function timeTwo(){
  var time = setTimeout(function(){
    if(te == 0){
      $('.text01')[0].style.animation = 'wtop81 0.5s linear forwards';
      $('.text04')[0].style.animation = 'wtop84 0.5s linear forwards';
      timeTwo();
    }else if(te == 1){
      $('.text02')[0].style.animation = 'wtop82 0.5s linear forwards';
      timeTwo();
    }else if(te == 2){
      $('.text03')[0].style.animation = 'wtop83 0.5s linear forwards';
      timeTwo();
    }
    te++;
    clearTimeout(time);
    time = null;

  },800);
}
