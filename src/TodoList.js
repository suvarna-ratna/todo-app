const TodoList = function () {

  return fetch(`https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw`)
      .then((response) =>
          response.json()
      ).then(data => { console.log(data); return data; })
      ;

}

export default TodoList;
