// script.js

// script.js

// Function to add a new row to a table
function addTableRow(tableId, data, type) {
    const table = document.getElementById(tableId);
    const row = table.insertRow();
    
    for (const value of data) {
        const cell = row.insertCell();
        cell.textContent = value;
    }

    const actionsCell = row.insertCell();
    if (type === "car") {
        actionsCell.innerHTML = '<button class="edit-button">Edit</button> <button class="delete-button">Delete</button>';
    } else if (type === "warehouse") {
        actionsCell.innerHTML = '<button class="edit-button">Edit</button> <button class="delete-button">Delete</button>';
    }
}

// Add dummy data to the tables (replace with your data fetching logic)
addTableRow("carsTable", ["Toyota", "Camry", "2022", "1"], "car");
addTableRow("carsTable", ["Honda", "Civic", "2021", "2"], "car");
addTableRow("warehousesTable", ["1", "100", "Main Warehouse"], "warehouse");
addTableRow("warehousesTable", ["2", "50", "Secondary Warehouse"], "warehouse");

// Handle add car button click (replace with your logic)
document.getElementById("addCarBtn").addEventListener("click", () => {
    // Add your code to open a form for adding a car
    // After submission, call addTableRow to add the new car to the table
    // Example: addTableRow("carsTable", [newCarData], "car");
});

// Handle add warehouse button click (replace with your logic)
document.getElementById("addWarehouseBtn").addEventListener("click", () => {
    // Add your code to open a form for adding a warehouse
    // After submission, call addTableRow to add the new warehouse to the table
    // Example: addTableRow("warehousesTable", [newWarehouseData], "warehouse");
});

// Handle edit and delete button clicks for cars
document.getElementById("carsTable").addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-button")) {
        // Handle edit button click for cars
        const row = event.target.parentElement.parentElement;
        // Extract car data from the row and perform edit operation
        // Example: openEditCarForm(row);
    } else if (event.target.classList.contains("delete-button")) {
        // Handle delete button click for cars
        const row = event.target.parentElement.parentElement;
        // Extract car ID from the row and perform delete operation
        // Example: deleteCar(row.dataset.carId);
    }
});

// Handle edit and delete button clicks for warehouses
document.getElementById("warehousesTable").addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-button")) {
        // Handle edit button click for warehouses
        const row = event.target.parentElement.parentElement;
        // Extract warehouse data from the row and perform edit operation
        // Example: openEditWarehouseForm(row);
    } else if (event.target.classList.contains("delete-button")) {
        // Handle delete button click for warehouses
        const row = event.target.parentElement.parentElement;
        // Extract warehouse ID from the row and perform delete operation
        // Example: deleteWarehouse(row.dataset.warehouseId);
    }
});
