const userNameInput = document.getElementById("user-name");
const btnSaveUserName = document.getElementById("btn-save-user-name");
const containerUserName = document.getElementById("container-user-name");
const welcomeMessage = document.getElementById("welcome-message");
// Elementos do DOM container tipo de lista
const radioButtonTypeCompras = document.getElementById("option-type-compras");
const radioButtonTypeRemedios = document.getElementById("option-type-remedios");
const btnSaveTypeList = document.getElementById("btn-save-type-list");
const containerChoiceTypeList = document.getElementById(
  "container-choice-type-list"
);
const containerAddItem = document.getElementById("container-add-items");
const itemNameInput = document.getElementById("item-name");
const itemQuantityInput = document.getElementById("item-quantity");
const btnAddItem = document.getElementById("btn-add-item");
const tableItems = document.getElementById("table-items");
const tableBodyItems = document.getElementById("table-body-items");
const formItem = document.getElementById("form-item");

const shoppingList = [];
let userName = "";
let listType = "";
let shoppingListType = "compras";

btnSaveTypeList.addEventListener("click", () => {
  if (radioButtonTypeCompras.checked) {
    shoppingListType = "compras";
    listType = "Compras";
  }
  if (radioButtonTypeRemedios.checked) {
    shoppingListType = "remédios";
    listType = "Remédios";
  }

  containerAddItem.style.display = "block";
  tableItems.style.display = "block";
  renderShoppingList();
});

userNameInput.addEventListener("input", (event) => {
  userName = event.target.value;
});

btnSaveUserName.addEventListener("click", () => {
  if (userName.length > 2 && userName.length < 50) {
    userNameInput.value = " ";
    window.alert("Nome salvo com sucesso!");
    containerUserName.style.display = "none";
    containerChoiceTypeList.style.display = "block";
    welcomeMessage.textContent = `Boas vindas, ${userName}!`;
    return;
  }
  window.alert("O nome deve ter entre 2 e 50 caracteres");
});

btnAddItem.addEventListener("click", (event) => {
  event.preventDefault();
  const itemName = itemNameInput.value.trim();
  const itemQuantity = parseInt(itemQuantityInput.value);

  if (itemName.length < 2) {
    window.alert("O nome do item deve ter pelo menos 2 caracteres.");
    return;
  }

  if (itemName.length > 50) {
    window.alert("O nome do item deve ter no máximo 50 caracteres.");
    return;
  }

  if (isNaN(itemQuantity) || itemQuantity < 1) {
    window.alert("A quantidade deve ser um número maior que zero.");
    return;
  }

  shoppingList.push({
    name: itemName,
    quantity: itemQuantity,
    type: shoppingListType,
  });

  itemNameInput.value = "";
  itemQuantityInput.value = "";
  renderShoppingList();
});

formItem.addEventListener("submit", (event) => {
  event.preventDefault();
  btnAddItem.click();
});

function renderShoppingList() {
  tableBodyItems.innerHTML = "";

  shoppingList.forEach((item) => {
    if (item.type === shoppingListType) {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.textContent = item.name;
      row.appendChild(nameCell);

      const quantityCell = document.createElement("td");
      quantityCell.textContent = item.quantity;
      row.appendChild(quantityCell);

      const actionsCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Excluir";
      deleteButton.addEventListener("click", () => {
        const index = shoppingList.indexOf(item);
        if (index > -1) {
          shoppingList.splice(index, 1);
          tableBodyItems.removeChild(row);
          renderShoppingList();
        }
      });
      actionsCell.appendChild(deleteButton);
      row.appendChild(actionsCell);

      tableBodyItems.appendChild(row);
    }
  });
}
