import { pipe } from './pipe';
import { filter } from './filter';
import { toArray } from './toArray';
import { delay } from './delay';

it('should be possible to filter data', () => {
  const program = pipe(
    filter((x: number) => x % 2 === 0), // Is even
    toArray()
  );

  expect(program([1, 2, 3])).toEqual([2]);
  expect(program([1, 2, 3])).toEqual([2]);
});

it('should be possible to filter data (async)', async () => {
  const program = pipe(
    delay(0),
    filter((x: number) => x % 2 === 0), // Is even
    toArray()
  );

  expect(await program([1, 2, 3])).toEqual([2]);
  expect(await program([1, 2, 3])).toEqual([2]);
});

it('should be possible to filter data (Promise async)', async () => {
  const program = pipe(
    filter((x: number) => x % 2 === 0), // Is even
    toArray()
  );

  expect(await program(Promise.resolve([1, 2, 3]))).toEqual([2]);
  expect(await program(Promise.resolve([1, 2, 3]))).toEqual([2]);
});
