function createUser(key, value) {
  return {
    [key]: value,
    display() {
      console.log(`${key}: ${value}`);
    }
  };
}

// Example
const user = createUser("role", "Admin");
console.log(user);
user.display();