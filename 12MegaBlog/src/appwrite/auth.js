import conf from '../conf.js';
import {Client , Account, ID} from appwrite;
import e from 'express';

export class AuthService {
    client = new Client();
    account = new Account();

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount(email, password, name) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                
            }
            else {
                return userAccount;
            }
        } catch (e) {
            return e;
        }
    }
}

const authService = new AuthService();

export default AuthService;