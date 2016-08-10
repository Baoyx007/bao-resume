<template>
  <div id="app">
    <main>
      <header >
        <resume-header></resume-header>
      </header>
      <article>
        <section id="education" >
          <h2 class="section-title">教育经历<small class="subtitle">education</small></h2>
          <education></education>
        </section>
        <section id="language">
          <h2 class="section-title">实习经历<small class="subtitle">internship</small></h2>
          <internship></internship>
        </section>
        <section id="experience">
          <h2 class="section-title">项目经历<small class="subtitle">project</small></h2>
          <experience></experience>
        </section>
        <section id="skill">
          <h2 class="section-title">相关技能<small class="subtitle">skill</small></h2>
          <skill></skill>
        </section>
      </article>
    </main>
    <footer>
      <a href="https://github.com/idiotWu/my-resume" target="_blank">This resume</a> is powered by Vue, Webpack and Stylus. <a href="assets/resume.pdf" target="_blank" rel="download">Download PDF</a> or <a id="print" href="javascript:;">print it</a>.
      </footer>
  </div>
</template>
<script>
import resumeHeader from './components/resumeHeader';
import education from './components/education';

export default {
  components: {
    resumeHeader,
    education,
  },
};
</script>

<style lang="stylus">
@require 'assets/stylus/style.styl'

body
  margin: 0
  padding: 50px
  font-family: $font-family
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
  // background-color:$container-color


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

h1
h2
h3
h4
  margin: 0
  font-weight: $font-weight-bold

.section-title
  color: $section-title
  padding-bottom: 6px
  border-bottom: 1px dashed $muted-text-color

.subtitle
  display: inline-block
  padding-left: 1em
  text-transform: capitalize
  color: $subtitle
  vertical-align: bottom

code
  font-family: $font-family
  font-size: 1em
  font-weight: $font-weight-bold
  color: $code-color
ul
ol
dl
  margin: 0
  padding: 0
  list-style: none

li
  line-height: $line-height

dt
  display: list-item

</style>
