function AtmWithDrawal() {
    let balance = parseFloat(prompt("Enter account balance:"));
    let amount = parseFloat(prompt("Enter withdrawal amount:"));
    let pin = "1234"; // Example PIN
    let enteredPin = prompt("Enter PIN:");

    if (enteredPin !== pin) return alert("Incorrect PIN");
    if (amount > balance) return alert("Insufficient Funds");
    if (amount % 100 !== 0) return alert("Enter amount in multiples of 100");

    alert("Withdrawal Successful! New Balance: " + (balance - amount));
}

function calculateFinalAmount() {
    let orderAmount = parseFloat(prompt("Enter order amount:"));
    let discount = orderAmount > 1000 ? 0.2 : orderAmount >= 500 ? 0.1 : 0;
    let discountedAmount = orderAmount - (orderAmount * discount);
    let shippingCost = discountedAmount < 50 ? 10 : 0;

    alert("Final Payable Amount: $" + (discountedAmount + shippingCost));
}

function calculateGrade() {
    let marks = parseFloat(prompt("Enter marks:"));
    let attendance = parseFloat(prompt("Enter attendance percentage:"));
    if (attendance > 90) marks += 5;

    let grade = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : marks >= 60 ? "D" : "F";
    alert("Final Grade: " + grade);
}

function trafficLightControl() {
    let density = prompt("Enter traffic density (Heavy, Moderate, Light):").toLowerCase();
    let time = density === "heavy" ? 60 : density === "moderate" ? 40 : density === "light" ? 20 : "Invalid";
    alert("Green light duration: " + time + " seconds");
}

function calculateTicketPrice() {
    let age = parseInt(prompt("Enter age:"));
    let showTime = parseInt(prompt("Enter show time (24-hour format):"));
    let price = 12;
    if (showTime < 17) price *= 0.8;
    if (age > 60) price *= 0.7;
    if (age < 12) price *= 0.6;
    alert("Final Ticket Price: $" + price.toFixed(2));
}

function jobApplicationFilter() {
    let age = parseInt(prompt("Enter age:"));
    let experience = parseInt(prompt("Enter years of experience:"));
    let qualification = prompt("Enter qualification (e.g., 'Bachelor's Degree')").toLowerCase();

    let eligible = age >= 21 && age <= 55 && experience >= 2 && qualification.includes("bachelor");
    alert(eligible ? "Application Accepted!" : "Application Rejected!");
}

function applyCoupon() {
    let orderAmount = parseFloat(prompt("Enter order amount:"));
    let couponCode = prompt("Enter coupon code (DISCOUNT10/FREESHIP):").toUpperCase();
    let finalPrice = orderAmount;

    if (couponCode === "DISCOUNT10" && orderAmount > 500) finalPrice *= 0.9;
    else if (couponCode === "FREESHIP" && orderAmount > 200) alert("Free Shipping Applied!");
    else alert("Invalid coupon or conditions not met.");

    alert("Final Price: $" + finalPrice.toFixed(2));
}

function choosePlan() {
    let planType = prompt("Enter plan type (Basic, Premium, VIP):").toLowerCase();
    let trainer = confirm("Do you want a personal trainer?");
    let dietPlan = confirm("Do you want a diet plan?");
    
    let price = planType === "basic" ? 20 : planType === "premium" ? 50 : 80;
    alert("Final Membership Cost: $" + price);
}

function calculateElectricityBill() {
    let units = parseFloat(prompt("Enter number of units consumed:"));
    let timeOfDay = parseInt(prompt("Enter time of usage (24-hour format):"));
    let rate = units <= 100 ? 5 : units <= 300 ? 4 : 3;
    if (timeOfDay >= 20 || timeOfDay < 8) rate *= 1.1; // Peak hours

    alert("Total Electricity Bill: $" + (rate * units).toFixed(2));
}

function calculateFlightFare() {
    let classType = prompt("Enter class type (Economy, Business, First):").toLowerCase();
    let luggageWeight = parseInt(prompt("Enter luggage weight in kg:"));
    let isStudent = confirm("Are you a student?");
    let isSenior = confirm("Are you a senior citizen (60+ years)?");

    let baseFare = 300 + (classType === "business" ? 200 : classType === "first" ? 500 : 0);
    let extraLuggage = luggageWeight > 20 ? Math.ceil((luggageWeight - 20) / 10) * 50 : 0;
    let discount = isStudent ? 0.15 : isSenior ? 0.1 : 0;

    let finalFare = (baseFare + extraLuggage) * (1 - discount);
    alert("Final Flight Fare: $" + finalFare.toFixed(2));
}
