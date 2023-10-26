---
sidebar_position: 2
---

# Create Environments

We'll use Backstage's software template feature to efficiently provision our application's runtime environments. Opa on AWS provides different types of environments. the process is similar and can also be extend or modify.

## Create an Environment Provider

Lets now use AWS ECS Environment Provider template to provision our ecs runtime environment. If you have completed the introduction section, you should be on the OPA landing page.

1. Hit the Create.. menu on the left and Choose the AWS ECS Environment Provider template.

![alt text](/img/docs/ecs-env-provider-1.png)

2. Provide input parameters to tailor the environment provider resources.




## Create an Environment



# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
