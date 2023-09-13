//EJERCICIO 2

interface Teacher {
  name: string;
  age: number;
  subject?: string;
  occupation?: string;
}

interface Student {
  name: string;
  age: number;
  subject?: string;
  occupation?: string;
}

type User = Teacher | Student;

const users: User[] = [
  {
    name: "Luke Patterson",
    age: 32,
    occupation: "Internal auditor",
  },
  {
    name: "Jane Doe",
    age: 41,
    subject: "English",
  },
  {
    name: "Alexandra Morton",
    age: 35,
    occupation: "Conservation worker",
  },
  {
    name: "Bruce Willis",
    age: 39,
    subject: "Biology",
  },
];

const logUser = ({ name, age }: User) => {
  console.log(`  - ${name}, ${age}`);
};

users.forEach(logUser);
