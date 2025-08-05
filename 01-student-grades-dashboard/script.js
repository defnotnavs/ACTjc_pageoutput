        const students = [
            { name: "Anna", grade: 92 },
            { name: "Ben", grade: 78 }, 
            { name: "Clara", grade: 88 },
            { name: "David", grade: 84 },
            { name: "Ella" } // no grade
        ];
        // Output function
        const display = (message) => {
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML += `<div>${message}</div><br>`;
        };
        // Task 1: Uppercase names
        const upperNames = students.map(student => student.name.toUpperCase());
        display("<strong>Student Names (Uppercase):</strong> " + upperNames.join(', '));
        // Task 2: Filter grade >= 85
        const topStudents = students.filter(s => !s.grade ? false : s.grade >= 85);
        display("<strong>Top Students (Grade ≥ 85):</strong>");
        topStudents.forEach(s => display(`${s.name}: ${s.grade}`));
        // Task 3: Average grade
        const total = students.reduce((sum, student) => sum + (student.grade || 0), 0);
        display(`<strong>Average Grade:</strong> ${Math.round(total/students.length)}`);
        // Task 4: Display with destructuring
        function displayStudent({name, grade}) {
            return `${name}: ${grade || '(no grade)'}`;
        }
        display("<strong>Student Details:</strong>");
        students.forEach(s => display(displayStudent(s)));