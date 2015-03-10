var VALUE = 0;
var STORED_VALUE = [];
var EQUALS_ON = false;
var ADD_ON = false;
var SUB_ON = false;
var DIV_ON = false;
var MULT_ON = false;

var buttonc = document.getElementById("clear");
buttonc.onclick = function() { clear(); };

var button0 = document.getElementById("zero");
button0.onclick = function() { display(0); };

var button1 = document.getElementById("1");
button1.onclick = function() { display(1); };

var button2 = document.getElementById("2");
button2.onclick = function() { display(2); };

var button3 = document.getElementById("3");
button3.onclick = function() { display(3); };

var button4 = document.getElementById("4");
button4.onclick = function() { display(4); };

var button5 = document.getElementById("5");
button5.onclick = function() { display(5); };

var button6 = document.getElementById("6");
button6.onclick = function() { display(6); };

var button7 = document.getElementById("7");
button7.onclick = function() { display(7); };

var button8 = document.getElementById("8");
button8.onclick = function() { display(8); };

var button9 = document.getElementById("9");
button9.onclick = function() { display(9); };

var buttondeci = document.getElementById("decimal");
buttondeci.onclick = function() { display('.'); };

var buttonadd = document.getElementById("add");
buttonadd.onclick = function() { store();  ADD_ON = true;};

var buttonminus = document.getElementById("minus");
buttonminus.onclick = function() { store(); SUB_ON = true;};

var buttondivide = document.getElementById("divide");
buttondivide.onclick = function() { store(); DIV_ON = true;};

var buttonmult = document.getElementById("multiply");
buttonmult.onclick = function() { store(); MULT_ON = true; };

var buttonequals = document.getElementById("equal");
buttonequals.onclick = function() { equals(); };

var buttonsigninv = document.getElementById("sign inv");
buttonsigninv.onclick = function() { signinv(); };



var buttonMC = document.getElementById("MC");
buttonMC.onclick = function() { nofunc(); };

var buttonMP = document.getElementById("MP");
buttonMP.onclick = function() { nofunc(); };

var buttonMM = document.getElementById("MM");
buttonMM.onclick = function() { nofunc(); };

var buttonMR = document.getElementById("MR");
buttonMR.onclick = function() { nofunc(); };

function display(d) {
    if (VALUE == 0) {
      VALUE = [];}
    if (VALUE.toString().length >= 20) {
      return;}
    if (EQUALS_ON == true) {
      VALUE = [];
      EQUALS_ON = false;}


    VALUE += d;
    var el = document.getElementById("results");
        el.innerHTML = VALUE;
    return
}

function clear() {
    VALUE = 0;
    var el = document.getElementById("results");
    el.innerHTML = VALUE;
    return
}

function store() {
    STORED_VALUE = VALUE;
    VALUE = [];
    return
}

function signinv() {
    if (VALUE != 0) {
      VALUE = -1*VALUE;
      var el = document.getElementById("results");
      el.innerHTML = VALUE;}
    return
}

function nofunc() {
    VALUE = "lol no";
      var el = document.getElementById("results");
      el.innerHTML = VALUE;
    return
}

function equals() {
  if (EQUALS_ON == false){
    if (ADD_ON == true) {
      VALUE = Number(STORED_VALUE) + Number(VALUE);
      ADD_ON = false;}
    if (SUB_ON == true) {
      VALUE = Number(STORED_VALUE) - Number(VALUE);
      SUB_ON = false;}
    if (DIV_ON == true) {
      VALUE = Number(STORED_VALUE) / Number(VALUE);
      DIV_ON = false;}
    if (MULT_ON == true) {
      VALUE = Number(STORED_VALUE) * Number(VALUE);
      MULT_ON = false;}
    var el = document.getElementById("results");
    el.innerHTML = VALUE;
    console.log(VALUE);
    EQUALS_ON = true;}
  return
}
