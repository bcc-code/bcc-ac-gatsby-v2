
import * as React from 'react';
import { ILogoStyle } from '.'

const Logo: React.FC<ILogoStyle> = ({ height, width }) => {

    return (
        <svg style={{ height, width: width ? width : '190px' }} viewBox="0 0 333 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3C9 1.34315 10.3431 0 12 0H14C15.6569 0 17 1.34315 17 3V5C17 6.65685 15.6569 8 14 8H12C10.3431 8 9 6.65685 9 5V3Z" fill="#FFAE0C" />
            <path d="M18 12C18 10.3431 19.3431 9 21 9H23C24.6569 9 26 10.3431 26 12V14C26 15.6569 24.6569 17 23 17H21C19.3431 17 18 15.6569 18 14V12Z" fill="#FFAE0C" />
            <path d="M9 34C9 32.3431 10.3431 31 12 31H14C15.6569 31 17 32.3431 17 34V36C17 37.6569 15.6569 39 14 39H12C10.3431 39 9 37.6569 9 36V34Z" fill="#FFAE0C" />
            <path d="M0 14V12C0 10.3431 1.34315 9 3 9H14C15.6569 9 17 10.3431 17 12V27C17 28.6569 15.6569 30 14 30H12C10.3431 30 9 28.6569 9 27V17H3C1.34315 17 0 15.6569 0 14Z" fill="#FFAE0C" />
            <path d="M39.632 18.862C39.632 25.9 44.698 31.408 51.906 31.408C57.924 31.408 61.222 27.6 61.222 27.6L59.42 25.186C59.42 25.186 56.53 28.314 52.008 28.314C46.67 28.314 43.1 23.962 43.1 18.828C43.1 13.728 46.602 9.648 51.974 9.648C56.122 9.648 58.91 12.266 58.91 12.266L60.576 9.75C60.576 9.75 57.618 6.588 51.838 6.588C44.868 6.588 39.632 11.892 39.632 18.862ZM65.1211 31H68.4191V22.942C68.4191 22.126 68.4871 21.344 68.6911 20.664C69.4051 18.182 71.5471 16.414 74.1311 16.414C76.8851 16.414 77.3951 18.318 77.3951 20.732V31H80.6931V19.984C80.6931 15.598 78.8231 13.388 74.7771 13.388C71.3431 13.388 69.1671 15.564 68.4191 17.23H68.3511C68.3511 17.23 68.4191 16.618 68.4191 15.802V6.996H65.1211V31ZM85.6074 31H88.9054V23.962C88.9054 22.908 89.0074 21.854 89.3134 20.868C90.0954 18.318 92.0334 16.822 94.1414 16.822C94.6514 16.822 95.0934 16.924 95.0934 16.924V13.66C95.0934 13.66 94.6854 13.592 94.2434 13.592C91.5914 13.592 89.5854 15.564 88.8034 18.08H88.7354C88.7354 18.08 88.8034 17.502 88.8034 16.788V13.796H85.6074V31ZM98.3234 10.362H101.655V6.996H98.3234V10.362ZM98.3574 31H101.655V13.796H98.3574V31ZM105.43 28.892C105.43 28.892 107.742 31.408 111.958 31.408C115.732 31.408 118.18 29.266 118.18 26.41C118.18 20.766 109.34 21.446 109.34 18.352C109.34 16.856 110.734 16.244 112.162 16.244C114.882 16.244 116.412 17.774 116.412 17.774L117.738 15.292C117.738 15.292 115.97 13.388 112.196 13.388C108.762 13.388 105.974 15.156 105.974 18.284C105.974 23.894 114.814 23.248 114.814 26.41C114.814 27.804 113.386 28.552 111.958 28.552C108.966 28.552 107.028 26.546 107.028 26.546L105.43 28.892ZM122.778 24.71C122.778 30.456 127.164 31.136 129.374 31.136C130.054 31.136 130.53 31.068 130.53 31.068V28.144C130.53 28.144 130.224 28.212 129.748 28.212C128.49 28.212 126.076 27.77 126.076 24.336V16.686H130.224V14.034H126.076V9.07H122.88V14.034H120.534V16.686H122.778V24.71ZM134.216 10.362H137.548V6.996H134.216V10.362ZM134.25 31H137.548V13.796H134.25V31ZM141.323 26.172C141.323 29.606 144.213 31.408 147.171 31.408C151.285 31.408 152.679 28.008 152.679 28.008H152.747C152.747 28.008 152.679 28.586 152.679 29.368V31H155.739V20.12C155.739 15.768 153.291 13.388 148.939 13.388C144.995 13.388 142.513 15.428 142.513 15.428L143.873 17.842C143.873 17.842 146.015 16.176 148.667 16.176C150.843 16.176 152.441 17.128 152.441 19.95V20.256H151.693C148.803 20.256 141.323 20.494 141.323 26.172ZM144.655 26.002C144.655 22.908 149.143 22.738 151.625 22.738H152.475V23.282C152.475 25.832 150.673 28.756 147.885 28.756C145.743 28.756 144.655 27.396 144.655 26.002ZM160.68 31H163.978V22.942C163.978 22.092 164.046 21.31 164.25 20.63C164.964 18.148 167.072 16.414 169.69 16.414C172.444 16.414 172.954 18.318 172.954 20.732V31H176.252V19.984C176.252 15.598 174.382 13.388 170.336 13.388C166.596 13.388 164.556 15.836 163.876 17.332H163.808C163.808 17.332 163.876 16.754 163.876 16.074V13.796H160.68V31ZM181.132 10.362H184.464V6.996H181.132V10.362ZM181.166 31H184.464V13.796H181.166V31ZM188.239 28.892C188.239 28.892 190.551 31.408 194.767 31.408C198.541 31.408 200.989 29.266 200.989 26.41C200.989 20.766 192.149 21.446 192.149 18.352C192.149 16.856 193.543 16.244 194.971 16.244C197.691 16.244 199.221 17.774 199.221 17.774L200.547 15.292C200.547 15.292 198.779 13.388 195.005 13.388C191.571 13.388 188.783 15.156 188.783 18.284C188.783 23.894 197.623 23.248 197.623 26.41C197.623 27.804 196.195 28.552 194.767 28.552C191.775 28.552 189.837 26.546 189.837 26.546L188.239 28.892ZM204.873 31H208.171V23.146C208.171 22.364 208.205 21.582 208.375 20.902C209.021 18.454 210.789 16.38 213.305 16.38C215.957 16.38 216.297 18.454 216.297 20.698V31H219.595V23.146C219.595 22.262 219.663 21.48 219.833 20.766C220.445 18.42 222.247 16.38 224.661 16.38C227.245 16.38 227.721 18.284 227.721 20.698V31H231.019V19.984C231.019 15.598 229.217 13.388 225.341 13.388C222.553 13.388 220.173 15.224 219.221 17.298H219.153C218.575 14.714 216.875 13.388 213.985 13.388C211.299 13.388 208.885 15.326 208.069 17.332H208.001C208.001 17.332 208.069 16.754 208.069 16.074V13.796H204.873V31ZM234.761 22.398C234.761 27.498 238.467 31.408 243.873 31.408C247.987 31.408 250.537 28.96 250.537 28.96L249.177 26.546C249.177 26.546 247.035 28.552 244.077 28.552C241.017 28.552 238.331 26.648 238.161 22.874H250.707C250.707 22.874 250.809 21.888 250.809 21.446C250.809 16.992 248.225 13.388 243.363 13.388C238.467 13.388 234.761 16.924 234.761 22.398ZM238.263 20.392C238.739 17.57 240.779 16.006 243.295 16.006C245.505 16.006 247.341 17.434 247.443 20.392H238.263ZM269.805 31H273.307L264.671 6.996H261.135L252.499 31H255.967L258.347 24.098H267.391L269.805 31ZM262.937 10.294C262.937 10.294 263.447 12.47 263.855 13.694L266.507 21.31H259.231L261.917 13.694C262.325 12.47 262.869 10.294 262.869 10.294H262.937ZM274.936 22.398C274.936 27.566 278.744 31.408 284.15 31.408C288.638 31.408 291.018 28.654 291.018 28.654L289.692 26.24C289.692 26.24 287.584 28.552 284.388 28.552C280.818 28.552 278.302 25.866 278.302 22.364C278.302 18.828 280.818 16.244 284.286 16.244C287.21 16.244 289.046 18.216 289.046 18.216L290.61 15.904C290.61 15.904 288.468 13.388 284.15 13.388C278.744 13.388 274.936 17.298 274.936 22.398ZM295.468 24.71C295.468 30.456 299.854 31.136 302.064 31.136C302.744 31.136 303.22 31.068 303.22 31.068V28.144C303.22 28.144 302.914 28.212 302.438 28.212C301.18 28.212 298.766 27.77 298.766 24.336V16.686H302.914V14.034H298.766V9.07H295.57V14.034H293.224V16.686H295.468V24.71ZM306.905 10.362H310.237V6.996H306.905V10.362ZM306.939 31H310.237V13.796H306.939V31ZM316.324 31H319.588V16.686H323.668V14.034H319.588V13.286C319.588 10.09 321.934 9.682 323.192 9.682C323.702 9.682 324.042 9.75 324.042 9.75V6.928C324.042 6.928 323.532 6.826 322.784 6.826C320.608 6.826 316.324 7.54 316.324 13.218V14.034H314.182V16.686H316.324V31Z" fill="#212336" />
        </svg>
    )
}

export default Logo