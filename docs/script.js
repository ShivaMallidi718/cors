// Replace with your deployed Django backend URL later.
const BASE_URL = "http://127.0.0.1:8000";

const button = document.getElementById("getStudents");
const status = document.getElementById("status");
const table = document.getElementById("studentsTable");
const tbody = document.getElementById("students");

button.addEventListener("click", async () => {
    button.disabled = true;
    status.textContent = "Loading...";
    table.hidden = true;
    tbody.replaceChildren();

    try {
        const response = await fetch(`${BASE_URL}/api/students/`, {
            method: "GET",
            headers: {
                "X-Demo": "cors"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const students = await response.json();

        for (const student of students) {
            const row = tbody.insertRow();
            for (const value of [student.id, student.name, student.department]) {
                row.insertCell().textContent = value;
            }
        }

        table.hidden = false;
        status.textContent = students.length ? "" : "No students found.";
    } catch (error) {
        status.textContent = "Could not fetch students. Check the Network and Console tabs.";
        console.error(error);
    } finally {
        button.disabled = false;
    }
});
