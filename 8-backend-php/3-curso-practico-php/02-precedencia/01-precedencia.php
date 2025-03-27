Precedencia de operadores en PHP

<?php 
        //and, or, xor, not, &&, ||;
    
        $value1 = true;
        $value2 = false;
        $result = 0;
    
        $result = ($value1 or $value2); // Grouped with parentheses to ensure correct precedence
        var_dump($result); // salida esperada true porque uno de los 2 se cumple
    
        $result = ($value1 and $value2); // Grouped with parentheses to ensure correct precedence
        var_dump($result); // salida esperada false, no se cumplen ambas condiciones
    
        $result = ($value1 and $value2);
        var_dump($result); // salida esperada false, no se cumplen ambas condiciones

        $result = ($value1 xor $value2); 
        var_dump($result); // salida esperada true porque solo uno de los valores es true
    
        $result = ($value1 != $value2);
        var_dump($result); // salida esperada true porque los valores son diferentes
    
        $result = ($value1 || $value2); // Grouped with parentheses for clarity
        var_dump($result); // salida esperada true porque uno de los valores es true
    
        $result = ($value1 && $value2); // Grouped with parentheses for clarity
        var_dump($result); // salida esperada false porque ambos valores no son true
    
    ?>