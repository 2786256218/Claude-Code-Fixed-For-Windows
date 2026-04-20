const fs = require('fs');
const path = require('path');

const filesToCreate = {
  'utils/protectedNamespace.ts': 'export {};',
  'tools/TungstenTool/TungstenTool.ts': 'export class TungstenTool { static readonly name = "Tungsten"; }',
  'tools/TungstenTool/TungstenLiveMonitor.ts': 'export const TungstenLiveMonitor = () => null;',
  'tools/REPLTool/REPLTool.ts': 'export const REPLTool = {};',
  'tools/SuggestBackgroundPRTool/SuggestBackgroundPRTool.ts': 'export const SuggestBackgroundPRTool = {};',
  'tools/VerifyPlanExecutionTool/VerifyPlanExecutionTool.ts': 'export const VerifyPlanExecutionTool = {};',
  'commands/agents-platform/index.ts': 'export default {};',
  'types/connectorText.ts': 'export type ConnectorTextBlock = any; export const isConnectorTextBlock = (x: any) => false;',
  'components/agents/SnapshotUpdateDialog.tsx': 'export const launchSnapshotUpdateDialog = () => {};',
  'assistant/AssistantSessionChooser.tsx': 'export const launchAssistantSessionChooser = () => {};',
  'commands/assistant/assistant.ts': 'export const launchAssistantInstallWizard = () => {};',
  'services/compact/snipCompact.ts': 'export const snipCompact = () => {};',
  'entrypoints/sdk/coreTypes.generated.ts': 'export type any = any;',
  'global.d.ts': 'declare module "*.md" { const content: string; export default content; }',
  'utils/filePersistence/types.ts': 'export type any = any;',
  'entrypoints/sdk/runtimeTypes.ts': 'export type any = any;',
  'entrypoints/sdk/toolTypes.ts': 'export type any = any;',
  'skills/bundled/verify/examples/cli.md': 'mock',
  'skills/bundled/verify/examples/server.md': 'mock',
  'skills/bundled/verify/SKILL.md': 'mock',
  'tools/WorkflowTool/constants.ts': 'export const WORKFLOW_TOOL_NAME = "Workflow";',
  'services/compact/cachedMicrocompact.ts': 'export const cachedMicrocompact = () => {};',
  'ink/devtools.ts': 'export {};',
  'assistant/index.ts': 'export const initializeAssistantTeam = () => {};',
  'assistant/gate.ts': 'export {};',
  'server/parseConnectUrl.ts': 'export const parseConnectUrl = () => {};',
  'ssh/createSSHSession.ts': 'export const createSSHSession = () => {};',
  'assistant/sessionDiscovery.ts': 'export const discoverAssistantSessions = () => {};',
  'server/server.ts': 'export const startServer = () => {};',
  'server/sessionManager.ts': 'export const SessionManager = {};',
  'server/backends/dangerousBackend.ts': 'export const DangerousBackend = {};',
  'server/serverBanner.ts': 'export const printServerBanner = () => {};',
  'server/serverLog.ts': 'export const logServerMessage = () => {};',
  'server/lockfile.ts': 'export const writeLockfile = () => {};',
  'server/connectHeadless.ts': 'export const connectHeadless = () => {};',
  'proactive/index.ts': 'export const startProactiveMode = () => {};',
  'skills/bundled/dream.ts': 'export const registerDreamSkill = () => {};',
  'skills/bundled/hunter.ts': 'export const registerHunterSkill = () => {};',
};

for (const [filePath, content] of Object.entries(filesToCreate)) {
  const fullPath = path.resolve(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf-8');
}
console.log('Stubs created');