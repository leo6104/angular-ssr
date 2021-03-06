import {getApplicationProject} from '../../../test/fixtures';

import {CompilableProgram} from './../program';

import {getCompilableProgram} from '../factory';

describe('CompilableProgram', () => {
  let program: CompilableProgram;

  beforeAll(() => {
    program = getCompilableProgram(getApplicationProject('source/test/fixtures/application-basic-inline', 'BasicInlineModule'));
  });

  afterAll(() => program.dispose());

  it('can build application-basic-inline into executable NgModuleFactory', async () => {
    const program = getCompilableProgram(getApplicationProject('source/test/fixtures/application-basic-inline', 'BasicInlineModule'));
    const module = await program.loadModule({
      source: 'source/test/fixtures/application-basic-inline',
      symbol: 'BasicInlineModule',
    });
    expect(module).not.toBeNull();
    expect(typeof module).toBe('object');
    expect(module.constructor.name).toBe('NgModuleFactory');
  });

  it('can build application-basic-external into executable NgModuleFactory', async () => {
    const program = getCompilableProgram(getApplicationProject('source/test/fixtures/application-basic-inline', 'BasicInlineModule'));
    const module = await program.loadModule({
      source: 'source/test/fixtures/application-basic-external',
      symbol: 'BasicExternalModule'
    });
    expect(module).not.toBeNull();
    expect(typeof module).toBe('object');
    expect(module.constructor.name).toBe('NgModuleFactory');
  });

  it('can build application-routed into executable NgModuleFactory', async () => {
    const program = getCompilableProgram(getApplicationProject('source/test/fixtures/application-basic-inline', 'BasicInlineModule'));
    const module = await program.loadModule({
      source: 'source/test/fixtures/application-routed',
      symbol: 'BasicRoutedModule'
    });
    expect(module).not.toBeNull();
    expect(typeof module).toBe('object');
    expect(module.constructor.name).toBe('NgModuleFactory');
  });
});
