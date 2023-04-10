import * as restify from "restify";
import { BotBuilderCloudAdapter } from "@microsoft/teamsfx";
import ConversationBot = BotBuilderCloudAdapter.ConversationBot;

import { CreatePetsCommandHandler } from "./commands/createPetsCommandHandler";
import { ShowPetByIdCommandHandler } from "./commands/showPetByIdCommandHandler";
import { ListPetsCommandHandler } from "./commands/listPetsCommandHandler";
import { ListPetsActionHandler } from "./cardActions/listPetsActionHandler";
import { CreatePetsActionHandler } from "./cardActions/createPetsActionHandler";
import { ShowPetByIdActionHandler } from "./cardActions/showPetByIdActionHandler";

const commandBot = new ConversationBot({
  adapterConfig: {
    MicrosoftAppId: process.env.BOT_ID,
    MicrosoftAppPassword: process.env.BOT_PASSWORD,
    MicrosoftAppType: "MultiTenant",
  },
  command: {
    enabled: true,
    commands: [new ListPetsCommandHandler(),new CreatePetsCommandHandler(), new ShowPetByIdCommandHandler()],
  },
  cardAction: {
    enabled: true,
    actions: [new ListPetsActionHandler(), new CreatePetsActionHandler(), new ShowPetByIdActionHandler()],
  }
});

// This template uses `restify` to serve HTTP responses.
// Create a restify server.
const server = restify.createServer();
server.use(restify.plugins.bodyParser());
server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log(`\nBot Started, ${server.name} listening to ${server.url}`);
});

// Register an API endpoint with `restify`. Teams sends messages to your application
// through this endpoint.
//
// The Teams Toolkit bot registration configures the bot with `/api/messages` as the
// Bot Framework endpoint. If you customize this route, update the Bot registration
// in `templates/azure/provision/botservice.bicep`.
server.post("/api/messages", async (req, res) => {
  await commandBot.requestHandler(req, res);
});
