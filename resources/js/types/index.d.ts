import { Auth } from "./Auth";

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: Auth | undefined;
};
