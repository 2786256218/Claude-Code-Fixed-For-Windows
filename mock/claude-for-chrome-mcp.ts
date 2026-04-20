export type ClaudeForChromeContext = any;
export type Logger = any;
export type PermissionMode = 'ask' | 'skip_all_permission_checks' | 'follow_a_plan';
export const BROWSER_TOOLS = [];

export function createClaudeForChromeMcpServer(options: any) {
  return {
    connect: async () => {},
    close: async () => {}
  };
}