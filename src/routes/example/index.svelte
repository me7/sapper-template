<script>
  let examples = [
    { href: "user.json", text: "generate json from server" },
    { href: "json", text: "list data from json" },
    { href: "database", text: "database connection" },
    { href: "basic-component", text: "basic component using" },
    { href: "conduit", text: "realworld app (conduit) API call" }
  ];
</script>

<h1>Examples List</h1>
<ul>
  {#each examples as x}
    <li>
      <a href="/example/{x.href}">{x.text}</a>
    </li>
  {/each}
</ul>
