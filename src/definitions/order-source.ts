import { ConnectionFormSchema } from "../forms/connect";
import { join } from "path";
import { OrderSourceDefinition } from "@shipengine/connect-order-source-api";

export const brandOne: OrderSourceDefinition = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "0a812b09-5a50-4cf9-8b67-b1d278f06801",
    Name: "shipengine-acenda",
    SendEmail: false,
    CanConfigureTimeZone: false,
    CanLeaveFeedback: false,
    HasCustomMappings: false,
    HasCustomStatuses: false,
    HasInventoryLevels: false,
    AccountConnection: {
        Name: "shipengine-acenda Connection",
        ConnectionFormSchema
    },
    Images: {
        Logo: join(__dirname, "../../assets/logo.svg"),
        Icon: join(__dirname, "../../assets/icon.svg"),
    }
};
