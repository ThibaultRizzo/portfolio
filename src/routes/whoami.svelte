<style>
  img.profile-pic {
    border-radius: 50%;
    height: 15vw;
    width: 15vw;
    margin-top: 20px;
    object-fit: cover;
    box-shadow: 0px 4px 5px 0px #afafaf;
  }
  .doodle-banner {
    width: 25vw;
    height: 100vh;
    background: url("../doodle_border.jpg");
    background-size: 180px;
    background-repeat: repeat-y;
  }
  .container {
    display: flex;
    margin: 15px 40px;
  }
  .text-wrapper {
    height: 100%;
    width: 45vw;
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    margin: 25px 0;
    flex: 1;
  }

  h1.title {
    font-size: 4.5vw;
    white-space: nowrap;
  }
  .name {
    font-size: 1.3em;
    margin-left: 5vw;
  }
  p.description {
    margin: 0 0 40px 6vw;
  }
  h2.goal {
    text-align: center;
    align-self: stretch;
    color: black;
    text-transform: uppercase;
    font-size: 1.3em;
    font-weight: 600;
    margin-top: 10px;
  }
  /* .doodle-line {
    position: absolute;
    bottom: 0;
    right: 20px;
    height: 80%;
    width: 10px;
    background: url("../doodle_pattern_3.jpg") repeat-y;
    background-size: 9px;
  } */
</style>

<svelte:head>
  <title>Who Am I</title>
</svelte:head>

<!-- <img src="doodle_border.jpg" alt="Doodle" /> -->

<div class="container">
  <div class="doodle-banner" />
  <div class="text-wrapper">
    <h1 class="title">
      THIS IS
      <br />
      <strong class="name">Thibault Rizzo</strong>
    </h1>
    <p class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere nibh
      tincidunt est fermentum, nec placerat magna lacinia. Interdum et malesuada
      fames ac ante ipsum primis in faucibus. Quisque sodales sapien ac euismod
      consequat. Morbi dui eros, tempus nec sem in, luctus condimentum urna.
      Vivamus posuere sapien ac nisl lobortis, sit amet ullamcorper erat
      lobortis. Donec tempor, arcu sed cursus accumsan, orci massa luctus
      lectus, ut vehicula ligula mauris vel ante.
    </p>
    <h2 class="goal">My aim is to build quality bug-free software.</h2>
  </div>

  <img class="profile-pic" alt="Profile Pic" src="profile_picture.jpg" />
  <!-- <div class="doodle-line" /> -->
</div>
