const users = [
  { name: "A", marks: 80 },
  { name: "B" },
  { name: "C", marks: 60 }
];

const result = users.map(user => {
  const marks = user?.marks ?? 0;
  return `${user.name} scored ${marks}`;
});

console.log(result);