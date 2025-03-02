class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Moderator extends User {
  constructor(name, surname, age) {
    super(name, surname, age);
  }

  getFullName() {
    return `${this.name} ${this.surname}---> ${this.age}`;
  }
  greatePost(text) {
    console.log('Post successfully created');
  }
  deletPost(id) {
    console.log('Post successfully deleted ');
  }
}

class Admin extends Moderator {
  constructor(name, surname, age, uniqePrefix) {
    super(name, surname, age);
    this.uniqePrefix = uniqePrefix;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
  makeModerator(userId) {
    console.log('Moderator successfully delited');
  }
}

class Support extends Admin{
  constructor(name, uniqePrefix){
    super(name, null, null, uniqePrefix);
  }
  getFullName() {
    return `${this.name}---> ${this.age}`;
  }
}

const user = new User('John', 'Doe', 32);

const moderator = new Moderator('Alex', 'Krane', 45);

const admin = new Admin('Jane', 'Doe', 50, 'Head of Sales');

const support = new Support('William', 'Head of Support');