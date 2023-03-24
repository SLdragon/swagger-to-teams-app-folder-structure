import { AdaptiveCards } from "@microsoft/adaptivecards-tools";
import { InvokeResponseFactory, TeamsFxAdaptiveCardActionHandler } from "@microsoft/teamsfx";
import { TurnContext, InvokeResponse } from "botbuilder";
import showPetByIdResponseCard from "../adaptiveCards/showPetByIdResponseCard.json"
import { showPetByIdDataProvider } from "../apis/showPetByIdDataProvider";

export class ShowPetByIdActionHandler implements TeamsFxAdaptiveCardActionHandler {
  triggerVerb: string = "showPetById";

  async handleActionInvoked(context: TurnContext, actionData: any): Promise<InvokeResponse<any>> {
    const cardData = showPetByIdDataProvider(actionData);

    const cardJson = AdaptiveCards.declare(showPetByIdResponseCard).render(cardData);
    return InvokeResponseFactory.adaptiveCard(cardJson);
  }
}