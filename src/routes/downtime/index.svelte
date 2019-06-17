<script context="module">
  export async function preload(page, session) {
      console.log('TEst')
      const ret = await this.fetch(`downtime/api/downtime`)
      const player = await ret.json()
      console.log(player)
      return { player }
  }
</script>

<script>
export let player
</script>

{player}