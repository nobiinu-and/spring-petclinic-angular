import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';

const environmentFilesDirectory = path.join(__dirname, '../src/environments');
const targetEnvironmentTemplateFileName = 'environment.ts.template';
const targetEnvironemntFileName = 'environment.ts';

const defaultEnvValues = {
    AZUREAI_INSTRUMENTION_KEY: 'xxxx-xxxx-xxxx-xxxx'
};

const environmentTemplate = fs.readFileSync(
    path.join(environmentFilesDirectory, targetEnvironmentTemplateFileName),
    {encoding: 'utf-8'}
);
const obj: any = (<any>Object).assign({}, defaultEnvValues, process.env);
const output = ejs.render(environmentTemplate, obj);
fs.writeFileSync(path.join(environmentFilesDirectory, targetEnvironemntFileName), output);
process.exit(0);
