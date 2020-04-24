const axios = require('../../../node_modules/axios');

_handleLista = async () => {
  try {
    let response = await axios
      .get('http://localhost:3000/aluno/list')
      .exec((err, result) => {
        if (!err) {
          responseJson = JSON.stringify(response);
          responseObj = JSON.parse(responseJson);

          console.log('response', response);
          console.log('responseJson', responseJson);
          console.log('responseObj', responseObj);

          console.log(result);
        } else {
          throw new Error(err);
        }
      });
  } catch (error) {
    return error;
  }
};

_handleLista();
