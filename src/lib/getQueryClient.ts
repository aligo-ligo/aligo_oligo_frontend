import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";
import { QueryClientOptions } from "../utils/constants";

const getQueryClient = cache(() => new QueryClient(QueryClientOptions));
export default getQueryClient;
