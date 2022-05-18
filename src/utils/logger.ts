import winston, { Logger, LoggerOptions } from 'winston';
import { config } from '@/config';

const loggerConfig: LoggerOptions = {
  level: config.logger.logLevel,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  transports:
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat(),
      ),
    }),
};

export const logger: Logger = winston.createLogger(loggerConfig);

export const logs = {
  warn: {
    generateRandomWallet: `Please specify a FLASHBOTS_RELAY_SIGNING_KEY in your .env.  Generating a random signing key for now, which won't build trust`,
  },
  error: {
    healthCheck: 'Health check failed.',
  },
};
