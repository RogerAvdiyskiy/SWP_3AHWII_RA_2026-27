import { Fahrzeug } from "./fahrzeug.ts";
import { Konto } from "./konto.ts";

const konto = new Konto("AT61 1900 0001 2345 6789", 500);
konto.einzahlen(200);
console.log(konto.toString());

const auto = new Fahrzeug("Steyr", 1000, 180);
auto.setGeschwindigkeit(100);
auto.fahre(2);
console.log(auto.toString());
