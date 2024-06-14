declare module "graphql-request" {
  export function request<T = any>(
    endpoint: string,
    query: string,
    variables?: any
  ): Promise<T>;

  export function gql(
    literals: TemplateStringsArray,
    ...placeholders: any[]
  ): string;
}
