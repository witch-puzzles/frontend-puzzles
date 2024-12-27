export default class SudokuService {
  // Expected format
  // size:4,1,0,0, ...
  // 0 -> empty
  // need size^4 comma seperated values

  serialize(values: string[]): string {
    let str: string = "";

    values.map(v => {
      if (v === "")
        return "0";
      else
        return v;
    }).forEach(v => {
      str = str.concat(`,${v}`);
    });

    const size = Math.sqrt(Math.sqrt(values.length));
    str = str.slice(1); // Remove first comma
    str = `${size}:${str}`; // Concate with size param

    return str;
  }

  deserialize(serial: string): [number, string[]] {
    const parts = serial.split(':');
    const sizePart = parts[0];
    const valuePart = parts[1];

    return [parseInt(sizePart), valuePart.replaceAll('0', '').split(',')];
  }

  getSize(serial: string): number {
    const parts = serial.split(':');
    console.log(parts);
    const sizePart = parts[0];

    return parseInt(sizePart);
  }
}
