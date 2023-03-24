import { AdaptiveCards } from "@microsoft/adaptivecards-tools";
import { InvokeResponseFactory, TeamsFxAdaptiveCardActionHandler } from "@microsoft/teamsfx";
import { TurnContext, InvokeResponse } from "botbuilder";
import createPetsResponseCard from "../adaptiveCards/createPetsResponseCard.json"
import { createPetsDataProvider } from "../apis/createPetsDataProvider";

export class CreatePetsActionHandler implements TeamsFxAdaptiveCardActionHandler {
  triggerVerb: string = "createPets";

  async handleActionInvoked(context: TurnContext, actionData: any): Promise<InvokeResponse<any>> {
    const cardData = createPetsDataProvider(actionData);

    const cardJson = AdaptiveCards.declare(createPetsResponseCard).render(cardData);
    return InvokeResponseFactory.adaptiveCard(cardJson);
  }
}