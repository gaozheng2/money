const keyName = 'moneyDataList';

const model = {
  fetch(): MoneyData[] {
    return JSON.parse(localStorage.getItem(keyName) || '[]');
  },
  save(data: MoneyData) {
    localStorage.setItem(keyName, JSON.stringify(data));
  },
  clone(data: MoneyData | MoneyData[]): MoneyData | MoneyData[] {
    return JSON.parse(JSON.stringify(data));
  }
};

export default model;