
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all prices
    const prices = document.querySelectorAll(".price");

    let total = 0;

    // Calculate total
    prices.forEach((price) => {
        total += Number(price.textContent);
    });

    // Create a new table row
    const row = document.createElement("tr");

    // Create a table cell
    const cell = document.createElement("td");

    // Display total
    cell.textContent = "Total Price: " + total;
    cell.colSpan = 2;

    row.appendChild(cell);

    // Add total row to table
    const table = document.querySelector("table");
    table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
