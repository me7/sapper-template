<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`/example/user.json`)
      .then(r => r.json())
      .then(users => {
        return { users };
      });
  }
</script>

<script>
  export let users;
</script>

<ul>
  <li>declare script context = module</li>
  <li>export async function preload(page, session)</li>
  <li>fetch and return data</li>
</ul>
<ul>
  {#each users as u}
    <li> {u.name} has score = {u.score} </li>
  {/each}
</ul>
