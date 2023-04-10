// mock api, you need to update the code in realProvider to call backend service

export class PetsApi {
  public static createPets(data: any):any {
    return {
      "code": 1,
      "message": "value"
    };
  }

  public static listPets(data: any):any {
    return [
      {
        "id": 1,
        "name": "value",
        "tag": "value"
      }
    ];
  }

  public static showPetById(data: any):any {
    return {
      "id": 1,
      "name": "value",
      "tag": "value"
    };
  }
}
