## SMIL Animations

[link to mozilla docs here!](https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL)


Example of animation the morph of an svg;

```
<svg width="300px" height="100px">
       <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
       <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
            <animate attributeName="cx" from="0" to="100" dur="5s" repeatCount="indefinite" />
       </circle>
     </svg>

```

### SVG ANimation spec and it's relation to smil;

[here is the W3C spec](https://www.w3.org/TR/SVG/animate.html)
