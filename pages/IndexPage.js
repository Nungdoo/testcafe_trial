import { Selector } from 'testcafe';

class IndexPage {
    constructor () {
        this.loginLink = Selector('#login a').withText('로그인');
        this.cartIcon = Selector('header .cart-icon');
        this.logoutLink = Selector('#logout span').withText('로그아웃');
    }
}

export default new IndexPage();

