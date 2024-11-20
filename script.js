// Handle login form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (username && password) {
                // In a real application, you would validate credentials with a server
                window.location.href = 'dashboard.html';
            }
        });
    }

    // Populate table with sample data (for demonstration)
    const tableBody = document.querySelector('.inventory-table tbody');
    if (tableBody) {
        const sampleData = [
            {
                no: 1,
                namaBarang: 'Barang A',
                pengadaan: '2024-01-01',
                stok: 100,
                baik: 95,
                rusak: 5
            },
            // Add more sample data as needed
        ];

        sampleData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.no}</td>
                <td>${item.namaBarang}</td>
                <td>${item.pengadaan}</td>
                <td>${item.stok}</td>
                <td>${item.baik}</td>
                <td>${item.rusak}</td>
            `;
            tableBody.appendChild(row);
        });
    }
});