import React from "react"
import styled from "styled-components"

// Styles
import mediaQueries from "../../styles/mediaQueries"

// Types
interface IIconProps {
  width?: number
  height?: number
  inverse?: boolean
  payoff?: boolean
  isScrolled?: boolean
  className?: string
}

const Logo = ({ width, height, inverse, payoff, isScrolled }: IIconProps) =>
  inverse ? (
    <Svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 200.2 88`}
      preserveAspectRatio="xMidYMid meet"
      isScrolled={isScrolled}
    >
      <g fill="#FFF" fillRule="evenodd">
        <path d="M107.66 6.66c1.851 0 3.3-1.503 3.3-3.29 0-1.867-1.449-3.37-3.3-3.37-1.81 0-3.299 1.503-3.299 3.37 0 1.787 1.489 3.29 3.3 3.29M117.593 47.523h4.574v1.402h-6.486v-1.26l4.56-7.18h-4.56v-1.401h6.486v1.26zM128.709 39.027l-3.13 1.544v-1.19l3.13-1.727v1.373zm.693 5.296c-.01-.595-.222-1.071-.637-1.43-.415-.359-.93-.538-1.543-.538-.557 0-1.034.177-1.43.53-.397.355-.633.834-.708 1.438h4.318zm1.629 1.303h-5.961c.047.623.278 1.123.693 1.5.415.378.925.567 1.53.567.868 0 1.481-.363 1.84-1.09h1.742a3.515 3.515 0 01-1.282 1.763c-.618.458-1.385.686-2.3.686-.746 0-1.414-.167-2.004-.502a3.572 3.572 0 01-1.388-1.416c-.335-.61-.503-1.315-.503-2.117 0-.803.163-1.508.489-2.117a3.436 3.436 0 011.374-1.409c.59-.33 1.267-.496 2.032-.496.736 0 1.392.161 1.968.482a3.405 3.405 0 011.345 1.352c.32.58.481 1.249.481 2.004 0 .292-.019.557-.056.793zM135.76 45.031l3.597 3.894h-2.181l-2.889-3.356v3.356h-1.614V38.447h1.614v6.088l2.832-3.412h2.238zM145.983 44.323c-.01-.595-.222-1.071-.637-1.43-.416-.359-.93-.538-1.543-.538-.558 0-1.034.177-1.43.53-.397.355-.633.834-.709 1.438h4.32zm1.629 1.303h-5.962c.047.623.279 1.123.694 1.5.415.378.925.567 1.53.567.868 0 1.481-.363 1.84-1.09h1.742a3.515 3.515 0 01-1.282 1.763c-.618.458-1.385.686-2.3.686-.747 0-1.414-.167-2.004-.502a3.572 3.572 0 01-1.388-1.416c-.335-.61-.503-1.315-.503-2.117 0-.803.163-1.508.489-2.117a3.437 3.437 0 011.373-1.409c.59-.33 1.268-.496 2.032-.496.737 0 1.393.161 1.968.482a3.406 3.406 0 011.346 1.352c.32.58.481 1.249.481 2.004 0 .292-.019.557-.056.793zM151.81 41.328c.391-.222.856-.333 1.394-.333v1.671h-.41c-.633 0-1.112.16-1.438.482-.325.32-.488.878-.488 1.67v4.107h-1.614v-7.802h1.614v1.133c.236-.397.55-.706.942-.928M161.389 47.48l2.209-6.357h1.713l-2.974 7.802h-1.925l-2.96-7.802h1.728zM171.08 47.353c.364-.198.66-.495.886-.892.226-.396.34-.878.34-1.444 0-.567-.109-1.046-.326-1.437a2.2 2.2 0 00-.864-.885 2.362 2.362 0 00-1.16-.298c-.416 0-.8.1-1.155.298a2.123 2.123 0 00-.842.885c-.208.391-.312.87-.312 1.437 0 .84.215 1.489.644 1.947.43.458.97.686 1.622.686.415 0 .804-.099 1.168-.297m-3.165 1.197a3.609 3.609 0 01-1.402-1.416c-.34-.61-.51-1.315-.51-2.117 0-.793.175-1.496.524-2.11a3.619 3.619 0 011.43-1.416c.605-.33 1.28-.496 2.026-.496.745 0 1.42.166 2.024.496.604.33 1.081.803 1.43 1.416.35.614.525 1.317.525 2.11 0 .793-.18 1.496-.539 2.11a3.727 3.727 0 01-1.465 1.423c-.618.335-1.3.502-2.046.502a3.995 3.995 0 01-1.997-.502M180.115 47.353c.363-.198.658-.495.885-.892.226-.396.34-.878.34-1.444 0-.567-.11-1.046-.326-1.437a2.2 2.2 0 00-.864-.885 2.362 2.362 0 00-1.161-.298c-.416 0-.8.1-1.154.298a2.123 2.123 0 00-.843.885c-.207.391-.311.87-.311 1.437 0 .84.214 1.489.644 1.947.43.458.97.686 1.621.686.416 0 .805-.099 1.169-.297m-3.165 1.197a3.609 3.609 0 01-1.402-1.416c-.34-.61-.51-1.315-.51-2.117 0-.793.175-1.496.524-2.11a3.619 3.619 0 011.43-1.416c.604-.33 1.28-.496 2.025-.496.746 0 1.42.166 2.025.496.604.33 1.08.803 1.43 1.416.35.614.524 1.317.524 2.11 0 .793-.18 1.496-.538 2.11a3.727 3.727 0 01-1.466 1.423c-.618.335-1.3.502-2.046.502a3.995 3.995 0 01-1.996-.502M187.152 41.328c.391-.222.856-.333 1.394-.333v1.671h-.41c-.633 0-1.112.16-1.437.482-.326.32-.489.878-.489 1.67v4.107h-1.614v-7.802h1.614v1.133c.236-.397.55-.706.942-.928M200.78 41.123v7.802h-1.614v-.92a2.61 2.61 0 01-.998.757c-.41.184-.847.276-1.31.276-.613 0-1.163-.127-1.65-.382a2.76 2.76 0 01-1.146-1.133c-.28-.5-.418-1.104-.418-1.812v-4.588h1.6v4.347c0 .699.175 1.234.524 1.607.349.373.826.56 1.43.56s1.083-.187 1.437-.56c.354-.373.531-.908.531-1.607v-4.347h1.614zM83.633 23.138c0 1.544-.388 2.744-1.153 3.567-.762.82-1.833 1.236-3.181 1.236-1.324 0-2.382-.416-3.145-1.236-.765-.823-1.153-2.023-1.153-3.567V11.992H69.67V23.86c0 1.795.352 3.365 1.045 4.666.695 1.306 1.667 2.309 2.888 2.98 1.218.67 2.637 1.01 4.218 1.01a8.079 8.079 0 003.47-.754 6.908 6.908 0 002.343-1.765v2.266H89v-20.27h-5.368v11.145zM94.337 32.263h5.332V1.349h-5.332zM132.783 14.001c-1.488-1.524-3.465-2.297-5.873-2.297-1.266 0-2.445.253-3.506.753a7.21 7.21 0 00-2.38 1.775v-2.24h-5.332v20.271h5.332V21.081c0-1.543.394-2.743 1.17-3.566.775-.82 1.852-1.237 3.2-1.237 1.324 0 2.382.416 3.145 1.237.765.823 1.153 2.023 1.153 3.566v11.182h5.332V20.396c0-2.72-.754-4.87-2.24-6.395zM62.146 21.312c-.942-.386-2.15-.764-3.59-1.124-1.404-.357-2.45-.712-3.11-1.054-.629-.325-.934-.786-.934-1.408 0-.557.221-.98.678-1.292.467-.319 1.15-.48 2.032-.48.949 0 1.714.226 2.276.673.555.442.871 1.047.94 1.797l.012.128h.037l4.887-1.38c-.333-1.49-1.074-2.727-2.217-3.685-1.438-1.207-3.387-1.82-5.791-1.82-1.623 0-3.057.272-4.26.807-1.21.537-2.152 1.282-2.801 2.213a5.344 5.344 0 00-.982 3.11c0 1.376.358 2.487 1.063 3.304a6.516 6.516 0 002.507 1.806c.952.386 2.19.764 3.68 1.124 1.427.381 2.48.736 3.13 1.055.616.302.915.739.915 1.336 0 .558-.247 1.005-.753 1.365-.515.365-1.246.55-2.174.55-.95 0-1.753-.244-2.387-.728-.627-.48-.991-1.091-1.082-1.818l-.014-.108-5.133 1.45c.21.75.56 1.459 1.053 2.115.768 1.025 1.824 1.847 3.139 2.443 1.312.595 2.812.897 4.46.897 1.599 0 3.02-.265 4.223-.788 1.21-.525 2.152-1.264 2.802-2.195.651-.934.981-2.005.981-3.186-.024-1.35-.394-2.454-1.098-3.282a6.486 6.486 0 00-2.489-1.825M16.495 1.307H9.71C3.457 10.35.063 21.044 0 32.263h5.334c.06-9.25 2.624-18.103 7.369-25.788l5.06 13.888h-6.856c-.48 1.75-.855 3.53-1.126 5.332h9.926l2.393 6.568h5.675L16.495 1.307zM5.334 32.263H0v.012h5.334v-.012" />
        <path d="M110.347 11.992h-5.333v20.271h-.012c.001.108.004.216.004.325 0 13.312-5.184 25.827-14.597 35.24S68.481 82.426 55.17 82.426c-13.313 0-25.828-5.185-35.241-14.598-8.22-8.22-13.214-18.805-14.349-30.22H.224C1.374 50.45 6.928 62.372 16.156 71.6c10.42 10.421 24.276 16.16 39.012 16.16 14.737 0 28.593-5.739 39.013-16.16 10.42-10.42 16.16-24.275 16.16-39.012 0-.109-.004-.217-.004-.325h.01v-20.27z" />
        <path d="M42.865 21.312c-.942-.386-2.15-.764-3.591-1.124-1.404-.357-2.45-.712-3.11-1.054-.629-.325-.934-.786-.934-1.408 0-.557.222-.98.678-1.292.467-.319 1.15-.48 2.032-.48.95 0 1.715.226 2.276.673.555.442.872 1.047.94 1.797l.012.128h.037l4.887-1.38c-.333-1.49-1.074-2.727-2.216-3.685-1.44-1.207-3.388-1.82-5.792-1.82-1.623 0-3.056.272-4.26.807-1.21.537-2.152 1.282-2.8 2.213a5.344 5.344 0 00-.982 3.11c0 1.376.357 2.487 1.063 3.304a6.516 6.516 0 002.507 1.806c.951.386 2.19.764 3.679 1.124 1.427.381 2.48.736 3.131 1.055.615.302.914.739.914 1.336 0 .558-.246 1.005-.753 1.365-.514.365-1.246.55-2.174.55-.95 0-1.753-.244-2.386-.728-.628-.48-.992-1.091-1.083-1.818l-.013-.108-5.134 1.45c.21.75.56 1.459 1.053 2.115.768 1.025 1.825 1.847 3.14 2.443 1.31.595 2.811.897 4.46.897 1.598 0 3.02-.265 4.223-.788 1.21-.525 2.152-1.264 2.801-2.195.651-.934.982-2.005.982-3.186-.025-1.35-.394-2.454-1.098-3.282a6.486 6.486 0 00-2.49-1.825M144.762 20.111c.205-1.232.709-2.21 1.5-2.912.823-.73 1.854-1.101 3.064-1.101 1.281 0 2.38.383 3.264 1.139.844.722 1.3 1.689 1.353 2.874h-9.18zm13.436-3.662a8.817 8.817 0 00-3.555-3.537c-1.518-.826-3.259-1.244-5.173-1.244-1.987 0-3.77.43-5.3 1.28-1.533.852-2.741 2.085-3.592 3.665-.849 1.577-1.28 3.432-1.28 5.515 0 2.06.437 3.903 1.299 5.48a9.186 9.186 0 003.626 3.68c1.542.863 3.307 1.3 5.247 1.3 2.402 0 4.458-.635 6.11-1.887 1.286-.974 2.388-2.398 3.091-3.955l-5.018-1.416h-.014l-.031.097c-.508 1.561-2.402 2.694-4.247 2.694-1.257 0-2.33-.4-3.188-1.19-.828-.76-1.317-1.818-1.456-3.147h14.578l.02-.118c.097-.584.146-1.248.146-1.971 0-1.964-.425-3.728-1.263-5.246z" />
      </g>
    </Svg>
  ) : payoff ? (
    <Svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 291 128`}
      preserveAspectRatio="xMidYMid meet"
      isScrolled={isScrolled}
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M155.756 9.687c2.677 0 4.773-2.185 4.773-4.784 0-2.717-2.096-4.903-4.773-4.903-2.62 0-4.773 2.186-4.773 4.903 0 2.599 2.154 4.784 4.773 4.784"
          fill="#FFB600"
        />
        <g fill="#282623">
          <path d="M170.126 69.124h6.617v2.04h-9.383V69.33l6.596-10.442h-6.596V56.85h9.383v1.833zM186.207 56.767l-4.527 2.245v-1.73l4.527-2.513v1.998zm1.004 7.703c-.014-.865-.321-1.559-.922-2.08-.601-.522-1.346-.783-2.233-.783-.806 0-1.496.257-2.07.772-.573.515-.914 1.212-1.024 2.09h6.249zm2.355 1.895h-8.624c.068.906.403 1.634 1.004 2.183.6.55 1.338.823 2.212.823 1.257 0 2.144-.528 2.664-1.585h2.519a5.112 5.112 0 01-1.854 2.564c-.894.666-2.004.999-3.329.999-1.079 0-2.045-.244-2.898-.731a5.182 5.182 0 01-2.008-2.06c-.485-.886-.727-1.912-.727-3.079 0-1.167.235-2.193.706-3.08a4.985 4.985 0 011.988-2.048c.853-.481 1.833-.721 2.94-.721 1.064 0 2.014.233 2.847.7a4.94 4.94 0 011.946 1.967c.464.844.696 1.816.696 2.914 0 .426-.027.81-.082 1.154zM196.408 65.5l5.204 5.664h-3.155l-4.179-4.882v4.882h-2.335V55.922h2.335v8.857l4.097-4.964h3.237zM211.199 64.47c-.014-.865-.322-1.559-.922-2.08-.601-.522-1.346-.783-2.233-.783-.806 0-1.496.257-2.07.772-.573.515-.914 1.212-1.024 2.09h6.249zm2.355 1.895h-8.624c.068.906.403 1.634 1.004 2.183.6.55 1.338.823 2.212.823 1.257 0 2.144-.528 2.664-1.585h2.519a5.112 5.112 0 01-1.854 2.564c-.895.666-2.004.999-3.329.999-1.079 0-2.045-.244-2.898-.731a5.183 5.183 0 01-2.008-2.06c-.485-.886-.727-1.912-.727-3.079 0-1.167.235-2.193.706-3.08a4.986 4.986 0 011.988-2.049c.853-.48 1.833-.72 2.94-.72 1.064 0 2.014.233 2.847.7a4.94 4.94 0 011.946 1.967c.464.844.696 1.816.696 2.914 0 .426-.027.81-.082 1.154zM219.628 60.114c.567-.323 1.24-.484 2.018-.484v2.43h-.594c-.915 0-1.608.233-2.08.7-.47.467-.706 1.277-.706 2.43v5.973h-2.336V59.815h2.336v1.648a3.674 3.674 0 011.362-1.35M233.486 69.063l3.196-9.248h2.479l-4.302 11.349h-2.786l-4.282-11.35h2.5zM247.508 68.877c.526-.288.953-.72 1.28-1.297.328-.577.492-1.277.492-2.101 0-.824-.157-1.52-.47-2.09-.315-.57-.732-1-1.25-1.288a3.403 3.403 0 00-1.68-.432c-.601 0-1.158.144-1.67.432-.512.289-.918.718-1.219 1.287-.3.57-.45 1.267-.45 2.09 0 1.223.31 2.167.932 2.833.621.666 1.403.999 2.345.999a3.46 3.46 0 001.69-.433m-4.578 1.74a5.236 5.236 0 01-2.028-2.059c-.492-.886-.738-1.912-.738-3.08 0-1.153.253-2.175.758-3.068a5.25 5.25 0 012.07-2.06c.873-.48 1.85-.72 2.929-.72 1.078 0 2.055.24 2.93.72a5.253 5.253 0 012.068 2.06c.505.893.758 1.915.758 3.069 0 1.153-.26 2.176-.778 3.069a5.405 5.405 0 01-2.12 2.07c-.895.487-1.882.73-2.96.73-1.066 0-2.029-.243-2.89-.73M260.578 68.877c.525-.288.952-.72 1.28-1.297.328-.577.492-1.277.492-2.101 0-.824-.157-1.52-.472-2.09-.314-.57-.73-1-1.25-1.288a3.403 3.403 0 00-1.68-.432c-.6 0-1.156.144-1.669.432-.512.289-.918.718-1.218 1.287-.301.57-.451 1.267-.451 2.09 0 1.223.31 2.167.932 2.833.621.666 1.403.999 2.345.999a3.46 3.46 0 001.69-.433M256 70.617a5.236 5.236 0 01-2.028-2.059c-.492-.886-.737-1.912-.737-3.08 0-1.153.252-2.175.758-3.068a5.25 5.25 0 012.069-2.06c.873-.48 1.85-.72 2.93-.72 1.078 0 2.054.24 2.928.72a5.253 5.253 0 012.07 2.06c.505.893.758 1.915.758 3.069 0 1.153-.26 2.176-.779 3.069a5.405 5.405 0 01-2.12 2.07c-.895.487-1.882.73-2.96.73-1.066 0-2.028-.243-2.889-.73M270.759 60.114c.566-.323 1.239-.484 2.017-.484v2.43h-.593c-.916 0-1.609.233-2.08.7-.47.467-.706 1.277-.706 2.43v5.973h-2.336V59.815h2.336v1.648a3.674 3.674 0 011.362-1.35M290.476 59.815v11.349h-2.336v-1.34c-.368.468-.85.835-1.444 1.102a4.556 4.556 0 01-1.895.402c-.888 0-1.683-.185-2.387-.556a4.004 4.004 0 01-1.659-1.648c-.403-.727-.604-1.606-.604-2.636v-6.673h2.315v6.323c0 1.016.252 1.795.758 2.337.505.543 1.195.814 2.069.814.874 0 1.567-.27 2.079-.814.512-.542.768-1.32.768-2.337v-6.323h2.336z" />
        </g>
        <path
          d="M120.994 33.655c0 2.246-.56 3.992-1.668 5.188-1.102 1.193-2.65 1.798-4.602 1.798-1.915 0-3.446-.605-4.549-1.798-1.107-1.196-1.668-2.942-1.668-5.188V17.443h-7.715v17.262c0 2.612.509 4.895 1.512 6.788 1.006 1.9 2.412 3.357 4.179 4.334 1.761.974 3.814 1.468 6.101 1.468 1.796 0 3.485-.368 5.02-1.095 1.348-.638 2.486-1.5 3.39-2.568v3.296h7.767V17.443h-7.767v16.212zM136.48 46.928h7.715V1.963h-7.715zM192.102 20.365c-2.154-2.217-5.013-3.341-8.498-3.341-1.83 0-3.536.368-5.072 1.095-1.355.642-2.51 1.51-3.442 2.582v-3.258h-7.715v29.485h7.715V30.664c0-2.245.57-3.99 1.693-5.187 1.12-1.194 2.678-1.8 4.629-1.8 1.915 0 3.446.605 4.549 1.799 1.107 1.197 1.668 2.943 1.668 5.188v16.264h7.715V29.667c0-3.955-1.09-7.085-3.242-9.302zM89.909 31c-1.363-.562-3.111-1.113-5.195-1.636-2.03-.52-3.544-1.035-4.498-1.532-.91-.473-1.352-1.143-1.352-2.05 0-.81.32-1.424.981-1.878.676-.463 1.665-.699 2.94-.699 1.373 0 2.48.33 3.292.98.804.642 1.261 1.522 1.36 2.613l.017.186h.054l7.07-2.006c-.481-2.168-1.554-3.967-3.206-5.361-2.082-1.756-4.9-2.646-8.379-2.646-2.348 0-4.422.394-6.164 1.173-1.75.782-3.113 1.865-4.051 3.218a7.802 7.802 0 00-1.42 4.526c0 2 .517 3.617 1.537 4.804a9.428 9.428 0 003.627 2.628c1.377.56 3.169 1.11 5.323 1.635 2.065.554 3.59 1.07 4.53 1.534.89.44 1.322 1.075 1.322 1.942 0 .813-.356 1.462-1.089 1.986-.744.532-1.802.802-3.145.802-1.375 0-2.536-.357-3.452-1.06-.908-.697-1.435-1.587-1.567-2.645l-.019-.156-7.427 2.107a9.267 9.267 0 001.523 3.078c1.112 1.49 2.64 2.686 4.542 3.553 1.898.866 4.068 1.304 6.452 1.304 2.314 0 4.37-.385 6.11-1.145 1.75-.764 3.114-1.838 4.054-3.193.942-1.359 1.42-2.917 1.42-4.634-.036-1.964-.57-3.57-1.589-4.774-1.008-1.191-2.22-2.084-3.601-2.654M23.864 1.9h-9.817C5.003 15.056.093 30.61 0 46.929h7.717c.085-13.454 3.796-26.332 10.66-37.51l7.322 20.2h-9.92a67.1 67.1 0 00-1.63 7.757H28.51l3.463 9.553h8.21L23.865 1.901z"
          fill="#282623"
        />
        <path d="M7.717 46.928H0v.018h7.717v-.018" fill="#2D2D2D" />
        <path
          d="M159.642 17.444h-7.714v29.484h-.018c.001.158.006.315.006.472 0 19.363-7.5 37.568-21.118 51.26-13.618 13.691-31.725 21.232-50.984 21.232-19.26 0-37.366-7.54-50.984-21.233C16.938 86.704 9.713 71.307 8.072 54.702H.324c1.665 18.68 9.698 36.021 23.05 49.444 15.075 15.157 35.12 23.505 56.44 23.505s41.365-8.348 56.44-23.505c15.077-15.157 23.38-35.31 23.38-56.746 0-.157-.005-.314-.006-.472h.014V17.444z"
          fill="#FFB600"
        />
        <path
          d="M62.014 31c-1.363-.562-3.111-1.113-5.196-1.636-2.03-.52-3.543-1.035-4.498-1.532-.91-.473-1.352-1.143-1.352-2.05 0-.81.321-1.424.982-1.878.675-.463 1.664-.699 2.94-.699 1.372 0 2.48.33 3.292.98.803.642 1.261 1.522 1.36 2.613l.017.186h.054l7.07-2.006c-.482-2.168-1.554-3.967-3.206-5.361-2.082-1.756-4.901-2.646-8.38-2.646-2.348 0-4.421.394-6.163 1.173-1.75.782-3.113 1.865-4.052 3.218a7.802 7.802 0 00-1.42 4.526c0 2 .518 3.617 1.538 4.804a9.428 9.428 0 003.627 2.628c1.376.56 3.168 1.11 5.322 1.635 2.066.554 3.59 1.07 4.53 1.534.89.44 1.323 1.075 1.323 1.942 0 .813-.356 1.462-1.09 1.986-.743.532-1.802.802-3.144.802-1.375 0-2.537-.357-3.453-1.06-.908-.697-1.435-1.587-1.566-2.645l-.02-.156-7.426 2.107a9.267 9.267 0 001.523 3.078c1.112 1.49 2.64 2.686 4.542 3.553 1.897.866 4.068 1.304 6.452 1.304 2.313 0 4.37-.385 6.11-1.145 1.75-.764 3.114-1.838 4.053-3.193.942-1.359 1.42-2.917 1.42-4.634-.036-1.964-.57-3.57-1.588-4.774-1.009-1.191-2.22-2.084-3.601-2.654M209.433 29.252c.296-1.79 1.024-3.215 2.168-4.235 1.191-1.063 2.683-1.602 4.433-1.602 1.854 0 3.443.558 4.723 1.657 1.221 1.05 1.88 2.456 1.958 4.18h-13.282zm19.438-5.326a12.79 12.79 0 00-5.145-5.146c-2.196-1.2-4.714-1.809-7.483-1.809-2.875 0-5.455.627-7.668 1.863-2.217 1.239-3.966 3.032-5.196 5.33-1.228 2.294-1.851 4.992-1.851 8.022 0 2.995.631 5.677 1.878 7.97 1.248 2.299 3.013 4.1 5.247 5.355 2.23 1.254 4.783 1.89 7.59 1.89 3.475 0 6.45-.924 8.84-2.745 1.86-1.417 3.454-3.487 4.472-5.753l-7.26-2.06h-.02l-.045.141c-.735 2.271-3.475 3.92-6.144 3.92-1.818 0-3.37-.583-4.613-1.73-1.197-1.106-1.906-2.646-2.107-4.58h21.091l.029-.17c.14-.85.211-1.815.211-2.868 0-2.856-.614-5.423-1.826-7.63z"
          fill="#282623"
        />
      </g>
    </Svg>
  ) : (
    <Svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 291 128`}
      preserveAspectRatio="xMidYMid meet"
      isScrolled={isScrolled}
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M155.756 9.687c2.677 0 4.773-2.185 4.773-4.784 0-2.717-2.096-4.903-4.773-4.903-2.62 0-4.773 2.186-4.773 4.903 0 2.599 2.154 4.784 4.773 4.784"
          fill="#FFB600"
        />
        <path
          d="M120.994 33.655c0 2.246-.56 3.992-1.668 5.188-1.102 1.193-2.65 1.798-4.602 1.798-1.915 0-3.446-.605-4.549-1.798-1.107-1.196-1.668-2.942-1.668-5.188V17.443h-7.715v17.262c0 2.612.509 4.895 1.512 6.788 1.006 1.9 2.412 3.357 4.179 4.334 1.761.974 3.814 1.468 6.101 1.468 1.796 0 3.485-.368 5.02-1.095 1.348-.638 2.486-1.5 3.39-2.568v3.296h7.767V17.443h-7.767v16.212zm15.486 13.273h7.715V1.963h-7.715zm55.622-26.563c-2.154-2.217-5.013-3.341-8.498-3.341-1.83 0-3.536.368-5.072 1.095a10.433 10.433 0 00-3.442 2.582v-3.258h-7.715v29.485h7.715V30.664c0-2.245.57-3.99 1.693-5.187 1.12-1.194 2.678-1.8 4.629-1.8 1.915 0 3.446.605 4.549 1.799 1.107 1.197 1.668 2.943 1.668 5.188v16.264h7.715V29.667c0-3.955-1.09-7.085-3.242-9.302zM89.909 31c-1.363-.562-3.111-1.113-5.195-1.636-2.03-.52-3.544-1.035-4.498-1.532-.91-.473-1.352-1.143-1.352-2.05 0-.81.32-1.424.981-1.878.676-.463 1.665-.699 2.94-.699 1.373 0 2.48.33 3.292.98.804.642 1.261 1.522 1.36 2.613l.017.186h.054l7.07-2.006c-.481-2.168-1.554-3.967-3.206-5.361-2.082-1.756-4.9-2.646-8.379-2.646-2.348 0-4.422.394-6.164 1.173-1.75.782-3.113 1.865-4.051 3.218a7.802 7.802 0 00-1.42 4.526c0 2 .517 3.617 1.537 4.804a9.428 9.428 0 003.627 2.628c1.377.56 3.169 1.11 5.323 1.635 2.065.554 3.59 1.07 4.53 1.534.89.44 1.322 1.075 1.322 1.942 0 .813-.356 1.462-1.089 1.986-.744.532-1.802.802-3.145.802-1.375 0-2.536-.357-3.452-1.06-.908-.697-1.435-1.587-1.567-2.645l-.019-.156-7.427 2.107a9.267 9.267 0 001.523 3.078c1.112 1.49 2.64 2.686 4.542 3.553 1.898.866 4.068 1.304 6.452 1.304 2.314 0 4.37-.385 6.11-1.145 1.75-.764 3.114-1.838 4.054-3.193.942-1.359 1.42-2.917 1.42-4.634-.036-1.964-.57-3.57-1.589-4.774-1.008-1.191-2.22-2.084-3.601-2.654M23.864 1.9h-9.817C5.003 15.056.093 30.61 0 46.929h7.717c.085-13.454 3.796-26.332 10.66-37.51l7.322 20.2h-9.92a67.1 67.1 0 00-1.63 7.757H28.51l3.463 9.553h8.21L23.865 1.901z"
          fill="#282623"
        />
        <path d="M7.717 46.928H0v.018h7.717v-.018" fill="#2D2D2D" />
        <path
          d="M159.642 17.444h-7.714v29.484h-.018c.001.158.006.315.006.472 0 19.363-7.5 37.568-21.118 51.26-13.618 13.691-31.725 21.232-50.984 21.232-19.26 0-37.366-7.54-50.984-21.233C16.938 86.704 9.713 71.307 8.072 54.702H.324c1.665 18.68 9.698 36.021 23.05 49.444 15.075 15.157 35.12 23.505 56.44 23.505s41.365-8.348 56.44-23.505c15.077-15.157 23.38-35.31 23.38-56.746 0-.157-.005-.314-.006-.472h.014V17.444z"
          fill="#FFB600"
        />
        <path
          d="M62.014 31c-1.363-.562-3.111-1.113-5.196-1.636-2.03-.52-3.543-1.035-4.498-1.532-.91-.473-1.352-1.143-1.352-2.05 0-.81.321-1.424.982-1.878.675-.463 1.664-.699 2.94-.699 1.372 0 2.48.33 3.292.98.803.642 1.261 1.522 1.36 2.613l.017.186h.054l7.07-2.006c-.482-2.168-1.554-3.967-3.206-5.361-2.082-1.756-4.901-2.646-8.38-2.646-2.348 0-4.421.394-6.163 1.173-1.75.782-3.113 1.865-4.052 3.218a7.802 7.802 0 00-1.42 4.526c0 2 .518 3.617 1.538 4.804a9.428 9.428 0 003.627 2.628c1.376.56 3.168 1.11 5.322 1.635 2.066.554 3.59 1.07 4.53 1.534.89.44 1.323 1.075 1.323 1.942 0 .813-.356 1.462-1.09 1.986-.743.532-1.802.802-3.144.802-1.375 0-2.537-.357-3.453-1.06-.908-.697-1.435-1.587-1.566-2.645l-.02-.156-7.426 2.107a9.267 9.267 0 001.523 3.078c1.112 1.49 2.64 2.686 4.542 3.553 1.897.866 4.068 1.304 6.452 1.304 2.313 0 4.37-.385 6.11-1.145 1.75-.764 3.114-1.838 4.053-3.193.942-1.359 1.42-2.917 1.42-4.634-.036-1.964-.57-3.57-1.588-4.774-1.009-1.191-2.22-2.084-3.601-2.654m147.419-1.748c.296-1.79 1.024-3.215 2.168-4.235 1.191-1.063 2.683-1.602 4.433-1.602 1.854 0 3.443.558 4.723 1.657 1.221 1.05 1.88 2.456 1.958 4.18h-13.282zm19.438-5.326a12.79 12.79 0 00-5.145-5.146c-2.196-1.2-4.714-1.809-7.483-1.809-2.875 0-5.455.627-7.668 1.863-2.217 1.239-3.966 3.032-5.196 5.33-1.228 2.294-1.851 4.992-1.851 8.022 0 2.995.631 5.677 1.878 7.97 1.248 2.299 3.013 4.1 5.247 5.355 2.23 1.254 4.783 1.89 7.59 1.89 3.475 0 6.45-.924 8.84-2.745 1.86-1.417 3.454-3.487 4.472-5.753l-7.26-2.06h-.02l-.045.141c-.735 2.271-3.475 3.92-6.144 3.92-1.818 0-3.37-.583-4.613-1.73-1.197-1.106-1.906-2.646-2.107-4.58h21.091l.029-.17c.14-.85.211-1.815.211-2.868 0-2.856-.614-5.423-1.826-7.63z"
          fill="#282623"
        />
      </g>
    </Svg>
  )

export default Logo

const Svg = styled.svg<IIconProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${({ inverse }) => inverse && "margin-bottom: 32px;"}
  transition: width 0.2s ease, height 0.2s ease;

  ${mediaQueries.from.breakpoint.S`
      width: 236px;
      height: 104px;
  `}

  ${mediaQueries.from.breakpoint.M`
    ${(props: { isScrolled: boolean }) => props.isScrolled && "width: 219px;"}
    ${(props: { isScrolled: boolean }) => props.isScrolled && "height: 96px;"}
  `}

  ${mediaQueries.from.breakpoint.L`
      width: ${(props: { isScrolled: boolean }) =>
        props.isScrolled ? "219px" : "291px"};
      height: ${(props: { isScrolled: boolean }) =>
        props.isScrolled ? "96px" : "128px"};
  `}
`
