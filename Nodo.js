let r = 30;

class Nodo {

  constructor(iden, numb,nodos) {
    this.x = random(0 + r, windowWidth * 2 / 3 - r);
    this.y = random(0 + r, windowHeight * 2 / 3 + 30 - r);
    this.id = iden;
    this.kids = [];
    this.num = numb;
    this.show();
    this.no=nodos;
  }


  array() {
    for (i = 0; i < this.num; i++) {
      this.kids.push(floor(random(0, this.no-1)));
    }
  }

  show() {
    fill(255);
    strokeWeight(4);
    ellipse(this.x, this.y, r, r);
    fill(0);
    strokeWeight(1);
    text(this.id, this.x-2, this.y+2);
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getKids() {
    return this.kids;
  }

}