<script>
  import * as api from "../_api";
  import Debug from "../_component/Debug.svelte";
  export let data = { msg: "no data" };

  let promise;

  function fetchArticles() {
    api
      .get(`articles`, null)
      .then(d => (data = d))
      .catch(e => (data = e));
    // data = "articles";
  }

  function handleClick() {
    promise = fetchArticles();
  }
</script>

<button on:click={handleClick}>Fetch Articles</button>
<!-- {#await promise}
  <p>Waiting result...</p>
{:then data}
  <Debug {data} />
{:catch error}
  error: {error}
{/await} -->
<Debug {data} />
