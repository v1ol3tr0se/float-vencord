import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const css = readFileSync(new URL("../float.theme.css", import.meta.url), "utf8");

test("meta header has what vencord's theme list shows", () => {
	const header = css.split("/**", 2)[1]?.split("*/", 1)[0] ?? "";
	for (const tag of ["name", "author", "version", "description"]) {
		assert.match(header, new RegExp(`^ \\* @${tag} \\S`, "m"), `missing @${tag} in the meta header`);
	}
});

test("every :root knob is read wherever float is active", () => {
	const knobs = css.match(/^:root \{([^}]*)\}/m)[1].match(/--[\w-]+(?=:)/g);
	const float = css.slice([...css.matchAll(/^@media [^{]+\{/gm)].at(-1).index);
	for (const knob of knobs) {
		assert.match(float, new RegExp(`var\\(${knob}[,)]`), `${knob} does nothing in the float block`);
	}
});
