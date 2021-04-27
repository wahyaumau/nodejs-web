import {readFileSync} from "fs";
import {load} from 'js-yaml';

let fileContents = readFileSync('./config.yml', 'utf8');
let config: any = load(fileContents);

export const KEYCLOAK_CONFIG = config.application.keycloak;
export const EXPRESS_CONFIG = config.application.express;
export const LOGGER_CONFIG = config.application.logger;



