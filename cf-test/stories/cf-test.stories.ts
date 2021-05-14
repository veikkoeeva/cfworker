import { html, TemplateResult } from 'lit-html';
import '../src/cf-test.js';

export default {
  title: 'CfTest',
  component: 'cf-test',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <cf-test style="--cf-test-background-color: ${backgroundColor}" .title=${title}></cf-test>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
