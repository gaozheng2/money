import {clone} from '@/lib/clone';

const keyName = 'moneyData';
const moneyModel = {
  data: [] as MoneyData[],
  fetch(): MoneyData[] {
    this.data = JSON.parse(localStorage.getItem(keyName) || '[]');
    return this.data;
  },
  create(item: MoneyData) {
    const newData = clone(item);
    newData.date = new Date();
    this.data.push(newData);
    this.save();
  },
  save() {
    localStorage.setItem(keyName, JSON.stringify(this.data));
  },
};

export default moneyModel;