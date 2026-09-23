// HÜ-Domäne UE 2: Kapselung & Invarianten am Fahrzeug.
// Invarianten: kmStand >= 0, 0 <= geschwindigkeit <= maxGeschwindigkeit.
// Schreibzugriff auf kmStand nur über fahre(), nie direkt von außen.
export class Fahrzeug {
  readonly marke: string;
  private _kmStand: number;
  private _geschwindigkeit: number;
  readonly maxGeschwindigkeit: number;

  constructor(
    marke: string,
    kmStand: number,
    maxGeschwindigkeit: number,
  ) {
    // Fail-Fast: kein Fahrzeug wird mit ungültigem Zustand geboren.
    if (kmStand < 0) {
      throw new Error(`kmStand darf nicht negativ sein (war ${kmStand})`);
    }
    if (maxGeschwindigkeit < 0) {
      throw new Error(
        `maxGeschwindigkeit darf nicht negativ sein (war ${maxGeschwindigkeit})`,
      );
    }
    this.marke = marke;
    this._kmStand = kmStand;
    this.maxGeschwindigkeit = maxGeschwindigkeit;
    this._geschwindigkeit = 0;
  }

  // Lesen ja, schreiben nein: getter statt öffentliches Feld.
  get kmStand(): number {
    return this._kmStand;
  }

  get geschwindigkeit(): number {
    return this._geschwindigkeit;
  }

  // Einzige Tür für Tempoänderungen — fail-fast geprüft.
  setGeschwindigkeit(v: number): void {
    if (v < 0 || v > this.maxGeschwindigkeit) {
      throw new Error(
        `Geschwindigkeit muss zwischen 0 und ${this.maxGeschwindigkeit} liegen (war ${v})`,
      );
    }
    this._geschwindigkeit = v;
  }

  // Einzige Tür, die kmStand erhöht — senken ist unmöglich.
  fahre(stunden: number): void {
    if (stunden < 0) {
      throw new Error(`Stunden dürfen nicht negativ sein (war ${stunden})`);
    }
    this._kmStand += this._geschwindigkeit * stunden;
  }

  toString(): string {
    return `${this.marke} (${this._kmStand} km, fährt ${this._geschwindigkeit}/${this.maxGeschwindigkeit} km/h)`;
  }
}
