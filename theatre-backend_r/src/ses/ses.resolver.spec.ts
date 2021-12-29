import { Test, TestingModule } from '@nestjs/testing';
import { SesResolver } from './ses.resolver';
import { SesService } from './ses.service';

describe('SesResolver', () => {
  let resolver: SesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SesResolver, SesService],
    }).compile();

    resolver = module.get<SesResolver>(SesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
