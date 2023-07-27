const items = document.querySelector(".items");
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_button");

//add버튼이 클릭됐을때 발생하는 이벤트 처리 함수
function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }

  const item = createItem(text);

  items.appendChild(item);

  item.scrollIntoView({ block: "center" });

  input.value = "";
  input.focus();
}

// li목록을 생성
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item_name");
  name.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item_delete");
  deleteBtn.innerHTML =
    '<i class="fa-solid fa-trash-can" aria-label="delete icon"></i>';
  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });
  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item_divider");

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}

//버튼 클릭시 화면에 리스트 목록 입력
addBtn.addEventListener("click", () => {
  return onAdd();
});

//엔터 키 누를 시 화면에 리스트 목록 입력
input.addEventListener("keypress", (event) => {
  console.log("key");
  if (event.key === "Enter") {
    onAdd();
  }
});
