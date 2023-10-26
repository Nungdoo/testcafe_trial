import { Selector, t } from 'testcafe';
import IndexPage from './IndexPage';

class LoginPage {
    constructor () {
        this.IdInput = Selector('#login-email-input');
        this.PwInput = Selector('#login-password-input');
        this.loginBtn = Selector('button').withText('로그인');
    }

    async login(user_id, user_pw) {
        await t
            .click(IndexPage.loginLink)
            .typeText(this.IdInput, user_id)
            .typeText(this.PwInput, user_pw)
            .click(this.loginBtn)
            .expect(IndexPage.logoutLink.visible).ok();
    }
}

export default new LoginPage();

