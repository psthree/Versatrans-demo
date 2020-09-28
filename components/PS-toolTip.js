const template = document.createElement('template');

template.innerHTML = `
<style>

svg {
cursor: pointer;
width: 1em;
}
.container-tooltip {
  display: inline-block;
  position: relative;
  z-index: 2
}
.icon-waiting{
	fill:magenta;
}
.icon-active {
	fill:green;
	display: none;
}
.tooltip-text-container {
	position: absolute;
  bottom: 125%;
  min-width: 200px;
	/* width: 200px; */
	/* max-width: 200px */
	z-index: 3;
	background-color: lightYellow;
	box-shadow: 5px 5px 10px rgba(0,0,0,.1);
	font-size: 25px;
	border-radius: .5rem;
	padding: 1rem;
	transform: scale(0);
	transform-origin: bottom left;
	transition: .4s ease;
}
</style>



<div class="container-tooltip">

<svg  class="icon-waiting" viewBox="0 0 23.625 23.625">
<g>
	<path  d="M11.812,0C5.289,0,0,5.289,0,11.812s5.289,11.813,11.812,11.813s11.813-5.29,11.813-11.813
		S18.335,0,11.812,0z M14.271,18.307c-0.608,0.24-1.092,0.422-1.455,0.548c-0.362,0.126-0.783,0.189-1.262,0.189
		c-0.736,0-1.309-0.18-1.717-0.539s-0.611-0.814-0.611-1.367c0-0.215,0.015-0.435,0.045-0.659c0.031-0.224,0.08-0.476,0.147-0.759
		l0.761-2.688c0.067-0.258,0.125-0.503,0.171-0.731c0.046-0.23,0.068-0.441,0.068-0.633c0-0.342-0.071-0.582-0.212-0.717
		c-0.143-0.135-0.412-0.201-0.813-0.201c-0.196,0-0.398,0.029-0.605,0.09c-0.205,0.063-0.383,0.12-0.529,0.176l0.201-0.828
		c0.498-0.203,0.975-0.377,1.43-0.521c0.455-0.146,0.885-0.218,1.29-0.218c0.731,0,1.295,0.178,1.692,0.53
		c0.395,0.353,0.594,0.812,0.594,1.376c0,0.117-0.014,0.323-0.041,0.617c-0.027,0.295-0.078,0.564-0.152,0.811l-0.757,2.68
		c-0.062,0.215-0.117,0.461-0.167,0.736c-0.049,0.275-0.073,0.485-0.073,0.626c0,0.356,0.079,0.599,0.239,0.728
		c0.158,0.129,0.435,0.194,0.827,0.194c0.185,0,0.392-0.033,0.626-0.097c0.232-0.064,0.4-0.121,0.506-0.17L14.271,18.307z
		 M14.137,7.429c-0.353,0.328-0.778,0.492-1.275,0.492c-0.496,0-0.924-0.164-1.28-0.492c-0.354-0.328-0.533-0.727-0.533-1.193
		c0-0.465,0.18-0.865,0.533-1.196c0.356-0.332,0.784-0.497,1.28-0.497c0.497,0,0.923,0.165,1.275,0.497
		c0.353,0.331,0.53,0.731,0.53,1.196C14.667,6.703,14.49,7.101,14.137,7.429z"/>
</g>
</svg>
<svg  class="icon-active" viewBox="0 0 23.625 23.625" id="icon-tooltip">
<g>
	<path  d="M11.812,0C5.289,0,0,5.289,0,11.812s5.289,11.813,11.812,11.813s11.813-5.29,11.813-11.813
		S18.335,0,11.812,0z M14.271,18.307c-0.608,0.24-1.092,0.422-1.455,0.548c-0.362,0.126-0.783,0.189-1.262,0.189
		c-0.736,0-1.309-0.18-1.717-0.539s-0.611-0.814-0.611-1.367c0-0.215,0.015-0.435,0.045-0.659c0.031-0.224,0.08-0.476,0.147-0.759
		l0.761-2.688c0.067-0.258,0.125-0.503,0.171-0.731c0.046-0.23,0.068-0.441,0.068-0.633c0-0.342-0.071-0.582-0.212-0.717
		c-0.143-0.135-0.412-0.201-0.813-0.201c-0.196,0-0.398,0.029-0.605,0.09c-0.205,0.063-0.383,0.12-0.529,0.176l0.201-0.828
		c0.498-0.203,0.975-0.377,1.43-0.521c0.455-0.146,0.885-0.218,1.29-0.218c0.731,0,1.295,0.178,1.692,0.53
		c0.395,0.353,0.594,0.812,0.594,1.376c0,0.117-0.014,0.323-0.041,0.617c-0.027,0.295-0.078,0.564-0.152,0.811l-0.757,2.68
		c-0.062,0.215-0.117,0.461-0.167,0.736c-0.049,0.275-0.073,0.485-0.073,0.626c0,0.356,0.079,0.599,0.239,0.728
		c0.158,0.129,0.435,0.194,0.827,0.194c0.185,0,0.392-0.033,0.626-0.097c0.232-0.064,0.4-0.121,0.506-0.17L14.271,18.307z
		 M14.137,7.429c-0.353,0.328-0.778,0.492-1.275,0.492c-0.496,0-0.924-0.164-1.28-0.492c-0.354-0.328-0.533-0.727-0.533-1.193
		c0-0.465,0.18-0.865,0.533-1.196c0.356-0.332,0.784-0.497,1.28-0.497c0.497,0,0.923,0.165,1.275,0.497
		c0.353,0.331,0.53,0.731,0.53,1.196C14.667,6.703,14.49,7.101,14.137,7.429z"/>
</g>
</svg>
<div class="tooltip-text-container">
	<slot name="message" />
</div>

</div> 
`;
// style="fill:#030104;"
class PSToolTip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  tooltipHandler(expandState) {
    const toolTipTextContainer = this.shadowRoot.querySelector(
      '.tooltip-text-container'
    );
    const iconWaiting = this.shadowRoot.querySelector('.icon-waiting');
    const iconActive = this.shadowRoot.querySelector('.icon-active');

    if (expandState === true) {
      toolTipTextContainer.style.transform = 'scale(1)';
      iconWaiting.style.display = 'none';
      iconActive.style.display = 'block';
      expandState = false;
    } else {
      toolTipTextContainer.style.transform = 'scale(0)';
      iconWaiting.style.display = 'block';
      iconActive.style.display = 'none';
    }
  }

  //component loaded
  connectedCallback() {
    this.shadowRoot
      .querySelector('.icon-waiting')
      .addEventListener('click', () => {
        this.tooltipHandler(true);
      });
    this.shadowRoot
      .querySelector('.icon-active')
      .addEventListener('click', () => {
        this.tooltipHandler(false);
      });

    // let the user set background color
    // (CANNOT USE A DASH like this tool - background) must be underscore
    if (this.getAttribute('tooltip_background')) {
      this.shadowRoot.querySelector(
        '.tooltip-text-container'
      ).style.background = this.getAttribute('tooltip_background');
    }

    if (this.getAttribute('text_color')) {
      this.shadowRoot.querySelector(
        '.tooltip-text-container'
      ).style.color = this.getAttribute('text_color');
    }

    if (this.getAttribute('icon_color')) {
      this.shadowRoot.querySelector(
        '.icon-waiting'
      ).style.fill = this.getAttribute('icon_color');
    }
  }
}

//this is the name ps-tooltip of the our custom element
window.customElements.define('ps-tooltip', PSToolTip);

// add transition to icon

//https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
