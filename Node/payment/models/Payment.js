class Payment {
  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
    this.status = "PENDING";
    this.createdAt = new Date();
  }
}

export default Payment;