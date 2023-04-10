import { AdaptiveCards } from "@microsoft/adaptivecards-tools";
import { InvokeResponseFactory, TeamsFxAdaptiveCardActionHandler } from "@microsoft/teamsfx";
import { TurnContext, InvokeResponse } from "botbuilder";
import createPetsResponseCard from "../adaptiveCards/createPetsResponseCard.json";

// import { PetsApi } from "../apis/realApiProvider"; // for api calls with real backend service
import { PetsApi } from "../apis/mockApiProvider"; // for api calls with mock data

export class CreatePetsActionHandler implements TeamsFxAdaptiveCardActionHandler {
  triggerVerb: string = "createPets";

  async handleActionInvoked(context: TurnContext, actionData: any): Promise<InvokeResponse<any>> {
    const cardData = PetsApi.createPets(actionData);

    const cardJson = AdaptiveCards.declare(createPetsResponseCard).render(cardData);
    return InvokeResponseFactory.adaptiveCard(cardJson);
  }
}