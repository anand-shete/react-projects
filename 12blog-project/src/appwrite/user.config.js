import { Client, Account, ID } from 'appwrite';
import config from '../config/env.config';

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ name, email, password }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (!userAccount) return userAccount;
            this.login({ email, password })
        } catch (error) {
            console.log("AuthService Error: ", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("AuthService Error: ", error);
            throw error;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("AuthService Error: ", error);
            throw error;
        }
    }
    async getLoggedInUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("AuthService Error: ", error);
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;