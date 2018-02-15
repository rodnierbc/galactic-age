let moment = require('moment');
export class User {
  constructor(name, birthday) {
    this.name = name;
    this.birthday = moment(birthday);
  }
  getBirthdayYear() { //convert a date in milliseconds
    let birthdayYear = this.birthday.year();
    return birthdayYear;
  }
  get name() {
        return this._name.toUpperCase();
  }
  set name(newName) {
      this._name = newName;
  }
  get birthday() {
        return this._birthday;
  }
  set birthday(newBirthday) {
      this._birthday = newBirthday;
  }
}
