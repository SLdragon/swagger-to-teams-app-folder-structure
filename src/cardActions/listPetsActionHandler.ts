import { AdaptiveCards } from "@microsoft/adaptivecards-tools";
import { InvokeResponseFactory, TeamsFxAdaptiveCardActionHandler } from "@microsoft/teamsfx";
import { TurnContext, InvokeResponse } from "botbuilder";
import { listPetsDataProvider } from "../apis/listPetsDataProvider";
import listPetsResponseCard from "../adaptiveCards/listPetsResponseCard.json"

export class ListPetsActionHandler implements TeamsFxAdaptiveCardActionHandler {

  triggerVerb: string = "listPets";

  async handleActionInvoked(context: TurnContext, actionData: any): Promise<InvokeResponse<any>> {
    const cardData = listPetsDataProvider(actionData);

    const cardJson = AdaptiveCards.declare(listPetsResponseCard).render(cardData);
    return InvokeResponseFactory.adaptiveCard(cardJson);
  }
}