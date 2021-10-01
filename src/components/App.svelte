<script>
  import { onMount } from "svelte";
  export let appName = "turtleChat";
  let userData = null;

  onMount(async () => {});
</script>

<svelte:head>
  <title>{appName}</title>
</svelte:head>

<div class="container-fluid">componets go here</div>

<style>
  :global(*) {
    --bg1: rgb(0, 5, 14);
    --bg2: rgb(0, 17, 29);
    --txt1: azure;
    --btn-bg: rgb(0, 41, 59);
  }
  :global(body) {
    background-color: var(--bg1);
  }
  div {
    margin: auto !important;
    height: 100%;
  }
</style>
