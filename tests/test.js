import { Selector } from 'testcafe';

fixture`TestCafe`
    .page('https://project-hello-world-app.herokuapp.com/');

test('Closing specific windows', async t => {

    await t.openWindow('https://project-hello-world-app.herokuapp.com/')
        .expect(Selector('h1').innerText).eql('Hello World !!');
    const devexpress = await t.getCurrentWindow();

    await t.closeWindow(devexpress);
});