const $printList = document.querySelector("#printList");
const $inputText = document.querySelector("#inputText");
const $enterButton = document.querySelector("#enterButton");

$enterButton.addEventListener("click", addList);

function addList() {
  const _toDoElement = document.createElement("li");
  const _toDoText = document.createTextNode($inputText.value);
  _toDoElement.appendChild(_toDoText);

  const _deleteButton = document.createElement("button");
  _deleteButton.setAttribute("id", "deleteButton");
  _toDoElement.appendChild(_deleteButton);

  _deleteButton.addEventListener("click", (e) => {
    $printList.removeChild(e.target.parentElement);
  });

  $printList.appendChild(_toDoElement);
  $inputText.value = "";
}
