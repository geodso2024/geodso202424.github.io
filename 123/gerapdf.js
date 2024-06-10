
            function generatePDF() {
                const doc = new jsPDF();
                const table = document.getElementById('tab12');
                const headers = Array.from(table.querySelectorAll('th')).map(header => header.textContent.trim());
                const rows = Array.from(table.querySelectorAll('tbody tr')).map(row =>
                    Array.from(row.querySelectorAll('td')).map(cell => cell.textContent.trim())
                );
        
                doc.text("Dados da Tabela", 10, 10);
                doc.autoTable({
                    startY: 20,
                    head: [headers],
                    body: rows
                });
        
                doc.save('tabela.pdf');
            }
      
    