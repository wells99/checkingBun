export async function hashPassword(password: string) {
    return await Bun.password.hash(password, {
        algorithm: "bcrypt",
        cost: 12
    });
}

export async function verifyPassword(password: string, storedPassword: string){
    return await Bun.password.verify(password, storedPassword, "bcrypt");
}

