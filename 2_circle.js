//Creating class name is Circle:
class Circle{
    constructor(radius,color){                   //contructor keyword is using while object creation.
        this.radius=radius;
        this.color=color;
    }
    circle_properties(){
        return `
Properties of a cirlce:        
        The radius of a circle is    :  ${(this.radius).toFixed(1)}
        The color of a circle is     :  ${this.color}`
                 
    }
}
let circle1=new Circle(1.0,"red");
console.log(circle1.circle_properties());
//==========================================================
//getarea:
class Area_of_circle extends Circle{
     
     constructor(radius=1.0){
        super(radius);                           //calling the argument from the parent class by using super keyword.
     }
     getArea(){                                  //Using template literals and return the data.
        let data=`                               
Finding Area of a given circle:
        Area of a circle is          :  ${((this.radius)*3.14*(this.radius)).toFixed(1)}
        `;
        return data;
     }
}
let radius=new Area_of_circle();
console.log(radius.getArea());     //printing area of a circle.
//==========================================================
//getCircumference:
class Circumference extends Circle{
    constructor(radius=1.0){
        super(radius)
    }
    circumference_method(){                      //this is the method to access the class objects.
        let data=`
Finding Circumference of a circcle:      
        Circumference of a circle is :  ${((this.radius)*2*3.14)}
        `;
        return data;
    }
}
let circum=new Circumference();                  // new keyword is used to create an instance of the class.
console.log(circum.circumference_method());
//==========================================================
//toString output:
class outputstringify extends Circle{
    constructor(radius,color){
         super(radius,color);
    }
    getstrin(){
        let data=`
Stringify output:
        Circle[radius = ${this.radius} , colout = ${this.color}]
        `;
        return data;
    }
}
let strcircle=new outputstringify(1.0,"Red")     //creating the instance and give parameters.
console.log(strcircle.getstrin());
//==========================================================
//getter method:
let circle={
    radius:1,
    color:"red",
    get getradius(){                             //using get keyword to get the data from that argument.
        return (this.radius).toFixed(1);
    }
}
console.log(`
Using Getter method :
        Raduius of a circle : ${(circle.getradius)}
`);
//==========================================================
//setter method:
let circle2={
    color:"red",
    set change_color(newname){                  //set keyword is used to change the value of the object parameters.
        this.color=newname;
    }
}
console.log(`
Using Setter Method:
       value inside the object is==> color : ${circle2.color}
`);
circle2.change_color="blue";
console.log(`
    Bellow value is change by using setter method:
       value inside the object is==> color : ${circle2.color}
`);
//==========================================================