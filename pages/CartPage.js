import { Selector, t } from 'testcafe';
import IndexPage from './IndexPage';

class CartPage {
    constructor () {
        this.cartItem = Selector('#cartTable-sku a').withText('세타필 모이스춰라이징 로션, 500ml, 1개');
    }

    async checkCart() {
        await t
            .click(IndexPage.cartIcon)
            .expect(this.cartItem.visible).ok();
    }
}

export default new CartPage();

