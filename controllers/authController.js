import fs from "fs";

// LOGIN
export const Login = (req, res) => {
  const { name, password } = req.body;

  const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

  const user = users.find(
    (u) => u.name === name && u.password === password
  );

  if (!user) {
    return res.status(404).json({ message: "User not found or wrong credentials" });
  }

  res.json({
    message: "Login successful",
    user,
  });
};

// SIGNUP
export const Signup = (req, res) => {
  const { name, email, password } = req.body;

  const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

  const exists = users.find((u) => u.email === email);

  if (exists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
  };

  users.push(newUser);

  fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));

  res.json({
    message: "Signup successful",
    user: newUser,
  });
};