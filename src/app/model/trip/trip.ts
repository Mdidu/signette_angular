import {Client} from "../client/client";
import {Center} from "../center/center";

export class Trip {
  tripId?: number;
  tripStartDate?: Date;
  tripEndDate?: Date;
  client?: Client;
  center?: Center;
}
