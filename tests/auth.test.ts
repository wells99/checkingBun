import { expect, test} from 'bun:test';
import {hashPassword, verifyPassword} from '../src/auth'


test("hash e verificar senha", async () => {
    const hash = await hashPassword("minhaSenha123");
    expect(await verifyPassword("minhaSenha123", hash)).toBe(true);
})