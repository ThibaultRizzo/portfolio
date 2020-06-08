<script>
  export let project,
    isReversed = false;
</script>

<style>
  .project {
    width: 200px;
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
    position: absolute;
    /* margin: 0 auto; */
    /* text-align: center; */
    width: 70px;
    height: 70px;
    bottom: 0;
    border: 1px solid black;
    background: white;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, 20px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .project__period {
    position: absolute;
    top: -20px;
    text-align: center;
    width: 100%;
  }
  .project__period h4 {
    font-weight: 900;
  }
  .project__technos,
  .project__company,
  .project__details {
    flex: 1;
    margin: 8px;
  }

  .project__details p {
    margin: 0;
    font-size: 0.8em;
  }
</style>

<div class={`project ${isReversed ? 'reversed' : ''}`}>
  <div class="project__period">
    <h4>{project.startDate} - {project.endDate}</h4>
  </div>
  <div class="project__logo-wrapper">
    <img
      class="project__logo"
      src={project.logo}
      alt={`Logo of ${project.company}`} />
  </div>
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
