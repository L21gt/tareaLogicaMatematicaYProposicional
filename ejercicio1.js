/*
*** Segunda sección ***
A conAnuación, se presentan ejercicios los cuales deberá resolver uAlizando el lenguaje
JavaScript uAlizando NodeJS.

    Ejercicio 1: Sistema de Evaluación de Riesgo
        Cree una función que evalúe el nivel de riesgo de un cliente bancario basado en varios factores.
            • Defina la función evaluateRisk(income, hasLoans, latePayments, isStudent):
                o Un cliente es considerado de alto riesgo si:
                    § Tiene ingresos menores a $20,000 y más de 3 pagos atrasados.
                    § O Aene préstamos acAvos y es estudiante.
                o Un cliente es considerado de riesgo moderado si:
                    § Tiene ingresos entre $20,000 y $50,000, y no Aene más de 2 pagos
                    atrasados.
                    § O si Aene préstamos pero no es estudiante.
                o Si no cumple ninguna de estas condiciones, se considera de bajo riesgo.
            • Retorne el nivel de riesgo como un string: 'High', 'Moderate' o 'Low'.
            • Por ejemplo, el uso de la función sería:
                o console.log(evaluateRisk(15000, true, 4, true)); // "High"
*/

function evaluateRisk(income, hasLoans, latePayments, isStudent) {
    // Evaluar si el riesgo es alto
    if ((income < 20000 && latePayments > 3) || (hasLoans && isStudent)) {
      return "El nivel de riesgo es: \"High\"";
    }
  
    // Evaluar si el riesgo es moderado
    if ((income >= 20000 && income <= 50000 && latePayments <= 2) || (hasLoans && !isStudent)) {
      return "El nivel de riesgo es: \"Moderate\"";
    }
  
    // Si no cumple con las condiciones anteriores, es de bajo riesgo
    return "El nivel de riesgo es: \"Low\"";
  }
  
  // Pruebas de la función
  console.log(evaluateRisk(15000, true, 4, true)); // "High"
  console.log(evaluateRisk(30000, false, 1, false)); // "Moderate"
  console.log(evaluateRisk(60000, false, 0, false)); // "Low"
  console.log(evaluateRisk(45000, true, 1, true)); // "Moderate"
  console.log(evaluateRisk(18000, false, 0, false)); // "Low"
  