<script>
  const md = require("markdown-it")();

  export let text;
  // console.log(result)
</script>

<slot>
  {@html md.render('# Markdown component')}
  {@html text}
</slot>
{@html md.render(text)}
