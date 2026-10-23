fetch("http://localhost:3000/applicants")

.then(response => response.json())

.then(applicants => {

    const table =
        document.getElementById("applicantTable");

    applicants.forEach(applicant => {

        table.innerHTML += `
            <tr>

                <td>${applicant.id}</td>

                <td>
                    ${applicant.fullname}
                </td>

                <td>
                    ${applicant.position}
                </td>

                <td class="status-cell">

                    <span
                        class="status-badge ${applicant.status
                            .toLowerCase()
                            .replace(/\s+/g, '-')}">

                        ${applicant.status}

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

.catch(error => {

    console.error(error);

});
