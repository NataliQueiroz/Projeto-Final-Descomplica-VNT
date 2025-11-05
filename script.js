const userNameInput = document.getElementById('user-name');
const btnSaveUserName = document.getElementById('btn-save-user-name');

const shoppingList = [];
let userName = ' ';

userNameInput.addEventListener('input', (event) => {
  userName = event.target.value;
});

btnSaveUserName.addEventListener('click', ()=>{
  if (userName.length > 2 && userName.length < 50){
      userNameInput.value = " ";
      window.alert("Nome salvo com sucesso!")
      return
  }
    window.alert("O nome deve ter entre 2 e 50 caracteres")
});
