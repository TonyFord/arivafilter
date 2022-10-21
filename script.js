// Set a Cookie
function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}


function getCookie(cName) {
      const name = cName + "=";
      const cDecoded = decodeURIComponent(document.cookie); //to be careful
      const cArr = cDecoded .split('; ');
      let res;
      cArr.forEach(val => {
          if (val.indexOf(name) === 0) res = val.substring(name.length);
      })
      return res;
}


var UL=getCookie('userlist');

function applyFilter(UL){
  Object.values( document.getElementsByClassName("name_subject") ).forEach(
    function(v){
      if( UL.indexOf( v.children[1].children[0].href.split(/\/profil\//g)[1] ) > -1 ){
        v.parentElement.parentElement.innerText='';
      }
    }
  );
}


var ddd = document.createElement('div');
ddd.style.width='100%';
ddd.style['text-align']='center';
var lst = document.createElement('textarea');
lst.id='userlist';
lst.style.background='salmon';
lst.style.width='50%';
lst.value=getCookie('userlist');
ddd.append(lst);

var btn = document.createElement('button');
btn.type='button';
btn.innerText='Update Filter';
btn.onclick=function(){
  setCookie('userlist',document.getElementById('userlist').value,365);
  applyFilter(document.getElementById('userlist').value);
}
ddd.append(btn);

document.getElementsByTagName('body')[0].append(ddd);

applyFilter(UL);
