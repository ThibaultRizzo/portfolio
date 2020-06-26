<script>
  import state from "../state.js";
</script>

<style lang="scss">
  @import "../styles/mixin.scss";
  @import "../styles/global.scss";
  .card {
    @include shadowed-card-and-header($primary);
  }

  .block__container {
    display: flex;
  }

  .logo {
    width: 80px;
    height: auto;
  }
  .education__container,
  .certification__container {
    font-size: 50%;
    justify-content: space-around;
    width: 100%;
  }
  .block__border {
    margin: 30px 0;
    border: 1px solid $primary;
  }
</style>

<svelte:head>
  <title>Thibault RIZZO - Education</title>
</svelte:head>

<div class="card">
  <div class="card__header">
    <h3>Formations</h3>
  </div>
  <div class="block__container education__container">
    {#each state.education as school, i}
      {#if i > 0}
        <div class="block__border" />
      {/if}
      <div class="block">
        <img class="logo" src={school.logo} alt={'Logo of ' + school.entity} />
        <h4>{school.entity}</h4>
        <h2>{school.title}</h2>
        <h3>{school.year}</h3>
        <p>{school.description}</p>
      </div>
    {/each}
  </div>
</div>

<div class="card">
  <div class="card__header">
    <h3>Certifications</h3>
  </div>
  <div class="block__container certification__container">
    {#each state.certifications as certification, i}
      {#if i > 0}
        <div class="block__border" />
      {/if}
      <div class="block">
        <img
          class="logo"
          src={certification.logo}
          alt={'Logo of ' + certification.institution} />
        <h4>{certification.institution}</h4>
        <h2>{certification.title}</h2>
        <h3>{certification.year}</h3>
      </div>
    {/each}
  </div>
</div>
