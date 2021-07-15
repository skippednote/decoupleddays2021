<script>
  async function getCharacters() {
    const res = await fetch("https://rickandmortyapi.com/api/character/");
    let data = await res.json();
    data = data.results;

    if (res.ok) {
      return data;
    } else {
      throw new Error(data);
    }
  }
</script>

{#await getCharacters()}
  <h4>Fetching the Characters...</h4>
{:then characters}
  {#each characters as character}
    <details key={character.id}>
      <summary>{character.name}</summary>
      <img src={character.image} loading="lazy" alt={character.name} />
    </details>
  {/each}
{:catch error}
  <h4>There was an error!</h4>
{/await}
