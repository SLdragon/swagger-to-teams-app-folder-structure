import { AdaptiveCards } from "@microsoft/adaptivecards-tools";
import { InvokeResponseFactory, TeamsFxAdaptiveCardActionHandler } from "@microsoft/teamsfx";
import { TurnContext, InvokeResponse } from "botbuilder";
import showPetByIdResponseCard from "../adaptiveCards/showPetByIdResponseCard.json"

// import { PetsApi } from "../apis/realApiProvider"; // for api calls with real backend service
import { PetsApi } from "../apis/mockApiProvider"; // for api calls with mock data

export class ShowPetByIdActionHandler implements TeamsFxAdaptiveCardActionHandler {
  triggerVerb: string = "showPetById";

  async handleActionInvoked(context: TurnContext, actionData: any): Promise<InvokeResponse<any>> {
    const cardData = PetsApi.showPetById(actionData);

    const cardJson = AdaptiveCards.declare(showPetByIdResponseCard).render(cardData);
    return InvokeResponseFactory.adaptiveCard(cardJson);
  }
}