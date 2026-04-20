# Claude Code CLI

> 强大的 AI 编程助手命令行工具

## 项目简介

**Claude Code CLI** 是一个运行在终端中的高级 AI 编程助手工具。它不仅提供了智能对话能力，还能深度理解本地代码库结构，自动执行多种编程任务（如代码审查、文件修改、执行终端命令等）。本项目为部分源代码还原，可利用 `Bun` 直接进行构建与执行，同时我们构建了适用于Windows平台的可执行文件方便使用。

## 核心特性

- **高度自动化**: 支持直接读取、修改文件及执行终端命令，通过多代理协作自动完成复杂任务。
- **丰富的斜杠命令**: 包含 `/commit`、`/review`、`/diff`、`/cost` 等 50+ 个高效内置命令。
- **现代化 UI**: 终端界面基于 `Ink` (React for CLI) 框架构建，支持组件化、响应式的终端交互。
- **单文件部署**: 通过 `Bun` 的静态链接编译功能，打包为零依赖的单一可执行文件 `claude.exe`。
- **MCP 协议支持**: 原生支持 Model Context Protocol (MCP)，方便接入并扩展各种本地或远程服务工具。
- **安全与权限控制**: 各类工具执行（尤其是终端命令和文件写入）内置细粒度的权限校验逻辑。

## 技术栈

| 类别 | 技术方案 |
|------|------|
| **编程语言** | TypeScript / TSX |
| **运行时环境** | Bun |
| **CLI UI 框架** | Ink (React for CLI) |
| **CLI 参数解析**| Commander.js |
| **依赖与包管理**| pnpm / Bun |
| **终端样式** | Chalk |

## 快速开始

### 安装依赖

项目使用 `pnpm` 作为包管理工具（也可以直接使用 Bun）：

```bash
pnpm install
# 或
bun install
```

### 开发与运行

直接使用 Bun 运行 CLI 入口：

```bash
bun run ./bin/claude
```

### 编译构建 (单文件可执行产物)

项目配置了将整个 TypeScript 源码打包为一个独立可执行文件的命令。**请注意，编译时必须注入 `MACRO.VERSION` 宏定义，否则会导致运行时崩溃。**

执行以下命令进行编译：

```bash
bun run build
```

或者手动执行编译命令：

```bash
bun build ./entrypoints/cli.tsx --compile --outfile claude.exe --define MACRO.VERSION='"1.0.0"'
```

> **注意**: 构建产物为 `claude.exe`。产物已禁用调试符号 (No PDB) 并且采用静态链接以最大化环境可移植性。

## 项目结构与架构解析

```text
claude-code-cli/
├── bin/               # CLI 启动脚本入口
├── entrypoints/       # 各模式的启动入口 (cli.tsx, mcp.ts 等)
├── commands/          # 斜杠命令具体实现 (/commit, /review, /cost 等)
├── tools/             # 供模型调用的底层工具集 (BashTool, FileEditTool, GrepTool 等)
├── skills/            # 高级技能与任务编排逻辑 (Batch, Hunter 等)
├── services/          # 核心后端服务 (API 通信, MCP 协议实现, 遥测分析等)
├── components/        # 终端 UI 组件库 (基于 Ink 的 React 组件)
├── ink/               # 终端渲染引擎封装与优化
├── context/           # React Context 状态管理 (邮箱, 通知, 统计等)
├── utils/             # 基础工具函数库 (Git、文件操作、环境校验等)
├── runtime/           # 运行时辅助脚本 (如 Python 或其他语言的辅助脚本)
└── main.tsx          # 应用程序的主挂载与初始化逻辑
```

### 核心系统亮点

1. **多代理系统 (Agents)**: 包含 Task 代理、上下文隔离代理等，通过并行化处理提升复杂任务解决效率。
2. **MCP 协议 (Model Context Protocol)**: 提供标准的 Stdio/SSE 传输能力，允许工具和资源作为服务注入到模型上下文中。
3. **工具系统 (Tools)**: 工具模块高度解耦，每个工具 (如 `FileReadTool`, `GrepTool`) 均包含严格的 JSON Schema 验证与权限边界定义。
4. **终端 UI 渲染引擎**: 深度定制了 `Ink`，能够在一个标准的终端窗口中高效地更新差异、渲染 Markdown、呈现复杂的数据表格。

## 开发与工程规范

- **代码规范**: 代码和版权信息中已统一标识，移除了所有的非正式命名。
- **TypeScript 配置**: `tsconfig.json` 中必须启用 `"noEmit": true`，防止构建和类型检查时覆盖源码。同时，`paths` 映射已经针对 `stubs/` 下的外部依赖进行了正确配置。

## 许可证

源代码版权归相关贡献者及原作者所有。当前代码库供学习、研究和内部开发使用。
