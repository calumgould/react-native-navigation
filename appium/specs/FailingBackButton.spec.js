describe('failing back button', () => {
  beforeAll(async () => {
    await browser.pause(2000);
  });

  it('try to navigate back', async () => {
    const stackButton = await $('~STACK_BUTTON');
    await stackButton.click();
    const pushButton = await $('~PUSH_BUTTON');
    await pushButton.click();
    await browser.pause(1000);
    await pushButton.click();
    await browser.pause(1000);
    const backButton = await $('~navigation-back');
    await backButton.click();
    const pushFooter = await $('~footer');
    await pushFooter.waitForDisplayed({ timeout: 5000 });
    const footerText = await pushFooter.getText();

    expect(footerText).toEqual('Stack Position: 1');
  });
});
