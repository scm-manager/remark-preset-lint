<p align="center">
  <a href="https://scm-manager.org/">
    <img alt="SCM-Manager" src="https://download.scm-manager.org/images/logo/scm-manager_logo.png" width="500" />
  </a>
</p>
<h1 align="center">
  @scm-manager/remark-preset-lint
</h1>

[Remark Lint](https://github.com/remarkjs/remark-lint) base configuration for all SCM-Manager related projects.

## Installation

Install the `@scm-manager/remark-preset-lint` as dev dependency:

```bash
yarn add --dev @scm-manager/remark-preset-lint
# or 
npm install --save-dev @scm-manager/remark-preset-lint
```

In order to use the configuration add the following snippet to your `package.json`:

```json
"remarkConfig": {
  "plugins": [
    "@scm-manager/remark-preset-lint"
  ]
},
"lint-staged": {
  "*.md": "remark-lint --"
}
```

## Need help?

Looking for more guidance? Full documentation lives on our [homepage](https://scm-manager.org/docs/) or the dedicated pages for our [plugins](https://scm-manager.org/plugins/). Do you have further ideas or need support?

- **Community Support** - Contact the SCM-Manager support team for questions about SCM-Manager, to report bugs or to request features through the official channels. [Find more about this here](https://scm-manager.org/support/).

- **Enterprise Support** - Do you require support with the integration of SCM-Manager into your processes, with the customization of the tool or simply a service level agreement (SLA)? **Contact our development partner Cloudogu! Their team is looking forward to discussing your individual requirements with you and will be more than happy to give you a quote.** [Request Enterprise Support](https://cloudogu.com/en/scm-manager-enterprise/).
