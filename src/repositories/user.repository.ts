import {db} from '../infra/db'

type User = {
    id:number;
    email:string;
    password:string;
}

export function createUser(email:string, password:string){
    const stmt = db.prepare(`INSERT INTO USERS (email, password)
        VALUES (?, ?)`);

        return stmt.run(email, password);
}

export function getUsers(limit = 100, offset = 0):User[] {
    const stmt = db.prepare(`SELECT * FROM USERS LIMIT ? OFFSET ?`);
    return stmt.all(limit, offset) as User[];
}


export function getUserById(id:number):User| undefined{
    const stmt = db.prepare(`SELECT * FROM USERS WHERE id = ?`);

    return stmt.get(id) as User | undefined;
}

export function updateUser(id:number,email:string,password:string){
    const stmt = db.prepare(`UPDATE USERS
        SET email = ?, password = ?
        WHERE id = ?`);

        return stmt.run(email, password, id);
}

export function deleteUser(id:number){
    const stmt = db.prepare(`DELETE FROM USERS WHERE id = ?`);

    return stmt.run(id);
}