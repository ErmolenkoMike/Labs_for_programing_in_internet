const editCheckbox = document.getElementById("edit-checkbox");
const table = document.getElementById("user-table");

editCheckbox.addEventListener("change", () => {
    if (editCheckbox.checked) {
        addDeleteColumn(table);
    } else {
        removeDeleteColumn(table);
    }
});

function addDeleteColumn(table) {
    const headers = table.querySelectorAll("thead th");
    const deleteHeader = document.createElement("th");
    deleteHeader.textContent = "Delete";
    headers[0].insertAdjacentElement("afterend", deleteHeader);

    const rows = table.querySelectorAll("tbody tr");
    rows.forEach((row) => {
        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            row.remove();
        });
        deleteCell.appendChild(deleteButton);
        row.insertAdjacentElement("beforeend", deleteCell);
    });
}

function removeDeleteColumn(table) {
    const headers = table.querySelectorAll("thead th");
    const deleteHeader = headers[headers.length - 1];
    deleteHeader.remove();

    const rows = table.querySelectorAll("tbody tr");
    rows.forEach((row) => {
        const deleteCell = row.querySelector("td:last-child");
        deleteCell.remove();
    });
}
