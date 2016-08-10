<template>
  <div>
     <div class="item" v-for='edu in education'>
        <div class="content">
            <h3 class="school-name">{{edu.school_name}}({{degree[edu.type]}})</h3>
            <h4 class="major">{{edu.major}}</h4>
        </div>
        <aside class="timeline">
            <time class="timeline">{{edu.start}} ~ {{edu.end}}</time>
        </aside>
    </div> 
  </div>
</template>

<script>
import Resume from '../resume.json';

const degrees = {
  undergraduate: '本科',
  master: '硕士',
  doctor: '博士',
};

export default {
  data() {
    return {
      education: Resume.education,
      degree: degrees,
    };
  },
};
</script>


<style lang="stylus" scoped>
@require '../assets/stylus/style.styl'

.item
  display: flex
  padding: 8px 0
  align-items: center
  border-bottom: 1px dashed $muted-text-color

&:last-child
  border-bottom: none
  padding-bottom: 0

.timeline
  font-weight: $font-weight-bold

.content
  flex: 1

#education
  .content
    display: flex

  .school-name
  .major
    width: 50%
    font-size: 1em
    font-weight: $font-weight-bold

.grid
  aside
    align-self: center

.grid-item
  float: left
  display: flex
  width: 50%
  margin-top: 1em
  box-sizing: border-box

  &:nth-child(odd)
    padding-right: .75em

  &:nth-child(even)
    padding-left: .75em

.grid-content
  flex: 1
  align-self: flex-star
</style>