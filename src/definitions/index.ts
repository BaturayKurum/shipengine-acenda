import {  AuthenticationType, OrderSourceAppMetadata } from "@shipengine/connect-order-source-api";
import { brandOne } from "./order-source";

export const Metadata: OrderSourceAppMetadata = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "cf1e9059-9863-4e18-9d7e-f922f35fe960",
    Name: "shipengine-acenda",
    AuthProcess: {
        Identifier: {
            AuthenticationType: AuthenticationType.Basic,
            IsSandbox: false
        }
    },
    OrderSources: [brandOne]
};
