// [used compare to string return 0 if both string are same
// return 1 if first string comes last in alphabetical order
// returns -1 if first strings comes first in alphabetical order]

a="Nitin"
b="Naman"

console.log(a.localeCompare(b))
console.log(b.localeCompare(a))
console.log(b.localeCompare(b))

        // Naman          Nitin       Naman
       // -Nitin         -Naman     - Naman
      // ---------    -----------  -----------
       // -08...          08...       00000
      // ---------    -----------  -----------
