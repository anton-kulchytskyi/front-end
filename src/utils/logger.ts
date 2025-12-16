const isDev = import.meta.env.DEV;

type LogArgs = unknown[];

export const createLogger = (scope: string) => ({
  info: (...args: LogArgs) => {
    if (!isDev) return;
    console.log(`ℹ️ [${scope}]`, ...args);
  },
  warn: (...args: LogArgs) => {
    if (!isDev) return;
    console.warn(`⚠️ [${scope}]`, ...args);
  },
  error: (...args: LogArgs) => {
    if (!isDev) return;
    console.error(`❌ [${scope}]`, ...args);
  },
  debug: (...args: LogArgs) => {
    if (!isDev) return;
    console.debug(`🐛 [${scope}]`, ...args);
  },
});
