class Uberprice{
    constructor(person,time,distance){
        let [base_fare,operating_rate,booking_fees,cost_per_km]=[25,20,3,7];        //giving default value for some paramerters.
        this.person_name=person;
        this.base_fare=+base_fare;
        this.operating_rate=+operating_rate;
        this.time=+time;
        this.cost_per_km=+cost_per_km;
        this.booking_fees=+booking_fees;
        this.distance=distance;
    }
    getprice(){
        if(this.time<30){                                                           //fixing value for parameter time bassed on given value.
           this.time=0;
        }else{
            var tme=0;
            for(let i=30;i<=this.time;i=i+30){
                tme+=30;
        }}
        this.time=tme;
        let passengers_ride_fair=this.base_fare+this.operating_rate+this.booking_fees+(this.distance*(this.cost_per_km)+this.time);   
                                                                                    //formula to find out the fair for the ride.
        return `
        Uber price for the ride is :     ₹ ${passengers_ride_fair}
        `;                                                                          //using template literal to return the fair.
    }
}
let rider1   =   new Uberprice("kishore",70,60);                                    //creating instance of a class.
let rider2   =   new Uberprice("Ramesh",30,30);
let rider3   =   new Uberprice("Lavish",120,100);
let arr_rider=   [rider1,rider2,rider3];                                            //array contains the intances.
arr_rider.forEach((rider)=>console.log(`Rider Name is ${rider.person_name} ${rider.getprice()}`));