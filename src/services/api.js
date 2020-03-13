import axios from '../../node_modules/axios';

const api = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: 'mongodb+srv://m001-student:ctrlalt1@cluster0-livgn.mongodb.net/',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    'content-type': 'application/json; charset=utf-8',
  },
});

async function authResponsavel(req) {
  try {
    const { email, cpf } = req;
    let res = await axios.post('http://localhost:3000/responsavel/auth', {
      email: email,
      cpf: cpf,
    });
    return res;
  } catch (err) {
    alert(err);
    console.info('Falha no Login ');
  }
}
async function authAdmin(req) {
  try {
    const { email, cpf } = req;
    let res = await axios.post('http://localhost:3000/funcionario/auth', {
      email: email,
      cpf: cpf,
    });
    return res;
  } catch (err) {
    alert(err);
    console.info('Falha no Login ');
  }
}
async function authFuncionario(req) {
  try {
    const { email, cpf } = req;
    let res = await axios.post('http://localhost:3000/funcionario/auth', {
      email: email,
      cpf: cpf,
    });
    return res;
  } catch (err) {
    alert(err);
    console.info('Falha no Login ');
  }
}
/**
 *
 *
 *
 */

async function adicionarResponsavel(req) {
  try {
    const {
      nome,
      cpf,
      email,
      endereco: { rua, numero, bairro, cidade, estado },
      celular,
      telefone,
      senha,
      tipoUsuario,
    } = req;
    let res = await axios.post('http://localhost:3000/responsavel/create', {
      nome: nome,
      cpf: cpf,
      email: email,
      endereco: {
        rua: rua,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
      },
      celular: celular,
      telefone: telefone,
      senha: senha,
      tipoUsuario: tipoUsuario,
    });
    return res;
  } catch (erro) {}
}

async function adicionarAluno(req) {
  try {
    const {
      nome,
      cpf,
      email,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      celular,
      telefone,
    } = req;
    let res = await axios.post('http://localhost:3000/responsavel/create');
  } catch (erro) {}
}

async function adicionarFuncionario(req) {
  try {
    const {
      nome,
      cpf,
      email,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      celular,
      telefone,
    } = req;
    let res = await axios.post('http://localhost:3000/responsavel/create');
  } catch (erro) {}
}

async function adicionarVeiculo(req) {
  try {
    const {
      nome,
      cpf,
      email,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      celular,
      telefone,
    } = req;
    let res = await axios.post('http://localhost:3000/responsavel/create');
  } catch (erro) {}
}

/**
 *
 *
 *
 */
async function listaResponsavel() {
  try {
    let res = await axios.get('http://localhost:3000/responsavel/list');

    for (let key in res) {
      if (res.hasOwnProperty(key)) {
        let element = res[key];
        return element;
      }
    }
  } catch (error) {
    return error;
  }
}
async function listaAluno() {
  try {
    let res = await axios.get('http://localhost:3000/aluno/list');

    for (let key in res) {
      if (res.hasOwnProperty(key)) {
        let element = res[key];
        return element;
      }
    }
  } catch (error) {
    return error;
  }
}
async function listaFuncionario() {
  try {
    let res = await axios.get('http://localhost:3000/funcionario/list');

    for (let key in res) {
      if (res.hasOwnProperty(key)) {
        let element = res[key];
        return element;
      }
    }
  } catch (error) {
    return error;
  }
}
async function listaVeiculo() {
  try {
    let res = await axios.get('http://localhost:3000/veiculos/list', {
      headers: { Accept: 'application/json' },
    });
    return res.data;
  } catch (error) {
    return error;
  }
}
/**
 *
 *
 *
 *
 */
async function buscarResponsavel(cpf) {
  try {
    let res = await axios.get(`http://localhost:3000/responsavel/find/${cpf}`);
    return res;
  } catch (e) {
    return e;
  }
}
async function buscarVeiculo(placa) {
  try {
    let res = await axios.get(`http://localhost:3000/veiculos/find/${placa}`);
    return res;
  } catch (e) {
    return e;
  }
}
async function buscarFuncionario(cpf) {
  try {
    let res = await axios.get(`http://localhost:3000/funcionario/find/${cpf}`);
    return res;
  } catch (e) {
    return e;
  }
}
async function buscarAluno(matricula) {
  try {
    let res = await axios.get(`http://localhost:3000/aluno/find/${matricula}`);
    return res;
  } catch (e) {
    return e;
  }
}
/**
 *
 *
 *
 *
 *
 */
async function atualizarResponsavel(id, body) {
  try {
    let res = await axios.put(
      `http://localhost:3000/responsavel/update/${id}`,
      body,
    );
    return res;
  } catch (e) {
    return e;
  }
}
async function atualizarAluno(id) {
  try {
    let res = await axios.put(`http://localhost:3000/aluno/update/${id}`);
    return res;
  } catch (e) {
    return e;
  }
}
async function atualizarFuncionario(id) {
  try {
    let res = await axios.put(`http://localhost:3000/funcionario/update/${id}`);
    return res;
  } catch (e) {
    return e;
  }
}
async function atualizarVeiculo(id) {
  try {
    let res = await axios.put(`http://localhost:3000/veiculo/update/${id}`);
    return res;
  } catch (e) {
    return e;
  }
}
/**
 *
 *
 *
 *
 */
async function deletaVeiculo(id) {
  try {
    let res = await axios.delete(`http://localhost:3000/veiculos/delete/${id}`);
    return res;
  } catch (err) {
    console.log(err);
  }
}
async function deletaResponsavel(id) {
  try {
    let res = await axios.delete(
      `http://localhost:3000/responsavel/delete/${id}`,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
}

async function deletaFuncionario(id) {
  try {
    let res = await axios.delete(
      `http://localhost:3000/funcionario/delete/${id}`,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
}
async function deletaAluno(id) {
  try {
    let res = await axios.delete(
      `http://localhost:3000/funcionario/delete/${id}`,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
}

export default {
  api,
  authResponsavel,
  authAdmin,
  authFuncionario,
  //
  adicionarResponsavel,
  adicionarAluno,
  adicionarFuncionario,
  adicionarVeiculo,
  //
  listaResponsavel,
  listaAluno,
  listaFuncionario,
  listaVeiculo,
  //
  deletaVeiculo,
  deletaResponsavel,
  deletaFuncionario,
  deletaAluno,
  //
  atualizarResponsavel,
  atualizarAluno,
  atualizarFuncionario,
  atualizarVeiculo,
  //
  buscarResponsavel,
  buscarVeiculo,
  buscarFuncionario,
  buscarAluno,
};
