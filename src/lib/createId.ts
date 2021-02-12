let id = parseInt(localStorage.getItem('money_idMax') || '0') || 0;

function createId() {
  id++;
  localStorage.setItem('money_idMax', id.toString());
  return id.toString();
}

export {createId};