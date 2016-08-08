<template>
  <div id="app">
    <main>
      <header id="overview">
        <resumeHeader></resumeHeader>
      </header>
      <article>
        <section id="education">
          <h2 class="section-title">教育经历<small class="subtitle">education</small></h2>
          <education></education>
        </section>
        <section id="language">
          <h2 class="section-title">教育历<small class="subtitle">education</small></h2>
          <internship></internship>
        </section>
        <section id="experience">
          <h2 class="section-title">教育经历<small class="subtitle">education</small></h2>
          <experience></experience>
        </section>
        <section id="skill">
          <h2 class="section-title">教育经历<small class="subtitle">education</small></h2>
          <skill></skill>
        </section>
      </article>
      {{resume}}
      <footer><a href="https://github.com/idiotWu/my-resume" target="_blank">This resume</a> is built with Vue, Webpack and Stylus. <a href="assets/resume.pdf" target="_blank" rel="download">Download PDF</a> or <a id="print" href="javascript:;">print it</a>.
      </footer>
    </main>
  </div>
</template>
<script>
import Hello from './components/Hello';
import Resume from './main.js';

export default {
  components: {
    Hello,
  },
  data() {
    return {
      resume: Resume.title,
    };
  },
};
</script>

<style lang="stylus">
@require 'assets/stylus/vars.styl'

body
  margin: 0
  padding: 50px
  // font-family: $font-family
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

  @media print
    padding: 0

main
  display: block
  margin: 0 auto
  width: $A4-width
  height: $A4-height
  line-height: $line-height
  box-shadow: 0 0 5px #ccc
  box-sizing: border-box
  overflow: hidden

  @media print
    box-shadow: none

article
  padding: ($white-space-size / 2) $white-space-size 
  font-size: 14px

  > section
    margin-bottom: 1.5em

    &:last-child
      margin-bottom: 0


a
  text-decoration: none

footer
  text-align: center

  @media print
    display: none

  a
    color: $header-hightlight

    &:hover
      text-decoration: underline


</style>
