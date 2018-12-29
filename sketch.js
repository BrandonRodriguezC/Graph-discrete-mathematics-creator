let array = [];
let n;
let slider;
let inp, inp1, inp2;
let info;
let texto4;
function setup() {
  var canvas = createCanvas(windowWidth * 2 / 3, windowHeight * 2 / 3 + 30);
  canvas.parent('sketch-holder');
  let but = createButton("Nuevo grafo");
  but.position(windowWidth * 2 / 3 + 40, 110);
  but.mouseClicked(draw);
  let texto1=createP("Numero de nodos:");
  texto1.position(but.x,but.y + but.height + 10);

  inp = createInput("1");
  inp.position(texto1.x + 150 , but.y + but.height + 10);
  inp.class('inputStyle');

  let texto2=createP("Numero de minimo de aristas:");
  texto2.position(but.x,inp.y + inp.height + 30);

  inp1 = createInput("0");
  inp1.position(inp.x+30, inp.y + inp.height + 30);
  inp1.class('inputStyle');

  let texto3=createP("Numero de maximo de aristas:");
  texto3.position(but.x,inp1.y + inp1.height + 30);

  inp2 = createInput("1");
  inp2.position(inp1.x, inp1.y + inp1.height + 30);
  inp2.class('inputStyle');
  
   texto4=createP();
  texto4.position(but.x,inp2.y + inp2.height + 30);
}

function draw() {
  info="";
  array = [];
  background(50);
  n = inp.value();

  for (i = 0; i < n; i++) {

    let randnumber=round(random(inp1.value(), inp2.value()));

    info+= "× El nodo "+i +" tiene "+randnumber+" aristas ";
    let nodo = new Nodo(i, randnumber, inp.value());
    array.push(nodo);
  }
  texto4.html(info);
  for (g = 0; g < n; g++) {
    array[g].array();
  }

  stroke(0);
  strokeWeight(4);

  for (j = 0; j < array.length; j++) {
    var kid = array[j].getKids();
    for (i = 0; i < kid.length; i++) {
      if (j == kid[i]) {
        noFill();
        ellipse(array[j].getX(), array[j].getY(), 60, 60);
      } else {
        line(array[j].getX(), array[j].getY(), array[kid[i]].getX(), array[kid[i]].getY());
      }
    }
  }

  for (g = 0; g < n; g++) {
   
    array[g].show();
  }
  noLoop();
}