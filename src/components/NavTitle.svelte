<script>
  export let segment;
  const routes = [
    "whoami",
    "projects",
    "technos",
    "education",
    "hobbies",
    "contact"
  ];

  let labelDictionary = {
    whoami: "Who is he?",
    projects: "What has he been up to?",
    technos: "What technologies are up his sleeve?",
    education: "My Education & Languages",
    hobbies: "My Hobbies",
    contact: "Contact Me"
  };
</script>

<style>
  h1.nav-title {
    font-size: 2em;
    font-weight: 600;
    color: black;
    display: inline;
    padding: 10px;
    margin: 0;
    text-transform: uppercase;
    border-bottom: 2px solid black;
  }
</style>

<h1 class="nav-title">{labelDictionary[segment]}</h1>
