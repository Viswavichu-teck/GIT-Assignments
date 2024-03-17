class Circle {
    constructor(radius, color) {
      this.radius = radius
      this.color = color
    }
    getRadius() {
      return this.radius;
    }
    setRadius(radius) {
      this.radius = radius;
    }
    getColor() {
      return this.color;
    }
    setColor(color) {
      this.color = color;
    }
    toString() {
      return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
    getArea() {
      let area = 3.14*this.radius*this.radius;
      return area.toFixed(2);
    }
    getCircumference() {
      let circumference = 2 * 3.14159 * this.radius;
      return circumference.toFixed(2);
    }
  }
  
  let circle = new Circle(6, "Green");
  console.log(circle);
  
  console.log("Radius = "+circle.getRadius());
  console.log("color = "+circle.getColor());
  console.log("Area = "+circle.getArea());
  console.log("circumference = "+circle.getCircumference());
  console.log("string = "+circle.toString());
  
  circle.setRadius(5);
  
  console.log("Area = "+circle.getArea(),"Circumference = "+circle.getCircumference());
  console.log();
  circle.setColor("green");
  console.log("Color = "+circle.getColor(),"string = "+circle);
  console.log();