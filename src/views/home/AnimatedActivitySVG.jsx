import React from "react";
import styled from "@emotion/styled";
const SVGWrapper = styled.div`
  body,
  html {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    background: #ff5722;
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .svg-wrapper {
    text-align: center;
    padding-top: 40px;

    .title {
      text-align: center;
      font-weight: 300;
      letter-spacing: 1px;
    }

    .svg {
      margin-top: 60px;
    }
  }

  @-webkit-keyframes dash {
    to {
      stroke-dashoffset: 1000;
    }
  }

  .path {
    animation: dash 10s linear infinite;
    animation-direction: reverse;
    stroke-dasharray: 10;
  }

  // signature
  .signature-wrapper {
    margin-top: 150px;
    margin-bottom: 100px;
    text-align: center;

    .signature-title {
      font-size: 16px;
      letter-spacing: 1px;
      font-weight: normal;
      color: #fff;
    }

    .signature-link {
      color: #fff;
      display: inline-block;
      margin: 20px 0 10px;
      font-size: 13px;
      letter-spacing: 0.5px;
      text-decoration: none;
      border-bottom: solid 2px #ddd;
    }
  }
`;

const AnimatedActivitySVG = () => {
  return (
    <SVGWrapper className="svg-wrapper">
      <svg
        width="1147"
        height="533"
        viewBox="0 0 1147 533"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          points="0 0, 100 0, 100 0, 200 0, 200 200, 0 200, 0 100, 0 100, 0 100"
          fill-rule="evenodd"
          class="path"
          d="M55 41.0541L127.783 481.625"
          stroke="#6755DF"
          stroke-width="2"
        />
        <path
          class="path"
          d="M247.5 259.542L499 423.542L861.5 295.542"
          stroke="#6755DF"
          stroke-width="2"
        />
        <path
          class="path"
          d="M1095.5 82.0419L1057.5 458.042"
          stroke="#6755DF"
          stroke-width="2"
        />
        <path
          class="path"
          d="M59.5 52.5419L244 263.542L124.5 484.042L494 423.542L1060 470.542L857.5 296.542L1090.5 86.0419"
          stroke="#6755DF"
          stroke-width="2"
        />
        <g filter="url(#filter0_d_278_724)">
          <circle cx="55" cy="53.5419" r="51" fill="#F5F5F5" />
        </g>
        <rect x="25" y="31.5419" width="60" height="44" fill="url(#pattern0)" />
        <g filter="url(#filter1_d_278_724)">
          <circle cx="130" cy="475.542" r="51" fill="#F5F5F5" />
        </g>
        <rect
          x="100"
          y="446.542"
          width="60"
          height="58.5366"
          fill="url(#pattern1)"
        />
        <g filter="url(#filter2_d_278_724)">
          <circle cx="497" cy="424.542" r="51" fill="#F5F5F5" />
        </g>
        <rect
          x="467"
          y="394.542"
          width="60"
          height="58.2857"
          fill="url(#pattern2)"
        />
        <g filter="url(#filter3_d_278_724)">
          <ellipse cx="860" cy="292.042" rx="51" ry="50.5" fill="#F5F5F5" />
        </g>
        <rect
          x="827"
          y="264.316"
          width="60"
          height="54.5946"
          fill="url(#pattern3)"
        />
        <g filter="url(#filter4_d_278_724)">
          <circle cx="1092" cy="85.5419" r="51" fill="#F5F5F5" />
        </g>
        <rect
          x="1063"
          y="59.5419"
          width="60"
          height="53.0233"
          fill="url(#pattern4)"
        />
        <g filter="url(#filter5_d_278_724)">
          <circle cx="1056" cy="462.542" r="51" fill="#F5F5F5" />
        </g>
        <rect
          x="1024"
          y="434.542"
          width="60"
          height="55.1351"
          fill="url(#pattern5)"
        />
        <circle cx="151" cy="156.542" r="6" fill="#6755DF" />
        <circle cx="98" cy="304.542" r="6" fill="#6755DF" />
        <circle cx="330" cy="451.542" r="6" fill="#6755DF" />
        <circle cx="799" cy="448.542" r="6" fill="#6755DF" />
        <circle cx="720" cy="345.542" r="6" fill="#6755DF" />
        <circle cx="1080" cy="240.542" r="6" fill="#6755DF" />
        <g filter="url(#filter6_d_278_724)">
          <circle cx="251.016" cy="254.109" r="51" fill="#F5F5F5" />
        </g>
        <rect
          x="215"
          y="226.542"
          width="60"
          height="55.1351"
          fill="url(#pattern6)"
        />
        <defs>
          <filter
            id="filter0_d_278_724"
            x="0"
            y="0.54187"
            width="110"
            height="110"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.403646 0 0 0 0 0.51875 0 0 0 0 0.625 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_278_724"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_278_724"
              result="shape"
            />
          </filter>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image0_278_724"
              transform="matrix(0.0122222 0 0 0.0166667 -0.00111111 0)"
            />
          </pattern>
          <filter
            id="filter1_d_278_724"
            x="75"
            y="422.542"
            width="110"
            height="110"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.403646 0 0 0 0 0.51875 0 0 0 0 0.625 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_278_724"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_278_724"
              result="shape"
            />
          </filter>
          <pattern
            id="pattern1"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image1_278_724"
              transform="scale(0.0121951 0.0125)"
            />
          </pattern>
          <filter
            id="filter2_d_278_724"
            x="442"
            y="371.542"
            width="110"
            height="110"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.403646 0 0 0 0 0.51875 0 0 0 0 0.625 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_278_724"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_278_724"
              result="shape"
            />
          </filter>
          <pattern
            id="pattern2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image2_278_724"
              transform="scale(0.0142857 0.0147059)"
            />
          </pattern>
          <filter
            id="filter3_d_278_724"
            x="805"
            y="239.542"
            width="110"
            height="109"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.403646 0 0 0 0 0.51875 0 0 0 0 0.625 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_278_724"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_278_724"
              result="shape"
            />
          </filter>
          <pattern
            id="pattern3"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image3_278_724"
              transform="matrix(0.0135135 0 0 0.0148515 0 -0.00495051)"
            />
          </pattern>
          <filter
            id="filter4_d_278_724"
            x="1037"
            y="32.5419"
            width="110"
            height="110"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.403646 0 0 0 0 0.51875 0 0 0 0 0.625 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_278_724"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_278_724"
              result="shape"
            />
          </filter>
          <pattern
            id="pattern4"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image4_278_724"
              transform="scale(0.0116279 0.0131579)"
            />
          </pattern>
          <filter
            id="filter5_d_278_724"
            x="1001"
            y="409.542"
            width="110"
            height="110"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.403646 0 0 0 0 0.51875 0 0 0 0 0.625 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_278_724"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_278_724"
              result="shape"
            />
          </filter>
          <pattern
            id="pattern5"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image5_278_724"
              transform="scale(0.0135135 0.0147059)"
            />
          </pattern>
          <filter
            id="filter6_d_278_724"
            x="196.016"
            y="201.109"
            width="110"
            height="110"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.403646 0 0 0 0 0.51875 0 0 0 0 0.625 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_278_724"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_278_724"
              result="shape"
            />
          </filter>
          <pattern
            id="pattern6"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image6_278_724"
              transform="scale(0.0135135 0.0147059)"
            />
          </pattern>
          <image
            id="image0_278_724"
            width="82"
            height="60"
            xlink:href="data:image/png;base64,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"
          />
          <image
            id="image1_278_724"
            width="82"
            height="80"
            xlink:href="data:image/png;base64,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"
          />
          <image
            id="image2_278_724"
            width="70"
            height="68"
            xlink:href="data:image/png;base64,
            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"
          />
          <image
            id="image3_278_724"
            width="74"
            height="68"
            xlink:href="data:image/png;base64,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"
          />
          <image
            id="image4_278_724"
            width="86"
            height="76"
            xlink:href="data:image/png;base64,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"
          />
          <image
            id="image5_278_724"
            width="74"
            height="68"
            xlink:href="data:image/png;base64,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"
          />
          <image
            id="image6_278_724"
            width="74"
            height="68"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABECAYAAAAm2qMBAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASqADAAQAAAABAAAARAAAAACB/TspAAALu0lEQVR4Ae1bS4xVxxGt+z7DfJnhO2AwTJhJIJifY/xZJIvEjqUoUnb5yBJJpGRDvIiUZTZRFCXKIoqyyS6WbClRFlaSRVaWItmRbAtmxoCDBeZjMGAw4MHDDDPM972bc6q67r3vkZEm+MG7oFfmve6uruquOre6um/PcyQNomf/Prkmnq38IY7lmyLxqgYN27xhIrlUkOhPq0t9v371O1Gl1ChL4pnKq7HEX23UeE0fJ5ZHqxL/cmzhZgxbflVohEHP/eXmtocKpAwokciP2GwIUHEp3poZ+6GqIgDUt4YA9VAhs4QzLaCWAKae3QKqHpEl2i2glgCmnt0Cqh6RJdotoJYApp7dAqoekSXaLaCWAKae3QKqHpEl2g1515ufmS5EFb4SNZAKBSmUVkiEMg/UEKAq07eKElfvgT+RlLtXSaG84h6M/f8NWQPU4ME3v4GXwOerVRksRFGUuP4/QCALskpXj115JK7cSmZmbLEPVy6ZChn4BMI7FGTCCBE6qrelVJiQckdZ2nrXSUf/NkRUSRZvg7dyncAcV21KqUDFcRwNHXz7FanGB2LYQ5OqQIKOsk6nWNM6qu4kJILzZbxer65xoAplH4vapAiriGNiPnWcMglFq6USb5K5sZNSnnhP5sY/lr6dX9G39rhakahY80wTtftV0dmHDr71IiY8oICoI3CKqCSEBh1XqBKmVsxViw4CQOI31WuGILxErp44n44cqZ50fFGmrrwhhU8uyuzsu4iujVLqnANQeBhNpJAp4x+ajwTEHPSHTacNADpCZ8kJvCDL0En00Uc42E4/1KFMRr9KgSDMPlQd2mL3gLaqs+lyVkYTvwyoONpd44R5bWaFuj91ZZpXGccdAOtwMMMApoJxkpxkHRngg36YK2pbGaYJEwX5ZhYKFHJFmy01wgFCQ51Fg7argyg1b4Vnr/1hfVKHVcqar0Ef/EQfdc97HIL6BpxHMXXAh5wUivzOFSlQvlQICR0wJ2g0zEanJ10HLPFAZVVEnVR+op8FyxAwYBSKIBoiCS2fy9BKZZK5mlzxXS81gzbaQw6Pl13G1ChCq8r8AgoBpcAqA2zrYSttkGcPAzUopcCrVqpPrVTNOnPyndlz6QqIZxr8a2+LZE1Pm/Fg/eTtRZmc4ckKS0a9plMQBAR9nSXp7rChyJuarcj41AJ6wpjg6YYHxVVdJenpsKVF2as352V+wcbRyTh/DilEFCwLALnJOzZ1yz9+vi8x+W9vX5OfvXQK7SBBkEJI/fHgTvnyzvRPeW+eGJcXfvefBEgdBOJcXr//8XZ5bt/aZNzdL74lc/PzYdy0SARyUgnHg9QaXyLHL9yS2flK0rF7oDvULUoIFwmZSB7fZruUcUS+NLhSCiqGLwIK0m98PbbFxxE5e2VaPr1FkAIFoTgsbWfnoUyAcuN8OS0sxnLsfHqOGdrQKZ0rIM5l5M6j3LG5S7raa3epzhVF2b21W+UMJrgK2VXdZdm4uj3xe+TMRFK3MX3sRCvpb3YlAYqGOACsc1WNnp1kVamAENm1tQd1iyhlwp/9n+81AXxXMpHwzPa+RNLH3QXwsjRyOgBF4PkvlBZ+Wcnm1xUocyQFgG1+EkeCnXuw/Ew2BfUJLDOnYXccjKe+0AvZVI4AZ5cddYZP3cSlA+ZSgA0sHYuKOaMAFK0iOHTMLYzkyAeTCTDk7h1gRDkxO4k8mYmofx6+7p3yJIAiceejHAHeleQ5kRuT83Lu6gx77IPCHhB2VrJyRsnSSwAKFRo9gSPBqY+mE5P3fK7H3ApLrL+3LJvXWs65Oj4nrx//NJHt6yrL9k2dBnRwPBtRGn2YQ6MpgKTKOQSJdilQvujqlxUFhs+keWpgfYf0diJxI4FRNpufjiL6Ln4yI9duzlFNiXlKCbLt5UgGsSE4jZwaZwgleYz1GBdhWuYwpGzpwXoHKUnW4SmPZnYmOrkHy4+yBPeJoTQ/vXPWEnM2rz21HcuPAOCz89Eu4YbgpPkJgLDPP96bxzNnyFHpk3WjzaFIsls4eQTKH3g2P71zFkcJgHsICdrpaUZUWEqPbUnzG89nx3n0CA+Dy48g6dyoVxlZOaPkFSb4o+ZZAqYXIh+NzcrHyD8bV9m99V7kKVJbKd3FFhar8u55W6LD76dAbYDOlnXt8uG120jkKVDHzk3itcUOswoQJkJgBVBRxx8qpm5MSWluApd3Y1JoX8TtaGKqzn+/vyyZExNdAjY96xoJ4RUlu5wcKJblkqm/d2FKT/HUO3FpSm5hE3B6ZoftflmgRgCm4qJz2lx6TAjz6vw+QE7KkKMY+ni2bjiTNQ0M7ezye2RNu6xZWao5FowiP2l+gTxvFrJ5jcuviNzEE7zT4feRyMPOyYkIjOvnESTabSEBMxHwtpuB6cbCflCkB0PWnPYOrKzZ8Y7goKk6dBoAHCIQgZ7esUqGNnTgNiK9MRg9HZZneBC6/GwyHUePDD5ATkqLKDU4AESDCZAWVjlxcUqmZtLltHNLV82L8MgZOB6cZjmcAWqgv0P2ZU7vpy9PyzhehB1Y1WN06byhzAk4WTNCRNmhQMNfF4Ft2d6mHzylO+0f6pW1vXZXxYPmZSR8DcggcBTviPNI8CT+Pe7Zx9NrlZEMiB65qkxhPpeckgGl0cCHagARNjpoD9l4I75c4Ihu+8EhXUZBzxPyHHa0Yx+kNwNf25sCdegkTu8cOBwuWfd5tfToyhlgSUTRLn2gCCM3XHlwhJF1OHM+6sGNplOSb5QBWQxC/UMn0zzVFW4/KaLHB5WxETQfcWL92FzUzxsFoOyVRJdasDH7dGn3KPLQYuXOg+AobwzQ7w6rk2gfzgDlTl/H682Fq9MA0sbJJm0Hx0vXyUupQLlx5iy95sfyloFQlZnZqpzAeSlLzEPHz4cdD4I2DhRBTOj+RwjX0fzEbv24PNtg4ONga78r5aQMd+YI+XC4pF3qMA3XulnKaHvht0ekg7ecXIzo50Xd3AJ/o8AlYzxKM2Imp6qy/+AbfH/WpUv+xPSCja0yYZlprgKDEwSEPOLIyQulyYbA4FPzNNGk/eQTtBuTcBT/OU+dUDRZC/rKtPblMd43Ud+/akuyObCOydLn1w525ocMqACEGo06oyDJH+4N4LEnbfmMLqhjwRevs9R3Rdfzkvrc0ZRCyXm9aohx0CCTryITUanjqUMZt+iA+mCOODDZ6KKetiUkffc50QsMFFl9zqLD44v6eQRLgYrieB4+6gnSHA2OJI56xZxQJzXsPCK8pJcgisPpRIsoOJGPpgPsPQ4cxeI4/TOZqzW79F3vuDvHuyCPjOCx2qiO1DlMHfITJ1mnvsuxDEgk+mxTLnSofohE5UO/Op8eVpsNkM+vQGHHe1k9UiesS5dfcJTOJBEQdin2O199piwo4GJgOSgEAnXXUTnwCIwuNcIW5uIAlakPKZIrUjthZLTxe6+9AlsP0DoDILigDtDjQGyDtAh1tEK7VsbkKI+PD5HVz/AVKLQXrg/L/NhRKeA3UoXO9VLq2ihRuRsXd7V/ZA0z3Zfi5r9/GlmOivSW+vsbvvvaX+HH8/ih6yB+N4kshICjYxpO9npWY5ltj1KZmdxcnRvbZ2iZRKIWgGGfY6USbIRx+RvNeB4n/8lzUp25hp8h2m1qVGjuzxGzvlrYZDl3US8OfusHxbmpl+9C9U6VqIgI6sFPpruk2NWvkRW19eDIolniTvn7wEki6jPPVeyZLbZ3fOZhEEq4SizrD1uTO3LclTcTJHcqPUc55y7KFZ19s9Fi47f0qNguUakBD+AufKpXaQhQ+H3zQhQ1GChEVqFjTS6iiaA1BKhSqYxU3ZChkODxAoRk3uy8dE8iqq2rf3YxvVKvn+OhaDdvK3nA4GsBtcwH1gKqBdQyEVimWCuiWkAtE4FlijUkoopR+cIy53vgxHAFpb41BKhr//rJOZwUX3/gUFiGwbiBeoliDQGKA3WVCt/GofrPACz9EzE7HlDC+8El/O8Xv/j6+v7f0IX/AjDvrg5lVsttAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </SVGWrapper>
  );
};

export default AnimatedActivitySVG;
