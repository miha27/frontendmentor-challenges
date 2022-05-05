import { JsonProperty, JsonObject} from "typescript-json-serializer";
import {Advice} from "./Advice";


@JsonObject()
  export class AdviceSlip {
  @JsonProperty() slip: Advice = new Advice()
}
