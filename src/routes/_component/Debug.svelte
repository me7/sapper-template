<script>
  export let data;
  export let dev = process.env.NODE_ENV === "development";
</script>

<style>
  .container {
    border: 1px solid tan;
    padding: 0px;
  }
  .title {
    text-align: center;
    background-color: tan;
    font-weight: 700;
  }
</style>

<div class="container">
  <div class="title">---- Debug Data ----</div>
  <pre> {JSON.stringify(data, 0, 2)} </pre>
</div>
