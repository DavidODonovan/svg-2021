
const twitIconGroup = document.querySelector('.twitter-icon-group')

const twitOutline = document.querySelector('.twitter-outline')

const twitIcon = document.querySelector('.twitter-icon')

const youtubeIconGroup = document.querySelector('.youtube-icon-group')

const youtubeCircleExpand = document.querySelector('.youtube-circle-expand')

var myRoot = document.querySelector(':root');

twitIconGroup.addEventListener("mouseenter",()=>{
  twitOutline.className.baseVal+= " activeOutline";
  twitIcon.className.baseVal+= " activeIcon";
})

twitIconGroup.addEventListener("mouseleave",()=>{
   twitOutline.className.baseVal = "twitter-outline"
   twitIcon.className.baseVal = "twitter-icon"
})

youtubeIconGroup.addEventListener('mouseenter', ()=>{
  youtubeCircleExpand.className.baseVal += " youtubeCircleActive"
  console.log(youtubeCircleExpand.className.baseVal)
})

youtubeIconGroup.addEventListener('mouseleave', ()=>{
  youtubeCircleExpand.className.baseVal = "youtube-circle-expand"

})
