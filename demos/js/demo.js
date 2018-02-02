let w = document.documentElement.clientWidth;
let h = document.documentElement.clientHeight;

const Load = 0;
const Sec1 = 1;
const Sec2 = 2;
const Sec3 = 3;
const Sec4 = 4;
const Op = 5;
const Show = 6;
const Ios = 7;
let state = Load;

window.onload = function () {
  let sections = document.querySelectorAll('section');
  console.log(sections);
  //设置所有页面的宽高
  for(var i=0;i<sections.length;i++){
    sections[i].style.width = w+'px';
    sections[i].style.height = h+'px';
    sections[i].style.display = 'none';
  }
  //loading
  sections[Load].style.display = 'block';
  console.log('进入第1阶段');
  //test
  //sections[Load].style.display = 'none';
  //sections[Show].style.display = 'block';
  //state = Show;
  //
  let loads = {timer:10,boxNum:document.querySelector('#loads')};
  function time(){
    var timer = setTimeout(function(){
      (function(){
        (loads.boxNum).className = 'num num'+loads.timer;
        loads.timer--;
        // (loads.timer < 0) && (loads.timer = 0);
        if(loads.timer < 0){
          loads.timer = 0;
          state = Sec1;
          sections[Load].style.display = 'none';
          sections[Sec1].style.display = 'block';
          console.log('1阶段过,进入第2阶段');
        }
      }());
      clearInterval(timer);
      timer = null;
      (state < 1 ) && (time());
    },400);
  }
  time();
  //sec1-p2
  var btnP2 = document.querySelector('.btn_sec1');
  btnP2.addEventListener('touchstart', function () {
    sections[Sec1].style.display = 'none';
    sections[Sec2].style.display = 'block';
    state = Sec2;
    console.log('2阶段过,进入第3阶段');
  }, false);
  //sec2-p3
  var btnP3 = document.querySelector('.btn_sec2');
  var re = /\D/;
  btnP3.addEventListener('touchstart', function () {
    var iptNum = document.querySelector('.iptNum');
    var iptDay = document.querySelector('.iptDay');
    if(iptNum.value && iptDay.value){
      //正则表达判断用户是否输入数字
      if(!(re.test(parseInt(iptNum.value)) && re.test(parseInt(iptDay.value)))){
        sections[Sec2].style.display = 'none';
        sections[Sec3].style.display = 'block';
        state = Sec3;
        console.log('3阶段过,进入第4阶段');
        //相当于传值
        document.querySelector('#text1').innerHTML = iptNum.value;
        document.querySelector('#text2').innerHTML = iptDay.value;
        //随便算的
        document.querySelector('#daysz').innerHTML = ((iptNum.value*iptDay.value)*12);
      }else{
        alert('请填入数字');
        iptNum.value = '';
        iptDay.value = '';
        //聚焦
        iptNum.focus();
      }
    }else{
      alert('请您填写');
    }
  }, false);
  //sec-p4
  var dayP = 0;
  var days = document.querySelector('#days');
  function timetwo(){
    var timer = setTimeout(function(){
      (function(){
        if(dayP%2 == 0){
          days.className = 'in_span';
          document.querySelector('#daysz').className = 'day blue';
        }else{
          days.className = '';
          document.querySelector('#daysz').className = 'day';
        }
        dayP++;
      }());
      clearInterval(timer);
      timer = null;
      (state < 4 ) && (timetwo());
    },300);
  }
  timetwo();
  document.querySelector('.exc').addEventListener('touchstart',function () {
    console.log('3阶段过重来');
    sections[Sec2].style.display = 'block';
    sections[Sec3].style.display = 'none';
  });
  //sec-p5
  document.querySelector('.dist').addEventListener('touchstart',function () {
    console.log('4阶段过,进入第5阶段');
    sections[Sec3].style.display = 'none';
    sections[Sec4].style.display = 'block';
  });
  //p5-exc
  document.querySelector('.exc2').addEventListener('touchstart',function () {
    console.log('4阶段过重来');
    sections[Sec4].style.display = 'none';
    sections[Sec3].style.display = 'block';
  });
  //sec-p6
  document.querySelector('.dist2').addEventListener('touchstart',function () {
    console.log('5阶段过,进入第6阶段');
    sections[Sec4].style.display = 'none';
    sections[Op].style.display = 'block';
  });
  //---------------------------------------------------------------6
  var bodys = {b1:true,b2:false,b3:false};
  var hairs = {h1:true,h2:false,h3:false};
  let btn1 = document.querySelector('#btn1');
  let btn2 = document.querySelector('#btn2');
  let btn3 = document.querySelector('#btn3');
  let btn4 = document.querySelector('#btn4');
  let btn5 = document.querySelector('#btn5');
  let btn6 = document.querySelector('#btn6');
  var imgsrc = document.querySelector('.imgs');
  //一天时间也就这样的代码了
  var sso = 11;
  function ift(){
    //1
    if(bodys.b1==true && hairs.h1 == true){
      imgsrc.style.background = 'url(images/p6/11.png) no-repeat';
      imgsrc.style.backgroundSize = '100% auto';
      sso = 11;
    }
    if(bodys.b1==true && hairs.h2 == true){
      imgsrc.style.background = 'url(images/p6/12.png) no-repeat';
      imgsrc.style.backgroundSize = '100% auto';
      sso = 12;
    }
    if(bodys.b1==true && hairs.h3 == true){
      imgsrc.style.background = 'url(images/p6/13.png) no-repeat';
      imgsrc.style.backgroundSize = '100% auto';
      sso = 13;
    }
    //2
    if(bodys.b2==true && hairs.h1 == true){
      imgsrc.style.background = 'url(images/p6/21.png) no-repeat';
      imgsrc.style.backgroundSize = '100% auto';
      sso = 21;
    }
    if(bodys.b2==true && hairs.h2 == true){
      imgsrc.style.background = 'url(images/p6/22.png) no-repeat';
      imgsrc.style.backgroundSize = '100% auto';
      sso = 22;
    }
    if(bodys.b2==true && hairs.h3 == true){
      imgsrc.style.background = 'url(images/p6/23.png) no-repeat';
      imgsrc.style.backgroundSize = '100% auto';
      sso = 23;
    }
    //3
    if(bodys.b3==true && hairs.h1 == true){
      imgsrc.style.background = 'url(images/p6/31.png) no-repeat';
      imgsrc.style.backgroundSize = '100% auto';
      sso = 31;
    }
    if(bodys.b3==true && hairs.h2 == true){
      imgsrc.style.background = 'url(images/p6/32.png) no-repeat';
      imgsrc.style.backgroundSize = '100% auto';
      sso = 32;
    }
    if(bodys.b3==true && hairs.h3 == true){
      imgsrc.style.background = 'url(images/p6/33.png) no-repeat';
      imgsrc.style.backgroundSize = '100% auto';
      sso = 33;
    }
  }
  btn1.onclick = function () {
    btn1.innerHTML = "<i id='sele2'></i>";
    btn2.innerHTML = '';
    btn3.innerHTML = '';
    bodys = {b1:true,b2:false,b3:false};
    ift();
  }
  btn2.onclick = function () {
    btn2.innerHTML = "<i id='sele2'></i>";
    btn1.innerHTML = '';
    btn3.innerHTML = '';
    bodys = {b1:false,b2:true,b3:false};
    ift();
  }
  btn3.onclick = function () {
    btn3.innerHTML = "<i id='sele2'></i>";
    btn2.innerHTML = '';
    btn1.innerHTML = '';
    bodys = {b1:false,b2:false,b3:true};
    ift();
  }
  //-----------------btn
  btn4.onclick = function () {
    btn4.innerHTML = "<i id='sele'></i>";
    btn5.innerHTML = '';
    btn6.innerHTML = '';
    hairs = {h1:true,h2:false,h3:false};
    ift();
  }
  btn5.onclick = function () {
    btn5.innerHTML = "<i id='sele'></i>";
    btn4.innerHTML = '';
    btn6.innerHTML = '';
    hairs = {h1:false,h2:true,h3:false};
    ift();
  }
  btn6.onclick = function () {
    btn6.innerHTML = "<i id='sele'></i>";
    btn4.innerHTML = '';
    btn5.innerHTML = '';
    hairs = {h1:false,h2:false,h3:true};
    ift();
  }
  //sec-p7
  var imgii =document.querySelector('#imgii');
  document.querySelector('#etc').addEventListener('touchstart',function () {
    console.log('6阶段过,进入第7阶段');
    sections[Op].style.display = 'none';
    sections[Show].style.display = 'block';

    imgii.style.background = 'url(images/p7/'+sso+'.png) no-repeat';

    document.querySelector('#imgii').style.backgroundSize='100% auto';
        //background: url('@{img-p7}11.png') no-repeat;
        //background-size: 100% auto;
    state = Show;
    timeas();
  });
  var dra = -2;
  let i1 = document.querySelector('#i1');
  let i2 = document.querySelector('#i2');
  let i3 = document.querySelector('#i3');
  let i4 = document.querySelector('#i4');
  let i5 = document.querySelector('#i5');
  var imgy = 0;
  function timeas(){
    var timer = setTimeout(function(){
      (function(){
        if(dra == 1){
          i1.style.background = 'url(images/p7/menu.png) no-repeat';
          i1.style.backgroundSize='60% auto';
          i1.style.animation = 'tras1 1s linear';
        }else if(dra == 2){
          i2.style.background = 'url(images/p7/title.png) no-repeat';
          i2.style.backgroundSize='100% auto';
          i2.style.animation = 'tras2 1.5s linear';
        }else if(dra == 3){
          i4.style.background = 'url(images/p7/search.png) no-repeat';
          i4.style.backgroundSize='60% auto';
          i4.style.animation = 'tras3 1s linear';
        }else if(dra == 4){
          i5.style.background = 'url(images/p7/refresh.png) no-repeat';
          i5.style.backgroundSize='100% auto';
          i3.style.animation = 'tras4 1s linear';
        }else if(dra == 5){
          i5.style.animation = 'tras5 10s linear';
        }else if(dra == 6){
          timeass();
        }else if(dra == 7){
          //i5.style.background = 'url(images/p7/refresh.png) no-repeat';
          //i5.style.backgroundSize='100% auto';
          //i3.style.animation = 'tras4 1s linear';
          document.querySelector('.exc3').style.background = 'url(images/p7/btn-back.png) no-repeat';
          document.querySelector('.exc3').style.backgroundSize='60% auto';
          document.querySelector('.exc3').style.animation = 'tras4 1s linear';
          document.querySelector('.dist3').style.background = 'url(images/p7/btn-go.png) no-repeat';
          document.querySelector('.dist3').style.backgroundSize='100% auto';
          document.querySelector('.dist3').style.animation = 'tras4 1s linear';
          //background:url('@{img-p7}btn-go.png') no-repeat;
          //background-size: 100% auto;
          //background:url('@{img-p7}btn-back.png') no-repeat;
          //background-size: 60% auto;


        }
        dra++;
      }());
      clearInterval(timer);
      timer = null;
      timeas();
    },600);
  }


  let imgx = 0;
  function timeass(){
    var timer = setTimeout(function(){
      document.querySelector('#imgz').style.marginTop = (imgy+=10)+"px";
      clearInterval(timer);
      timer = null;
      if(imgx<200){}
        timeass();
      imgx++;
    },50);
  }
  document.querySelector('.exc3').onclick =function(){
    sections[Op].style.display = 'block';
    sections[Show].style.display = 'none';
    imgx = 0;
  }
  document.querySelector('.dist3').onclick =function(){
    console.log('7阶段过,进入第0阶段');
    //sections[Show].style.display = 'block';
    //sections[Ios].style.display = 'block';
    //document.querySelector('.p8').onclick = function (){
    //  sections[Ios].style.display = 'none';
    //}
    //简化了

  }
  i5.onclick =function() {
    window.location.replace(document.referrer);
  }
}
