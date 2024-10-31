
LUIS RUBEN VELASQUEZ GARCIA
CARNET 24011341


*** Tarea #1 ***
Lógica matemática y proposicional

Descripción:
    En la realización de esta práctica debe desarrollar los enunciados presentados a continuación,
    debe utilizar los procedimientos de la forma más ordenada y explícita posible.

    Primera sección
        1. Utilice el procedimiento visto en clase para la conversión de los siguientes números
        decimales a binarios:
            a. 7
            b. 45
            c. 123
            d. 8.75
            e. -18 (utilice complemento a dos, ver un ejemplo en la sección de anexos de este
            documento).

                SOLUCION:
                    a. 7
                        7/2 = 3; // residuo: 1
                        3/2 = 1; // residuo: 1
                        1/2 = 0; // residuo: 1
                        Por lo tanto:  
                            *** 7 (decimal) = 0000 0111 (binario, 8 bits) ***

                    b. 45
                        45/2 = 22; // residuo: 1
                        22/2 = 11; // residuo: 0
                        11/2 =  5; // residuo: 1
                        5/2 =  2; // residuo: 1
                        2/2 =  1; // residuo: 0
                        1/2 =  0; // residuo: 1
                        Por lo tanto:
                        *** 45 (decimal) = 0010 1101 (binario, 8 bits) *** 
                    
                    c. 123
                        123/2 = 61; // residuo: 1
                        61/2 = 30; // residuo: 1
                        30/2 = 15; // residuo: 0
                        15/2 =  7; // residuo: 1
                        7/2 =  3; // residuo: 1
                        3/2 =  1; // residuo: 1
                        1/2 =  0; // residuo: 1
                        Por lo tanto:
                            *** 123 (decimal) = 0111 1011 (binario, 8 bits) ***
                    
                    d. 8.75
                        ENTERO (8):
                        8/2 = 4; // residuo 0
                        4/2 = 2; // residuo 0
                        2/2 = 1; // residuo 0
                        1/2 = 0; // residuo 1
                        Por lo tanto:
                            8 (decimal) = 0000 1000 (binario, 8 bits)
                        
                        DECIMALES (0.75):
                        0.75*2 = 1.5; // decimal 1
                        0.50*2 = 1.0; // decimal 1
                        Por lo tanto:
                            0.75 (decimal) = .11 (binario)

                        Por lo tanto tomando el resultado del entero + el resulado decimal obtenemos:
                            *** 8.75 (decimal) = 0000 1000.11 (binario) ***

                    e. -18 (utilice complemento a dos)
                        e.1 Primero convertimos el entero positivo a binario
                            18/2 = 9; // residuo 0
                            9/2 = 4; // residuo 1
                            4/2 = 2; // residuo 0
                            2/2 = 1; // residuo 0
                            1/2 = 0; // residuo 1
                            Por lo tanto:
                                18 (decimal) = 0001 0010 (binario, 8 bits)
                        
                        e.2 Se obtiene el complemento a uno intercambiando 0s por 1s
                            Complemento a uno de 0001 0010 = 1110 1101

                        e.3 Sumar 1 para obtener el complemento a dos
                            1110 1101 + 0000 0001 = 1110 1110

                        e.4 Por lo tanto el resultado final es:
                            *** -18 (decimal) = 1110 1110 (binario, 8 bits) ***

        2. Realice las tablas de verdad de las siguientes operaciones de lógica booleana, ver un ejemplo en anexos:
            a. A ^ B
            b. (¬A ^ B) v C
            c. ¬(A v C) ^B
            d. (B ^ C)^(¬A)
            e. (M ^ (¬A)) v (¬C)

                SOLUCION:
                    a. A ^ B
                        image.png

                    b. (¬A ^ B) v C


                    c. ¬(A v C) ^B


                    d. (B ^ C)^(¬A)


                    e. (M ^ (¬A)) v (¬C)

