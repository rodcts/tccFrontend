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
    const {email, cpf} = req
    let res = await axios.post('http://localhost:3000/responsavel/auth', {email: email, cpf: cpf});
    return res

  } catch (err) {
    alert(err);
    console.info('Falha no Login ')
  }
}
async function authAdmin(req) {
  try {
    const {email, cpf} = req
    let res = await axios.post('http://localhost:3000/funcionario/auth', {email: email, cpf: cpf});
    return res

  } catch (err) {
    alert(err);
    console.info('Falha no Login ')
  }
}
async function authFuncionario(req) {
  try {
    const {email, cpf} = req
    let res = await axios.post('http://localhost:3000/funcionario/auth', {email: email, cpf: cpf});
    return res

  } catch (err) {
    alert(err);
    console.info('Falha no Login ')
  }
}

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
      headers: {Accept: 'application/json'},
    });

    // for (let key in res) {
    //   if (res.hasOwnProperty(key)) {
    //     let element = res[key];
    //     return element;
    //   }
    // }
    return res.data;
  } catch (error) {
    return error;
  }
}

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

async function atualizarResponsavel(id) {
  try {
    let res = await axios.put(`http://localhost:3000/responsavel/update/${id}`);
    return res;
  } catch (e) {
    return e;
  }
}

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

export default {
  api,
  authResponsavel,
  authAdmin,
  authFuncionario,
  listaResponsavel,
  listaFuncionario,
  listaVeiculo,
  deletaVeiculo,
  deletaResponsavel,
  deletaFuncionario,
  atualizarResponsavel,
  buscarResponsavel,
  buscarVeiculo,
};
