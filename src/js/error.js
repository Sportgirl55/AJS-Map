
export default class ErrorRepository {
  constructor(error, code, desc) {
    this.error = new Map();
    this.code = code;
    this.desc = desc;
    this.error.set(code, desc);
  }

  translate(code) {
    if (!this.error.get(code)) {
      return ('Unknown error');
    } return this.error.get(code);
  }
}
