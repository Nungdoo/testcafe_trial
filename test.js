import loginPage from './pages/LoginPage';
import cartPage from './pages/CartPage';

fixture `Test Fixture`
    .page `https://www.coupang.com/`;

const user_id = '';
const user_pw = '';

test('Login and Cart Test', async t => {
    await loginPage.login(user_id, user_pw);
    await cartPage.checkCart();
});