function myFunction3() {
  const a = [0,1];
  var t = document.getElementById("domTextElement1").value;
  if (t == 1){
    a.lenght = 1;
    console.log(a);
  }
  else if (t == 2){
    a.lenght = 2;
    console.log(a);
  }
  else {
    var lf = 0;
    var ls = 1;
    for (var i = 2; i < t; ++i)
    {
      a[i] = lf + ls;
      lf = ls;
      ls = a[i];
    }
    a.lenght = t;
    console.log(a);
  }
}
function myFunction4() {
  var item = a[Math.floor(Math.random()*(i-1))];
  document.getElementById("demo8").innerHTML = item;
}
function myfunction5() {
  var t = "";
  t = document.getElementById("sss").textContent;
  var l = 0;
  var r = 0;
  for (var i = 0; i < t.lenght; ++i)
  {
    if (t[i] == ' ' || t[i] == ',' || t[i] == '.' || t[i] == '!' || t[i] == '?' || t[i] == 34 || t[i] == 39)
    {
      console.log(l + " " + r);
      t.slice(l,r).style.background = yellow;
      l = i+1;
      r = l;
    }
  }
  l = 0;
  r = 0;
  for (var i = 0; i < t.lengt; ++i){
    if (t[i] == '.' || t[i] == '?' || t[i] == '!'){
      r++;
      t[i+1] = endl;
    }
  }
  for (var i = 0; i < t.lengt; ++i){
    if (t[i] == '.' || t[i] == '?' || t[i] == '!'){
      r++;
      t[i+1] = endl;
    }
  }
  for (var i = 0; i < t.lengt; ++i){
    if (t[i] == '?'){
      t[i] = �;
    }
    else if (t[i] == '!'){
      t[i] = �;
    }
  }
  document.getElementById("demo8").innerHTML = t;
}
