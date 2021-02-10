const keyName = 'moneyData';

const moneyModel = {
  fetch(): MoneyData[] {
		const data: MoneyData[]=JSON.parse(localStorage.getItem(keyName) || '[]');
    return data
  },
  save(data: MoneyData[]) {
    localStorage.setItem(keyName, JSON.stringify(data));
  },
  clone(data: MoneyData): MoneyData {
    return JSON.parse(JSON.stringify(data));
  }
};

export default moneyModel;