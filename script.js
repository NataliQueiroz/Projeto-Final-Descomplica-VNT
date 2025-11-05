const userNameInput = document.getElementById('user-name');
const btnSaveUserName = document.getElementById('btn-save-user-name');
const containerUserName = document.getElementById('container-user-name');
const welcomeMessage = document.getElementById('welcome-message');
// Elementos do DOM container tipo de lista
const radioButtonTypeCompras = document.getElementById('option-type-compras');
const radioButtonTypeRemedios = document.getElementById('option-type-remedios');
const btnSaveTypeList = document.getElementById('btn-save-type-list');
const containerChoiceTypeList = document.getElementById('container-choice-type-list');

const shoppingList = [];
let userName = ' ';

userNameInput.addEventListener('input', (event) => {
  userName = event.target.value;
});

btnSaveUserName.addEventListener('click', ()=>{
  if (userName.length > 2 && userName.length < 50){
      userNameInput.value = " ";
      window.alert("Nome salvo com sucesso!");
      containerUserName.style.display = 'none';
      containerChoiceTypeList.style.display = 'block';
      welcomeMessage.textContent = `Boas vindas, ${userName}!`;
      return
  }
    window.alert("O nome deve ter entre 2 e 50 caracteres")
});
