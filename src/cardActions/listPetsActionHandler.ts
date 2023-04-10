import { AdaptiveCards } from "@microsoft/adaptivecards-tools";
import { InvokeResponseFactory, TeamsFxAdaptiveCardActionHandler } from "@microsoft/teamsfx";
import { TurnContext, InvokeResponse } from "botbuilder";
import listPetsResponseCard from "../adaptiveCards/listPetsResponseCard.json";

// import { PetsApi } from "../apis/realApiProvider"; // for api calls with real backend service
import { PetsApi } from "../apis/mockApiProvider"; // for api calls with mock data

export class ListPetsActionHandler implements TeamsFxAdaptiveCardActionHandler {
  triggerVerb: string = "listPets";

  async handleActionInvoked(context: TurnContext, actionData: any): Promise<InvokeResponse<any>> {
    const cardData = PetsApi.listPets(actionData);

    const cardJson = AdaptiveCards.declare(listPetsResponseCard).render(cardData);
    return InvokeResponseFactory.adaptiveCard(cardJson);
  }
}