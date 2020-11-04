describe('failing back button', () => {
  beforeAll(async () => {
    await browser.pause(2000);
  });

  it('try to navigate back', async () => {
    const stackButton = await $('~STACK_BUTTON');
    await stackButton.click();
    const pushButton = await $('~PUSH_BUTTON');
    // Press push button twice
    await pushButton.click();
    await browser.pause(1000);
    // Now on 'Pushed Screen'
    await pushButton.click();
    await browser.pause(1000);
    // Now on 'Pushed 2'
    // Stack position is 2
    const backButton = await $('~navigation-back');
    await backButton.click();
    // Should now be back on 'Pushed Screen'
    const pushFooter = await $('~footer');
    await pushFooter.waitForDisplayed({ timeout: 5000 });
    // Stack position should be 1
    const footerText = await pushFooter.getText();

    expect(footerText).toEqual('Stack Position: 1');
  });
});
