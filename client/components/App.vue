<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
:root {
  --dark-sq-color: #70a070;
  --light-sq-color: #e0d070;
  --square-size: 1.2em;

      -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}
.page {
  text-align: center;
  /* nesting for the need to test postcss */
  code {
    background-color: #f0f0f0;
    padding: 3px 5px;
    border-radius: 2px;
  }
}

</style>
