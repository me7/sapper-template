<script context="module">
  export async function preload(page, session) {
    try {
      const ret = await this.fetch("/example/database.json");
      const data = await ret.json();
      console.log(data);
      return { data };
    } catch (e) {
      console.log(e);
    }
  }
</script>

<script>
  export let data;
</script>

database view
{#each data as d}
  <p>{new Date(d.ts)}</p>
{/each}

<p>{JSON.stringify(data)}</p>
