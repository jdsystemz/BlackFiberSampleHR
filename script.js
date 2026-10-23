fetch("http://localhost:3000/employees")
    .then(response => response.json())
    .then(data => {

        console.log(data);

        const table =
            document.getElementById("employeeTable");

        data.forEach(employee => {

            table.innerHTML += `
                <tr>
                    <td>${employee.id}</td>
                    <td class="employee-name">
                        ${employee.fullname}
                    </td>
                    <td>
                        <span class="badge">
                            ${employee.department}
                        </span>
                    </td>
                    <td>
                        <button class="action-btn view-btn">
                            View
                        </button>

                        <button class="action-btn edit-btn">
                            Edit
                        </button>

                        <button class="action-btn delete-btn">
                            Delete
                        </button>
                    </td>
                </tr>
            `;
        });

    })
    .catch(error => console.error(error));

