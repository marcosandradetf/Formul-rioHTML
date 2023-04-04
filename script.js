const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  const label = input.nextElementSibling;

  input.addEventListener('focus', () => {
    if (input.value === '') {
      label.classList.add('active');
    }
  });

  input.addEventListener('blur', () => {
    if (input.value === '') {
      label.classList.remove('active');
    }
  });

    input.addEventListener('input', () => {
      const erro = document.getElementsByClassName('span');
      for (let i = 0; inputs.length-1 > i; i++) {
        erro[i].innerHTML = ""
        inputs[i].classList.remove('bred');
        inputs[i].nextElementSibling.classList.remove('red');
      }
  });

  inputs[2].addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9\.\-]/g, "");
  });
});


const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome");
  const erro = document.getElementsByClassName('span');

  if (nome.value.length > 0) {

    const email = document.getElementById("email");
    const regex = /@/;
    if (email.value.match(regex)) {

      const cpf = document.getElementById("cpf");
      if (cpf.value.length === 11 || cpf.value.length === 14) {

        console.log(`Formulário:\nNome: ${nome.value}\nE-mail: ${email.value}\nCPF: ${cpf.value}`);

        form.classList.add('hidden');
        
        const div = document.createElement('div')
        div.classList.add('post');
        document.body.appendChild(div);
        div.innerHTML =
          `<h2>Formulário enviado</h2>
            <button type="button" value="Voltar" id="btn">Voltar</button>
          </script>
          `
            btn.addEventListener('click', () => {
              location.reload();
            });
        
      } else {
        cpf.classList.add('bred');
        cpf.nextElementSibling.classList.add('red');
        erro[2].innerHTML = "Digite um CPF válido.";
      }

    } else {
      email.classList.add('bred');
      email.nextElementSibling.classList.add('red');
      erro[1].innerHTML = "Digite um endereço de e-mail válido.";
    }

  } else {
    nome.classList.add('bred');
    nome.nextElementSibling.classList.add('red');
    erro[0].innerHTML = "Insira um nome."
  }

});
