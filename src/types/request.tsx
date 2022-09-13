export type Request = {
    method: string,
    headers?: {
        "Content-Type": string,
        Authorization?: string | null,
    },
}