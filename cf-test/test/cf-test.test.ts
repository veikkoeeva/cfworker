import { html, fixture, expect } from '@open-wc/testing';

import { CfTest } from '../src/CfTest.js';
import '../src/cf-test.js';

describe('CfTest', () => {
  let element: CfTest;
  beforeEach(async () => {
    element = await fixture(html`<cf-test></cf-test>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
