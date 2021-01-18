import ErrorRepository from '../error';


test('throw error', () => {
  const error = new ErrorRepository('Error', 400, 'Bad Request');
  expect(error.translate(450)).toBe('Unknown error');
});

test('no error', () => {
  const error = new ErrorRepository('Error', 400, 'Bad Request');
  expect(error.translate(400)).toBe('Bad Request');
});


// test('new class', () => {
//   const error = new ErrorRepository('Error2', 404, 'Not Found');
//   const answer = {"code": 404, "desc": "Not Found", "error": Map {404 => "Not Found"}};
//   expect(error).toEqual(answer);
// })
