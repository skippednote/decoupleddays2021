import Characters from "./Characters.svelte";

let app;
const dom = document.getElementById("svelte-characters");
if (dom) {
  app = new Characters({
    target: dom,
  });
}

export default app;
