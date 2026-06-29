// Ejercicio de TypeScript - Sistema de Ticket de Compra

// Productos (strings)
let productOne: string = "Jugo";
let productTwo: string = "Pera";
let productThree: string = "Melon";

// Precios (numbers)
let productPriceOne: number = 10;
let productPriceTwo: number = 10;
let productPriceThree: number = 10;

// Calcular el total
let total: number = productPriceOne + productPriceTwo + productPriceThree;

// Calcular descuento (5%)
let totalConDescuento: number = total * 0.95;

// Imprimir el ticket
console.log("========== TICKET ==========");
console.log("Producto: " + productOne + " - $" + productPriceOne);
console.log("Producto: " + productTwo + " - $" + productPriceTwo);
console.log("Producto: " + productThree + " - $" + productPriceThree);
console.log("============================");
console.log("Total: $" + total);
console.log("Descuento aplicado: 5%");
console.log("Total con descuento: $" + totalConDescuento);
console.log("============================");