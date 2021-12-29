import { Test, TestingModule } from '@nestjs/testing';
import { ChairsResolver } from './chairs.resolver';
import { ChairsService } from './chairs.service';

describe('ChairsResolver', () => {
  let resolver: ChairsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChairsResolver, ChairsService],
    }).compile();

    resolver = module.get<ChairsResolver>(ChairsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
