import { Activity, TurnContext } from "botbuilder";
import {
  CommandMessage,
  TeamsFxBotCommandHandler,
  TriggerPatterns,
  MessageBuilder,
} from "@microsoft/teamsfx";
import listPetsRequestCard from "../adaptiveCards/listPetsRequestCard.json";

export class ListPetsCommandHandler implements TeamsFxBotCommandHandler {
  triggerPatterns: TriggerPatterns = "GET /pets$";

  async handleCommandReceived(
    context: TurnContext,
    message: CommandMessage,
  ): Promise<string | Partial<Activity> | void> {
    console.log("Bot received message: " + message.text);
    
    return MessageBuilder.attachAdaptiveCardWithoutData(listPetsRequestCard);
  }
}