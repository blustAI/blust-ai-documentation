---
sidebar_position: 7
sidebar_label: Sign in with ...
---

# Sign in with Blust.AI button

Integrating the **Sign in with blust.AI** button allows users of your AI tool to seamlessly sign into their account directly from your website or application, bypassing the need to navigate through the blust.AI catalog. This feature is completely _optional_ but highly recommended to enhance user experience.

#### Implementation

To add the **Sign in with blust.AI** button, construct the URL for the button as follows:

```
https://accounts.blust.ai/oauth2/v2/auth?client_id={YOUR CLIENT ID}&redirect_uri={URL TO REDIRECT USER AFTER AUTHORIZATION}
```

Replace `{YOUR CLIENT ID}` with your actual client ID and `{URL TO REDIRECT USER AFTER AUTHORIZATION}` with the URL where users should be redirected after successfully signing in.

#### Requirements

- The `redirect_uri` must be pre-registered and included in your list of allowed redirect URIs. For more information on managing redirect URIs, refer to the [Credentials](/docs/integrating-ai-tools/credentials/) section of our documentation.

- Upon redirecting users to this URL, your application will receive an `authorization_code`. You must use this code to request an Access Token, which will then allow your application to access user data and report usage. Detailed instructions for exchanging the `authorization_code` for an `Access Token` can be found in the [API](/docs/integrating-ai-tools/API/) section.

:::note
Incorporating the **Sign in with blust.AI** button is designed to streamline the authentication process, offering a more integrated and efficient user experience within your application.
:::


