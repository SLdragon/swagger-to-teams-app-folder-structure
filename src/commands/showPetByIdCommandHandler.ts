import { Activity, TurnContext } from "botbuilder";
import {
  CommandMessage,
  TeamsFxBotCommandHandler,
  TriggerPatterns,
  MessageBuilder,
} from "@microsoft/teamsfx";
import showPetByIdRequestCard from "../adaptiveCards/showPetByIdRequestCard.json";

export class ShowPetByIdCommandHandler implements TeamsFxBotCommandHandler {
  triggerPatterns: TriggerPatterns = "GET /pets/(\\w+)$";

  async handleCommandReceived(
    context: TurnContext,
    message: CommandMessage,
  ): Promise<string | Partial<Activity> | void> {
    console.log("Bot received message: " + message.text);

    return MessageBuilder.attachAdaptiveCardWithoutData(showPetByIdRequestCard);
  }
}