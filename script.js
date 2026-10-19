function insert_Row() {
    const myTable = document.getElementById("sampleTable");
	const newRow = myTable.inertRow(0);
	cell1 = newRow.insertCell(0);
	cell2 = newRow.insertCell(1);

	cell1.textContent = "New Cell1";
	cell2.textContent = "New Cell2";
}
