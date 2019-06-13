<script context="module">
  export function preload() {
    return this.fetch("/scoreboard/players.json")
      .then(r => r.json())
      .then(player => {
        return { player };
      })
      .catch(e => {
        console.log(e);
        let player = [];
        return { player };
      });
  }
</script>

<script>
  import Navbar from "./_Navbar.svelte";
  import Player from "./_Player.svelte";
  import AddPlayer from "./_AddPlayer.svelte";

  export let player = [
    { name: "john", score: 40 },
    { name: "ball", score: 50, ts: new Date() },
    { name: "hall", score: 80 },
    { name: "imp", score: 30 },
    { name: "nok", score: 30 },
    { name: "imp", score: 30 },
    { name: "kok", score: 30 },
    { name: "imp", score: 30 }
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
