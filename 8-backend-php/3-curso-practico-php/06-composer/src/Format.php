<?php
// Apertura del código PHP. Todo lo que sigue será interpretado como código PHP.

namespace Juanmasilmo; // namespace es una forma de agrupar clases, funciones y constantes con un nombre comun para evitar conflictos cuando dos o mas partes del codigo tienen el mismo nombre. fue introducido en PHP 5.3 y es una buena práctica para organizar el código, especialmente en proyectos grandes o cuando se usan librerías de terceros.
// Define un espacio de nombres (namespace) llamado Juanmasilmo.
// Sirve para organizar el código y evitar conflictos con otras clases que puedan tener el mismo nombre.


// *************************************************************
/**
 * Sin namespace:

* php
*class Format {
*    // código
*}

* Otro archivo también tiene una clase Format
*class Format {
*    // error: Cannot redeclare class Format
*}
 */

// *************************************************************
/* Con namespace:

namespace Juanmasilmo;
class Format {}

namespace BibliotecaExterna;
class Format {} */

/* 
use Juanmasilmo\Format as FormatJuanma;
use BibliotecaExterna\Format as FormatExterno;

$texto1 = FormatJuanma::upperCase("hola");
$texto2 = FormatExterno::upperCase("mundo"); 

*/
// *************************************************************



class Format
    // Declaración de una clase llamada Format dentro del namespace Juanmasilmo.
// Las clases son plantillas que agrupan métodos y propiedades relacionadas.
{
    public static function upperCase($value)
    // Define un método público y estático llamado upperCase.
    // - public: el método puede ser accedido desde fuera de la clase.
    // - static: se puede llamar sin crear una instancia de la clase.
    // - $value: es un parámetro de entrada, se espera que sea un string.
    {
        return strtoupper($value);
        // La función strtoupper convierte el texto recibido en $value a mayúsculas.
        // El resultado se devuelve al lugar donde se llamó el método.
    }

}
