class RecordRegistryDto {
  puzzle_id: string;
  solving_time: number;

  constructor(puzzle_id: string, solving_time: number) {
    this.puzzle_id = puzzle_id;
    this.solving_time = solving_time;
  }
}

class RecordListDto {
  records: RecordRegistryDto[];

  constructor(records: RecordRegistryDto[]) {
    this.records = records;
  }
}

export { RecordRegistryDto, RecordListDto }
