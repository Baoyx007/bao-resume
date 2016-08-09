<template>
	<div id="overview">
		<section id="profile">
		    <h1 id="name" class="highlight">{{resume.name}}</h1>
		    <h2 id="jobs" v-if="resume.jobs">
		        <!-- <small class="description">求职意向：</small> -->

		        <div class="job" class="highlight" v-for="job in resume.jobs">{{job}}</div>
		    </h2>
		</section>

		<address id="contact">
		    <ul id="contacts">
		        <li v-for="contact in resume.contacts">
		            <i class="icon icon-{{$key}}"></i>
		            <span class="description">{{$key}}</span>
		            <a href="mailto:{{contact}}" target="_blank" v-if=" $key == 'email'">{{contact}}</a>
		            <span v-else>{{contact}}</span>

		        </li>
		    </ul>
		</address>

		<div id="link">
		    <ul id="links" >
		        <li v-for="link in resume.links">
		        	<span class="description"> 
		            {{{ $key | description}}}
		          </span>
		            <!-- {{link @key this}} -->
		          <a href="{{link.url}}" target="_blank">{{link.username || link.url}}</a>
		        </li>
		    </ul>
		</div> 

	</div>
</template>

<script>
	import Resume from '../store.js';

	export default {
  data() {
    return {
      resume: Resume,
    };
  },
};
</script>

<style lang="stylus">
@require '../assets/stylus/vars.styl'
@require '../assets/stylus/vendor/icomoon.styl'
@require '../assets/stylus/vendor/kai-gen-gothic.styl'

#overview
  padding: $white-space-size $white-space-size .5em
  color: #fff
  background: $header-bg
  text-shadow: 0 1px 1px rgba(0, 0, 0, .5)

  .highlight
  .description
    font-weight: $font-weight-bold
    color: $header-txt

  a
    color: #fff

#profile
  float: left

  h1
  h2
    display: inline-block
    font-weight: normal 
    margin:0
    
#name
  font-size: 3.5em

#jobs
  padding-left: .3em
  font-size: 1.5em
  color: $muted-text-color

  .job
    &:after
      content: '/'
      padding: 0 .3em

    &:last-child
      &:after
        display: none

#contact
  float: right
  font-style: normal
  
  .description
  	display:none 

  .icon
    color: lighten($muted-text-color, 50%)

#link
  clear: both
  padding-top: 5px
  border-top: 2px solid #ccc



#links
  @extend $justify
  // justify-content :space-around

  .description
    display: inline-block
    
</style>