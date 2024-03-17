class UberPrice {
    constructor(pickup, drop, distance, trip , tips) {
      this.pickup = pickup;
      this.drop = drop;
      this.distance = distance;
      this.trip = trip;
      this.travel = () => {
        if (trip == "One way") {
          return 1;
        } else return 2;
      };
      this.tips =tips;
    }
    getPrice() {
      const price = (this.distance * 19 * this.travel())+this.tips;
      return price;
    }
    displayDetails() {
      console.log(`
      Pickup Place: ${this.pickup}
      Droping Place: ${this.drop}
      Distance: ${this.distance}
      trip: ${this.trip}
      Trip Price: ${this.getPrice()}`);
    }
  }
  
  const uberPrice = new UberPrice("Thiruchendur", "Pudur", 10, "One way", 15);
  uberPrice.displayDetails();