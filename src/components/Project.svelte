<script>
  import { onMount } from "svelte";
  export let project,
    isReversed = false,
    isSummary = false;
  let startDate = "",
    endDate = "";
  onMount(() => {
    startDate = dayjs(project.startDate).format("MMMM YYYY");
    endDate = dayjs(project.endDate).format("MMMM YYYY");
  });
</script>

<style lang="scss">
  .project {
    max-width: 200px;
    display: flex;
    position: relative;
    border: 1px solid black;
    justify-content: space-between;
    font-size: 50%;
  }
  .project__logo {
    width: 70%;
  }
  .techno {
    width: 25%;
  }
  .techno img {
    width: 100%;
  }
  .project__logo-wrapper {
    position: relative;
    top: -20px;
    left: 0;

    width: 70px;
    height: 70px;
    border: 1px solid black;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .project__period {
    position: absolute;
    top: -25px;
    text-align: center;
    width: 100%;
  }
  .project__period h4 {
    text-transform: capitalize;
    font-weight: 900;
  }
  .project__technos,
  .project__company,
  .project__details {
    flex: 1;
    margin: 8px;
  }

  .project__company {
    display: flex;
    flex-flow: column;
    align-items: center;
    h3 {
      text-align: center;
    }
  }

  .project__details p {
    margin: 0;
    font-size: 0.8em;
  }

  .techno__list {
    display: flex;
    flex-flow: row wrap;
  }

  .reversed {
    .project__period {
      bottom: -25px;
      top: unset;
    }
    .project__company {
      flex-flow: column-reverse;
    }
    .project__logo-wrapper {
      top: unset;
      bottom: -20px;
    }
  }

  .project__summary {
    position: initial;
  }
</style>

{#if !isSummary}
  <div class={`project ${isReversed ? 'reversed' : ''}`}>
    <div class="project__period">{startDate} - {endDate}</div>

    <div class="project__technos">
      <h4>Technos</h4>
      <ul class="techno__list">
        {#each project.technologies as techno}
          <li class="techno">
            <img src={techno.logo} alt={techno.label} />
          </li>
        {/each}
      </ul>
    </div>

    <div class="project__company">
      <div class="project__logo-wrapper">
        <img
          class="project__logo"
          src={project.logo}
          alt={`Logo of ${project.company}`} />
      </div>
      <h3>{project.company}</h3>
    </div>
    <div class="project__details">
      <h4>Product</h4>
      <p>{project.name}</p>
      <br />

      <h4>Role</h4>
      <p>{project.role}</p>

    </div>
  </div>
{/if}

{#if isSummary}
  <div class="project__logo-wrapper project__summary">
    <img
      class="project__logo"
      src={project.logo}
      alt={`Logo of ${project.company}`} />
  </div>
{/if}
