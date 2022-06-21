/**
 * START: Follow the instructions below.
 */

// Prevent the array from being modified.
// Use the generic interface type `ReadonlyArray`: ReadonlyArray<type>
// This will cause a type error. Remove the code that now has a type error.

const languages: ReadonlyArray<string> = ["Mongolian", "French", "Basque", "Thai"];

// languages[2] = "Hausa";
// uncomment if u want to see resoult (i go crazy when i see an ERR in my vs code :D)

console.log(languages);

// Prevent the array from being modified.
// Use the readonly modifier and the array literal type syntax: readonly type[]
// This will cause a type error. Remove the code that now has a type error.

const currencies: readonly string[] = ["NZD", "THB", "NGN", "EUR", "COP", "INR"];

// currencies.reverse();
// see line 12 :3 (:D)

console.log(currencies);

// ----

export {};
