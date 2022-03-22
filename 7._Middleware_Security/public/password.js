import bcrypt from "bcrypt";

console.log(bcrypt);

const saltRounds = 12;
const plaintextPassword = "password123";
const hashedPassword = "$2b$12$m7.ZD6.WVa8duAwzYyb/R.BrOgnqBxezFZnLhIX1h6hDCtHkHyBDK";

async function handlePasswords() {
    const hash = await bcrypt.hash(plaintextPassword, saltRounds);
    console.log(hash);

    const isSame = await bcrypt.compare(plaintextPassword, hashedPassword);
    console.log(isSame);
}

handlePasswords();

export default {};