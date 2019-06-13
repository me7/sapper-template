<script>
  import Navbar from "./_Navbar.svelte";
  import Player from "./_Player.svelte";
  import AddPlayer from "./_AddPlayer.svelte";

  let player = [
    { name: "John", score: 100 },
    { name: "Ball", score: 10 },
    { name: "Hall", score: 70 }
  ];

  const addPlayer = e => {
    player = [...player, e.detail];
  };

  const delPlayer = e => {
    player = player.filter(p => p.name !== e.detail.name);
  };
</script>

<Navbar />
<AddPlayer on:add-player={addPlayer} />
<div class="grid-3">
  {#if player.length === 0}
    No Player
  {:else}
    {#each player as p}
      <Player player={p} on:delete-player={delPlayer} />
    {/each}
  {/if}
</div>
