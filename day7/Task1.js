function createProfile(user) {
  const { name, age, role = "User" } = user;
  return `${name} is ${age} years old and works as ${role}`;
}

// Example
console.log(createProfile({ name: "Sudhan", age: 22 }));