// Validaçao do Nome
function validacaoNome() {
  const message = document.getElementById("msg_nome");
  const borderValidaNome = document.getElementById("nome");
  const inputNome = document.getElementById("nome").value;
  const minCaracterNome = 2;
  const maxCaracterNome = 40;
  const patternNome =
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

  let validacao = false;

  if (!inputNome) {
    borderValidaNome.style.borderColor = "red";
    message.innerHTML = "Este campo não pode estar vazio.";
    validacao;
  } else {
    if (inputNome.length > maxCaracterNome) {
      borderValidaNome.style.borderColor = "red";
      message.innerHTML = "Apenas 40 caracteres são permitidos neste campo.";
      validacao;
    } else {
      if (!patternNome.test(inputNome)) {
        borderValidaNome.style.borderColor = "red";
        message.innerHTML = "Somente letras.";
        validacao;

        if (inputNome.length < minCaracterNome) {
          borderValidaNome.style.borderColor = "red";
          message.innerHTML = "Minimo 2 caracteres neste campo.";
          validacao;
        }
      } else {
        borderValidaNome.style.borderColor = "green";
        message.innerHTML = "";
        validacao = true;
      }
    }
  }
  return validacao;
}

// Validação do Email
function validacaoEmail() {
  const message = document.getElementById("msg_email");
  const borderValidaEmail = document.getElementById("email");
  const inputEmail = document.getElementById("email").value;
  const patternEmail = /^\w+@(\w+\.)+\w{2,4}$/;
  const maxCaracterEmail = 65;

  let validacao = false;

  if (!inputEmail) {
    borderValidaEmail.style.borderColor = "red";
    message.innerHTML = "Este campo não pode estar vazio.";
    validacao;
  } else {
    if (inputEmail.length > maxCaracterEmail) {
      borderValidaEmail.style.borderColor = "red";
      message.innerHTML = "Apenas 65 caracteres são permitidos neste campo.";
      validacao;
    } else {
      if (!patternEmail.test(inputEmail)) {
        borderValidaEmail.style.borderColor = "red";
        message.innerHTML = "Email invalido.";
      } else {
        borderValidaEmail.style.borderColor = "green";
        message.innerHTML = "";
        validacao = true;
      }
    }
  }
  return validacao;
}

// Aplicação de mascara no campo
const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};

// Validação do Telefone
function validacaoTelefone(event) {
  const message = document.getElementById("msg_telefone");
  const borderValidaTelefone = document.getElementById("telefone");
  const inputTelefone = document.getElementById("telefone").value;
  const minCaracterTelefone = 15;

  // Esse regex permite somente pattern de telefone
  const patternTelefone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  let input = event.target;
  input.value = phoneMask(input.value);
  let validacao = false;

  if (!inputTelefone) {
    borderValidaTelefone.style.borderColor = "red";
    message.innerHTML = "Este campo não pode estar vazio.";
    validacao;
  } else {
    if (inputTelefone.length < minCaracterTelefone) {
      borderValidaTelefone.style.borderColor = "red";
      message.innerHTML = "Minimo 11 caracteres neste campo.";
      validacao;

      if (!patternTelefone.test(inputTelefone)) {
        borderValidaTelefone.style.borderColor = "red";
        message.innerHTML = "Somente números.";
        validacao;
      }
    } else {
      borderValidaTelefone.style.borderColor = "green";
      message.innerHTML = "";
      validacao = true;
    }
  }
  return validacao;
}

// Validaçao da Messagem
function validacaoTextarea() {
  const message = document.getElementById("msg_textarea");
  const borderValidaTextarea = document.getElementById("textarea");
  const inputTextarea = document.getElementById("textarea").value;
  const minCaracterTextarea = 15;
  const maxCaracterTextarea = 300;

  let validacao = false;

  if (!inputTextarea) {
    borderValidaTextarea.style.borderColor = "red";
    message.innerHTML = "Este campo não pode estar vazio.";
    validacao;
  } else {
    if (inputTextarea.length < minCaracterTextarea) {
      borderValidaTextarea.style.borderColor = "red";
      message.innerHTML = "Minimo 15 caracteres neste campo.";
      validacao;
    } else if (inputTextarea.length >= maxCaracterTextarea) {
      borderValidaTextarea.style.borderColor = "red";
      message.innerHTML = "Limite de 300 caracteres neste campo.";
      validacao;
    } else {
      borderValidaTextarea.style.borderColor = "green";
      message.innerHTML = "";
      validacao = true;
    }
  }
  return validacao;
}

// Verificação do formulário
function verificacao(event) {
  // e.preventDefault()

  const validaName = validacaoNome();
  const validaEmail = validacaoEmail();
  const validaTelefone = validacaoTelefone(event);
  const validaTextarea = validacaoTextarea();

  if (!validaName) {
    alert('O campo "nome" não é válido.');
  } else if (!validaEmail) {
    alert('O campo "email" não é válido.');
  } else if (!validaTelefone) {
    alert('O campo "telefone" não é válido.');
  } else if (!validaTextarea) {
    alert('O campo "messagem" não é válido.');
  } else {
    alert("Enviado com sucesso.");
    document.querySelector(".conteudo-principal__subscricao-form").reset();
  }
}
