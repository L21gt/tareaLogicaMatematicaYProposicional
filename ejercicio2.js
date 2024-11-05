/*
Ejercicio 2: Motor de Recomendación de Productos
    Diseñe una función para recomendar productos a un usuario basado en varios factores.
        • Cree una función recommendProduct(age, isMember, purchaseHistory):
            o Un producto de alta tecnología se recomienda si:
                § La persona es miembro y ha comprado al menos 5 productos tecnológicos
                antes.
                § O si la persona tiene entre 18 y 30 años y ha comprado 2 o más productos
                de moda.
            o Un producto de moda se recomienda si:
                § La persona no es miembro, pero ha comprado al menos 3 productos
                antes.
                § O si tiene entre 25 y 40 años.
                § En cualquier otro caso, recomienda un producto genérico.
        • purchaseHistory es un objeto con la cantidad de productos comprados por categoría: {
        tech: number, fashion: number, other: number }.
        • Por ejemplo, el uso de la función sería:
            o console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 })); //
            "High-Tech Product"
*/


function recommendProduct(age, isMember, purchaseHistory) {
    // Verificar si se recomienda un producto de alta tecnología
    if ((isMember == true && purchaseHistory.tech >= 5) || (age >= 18 && age <= 30 && purchaseHistory.fashion >= 2)) {
        /*
        Un producto de alta tecnología se recomienda si:
                § La persona es miembro y ha comprado al menos 5 productos tecnológicos
                antes.
                § O si la persona tiene entre 18 y 30 años y ha comprado 2 o más productos
                de moda.
        */
        return "Se recomienda \"High-Tech Product\"";
        // Verificar si se recomienda un producto de moda
    } else if ((isMember != true && (purchaseHistory.tech + purchaseHistory.fashion + purchaseHistory.other)>= 3) || (age >= 25 && age <= 40)) {
        /**
         * Un producto de moda se recomienda si:
                § La persona no es miembro, pero ha comprado al menos 3 productos
                antes.
                § O si tiene entre 25 y 40 años.
         */
        return "Se recomienda \"Fashion Product\"";
        // Si no cumple con las condiciones anteriores, se recomienda un producto genérico
    } else {
        // En cualquier otro caso, recomienda un producto genérico.
        return "Se recomienda \"Generic Product\"";
    }
}

// Pruebas de la función
console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 })); // "High-Tech Product"
console.log(recommendProduct(29, false, { tech: 0, fashion: 3, other: 0 })); // "High-Tech Product"
console.log(recommendProduct(35, true, { tech: 2, fashion: 1, other: 4 })); // "Fashion Product"
console.log(recommendProduct(17, false, { tech: 1, fashion: 0, other: 1 })); // "Generic Product"
console.log(recommendProduct(28, true, { tech: 3, fashion: 2, other: 1 })); // "High-Tech Product"