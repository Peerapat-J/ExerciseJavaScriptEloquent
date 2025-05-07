/*
    Conclusion 1:

    isNaN will return false if variable = null, String, number, boolean.
    isNaN will return true if variable = undefined, NaN.
*/
let inp = true;
console.log("Input is NaN?1 : " + isNaN(inp));

/*
    Conclusion 2:

    typeof undefined = undefined
    typeof NaN = number
    typeof null = object
    typeof empty var = undefined

    null are unable to be used in math operations, 
    or interpreter WILL SKIP the line.
*/
let aaaa;
console.log("Try log empty var: " + typeof(aaaa));

aaaa = undefined;
console.log("Try log undefined var: " + typeof(aaaa));

aaaa = NaN;
console.log("Try log NaN var: " + typeof(aaaa));

aaaa = null;
console.log("Try log null var: " + typeof(aaaa));

/*
    Conclusion 3:

    String + String = String
    String + Boolean = String
    String + null = String
    String + undefined = String
    String + NaN = String

    ; String as number mean -> "9999"
    ; String as String mean -> "asdf"

        String as number + - with String as number = String
        String as number * / with String as number = number
        String as string - * / String as string = NaN
        String as string + - * / String as number = NaN

    NaN + - * / with (Number, String, Boolean, null, undefined) = NaN

    String * - / Boolean = NaN
    String * - / undefined = NaN
    String * - / null = NaN
    String * - / NaN = NaN
    
*/
console.log("Try arithmetic calculations: " + ("aa" + "bb"));
console.log("Try arithmetic calculations: " + (null - NaN));
console.log("Try arithmetic calculations: " + (undefined - NaN));
console.log("Try arithmetic calculations: " + (true - NaN));

/*
Conclusion 4:
    
    NaN is not equal to NaN
    NaN is not equal to undefined
    NaN is not equal to null
    NaN is not equal to 0
    NaN is not equal to false
    NaN is not equal to true
    NaN is not equal to empty string
    NaN is false

    NaN == undefined = false
    NaN == null = false
    NaN == 0 = false
    NaN == false = false
  * NaN == true = false 
    NaN == "" = false

    undefined == null = true
    undefined == 0 = false
    undefined == false = false
  * undefined == true = false
    undefined == "" = false
    undefined == NaN = false

    null == 0 = false
    null == false = false
  * null == true = false
    null == "" = false
    null == NaN = false
    null == undefined = true
    null == null = true

    String == String = true
    String == Number = false
    String == Boolean = false
    String == null = false
    String == undefined = false
    String == NaN = false

    String and any number(both positive and negative) are true.  **if not compared with other types
    0, NaN, undefined, null = false
    1 = true
*/

if (-1) {
    console.log("True");
}

for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
    }