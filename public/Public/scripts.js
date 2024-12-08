document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForms');

    form.onsubmit = function (event) {
        event.preventDefault();

        
        const formData = {
            nome: document.getElementById('Nome').value,
            email: document.getElementById('Email').value,
            mensagem: document.getElementById('mensagemlonga').value,
        };

        
        fetch('/api/formulario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  
            },
            body: JSON.stringify(formData),  
        })
            .then((response) => response.text())
            .then((data) => {
                alert('Formulário enviado com sucesso!');
                form.reset();
            })
            .catch((error) => {
                console.error('Erro ao enviar o formulário:', error);
            });
    };
});