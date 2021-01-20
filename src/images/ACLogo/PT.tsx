

import * as React from 'react';
import { ILogoStyle } from '.'

const Logo: React.FC<ILogoStyle> = ({ height, width }) => {

    return (
        <svg style={{ height, width: width ? width : '190px' }} viewBox="0 0 443 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3C9 1.34315 10.3431 0 12 0H14C15.6569 0 17 1.34315 17 3V5C17 6.65685 15.6569 8 14 8H12C10.3431 8 9 6.65685 9 5V3Z" fill="#FFAE0C" />
            <path d="M18 12C18 10.3431 19.3431 9 21 9H23C24.6569 9 26 10.3431 26 12V14C26 15.6569 24.6569 17 23 17H21C19.3431 17 18 15.6569 18 14V12Z" fill="#FFAE0C" />
            <path d="M9 34C9 32.3431 10.3431 31 12 31H14C15.6569 31 17 32.3431 17 34V36C17 37.6569 15.6569 39 14 39H12C10.3431 39 9 37.6569 9 36V34Z" fill="#FFAE0C" />
            <path d="M0 14V12C0 10.3431 1.34315 9 3 9H14C15.6569 9 17 10.3431 17 12V27C17 28.6569 15.6569 30 14 30H12C10.3431 30 9 28.6569 9 27V17H3C1.34315 17 0 15.6569 0 14Z" fill="#FFAE0C" />
            <path d="M55.578 31H59.08L50.444 6.996H46.908L38.272 31H41.74L44.12 24.098H53.164L55.578 31ZM48.71 10.294C48.71 10.294 49.22 12.47 49.628 13.694L52.28 21.31H45.004L47.69 13.694C48.098 12.47 48.642 10.294 48.642 10.294H48.71ZM61.9336 31H65.2316V22.908H67.7136L72.8816 31H76.7236L70.3656 21.446V21.378L76.0776 13.796H72.3376L67.6456 20.12H65.2316V6.996H61.9336V31ZM80.5441 24.71C80.5441 30.456 84.9301 31.136 87.1401 31.136C87.8201 31.136 88.2961 31.068 88.2961 31.068V28.144C88.2961 28.144 87.9901 28.212 87.5141 28.212C86.2561 28.212 83.8421 27.77 83.8421 24.336V16.686H87.9901V14.034H83.8421V9.07H80.6461V14.034H78.3001V16.686H80.5441V24.71ZM89.6016 37.086C89.6016 37.086 90.9956 38.14 92.9336 38.14C95.3476 38.14 97.4556 36.746 98.5096 34.094L106.568 13.796H102.998L98.8156 25.084C98.5096 25.968 98.2376 27.124 98.2376 27.124H98.1696C98.1696 27.124 97.8636 25.934 97.5236 25.05L93.2056 13.796H89.4996L96.7076 30.796L95.8576 32.768C95.2116 34.332 94.0896 35.284 92.7636 35.284C91.7096 35.284 90.7576 34.57 90.7576 34.57L89.6016 37.086ZM112.884 31H116.556L120.092 19.95C120.364 19.066 120.568 18.08 120.568 18.08H120.636C120.636 18.08 120.84 19.066 121.112 19.95L124.682 31H128.32L133.862 13.796H130.394L126.79 25.866C126.518 26.75 126.382 27.702 126.382 27.702H126.314C126.314 27.702 126.11 26.75 125.838 25.866L122.132 13.83H119.106L115.366 25.866C115.094 26.75 114.924 27.702 114.924 27.702H114.856C114.822 27.702 114.686 26.75 114.414 25.866L110.844 13.796H107.342L112.884 31ZM137.039 31H140.337V22.942C140.337 22.092 140.405 21.31 140.609 20.63C141.323 18.148 143.431 16.414 146.049 16.414C148.803 16.414 149.313 18.318 149.313 20.732V31H152.611V19.984C152.611 15.598 150.741 13.388 146.695 13.388C142.955 13.388 140.915 15.836 140.235 17.332H140.167C140.167 17.332 140.235 16.754 140.235 16.074V13.796H137.039V31ZM156.335 22.398C156.335 27.498 160.041 31.408 165.447 31.408C169.561 31.408 172.111 28.96 172.111 28.96L170.751 26.546C170.751 26.546 168.609 28.552 165.651 28.552C162.591 28.552 159.905 26.648 159.735 22.874H172.281C172.281 22.874 172.383 21.888 172.383 21.446C172.383 16.992 169.799 13.388 164.937 13.388C160.041 13.388 156.335 16.924 156.335 22.398ZM159.837 20.392C160.313 17.57 162.353 16.006 164.869 16.006C167.079 16.006 168.915 17.434 169.017 20.392H159.837ZM175.433 18.862C175.433 25.9 180.499 31.408 187.707 31.408C193.725 31.408 197.023 27.6 197.023 27.6L195.221 25.186C195.221 25.186 192.331 28.314 187.809 28.314C182.471 28.314 178.901 23.962 178.901 18.828C178.901 13.728 182.403 9.648 187.775 9.648C191.923 9.648 194.711 12.266 194.711 12.266L196.377 9.75C196.377 9.75 193.419 6.588 187.639 6.588C180.669 6.588 175.433 11.892 175.433 18.862ZM200.922 31H204.22V22.942C204.22 22.126 204.288 21.344 204.492 20.664C205.206 18.182 207.348 16.414 209.932 16.414C212.686 16.414 213.196 18.318 213.196 20.732V31H216.494V19.984C216.494 15.598 214.624 13.388 210.578 13.388C207.144 13.388 204.968 15.564 204.22 17.23H204.152C204.152 17.23 204.22 16.618 204.22 15.802V6.996H200.922V31ZM221.408 31H224.706V23.962C224.706 22.908 224.808 21.854 225.114 20.868C225.896 18.318 227.834 16.822 229.942 16.822C230.452 16.822 230.894 16.924 230.894 16.924V13.66C230.894 13.66 230.486 13.592 230.044 13.592C227.392 13.592 225.386 15.564 224.604 18.08H224.536C224.536 18.08 224.604 17.502 224.604 16.788V13.796H221.408V31ZM232.9 31H247.758V28.178H239.02C237.898 28.178 237.32 28.246 237.32 28.246V28.178C237.32 28.178 238.068 27.498 238.782 26.614L247.452 15.7V13.796H233.274V16.618H241.332C242.454 16.618 242.998 16.55 242.998 16.55V16.618C242.998 16.618 242.318 17.298 241.57 18.216L232.9 29.096V31ZM250.4 22.398C250.4 27.498 254.106 31.408 259.512 31.408C263.626 31.408 266.176 28.96 266.176 28.96L264.816 26.546C264.816 26.546 262.674 28.552 259.716 28.552C256.656 28.552 253.97 26.648 253.8 22.874H266.346C266.346 22.874 266.448 21.888 266.448 21.446C266.448 16.992 263.864 13.388 259.002 13.388C254.106 13.388 250.4 16.924 250.4 22.398ZM253.902 20.392C254.378 17.57 256.418 16.006 258.934 16.006C261.144 16.006 262.98 17.434 263.082 20.392H253.902ZM269.055 28.892C269.055 28.892 271.367 31.408 275.583 31.408C279.357 31.408 281.805 29.266 281.805 26.41C281.805 20.766 272.965 21.446 272.965 18.352C272.965 16.856 274.359 16.244 275.787 16.244C278.507 16.244 280.037 17.774 280.037 17.774L281.363 15.292C281.363 15.292 279.595 13.388 275.821 13.388C272.387 13.388 269.599 15.156 269.599 18.284C269.599 23.894 278.439 23.248 278.439 26.41C278.439 27.804 277.011 28.552 275.583 28.552C272.591 28.552 270.653 26.546 270.653 26.546L269.055 28.892ZM274.155 11.314H276.909L280.173 6.996H276.637L274.155 11.314ZM284.465 22.398C284.465 27.566 288.273 31.408 293.679 31.408C298.167 31.408 300.547 28.654 300.547 28.654L299.221 26.24C299.221 26.24 297.113 28.552 293.917 28.552C290.347 28.552 287.831 25.866 287.831 22.364C287.831 18.828 290.347 16.244 293.815 16.244C296.739 16.244 298.575 18.216 298.575 18.216L300.139 15.904C300.139 15.904 297.997 13.388 293.679 13.388C288.273 13.388 284.465 17.298 284.465 22.398ZM304.249 10.362H307.581V6.996H304.249V10.362ZM304.283 31H307.581V13.796H304.283V31ZM312.716 10.362H316.048V6.996H312.716V10.362ZM312.75 13.796V31.374C312.75 34.74 310.302 35.148 309.044 35.148C308.602 35.148 308.296 35.114 308.296 35.114V37.936C308.296 37.936 308.738 38.004 309.452 38.004C311.594 38.004 316.014 37.324 316.014 31.578V13.796H312.75ZM319.79 26.172C319.79 29.606 322.68 31.408 325.638 31.408C329.752 31.408 331.146 28.008 331.146 28.008H331.214C331.214 28.008 331.146 28.586 331.146 29.368V31H334.206V20.12C334.206 15.768 331.758 13.388 327.406 13.388C323.462 13.388 320.98 15.428 320.98 15.428L322.34 17.842C322.34 17.842 324.482 16.176 327.134 16.176C329.31 16.176 330.908 17.128 330.908 19.95V20.256H330.16C327.27 20.256 319.79 20.494 319.79 26.172ZM323.122 26.002C323.122 22.908 327.61 22.738 330.092 22.738H330.942V23.282C330.942 25.832 329.14 28.756 326.352 28.756C324.21 28.756 323.122 27.396 323.122 26.002ZM339.147 31H342.445V22.942C342.445 22.092 342.513 21.31 342.717 20.63C343.431 18.148 345.538 16.414 348.157 16.414C350.911 16.414 351.421 18.318 351.421 20.732V31H354.719V19.984C354.719 15.598 352.849 13.388 348.803 13.388C345.062 13.388 343.023 15.836 342.343 17.332H342.275C342.275 17.332 342.343 16.754 342.343 16.074V13.796H339.147V31ZM345.743 11.314H348.497L351.761 6.996H348.225L345.743 11.314ZM358.239 28.892C358.239 28.892 360.551 31.408 364.767 31.408C368.541 31.408 370.989 29.266 370.989 26.41C370.989 20.766 362.149 21.446 362.149 18.352C362.149 16.856 363.543 16.244 364.971 16.244C367.691 16.244 369.221 17.774 369.221 17.774L370.547 15.292C370.547 15.292 368.779 13.388 365.005 13.388C361.571 13.388 358.783 15.156 358.783 18.284C358.783 23.894 367.623 23.248 367.623 26.41C367.623 27.804 366.195 28.552 364.767 28.552C361.775 28.552 359.837 26.546 359.837 26.546L358.239 28.892ZM375.587 24.71C375.587 30.456 379.973 31.136 382.183 31.136C382.863 31.136 383.339 31.068 383.339 31.068V28.144C383.339 28.144 383.033 28.212 382.557 28.212C381.299 28.212 378.885 27.77 378.885 24.336V16.686H383.033V14.034H378.885V9.07H375.689V14.034H373.343V16.686H375.587V24.71ZM390.595 31H394.267L397.803 19.95C398.075 19.066 398.279 18.08 398.279 18.08H398.347C398.347 18.08 398.551 19.066 398.823 19.95L402.393 31H406.031L411.573 13.796H408.105L404.501 25.866C404.229 26.75 404.093 27.702 404.093 27.702H404.025C404.025 27.702 403.821 26.75 403.549 25.866L399.843 13.83H396.817L393.077 25.866C392.805 26.75 392.635 27.702 392.635 27.702H392.567C392.533 27.702 392.397 26.75 392.125 25.866L388.555 13.796H385.053L390.595 31ZM413.492 22.364C413.492 27.6 417.64 31.408 422.774 31.408C427.908 31.408 432.056 27.6 432.056 22.364C432.056 17.162 427.908 13.388 422.774 13.388C417.64 13.388 413.492 17.162 413.492 22.364ZM416.858 22.364C416.858 18.794 419.544 16.244 422.774 16.244C426.038 16.244 428.69 18.794 428.69 22.364C428.69 25.968 426.038 28.552 422.774 28.552C419.544 28.552 416.858 25.968 416.858 22.364Z" fill="#212336" />
        </svg>

    )
}

export default Logo