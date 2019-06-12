<script>
  let examples = [
    { href: "user.json", text: "generate json from server" },
    { href: "json", text: "list data from json" },
    { href: "db", text: "database connection" }
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
