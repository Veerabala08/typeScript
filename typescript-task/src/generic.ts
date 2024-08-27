//generinc in typscript
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

// Generic type alias for a pair of values
type Pair<T, U> = {
    first: T;
    second: U;
  };
  
  // Usage
  const pair: Pair<number, string> = {
    first: 1,
    second: "one"
  };

  interface DataHolder<T> {
    value: T;
    getValue: () => T;
  }
  
  // Usage
  const numberHolder: DataHolder<number> = {
    value: 42,
    getValue: function () { return this.value; }
  };
  
  const stringHolder: DataHolder<string> = {
    value: "Hello",
    getValue: function () { return this.value; }
  };
//   generic interface