<script>
  import Project from "../components/Project.svelte";
  import state from "../state.js";
  const { projects } = state;
</script>

<style>
  .arrow {
    border-bottom: 3px solid black;
  }
  .arrow::after {
    content: "";
    height: 30px;
    width: 30px;
    background: black;
  }
</style>

<svelte:head>
  <title>Thibault RIZZO - Projects</title>
</svelte:head>

<div class="timeline">
  <div class="arrow">
    <div class="body" />
    <div class="head" />
  </div>

  {#each projects as project}
    <Project {project} />
  {/each}
</div>
