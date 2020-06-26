<script>
  import Project from "../components/Project.svelte";
  import ProjectModal from "../components/ProjectModal.svelte";
  import state from "../state.js";
  let selectedProject = null;
  let MAX_DISPLAYED_PROJECTS = 4;
  let currentIndex = MAX_DISPLAYED_PROJECTS;
  const maxIndex = state.projects.length - 1;
  const sortedProjects = state.projects.sort(
    (a, b) => a.startDate - b.startDate
  );

  $: displayedProjects = sortedProjects.filter((_, i) => i < currentIndex);
  $: projectsByYear = displayedProjects.reduce((acc, val) => {
    if (!val.startDate) {
      throw new Error(
        `Cannot parse invalid/inexisting start date for project: ${val.name}`
      );
    }
    if (acc[val.startDate.getFullYear()]) {
      acc[val.startDate.getFullYear()].push(val);
    } else {
      acc[val.startDate.getFullYear()] = [val];
    }
    return acc;
  }, {});

  function getProjectClass(name) {
    const index = displayedProjects.findIndex(p => p.name === name) + 1;
    if (index % 4 === 1) {
      return "top";
    } else if (index % 4 === 2) {
      return "bottom";
    } else if (index % 4 === 3) {
      return "mid-top";
    } else {
      return "mid-bottom";
    }
  }

  function isSummary(name) {
    const index = displayedProjects.findIndex(p => p.name === name);
    return index < currentIndex - MAX_DISPLAYED_PROJECTS;
  }
</script>

<style lang="scss">
  $TAIL_WIDTH: 50px;
  .timeline {
    position: relative;
    display: flex;
    margin: 20px;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding-left: $TAIL_WIDTH;
  }
  .arrow {
    $ARROW_WIDTH: 4px;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    .body {
      border-bottom: $ARROW_WIDTH solid black;
      flex: 1;
    }
    .head {
      right: -10px;
      top: calc(-15px + #{$ARROW_WIDTH} / 2);
      height: 0;
      width: 0;
      position: absolute;
      border-top: 15px transparent solid;
      border-left: 30px black solid;
      border-bottom: 15px transparent solid;
      cursor: pointer;
      &.end {
        border-radius: 50%;
        border: 15px solid black;
        cursor: default;
      }
    }

    .tail {
      width: $TAIL_WIDTH;
      border-bottom: $ARROW_WIDTH dashed black;
      cursor: pointer;

      &.hidden {
        width: 0;
      }
    }
  }

  .year__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .year {
      z-index: 2;
      position: absolute;
      font-size: 3em;
      background: white;
      padding: 10px;
      font-weight: 900;
    }
    .line {
      border: 1px solid black;
      flex: 1;
      width: 0;
    }
    .project__wrapper {
      display: flex;
      align-items: center;
    }
    $HEIGHT: 40%;
    $MID_HEIGHT: 32%;
    .top {
      flex-flow: column nowrap;
      position: relative;
      height: $HEIGHT;
      top: -$HEIGHT/2;
    }
    .mid-top {
      flex-flow: column nowrap;
      position: relative;
      height: $MID_HEIGHT;
      top: -$MID_HEIGHT/2;
    }
    .bottom {
      flex-flow: column-reverse nowrap;
      position: relative;
      height: $HEIGHT;
      bottom: -$HEIGHT/2;
    }
    .mid-bottom {
      flex-flow: column-reverse nowrap;
      position: relative;
      height: $MID_HEIGHT;
      bottom: -$MID_HEIGHT/2;
    }
  }
</style>

<svelte:head>
  <title>Thibault RIZZO - Projects</title>
</svelte:head>
<div class="timeline">

  {#each Object.entries(projectsByYear) as [year, projects]}
    <div class="year__wrapper">
      {#each projects as project, i}
        <div
          class={`project__wrapper ${getProjectClass(project.name)}`}
          on:click={() => (selectedProject = project)}>
          <Project
            {project}
            isReversed={['bottom', 'mid-bottom'].includes(getProjectClass(project.name))}
            isSummary={isSummary(project.name)} />
          <div class="line" />
        </div>
      {/each}
      <div class="year">{year}</div>
    </div>
  {/each}

  <div class="arrow">
    <div
      on:click={() => {
        if (currentIndex > MAX_DISPLAYED_PROJECTS) {
          currentIndex--;
        }
      }}
      class={currentIndex === MAX_DISPLAYED_PROJECTS ? 'tail hidden' : 'tail'} />
    <div class="body" />
    <div
      on:click={() => {
        if (currentIndex < maxIndex) {
          currentIndex++;
        }
      }}
      class={currentIndex === maxIndex ? 'head end' : 'head'} />
  </div>
</div>

<ProjectModal
  open={selectedProject !== null}
  project={selectedProject}
  on:close={() => (selectedProject = null)} />
