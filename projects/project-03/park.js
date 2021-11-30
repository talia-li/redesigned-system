

/* For park start */
//var
var open1 = my$('open1');
var open2 = my$('open2');
var open3 = my$('open3');
var box1 = my$('box1');
var box2 = my$('box2');
var box3 = my$('box3');
var box4 = my$('box4');
var box5 = my$('box5');
var box6 = my$('box6');
var hidden = my$('hidden');
var close1 = my$('close1');
var close2 = my$('close2');
var close3 = my$('close3');
var close4 = my$('close4');
var close5 = my$('close5');
var close6 = my$('close6');

//common
function my$(id) {
    return document.getElementById(id);
  }
  
  // 获取鼠标在页面的位置，处理浏览器兼容性
  function getPage(e) {
    var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
    var pageY = e.pageY || e.clientY + getScroll().scrollTop;
    return {
      pageX: pageX,
      pageY: pageY
    }
  }

//open1
  open1.onclick = function () {

      box1.style.display = 'flex';
      box4.style.display = 'flex';
      hidden.style.display = 'block';
  }
  close1.onclick = function () {
      box1.style.display = 'none';
      hidden.style.display = 'none';
      // 关闭后恢复box到原来的默认位置
      box1.style.top = '200px';
      box1.style.left = ''; 
  }
  close4.onclick = function () {
    box4.style.display = 'none';
    hidden.style.display = 'none';
    // 关闭后恢复box到原来的默认位置
    box4.style.top = '200px';
    box4.style.left = ''; 
}
  box1.onmousedown = function (e) {
      e = e || window.event;
      // 盒子的位置
      var x = getPage(e).pageX - box1.offsetLeft;
      var y = getPage(e).pageY - box1.offsetTop;
      document.onmousemove = function (e) {
          e = e || window.event;
          box1.style.left = getPage(e).pageX - x + 'px';
          box1.style.top = getPage(e).pageY - y + 'px';
      }
  }
  box4.onmousedown = function (e) {
    e = e || window.event;
    // 盒子的位置
    var x = getPage(e).pageX - box4.offsetLeft;
    var y = getPage(e).pageY - box4.offsetTop;
    document.onmousemove = function (e) {
        e = e || window.event;
        box4.style.left = getPage(e).pageX - x + 'px';
        box4.style.top = getPage(e).pageY - y + 'px';
    }
}

//open2
open2.onclick = function () {

    box2.style.display = 'flex';
    box5.style.display = 'flex';
    hidden.style.display = 'block';
}
close2.onclick = function () {
    box2.style.display = 'none';
    
    hidden.style.display = 'none';
    // 关闭后恢复box到原来的默认位置
    box2.style.top = '200px';
    box2.style.left = '';
}
close5.onclick = function () {
    box5.style.display = 'none';
    
    hidden.style.display = 'none';
    // 关闭后恢复box到原来的默认位置
    box5.style.top = '200px';
    box5.style.left = '';
    
}
box2.onmousedown = function (e) {
    e = e || window.event;
    // 盒子的位置
    var x = getPage(e).pageX - box2.offsetLeft;
    var y = getPage(e).pageY - box2.offsetTop;
    document.onmousemove = function (e) {
        e = e || window.event;
        box2.style.left = getPage(e).pageX - x + 'px';
        box2.style.top = getPage(e).pageY - y + 'px';
    }
}
box5.onmousedown = function (e) {
    e = e || window.event;
    // 盒子的位置
    var x = getPage(e).pageX - box5.offsetLeft;
    var y = getPage(e).pageY - box5.offsetTop;
    document.onmousemove = function (e) {
        e = e || window.event;
        box5.style.left = getPage(e).pageX - x + 'px';
        box5.style.top = getPage(e).pageY - y + 'px';
    }
}

//open3
open3.onclick = function () {

    box3.style.display = 'flex';
    box6.style.display = 'flex';
    hidden.style.display = 'block';
}
close3.onclick = function () {
    box3.style.display = 'none';
    
    hidden.style.display = 'none';
    // 关闭后恢复box到原来的默认位置
    box3.style.top = '200px';
    box3.style.left = '';
    
}
close6.onclick = function () {
    box6.style.display = 'none';
    
    hidden.style.display = 'none';
    // 关闭后恢复box到原来的默认位置
    box6.style.top = '200px';
    box6.style.left = '';
    
}
box3.onmousedown = function (e) {
    e = e || window.event;
    // 盒子的位置
    var x = getPage(e).pageX - box3.offsetLeft;
    var y = getPage(e).pageY - box3.offsetTop;
    document.onmousemove = function (e) {
        e = e || window.event;
        box3.style.left = getPage(e).pageX - x + 'px';
        box3.style.top = getPage(e).pageY - y + 'px';
    }
}
box6.onmousedown = function (e) {
    e = e || window.event;
    // 盒子的位置
    var x = getPage(e).pageX - box6.offsetLeft;
    var y = getPage(e).pageY - box6.offsetTop;
    document.onmousemove = function (e) {
        e = e || window.event;
        box6.style.left = getPage(e).pageX - x + 'px';
        box6.style.top = getPage(e).pageY - y + 'px';
    }
}
document.onmouseup = function () {
    document.onmousemove = null;
}

/* For park end */