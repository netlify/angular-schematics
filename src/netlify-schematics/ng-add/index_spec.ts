import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('ng-add', () => {
  it('creates netlify config file', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const options = {
      publish: 'publish',
      command: 'command',
    };
    const tree = await runner
      .runSchematicAsync('ng-add', options, Tree.empty())
      .toPromise();
    const netlifyConfig = tree.readContent('/netlify.toml');

    expect(netlifyConfig).toContain('publish = "publish"');
    expect(netlifyConfig).toContain('command = "command"');
  });
});
