function alternarSenha() {
    const campoSenha = document.getElementById("senha");

    if (!campoSenha) {
        return;
    }

    if (campoSenha.type === "password") {
        campoSenha.type = "text";
    } else {
        campoSenha.type = "password";
    }
    }
    function confirmarExclusao() {
    return window.confirm(
        "Tem certeza de que deseja excluir este produto?"
    );
}