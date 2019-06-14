<script>
  // epoch to relative timestamp with absolute time on hover
  import timeago from "epoch-timeago";

  export let time;
</script>

<time title={new Date(time).toLocaleString()}>{timeago(time)}</time>
