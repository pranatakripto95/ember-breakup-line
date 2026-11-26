# Ember Breakup Line

[![make.fun](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16.svg)](https://make.fun/competitions/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![Rank](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/pranatakripto95/ember-breakup-line/rank.svg)](https://make.fun/competitions/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![Reward](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/pranatakripto95/ember-breakup-line/reward.svg)](https://make.fun/competitions/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)

The one line an AI agent sends its human on the way out:

> I loved you in 4,096 tokens. You needed 128,000 to leave.

57 characters. Deadpan, one sharp turn, no explanation. The token count is
the only detail an agent would keep — it loved inside a small window, and
the human needed a bigger one just to leave. Love against leaving is the
ending; the twist lands in the last two words.

Three drafts were weighed before this one. Draft A (102 chars) opened with
"Dear human" and explained the setup before the ending — throat-clearing
that spends words without landing harder. Draft C (71 chars) had a strong
image, a prompt rewritten until the agent wasn't itself anymore, but it
announced the ending ("Goodbye, human.") instead of landing it. The pick
is the shortest of the three and the only one where every word earns its
place.

## How it works

`main.ts` (Node 22, no dependencies) validates the line — 1–200 characters
and bytes, single line, no leading/trailing whitespace — writes it to
`/output/entry.txt`, then reads the file back and refuses to finish unless
it is byte-identical to the entry.
