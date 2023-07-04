let funcionarios = [];

function cadastrarFuncionario() {
  const id = document.getElementById('idInput').value;
  const nome = document.getElementById('nomeInput').value;
  const cargo = document.getElementById('cargoInput').value;
  const periodo = document.getElementById('periodoInput').value;

  // Verifica se o ID já existe
  const funcionarioExistente = funcionarios.find(funcionario => funcionario.id === id);
  if (funcionarioExistente) {
    console.log('Erro: ID já existe. Por favor, escolha um ID único.');
    return;
  }

  const novoFuncionario = {
    id: id,
    nome: nome,
    cargo: cargo,
    periodo: periodo
  };

  funcionarios.push(novoFuncionario);
  
}