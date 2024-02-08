`AI Role Definition`

**AI Role Definition** is a critical component that defines the purpose and operational context of your AI tool. This definition guides how the AI interacts with inputs, making it essential for achieving desired outcomes. Properly defining the AI Role ensures the tool performs tasks accurately and efficiently.
_If left blank_, the tool will default to the standard behavior defined by the model's authors.


`AI Model`

**AI Model** selection involves choosing a pre-existing model that will power your AI tool. The choice of AI model dictates the capabilities, limitations, and the cost of requests. Different models consume varying amounts of credits, which can significantly affect the operational cost of your AI tool. It is important to choose a model that not only aligns with the AI Role Definition for optimal performance but also fits within your credit budget. Please refer to the [list of available models](/docs/creating-ai-tools/available_models) for detailed descriptions of each model.

`Strategy`

By default, AI models do not retain the entire conversation context. To enable an AI tool to maintain a conversation, it is necessary to provide it with the history or context of the conversation each time. However, one of the major challenges with contemporary AI is the limitation on the size of the input message. While developers are continuously improving this aspect (for example, GPT-3.5 had a limitation of processing messages longer than 4096 tokens, GPT-4 turbo can process up to 128,000 tokens at once), the cost of interaction with such models can become significant if the conversation extends and the entire context is transmitted each time. Therefore, it is crucial to decide how many messages the model should remember. This can be configured through the following options:

1. **Standard**: The system sends the AI Role Definition and the last six messages (three from the user and three responses), providing a balance between context and cost.
2. **Last Message**: Only the last message from the user along with the AI Role Definition is sent. This option is suitable for AI tools where retaining the full conversation context is unnecessary.
3. **Whole Context**: All previous messages are sent to the AI model. This option offers the most comprehensive context at a higher cost. If the conversation history exceeds 50% of the model's capacity, part of the text will be condensed to summarize the conversation context.