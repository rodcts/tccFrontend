import axios from '../../node_modules/axios';

const api = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: 'mongodb+srv://m001-student:ctrlalt1@cluster0-livgn.mongodb.net/',
});

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

async function buscarResponsavel(cpf) {
  try {
    let res = await axios.get(`http://localhost:3000/responsavel/find/${cpf}`)
    return res
  } catch (e) {
    return e;
  }
}

async function atualizarResponsavel(id) {
  try {
    let res = await axios.put(
      `http://localhost:3000/responsavel/update/${id}`,
    );
    return res
  } catch (e) {
    return e;
  }
}

export default {
  api,
  listaResponsavel,
  atualizarResponsavel,
  buscarResponsavel,
};
