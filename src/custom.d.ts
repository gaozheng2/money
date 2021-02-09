type MoneyData = {
  tags: string[];
  notes: string;
  type: string;
  num: number;
  date?: Date; // ? 代表可以不存在
}