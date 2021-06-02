import { Selector } from 'testcafe';

fixture`Test Hello World`.page`https://project-hello-world-app.herokuapp.com/`;

test('Hello world is dplayed on homepage', async t => {
    await t
        .expect(Selector('h1').innerText).eql('Hello World !!');
});
