function createTable() {
    let userRows = window.prompt("How many rows?");
    let userColumns = window.prompt("How many columns?");

    for(let r = 0; r < parseInt(userRows); r++) {
        let rows = document.getElementById("myTable").insertRow(r);
        for(let c = 0; c < parseInt(userColumns); c++) {
            let columns = rows.insertCell(c);
            columns.innerHTML = "Row-"+r+" Column-"+c;
        }
    }
}

createTable();