import { JsonProperty, JsonObject} from "typescript-json-serializer";

@JsonObject()
 export class Advice{
    @JsonProperty() id: number;
    @JsonProperty() advice: string;
}
