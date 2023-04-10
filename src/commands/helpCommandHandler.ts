import { Activity, TurnContext } from "botbuilder";
import {
  CommandMessage,
  TeamsFxBotCommandHandler,
  TriggerPatterns,
} from "@microsoft/teamsfx";

export class HelpCommandHandler implements TeamsFxBotCommandHandler {
  triggerPatterns: TriggerPatterns = "help";

  async handleCommandReceived(
    context: TurnContext,
    message: CommandMessage,
  ): Promise<string | Partial<Activity> | void> {
    console.log("Bot received message: " + message.text);
    return "Some help messages or help adaptive cards";
  }
}