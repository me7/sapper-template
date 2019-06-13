<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let player = {
    name: "Name",
    score: "score"
  };

  let showButton = false;
  const toggleShowButton = () => (showButton = !showButton);
  const incScore = () => {
    player.score += 1;
  };
  const decScore = () => {
    player.score -= 1;
  };

  const deletePlayer = e => {
    dispatch("delete-player", player);
  };
</script>

<div class="card">
  <h1 class="fg-primary">
     {player.name}
    <button class="btn btn-sm" on:click={toggleShowButton}>
      {#if showButton}-{:else}+{/if}
    </button>
    <button class="btn btn-sm btn-danger" on:click={deletePlayer}>x</button>
  </h1>
  <h3>{player.score}</h3>
  {#if showButton}
    <button class="btn btn-dark" on:click={decScore}>-</button>
    <button class="btn btn-primary" on:click={incScore}>+</button>
  {/if}
</div>
