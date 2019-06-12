<style lang="sass">
  $blue: #04b;
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    color: $blue;
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  a {
    text-transform: uppercase;
    color: red;
    font-weight: 700;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Hello!</h1>
<p>
  This is sapper example by Gampol.
  <br />
  see
  <a href="example">example</a>
  for more detail
</p>
