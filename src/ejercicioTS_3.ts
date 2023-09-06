//EJERCICIO 3 ---- PENDIENTE EL EXTRA

interface User {
  name: string;
  age: number;
  subject?: string;
  occupation?: string;
}

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

const logUser = ({ name, age, occupation, subject }: User) => {
  const extraInfo = occupation ?? subject ?? "";
  console.log(`  - ${name}, ${age}, ${extraInfo}`);
};

users.forEach(logUser);
