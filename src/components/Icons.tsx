import React from "react";
import Svg, { G, Path } from "react-native-svg";


export const TwitterIcon = ({ size = 40, color = '#fff' }) => {
    return (
        <Svg width={size} height={size} shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640">
            <Path d="M640.012 121.513c-23.528 10.524-48.875 17.516-75.343 20.634 27.118-16.24 47.858-41.977 57.756-72.615-25.347 14.988-53.516 25.985-83.363 31.866-24-25.5-58.087-41.35-95.848-41.35-72.508 0-131.21 58.736-131.21 131.198 0 10.228 1.134 20.232 3.355 29.882-109.1-5.528-205.821-57.757-270.57-137.222a131.423 131.423 0 0 0-17.764 66c0 45.497 23.102 85.738 58.347 109.207-21.508-.638-41.74-6.638-59.505-16.359v1.642c0 63.627 45.225 116.718 105.32 128.718-11.008 2.988-22.63 4.642-34.606 4.642-8.48 0-16.654-.874-24.78-2.35 16.783 52.11 65.233 90.095 122.612 91.205-44.989 35.245-101.493 56.233-163.09 56.233-10.63 0-20.988-.65-31.334-1.89 58.229 37.359 127.206 58.997 201.31 58.997 241.42 0 373.552-200.069 373.552-373.54 0-5.764-.13-11.35-.366-16.996 25.642-18.343 47.87-41.493 65.469-67.844l.059-.059z" />
        </Svg>
    );
};

export const GoogleIcon = ({ size = 40, color = '#fff' }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 326667 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">
            <Path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4" />
            <Path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853" />
            <Path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04" />
            <Path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335" />
        </Svg>
    );
};

export const FacebookIcon = ({ size = 40, color = '#fff' }) => {
    return (
        <Svg width={size} height={size} shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 509 509">
            <G fill-rule="nonzero">
                <Path fill="#0866FF" d="M509 254.5C509 113.94 395.06 0 254.5 0S0 113.94 0 254.5C0 373.86 82.17 474 193.02 501.51V332.27h-52.48V254.5h52.48v-33.51c0-86.63 39.2-126.78 124.24-126.78 16.13 0 43.95 3.17 55.33 6.33v70.5c-6.01-.63-16.44-.95-29.4-.95-41.73 0-57.86 15.81-57.86 56.91v27.5h83.13l-14.28 77.77h-68.85v174.87C411.35 491.92 509 384.62 509 254.5z" />
                <Path fill="#fff" d="M354.18 332.27l14.28-77.77h-83.13V227c0-41.1 16.13-56.91 57.86-56.91 12.96 0 23.39.32 29.4.95v-70.5c-11.38-3.16-39.2-6.33-55.33-6.33-85.04 0-124.24 40.16-124.24 126.78v33.51h-52.48v77.77h52.48v169.24c19.69 4.88 40.28 7.49 61.48 7.49 10.44 0 20.72-.64 30.83-1.86V332.27h68.85z" />
            </G>
        </Svg>
    );
};

export const HomeIcon = ({ size = 30, color = '#fff' }) => {
    return (
        <Svg viewBox="0 0 576 512" width={size} height={size}>
            <Path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
        </Svg>
    );
};

export const SaveIcon = ({ size = 30, color = '#fff' }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color}>
            <Path d="M20 12.2565C20 15.7437 19.4904 21.077 19.4904 21.2821C19.4904 21.4872 19.2866 21.7949 19.0828 21.8975C18.9809 22.0001 18.879 22.0001 18.6752 22.0001C18.5732 22.0001 18.4713 22.0001 18.2675 21.8975L12.051 18.6154C11.949 18.6154 11.8471 18.6154 11.8471 18.6154L5.63057 21.8975C5.42675 22.0001 5.12102 22.0001 4.9172 21.8975C4.71338 21.7949 4.50955 21.5898 4.50955 21.2821C4.50955 21.077 4 15.7437 4 12.2565C4.10191 10.0001 4.30573 7.0257 4.50955 4.87186C4.61146 3.53852 5.63057 2.51288 6.95541 2.30775C8.38217 2.20519 10.4204 2.00006 12.051 2.00006C13.6815 2.00006 15.7197 2.20519 17.1465 2.30775C18.4713 2.41032 19.4904 3.53852 19.5924 4.87186C19.7962 7.0257 20 10.0001 20 12.2565Z" fill="#000"/>
        </Svg>
    );
};

export const UserIcon = ({ size = 30, color = '#fff' }) => {
    return (
        <Svg viewBox="0 0 512 512" width={size} height={size}>
            <Path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
        </Svg>
    );
};

export const SearchIcon = ({ size = 30, color = '#fff' }) => {
    return (
        <Svg viewBox="0 0 512 512" width={size} height={size}>
            <Path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </Svg>
    );
};

export const StarIcon = ({ size = 20, color = '#fff' }) => {
    return (
        <Svg id="Layer_1"
            width={size} height={size} viewBox="0 0 64 64" enable-background="new 0 0 64 64">
            <Path fill="#fff" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265
	C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642
	c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854
	c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72
	c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"/>
        </Svg>
    );
};

// export const LoveIcon = ({ size = 30 }) => {
//     return (
//         <Svg id="Layer_1"
//             width={size} height={size} viewBox="0 0 37 32" enable-background="new 0 0 37 32">
//             <G>
//                 <Path fill="#808184" d="M33.582,2.483c-1.776-1.56-4.077-2.418-6.481-2.418c-2.767,0-5.49,1.134-7.472,3.112l-0.781,0.778
// 		c-0.188,0.188-0.508,0.188-0.697,0l-1.027-1.024C15.23,1.041,12.711,0,10.032,0C7.415,0,4.938,1,3.059,2.814
// 		c-1.87,1.805-2.911,4.287-2.933,6.988c-0.023,2.824,1.095,5.573,3.067,7.541l14.252,14.22C17.728,31.845,18.103,32,18.5,32
// 		s0.772-0.155,1.055-0.437L34.061,17.09c1.952-1.948,3.021-4.645,2.934-7.399C36.906,6.897,35.693,4.338,33.582,2.483z
// 		 M33.355,16.382L18.849,30.855c-0.188,0.188-0.51,0.188-0.697,0L3.899,16.635c-1.784-1.779-2.794-4.267-2.773-6.824
// 		c0.02-2.431,0.953-4.66,2.627-6.277C5.445,1.9,7.675,1,10.032,1c2.413,0,4.681,0.938,6.387,2.64l1.026,1.024
// 		c0.565,0.564,1.545,0.564,2.11,0l0.78-0.778c1.796-1.792,4.263-2.82,6.766-2.82c2.161,0,4.228,0.77,5.821,2.169
// 		c1.902,1.67,2.993,3.974,3.073,6.488C36.075,12.238,35.138,14.603,33.355,16.382z"/>
//             </G>
//         </Svg>
//     );
// };

// export const DonwloadIcon = ({ size = 30, color = '#000' }) => {
//     return (
//         <Svg fill={color} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={size}
//             height={size}>
//             <Path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
//         </Svg>

//     );
// };