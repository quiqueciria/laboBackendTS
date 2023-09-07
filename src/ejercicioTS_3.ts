//EJERCICIO 3 ---- No comprendo que son las guardas y falta la parte extra con el "is"

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

const logUser = (user: User) => {
  let extraInfo: string;
  if (user.occupation) {
    extraInfo = user.occupation;
  } else {
    extraInfo = user.subject;
  }
  console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
};

// const logUser = ({ name, age, occupation, subject }: User) => {
//   const extraInfo = occupation ?? subject ?? "";
//   console.log(`  - ${name}, ${age}, ${extraInfo}`);
// };

users.forEach(logUser);
