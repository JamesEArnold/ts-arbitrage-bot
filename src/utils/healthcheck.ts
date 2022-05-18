import { logger, logs } from './logger';
import { get } from 'https';

export const healthCheck = async (healthCheckUrl: string): Promise<void> => {
  if (healthCheckUrl === '') {
    return;
  }
  try {
    get(healthCheckUrl);
  } catch (error) {
    logger.error(`${logs.error.healthCheck}: ${JSON.stringify(error)}`);
  }
};
