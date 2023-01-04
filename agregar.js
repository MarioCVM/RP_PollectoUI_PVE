export default function addNewTask(item, Table) {
    const tbody = Table.querySelector("tbody");
    
    console.log(item);

        const row = document.createElement("tr");

        for (var prop in item) {
            const td = document.createElement("td");
            td.innerText = item[prop];
            row.append(td);
        }

        tbody.append(row);
}