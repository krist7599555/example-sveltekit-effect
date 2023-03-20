import type { PageServerLoad } from './$types';
import type { Effect, Either, Option, Matcher } from '$lib/effect-common';
import { constant, tuple } from '$lib/effect-common';

export const load = (async () => {
  const ef = await Effect.succeed(13).map(x => x * 2).runPromise;
  const op = Option.some(9);
  const ei = Either.right(9).map(x => x * 2);
  const mt = Matcher.value({ value: ':hi' } as { value: string } | { value: number })
    .when({ value: Matcher.string }, constant(77 as const))
    .when({ value: Matcher.number }, constant(99 as const)).exhaustive;

  const zz = Either.right(13)
    .toOption.map(x => x.toString())
    .map(x => tuple(x, x))
    .toEither(constant('BAD' as const));
  const res = {
    ef,
    op,
    ei,
    mt,
    zz,
    date: new Date().toLocaleTimeString(),
  };
  console.log(res);
  const res2 = JSON.parse(JSON.stringify(res));
  console.log(res2);
  return res2; // ! not sure why effect data is not pojo?
}) satisfies PageServerLoad;
