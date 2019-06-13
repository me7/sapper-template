<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let player = {
    name: "",
    score: 0
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch("add-player", player);
    player = {
      name: "",
      score: 0
    };
  };
</script>

<form class="grid-3" on:submit={onSubmit}>
  <input bind:value={player.name} placeholder="Player Name" type="text" />
  <input bind:value={player.score} placeholder="Player Score" type="number" />
  <button class="btn btn-primary" type="submit">Add Player</button>
</form>
