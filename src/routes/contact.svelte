<script>
  let mail = "",
    subject = "",
    body = "";

  function onSubmit() {
    fetch("sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mail,
        subject,
        body
      })
    });
    // const response = a/wait
    // window.open(`mailto:${mail}?subject=${subject}&body=${body}`);
  }
</script>

<style lang="scss">
  @import "../styles/mixin.scss";
  @import "../styles/global.scss";
  .card {
    @include shadowed-card($primary);
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    text-align: center;
  }
  .download__link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    h2 {
      margin: 0;
    }
    a {
      background: $primary;
      color: white;
      text-decoration: none;
      padding: 5px;
      text-transform: uppercase;
      border-radius: 5px;
      font-weight: bold;
      margin: 0 10px;
    }
  }
  .keyword {
    margin: 30px 0;
  }

  form {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0 auto;
    margin: 15px 0;
    input,
    textarea {
      margin: 10px 0;
      width: 200px;
    }
    button[type="submit"] {
      align-self: flex-end;
    }
  }
</style>

<svelte:head>
  <title>Thibault RIZZO - Contact Me</title>
</svelte:head>

<div class="card">

  <div class="download__link">
    <h2>Download My Resume</h2>
    <a href="../../static/CV 2020 light.pdf" download>here</a>
  </div>
  <h3 class="keyword">OR</h3>

  <div class="contact__form">
    <h2>Contact Me</h2>
    <form on:submit={onSubmit}>
      <label for="email">Your Email</label>
      <input type="email" name="email" id="email" bind:value={mail} />
      <label for="email">Your Project Title</label>
      <input type="text" name="subject" id="subject" bind:value={subject} />

      <label for="email">Give me Details</label>
      <textarea name="body" id="body" bind:value={body} rows="4" />
      <button type="submit">Send</button>
    </form>
  </div>
</div>
