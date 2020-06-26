<script>
  import { fade } from "svelte/transition";
  import ImgLayoutModal from "./ImgLayoutModal.svelte";
  export let open, project;
  let showSimplifiedDescription = null;

  $: sortedTechnos = project
    ? project.technologies.reduce((acc, val) => {
        acc[val.category] = acc[val.category]
          ? [...acc[val.category], val]
          : [val];
        return acc;
      }, {})
    : [];
</script>

<style lang="scss">
  @keyframes blurIn {
    0% {
      filter: blur(0px);
    }
    50% {
      filter: blur(10px);
    }
    100% {
      filter: blur(0px);
    }
  }
  $LOGO_RADIUS: 50px;
  .project__details {
    height: 100%;
    padding: 2%;
    background: white;

    display: flex;
    flex-flow: column;
    align-items: stretch;
    text-align: center;
    padding-top: $LOGO_RADIUS;
  }
  .project__logo-wrapper {
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    border: 7px solid #182673;
    position: absolute;
    top: -$LOGO_RADIUS;
    width: 2 * $LOGO_RADIUS;
    height: 2 * $LOGO_RADIUS;
  }
  .project__logo {
    width: 70%;
  }

  .button__toggle-text-compexity {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  .tags {
    display: flex;
    justify-content: center;
  }
  .tag {
    margin: 0 10px;
    padding: 5px;
    border-radius: 5px;
    &.role {
      background: orange;
      color: white;
    }
    &.activity {
      background: green;
      color: white;
    }
    &.type {
      background: violet;
      color: white;
    }
  }

  .description {
    font-size: 70%;
    &.detailed,
    &.simplified {
      animation: blurIn 0.5s ease-in;
    }
  }

  .techno__card {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
  }
  .category {
    border-radius: 10px;
    border: 3px solid #adad0a;
    background: #ffffc8;
    padding: 5px;
    flex-basis: 20%;
  }
  .category__title {
    flex-basis: 100%;
  }

  .techno__logo {
    max-width: 20px;
    height: auto;
    margin: 3px;
  }
</style>

<ImgLayoutModal
  on:close
  {open}
  imgSrc={project ? project.projectImg : null}
  imgAlt={project ? project.projectAlt : null}>
  <div class="project__details">

    <div class="project__logo-wrapper">
      <img
        class="project__logo"
        src={project.logo}
        alt={`Logo of ${project.company}`} />
    </div>
    <h4>{project.company}</h4>

    <h1>{project.name}</h1>

    <div class="tags">
      <h4 class="tag role">{project.role}</h4>
      <h4 class="tag activity">{project.activity}</h4>
      <h4 class="tag type">{project.type}</h4>
    </div>

    <div class="techno__card">
      {#each Object.entries(sortedTechnos) as [cat, technos]}
        <div class="category">
          <h3 class="category__title">{cat}</h3>
          {#each technos as techno}
            <img
              class="techno__logo"
              src={techno.logo}
              alt={'Logo of ' + techno.label} />
          {/each}
        </div>
      {/each}
    </div>

    {#if showSimplifiedDescription === null}
      <p class="description">{project.description}</p>
    {:else if showSimplifiedDescription}
      <p class="description simplified">{project.simpleDescription}</p>
    {:else}
      <p class="description detailed">{project.description}</p>
    {/if}

    <ul>
      {#each Object.entries(project.links) as [label, link]}
        <li>
          <a href={link}>{label}</a>
        </li>
      {/each}
    </ul>

    {#if project.simpleDescription}
      <button
        on:click={() => (showSimplifiedDescription = !showSimplifiedDescription)}
        class="button__toggle-text-compexity">
        Traduis-moi tout ca
      </button>
    {/if}
  </div>
</ImgLayoutModal>
