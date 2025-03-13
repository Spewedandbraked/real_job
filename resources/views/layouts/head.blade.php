<head>
    <meta charset="UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui, user-scalable=no">
    <meta name="skype_toolbar" content="skype_toolbar_parser_compatible">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="google" value="notranslate">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="address=no">
    <meta name="format-detection" content="date=no">
    <meta name="format-detection" content="email=no">

    <!-- убрать перед запуском проекта -->
    <meta name="robots" content="noindex">
    <!-- убрать перед запуском проекта -->

    <link rel="icon" type="image/svg+xml" href="/favicon.ico">
    <!-- Import fonts start -->
    <style>
        @font-face {
            font-family: 'icons';
            font-style: normal;
            font-weight: 400;
            src: url("icons.woff?86235d17cae652515a65c3d1d2d3b9b5") format("woff"),
                url("icons.woff2?86235d17cae652515a65c3d1d2d3b9b5") format("woff2")
        }

        .icon {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            vertical-align: middle
        }

        .icon {
            font-family: 'icons';
            font-weight: normal;
            font-style: normal;
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
            -moz-osx-font-smoothing: grayscale;
            font-feature-settings: 'liga'
        }

        .icon-arrow-nav:before {
            content: "\f101"
        }

        .icon-burger-arrow:before {
            content: "\f105"
        }

        .icon-close:before {
            content: "\f10a"
        }

        .icon-eye:before {
            content: "\f10b"
        }

        .icon-menu-main:before {
            content: "\f10f"
        }

        .icon-search:before {
            content: "\f114"
        }

        @charset "UTF-8";

        .header {
            padding: 12px 0;
            margin-bottom: 24px;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            border-bottom: 10px solid var(--cl-blue);
            transition: padding .6s ease;
            position: fixed;
            top: 0;
            z-index: 3;
            left: 16px;
            right: 16px
        }

        .header__burger {
            font-family: coolvetica;
            font-style: normal;
            font-weight: 400;
            text-transform: uppercase;
            position: fixed;
            left: 100%;
            top: 0;
            color: var(--cl-white);
            background: var(--cl-blue);
            width: 100%;
            height: 100%;
            padding: 38px 16px;
            z-index: 2;
            overflow: auto;
            transition: left .3s ease
        }

        .header__inner {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            min-height: 100%
        }

        .burger {
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            padding: 5px 2px;
            margin-right: -2px;
            margin-bottom: -2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background: none;
            border: none
        }

        .burger__line,
        .burger:before,
        .burger:after {
            content: "";
            width: 100%;
            height: 4px;
            background: var(--cl-blue);
            display: block
        }

        @media (hover: none),
        (pointer: coarse) {

            .burger:active .burger__line,
            .burger:active:before,
            .burger:active:after {
                background: var(--cl-dark-blue)
            }
        }

        @media not all and (pointer: coarse) {

            .burger:hover .burger__line,
            .burger:hover:before,
            .burger:hover:after {
                background: var(--cl-dark-blue)
            }
        }

        @media (min-width: 768px) {
            .header {
                padding: 22px 0 14px;
                margin-bottom: 14px;
                left: 40px;
                right: 40px
            }

            .header__burger {
                padding: 40px
            }
        }

        @media (min-width: 1024px) {
            .header {
                border-bottom: none;
                display: flex;
                padding: 23px 0;
                margin-bottom: 16px;
                align-items: flex-start
            }

            .header__burger {
                position: relative;
                width: auto;
                height: auto;
                left: 0;
                background: none;
                padding: 0;
                color: var(--cl-black);
                width: calc((100vw - 80px + 20px) / 12 * 8 - 20px);
                flex-shrink: 0;
                overflow: visible
            }

            .header__inner {
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center
            }

            .burger {
                display: none
            }
        }

        @media (min-width: 1155px) {
            .header {
                padding: 28px 0;
                margin-bottom: 0;
                left: 48px;
                right: 48px
            }

            .header__burger {
                width: calc((100vw - 96px + 25px) / 12 * 8.5 - 25px)
            }
        }

        @media (min-width: 1280px) {
            .header__burger {
                width: calc((100vw - 71px) * .75 - 25px)
            }
        }

        @media (min-width: 1280px) {
            .header {
                margin-bottom: 0
            }
        }

        @media (min-width: 1648px) {
            .header {
                padding: 39px 0;
                left: 80px;
                right: 80px;
                max-width: 1642px;
                margin: 0 auto
            }

            .header__burger {
                width: calc((100vw - 135px) * .75 - 25px);
                max-width: 1225px
            }
        }

        @media (min-width: 1803px) {
            .header {
                padding: 45px 0;
                margin-bottom: 9px
            }
        }

        input[type=search]::-webkit-search-decoration,
        input[type=search]::-webkit-search-cancel-button,
        input[type=search]::-webkit-search-results-button,
        input[type=search]::-webkit-search-results-decoration {
            -webkit-appearance: none
        }

        .input {
            width: 100%;
            position: relative;
            margin-bottom: 20px
        }

        .input--search {
            margin-bottom: 0
        }

        .input__input-field {
            height: 54px;
            transition: border-color .3s ease, background-color .3s ease, box-shadow .3s ease;
            font-family: coolvetica;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 100%;
            letter-spacing: .02em;
            text-transform: uppercase;
            padding: 0 16px;
            background: var(--cl-almost-white);
            border: 1px solid var(--cl-almost-black);
            border-radius: 20px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none
        }

        .input__input-field:focus,
        .input__input-field:focus-visible {
            outline: none;
            border: 1px solid var(--cl-blue)
        }

        .input__input-field:focus:hover,
        .input__input-field:focus-visible:hover {
            box-shadow: none
        }

        .input__input-field:disabled {
            pointer-events: none;
            opacity: .5
        }

        .input__input-field:disabled::-webkit-input-placeholder {
            color: var(--cl-beige)
        }

        .input__input-field:disabled:-moz-placeholder {
            color: var(--cl-beige)
        }

        .input__input-field:disabled::-moz-placeholder {
            color: var(--cl-beige)
        }

        .input__input-field:disabled:-ms-input-placeholder {
            color: var(--cl-beige)
        }

        .input__input-field[placeholder] {
            text-overflow: ellipsis
        }

        .input__input-field::-webkit-input-placeholder {
            color: var(--cl-beige);
            opacity: 1;
            text-overflow: ellipsis
        }

        .input__input-field:-moz-placeholder {
            color: var(--cl-beige);
            opacity: 1;
            text-overflow: ellipsis
        }

        .input__input-field::-moz-placeholder {
            color: var(--cl-beige);
            opacity: 1;
            text-overflow: ellipsis
        }

        .input__input-field:-ms-input-placeholder {
            color: var(--cl-beige);
            opacity: 1;
            text-overflow: ellipsis
        }

        .input--search .input__input-field {
            height: 52px;
            background: transparent;
            border: 1px solid #FFFFFF;
            border-radius: 100px;
            padding-left: 43px;
            padding-right: 13px;
            font-family: coolvetica;
            font-style: normal;
            font-weight: 400;
            text-transform: uppercase;
            color: var(--cl-white);
            font-size: 22px;
            line-height: 120%;
            letter-spacing: .02em
        }

        .input--search .input__input-field[placeholder] {
            font-family: coolvetica;
            font-style: normal;
            font-weight: 400;
            text-transform: uppercase;
            text-overflow: ellipsis;
            color: var(--cl-white)
        }

        .input--search .input__input-field::-webkit-input-placeholder {
            font-family: coolvetica;
            font-style: normal;
            font-weight: 400;
            text-transform: uppercase;
            color: var(--cl-white);
            opacity: 1;
            text-overflow: ellipsis
        }

        .input--search .input__input-field:-moz-placeholder {
            font-family: coolvetica;
            font-style: normal;
            font-weight: 400;
            text-transform: uppercase;
            color: var(--cl-white);
            opacity: 1;
            text-overflow: ellipsis
        }

        .input--search .input__input-field::-moz-placeholder {
            font-family: coolvetica;
            font-style: normal;
            font-weight: 400;
            text-transform: uppercase;
            color: var(--cl-white);
            opacity: 1;
            text-overflow: ellipsis
        }

        .input--search .input__input-field:-ms-input-placeholder {
            font-family: coolvetica;
            font-style: normal;
            font-weight: 400;
            text-transform: uppercase;
            color: var(--cl-white);
            opacity: 1;
            text-overflow: ellipsis
        }

        @media (min-width: 768px) {
            .input--search .input__input-field {
                height: 78px;
                padding-left: 80px;
                padding-right: 20px;
                font-size: 46px
            }
        }

        @media (min-width: 1024px) {
            .input--search .input__input-field {
                height: 100%;
                width: 100%;
                border-color: transparent;
                color: var(--cl-black);
                background: var(--cl-white);
                font-size: 18px;
                padding-left: 44px;
                transition: border-color .3s ease;
                pointer-events: none;
                opacity: 0
            }

            .input--search .input__input-field[placeholder] {
                color: var(--cl-blue);
                font-size: 0
            }

            .input--search .input__input-field::-webkit-input-placeholder {
                color: var(--cl-blue);
                font-size: 0
            }

            .input--search .input__input-field:-moz-placeholder {
                color: var(--cl-blue);
                font-size: 0
            }

            .input--search .input__input-field::-moz-placeholder {
                color: var(--cl-blue);
                font-size: 0
            }

            .input--search .input__input-field:-ms-input-placeholder {
                color: var(--cl-blue);
                font-size: 0
            }
        }

        @media (min-width: 1155px) {
            .input--search .input__input-field {
                font-size: 18px;
                padding-left: 40px
            }

            .input--search .input__input-field[placeholder] {
                font-size: 18px
            }

            .input--search .input__input-field::-webkit-input-placeholder {
                font-size: 18px
            }

            .input--search .input__input-field:-moz-placeholder {
                font-size: 18px
            }

            .input--search .input__input-field::-moz-placeholder {
                font-size: 18px
            }

            .input--search .input__input-field:-ms-input-placeholder {
                font-size: 18px
            }
        }

        @media (min-width: 1648px) {
            .input__input-field {
                height: 60px;
                font-size: 22px
            }

            .input--search .input__input-field,
            .input--search .input__input-field[placeholder] {
                font-size: 22px
            }

            .input--search .input__input-field::-webkit-input-placeholder {
                font-size: 22px
            }

            .input--search .input__input-field:-moz-placeholder {
                font-size: 22px
            }

            .input--search .input__input-field::-moz-placeholder {
                font-size: 22px
            }

            .input--search .input__input-field:-ms-input-placeholder {
                font-size: 22px
            }
        }

        .footer {
            font-size: 14px;
            line-height: 125%;
            color: var(--cl-almost-black);
            padding: 0 0 24px;
            margin-top: 56px
        }

        .copy {
            padding-top: 12px;
            border-top: 10px solid var(--cl-blue)
        }

        .copy__inner {
            display: flex;
            flex-direction: column
        }

        @media (min-width: 768px) {
            .footer {
                margin-top: 80px
            }
        }

        @media (min-width: 1024px) {
            .footer {
                margin-top: 60px
            }

            .copy {
                display: flex
            }

            .copy__inner {
                width: calc((100vw - 71px) * .375)
            }
        }

        @media (min-width: 1440px) {
            .copy__inner {
                width: calc((100vw - 71px) * .375)
            }
        }

        @media (min-width: 1648px) {
            .footer {
                font-size: 16px
            }

            .copy__inner {
                width: calc((100vw - 160px + 25px) / 12 * 3.5)
            }
        }

        @media (min-width: 1803px) {
            .copy__inner {
                width: calc((100vw - 135px) / 4)
            }
        }

        :root {
            --cl-transparent: transparent;
            --cl-white: #ffffff;
            --cl-black: #000000;
            --cl-gray: #dddddd;
            --cl-pure-or-mostly-pure-red: #ff0000;
            --cl-very-dark-gray-mostly-black: #212121;
            --cl-dark-gray: #505057;
            --cl-light-gray: #B2B2B2;
            --cl-almost-black: #202026;
            --cl-blue: #3232f0;
            --cl-dark-blue: #1f2772;
            --cl-dark-back: #293393;
            --cl-beige: #8C8C8C
        }

        @charset "UTF-8";

        .service {
            padding: 0;
            list-style-type: none;
            border-top: 1px solid var(--cl-dark-gray)
        }

        .service__item {
            margin: 0;
            list-style-type: none;
            border-bottom: 1px solid var(--cl-dark-gray)
        }

        .service__link {
            padding: 7px 0;
            display: flex;
            align-items: center
        }

        .service__text {
            flex-grow: 1
        }

        .service__name {
            font-family: coolvetica;
            font-style: normal;
            font-weight: 400;
            font-size: 44px;
            line-height: 44px;
            text-transform: uppercase;
            color: var(--cl-black)
        }

        .service__addition {
            display: none
        }

        @media (min-width: 768px) {
            .service__link {
                padding: 13px 0
            }

            .service__text {
                display: flex;
                align-items: center;
                gap: 15px
            }

            .service__name {
                font-size: 70px;
                line-height: 100%;
                flex-shrink: 1
            }

            .service__addition {
                display: block;
                font-family: coolvetica-light;
                font-style: normal;
                font-weight: 300;
                font-size: 28px;
                line-height: 100%;
                letter-spacing: .01em;
                text-transform: uppercase;
                color: var(--cl-almost-black);
                padding-top: 2px
            }
        }

        @media (min-width: 1024px) {
            .service {
                margin-bottom: 80px
            }

            .service__link {
                padding-right: 20px;
                transition: background .6s ease, color .6s ease
            }

            .service__link .icon--arrow-nav {
                transition: background .6s ease, color .6s ease
            }

            @media not all and (pointer: coarse) {
                .service__link:hover {
                    color: var(--cl-white);
                    background: var(--cl-blue)
                }

                .service__link:hover * {
                    color: var(--cl-white)
                }

                .service__link:hover .icon--arrow-nav {
                    color: var(--cl-blue);
                    background: var(--cl-white)
                }
            }

            .service .icon--service {
                width: calc((100vw - 96px + 25px) / 12 * 2);
                padding-left: 20px
            }
        }

        @media (min-width: 1155px) {
            .service .icon--service {
                width: calc((100vw - 96px + 25px) / 12 * 3.5)
            }

            .service__name {
                font-size: 76px;
                line-height: 100%
            }

            .service__link {
                padding: 14px 20px 14px 0
            }
        }

        @media (min-width: 1280px) {
            .service .icon--service {
                width: calc((100vw - 71px) / 4)
            }
        }

        @media (min-width: 1440px) {
            .service__name {
                font-size: 90px;
                line-height: 100%
            }

            .service__addition {
                font-size: 36px;
                line-height: 100%
            }

            .service__link {
                padding: 9px 20px 9px 0
            }
        }

        @media (min-width: 1648px) {
            .service .icon--service {
                width: calc((100vw - 135px) / 4);
                max-width: 417px
            }
        }

        .company {
            display: none
        }

        .company__list {
            display: flex;
            align-items: stretch;
            gap: 10px;
            overflow: hidden;
            padding-bottom: 20px
        }

        .company__name {
            font-family: coolvetica;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 105%;
            text-align: center;
            letter-spacing: .03em;
            text-transform: uppercase;
            color: var(--cl-almost-black)
        }

        .company__picture {
            height: 68px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative
        }

        .company__image {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: contain;
            margin-bottom: 5px
        }

        .company__link {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            flex: 1 0 auto;
            width: calc((100% - 10px) / 2);
            min-height: 140px;
            padding: 10px 7px 12px;
            border-radius: 15px;
            border: 1px solid var(--cl-dark-gray)
        }

        @media (min-width: 768px) {
            .company__list {
                gap: 20px
            }

            .company__link {
                width: calc((100% - 80px) / 5)
            }
        }

        @media (min-width: 1024px) {
            .company {
                display: block
            }

            .company__list {
                gap: 20px
            }

            .company__link {
                width: calc((100% - 100px) / 6);
                padding-left: 6px;
                padding-right: 6px;
                padding-bottom: 8px;
                gap: 5px
            }

            .company__name {
                font-size: 16px
            }

            .company__picture {
                height: 68px
            }

            .company__picture img {
                margin: 0
            }
        }

        @media (min-width: 1155px) {
            .company__list {
                gap: 25px
            }

            .company__link {
                width: calc((100% - 125px) / 6)
            }

            .company__name {
                font-size: 16px
            }
        }

        @media (min-width: 1280px) {
            .company__list {
                gap: 25px
            }

            .company__link {
                width: calc((100% - 150px) / 7)
            }
        }

        @media (min-width: 1440px) {
            .company__link {
                width: calc((100% - 175px) / 8)
            }
        }

        @media (min-width: 1648px) {
            .company__link {
                width: calc((100% - 200px) / 9)
            }
        }

        @media (min-width: 1803px) {
            .company__link {
                width: calc((100% - 225px) * .1)
            }
        }

        @media (min-width: 1920px) {
            .company__link {
                width: calc((100% - 225px) * .1)
            }
        }

        .news {
            margin-bottom: 56px
        }

        .news__main {
            overflow: hidden
        }

        .news__title {
            display: block;
            font-family: coolvetica;
            font-size: 18px;
            line-height: 120%;
            letter-spacing: .02em;
            text-transform: uppercase
        }

        .news__title--main {
            background: #3232F0;
            backdrop-filter: blur(2.60506px);
            border-radius: 13px;
            padding: 100% 20px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            font-size: 57px;
            line-height: 100%;
            letter-spacing: -.01em;
            text-transform: uppercase;
            color: var(--cl-white);
            margin-bottom: 16px;
            width: 100%;
            height: 0;
            position: relative
        }

        .news__title--main img {
            position: absolute;
            left: 20px;
            width: calc(100% - 40px);
            top: 20px
        }

        .news__text {
            display: block;
            font-size: 14px;
            line-height: 125%;
            margin: 0
        }

        .news__text--main {
            font-family: coolvetica;
            font-size: 16px;
            line-height: 105%;
            letter-spacing: .03em;
            text-transform: uppercase;
            color: var(--cl-white)
        }

        .news__date {
            margin: 0;
            color: var(--cl-white)
        }

        .news__slide {
            position: relative;
            display: flex;
            flex-direction: column-reverse;
            gap: 16px
        }

        .news__picture {
            position: relative;
            display: block;
            width: 100%;
            height: 0;
            padding-top: 100%
        }

        .news__picture img {
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover
        }

        .news__block {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            padding: 10px;
            gap: 20px;
            position: absolute;
            width: 160px;
            height: 160px;
            right: 10px;
            bottom: 10px;
            background: var(--cl-blue);
            border-radius: 10px;
            font-family: coolvetica;
            font-size: 16px;
            line-height: 105%;
            letter-spacing: .03em;
            text-transform: uppercase;
            color: var(--cl-white)
        }

        @media (min-width: 768px) {
            .news {
                margin-bottom: 80px
            }

            .news__picture {
                height: 100%;
                width: 100%;
                position: relative;
                padding: 0
            }

            .news__picture img {
                object-fit: cover;
                width: 100%;
                height: 100%
            }

            .news__title--main {
                z-index: 2;
                position: absolute;
                width: 280px;
                height: 280px;
                right: 15px;
                top: 15px;
                background: rgba(50, 50, 240, .7);
                backdrop-filter: blur(2.12658px);
                border-radius: 10px;
                padding: 15px 15px 0;
                font-size: 46px;
                letter-spacing: -.01em;
                display: block;
                margin: 0
            }

            .news__title--main img {
                position: static;
                width: 100%
            }

            .news__block {
                right: 15px;
                bottom: 15px
            }

            .news__main {
                margin-bottom: 30px;
                height: 510px
            }
        }

        @media (min-width: 1024px) {
            .news__main {
                height: 554px
            }

            .news__title--main {
                right: 20px;
                top: 20px
            }

            .news__block {
                right: 20px;
                bottom: 20px
            }

            .news__date--main {
                font-size: 18px;
                line-height: 105%;
                letter-spacing: .03em
            }
        }

        @media (min-width: 1155px) {
            .news {
                display: flex;
                gap: 25px
            }

            .news__main {
                margin-bottom: 0;
                flex-shrink: 1;
                width: 100%;
                height: auto
            }

            .news__all {
                width: calc((100vw - 96px + 25px) / 12 * 3.5);
                flex-shrink: 0
            }

            .news__picture {
                width: 100%;
                height: 100%;
                padding: 0
            }

            .news__title--main {
                right: 15px;
                top: 15px;
                width: 320px;
                height: 320px;
                padding: 20px
            }

            .news__block {
                right: 15px;
                bottom: 15px;
                width: 180px;
                height: 180px;
                padding: 12px 15px 15px
            }
        }

        @media (min-width: 1440px) {
            .news__all {
                width: calc((100vw - 71px) / 4 - 25px)
            }
        }

        @media (min-width: 1648px) {
            .news__block {
                right: 15px;
                bottom: 15px;
                width: 200px;
                height: 200px;
                border-radius: 15px;
                padding-left: 20px
            }

            .news__text {
                font-size: 16px
            }

            .news__text--main {
                font-size: 18px
            }

            .news__title {
                font-size: 22px
            }

            .news__title--main {
                width: 395px;
                height: 395px;
                padding: 24px;
                border-radius: 15px;
                top: 15px;
                right: 15px
            }

            .news__all {
                width: calc((100vw - 135px) / 4 - 25px);
                max-width: 392px
            }
        }

        @media (min-width: 1803px) {
            .news__block {
                right: 20px;
                bottom: 20px
            }

            .news__title--main {
                right: 20px;
                top: 20px
            }
        }

        :root {
            --cl-transparent: transparent;
            --cl-white: #ffffff;
            --cl-black: #000000;
            --cl-gray: #dddddd;
            --cl-pure-or-mostly-pure-red: #ff0000;
            --cl-very-dark-gray-mostly-black: #212121;
            --cl-dark-gray: #505057;
            --cl-light-gray: #B2B2B2;
            --cl-almost-black: #202026;
            --cl-blue: #3232f0;
            --cl-dark-blue: #1f2772;
            --cl-dark-back: #293393;
            --cl-beige: #8C8C8C
        }

        .news-archive__list {
            padding: 0
        }

        .news-archive__link {
            color: var(--cl-black);
            transition: color .3s ease
        }

        @media (hover: none),
        (pointer: coarse) {
            .news-archive__link:active {
                color: var(--cl-blue)
            }
        }

        @media not all and (pointer: coarse) {
            .news-archive__link:hover {
                color: var(--cl-blue)
            }
        }

        .news-archive__item {
            list-style-type: none;
            margin-bottom: 10px
        }

        .news-archive__item:last-child {
            margin-top: 24px;
            margin-bottom: 0
        }

        .news-archive__item:last-child .news-archive__link {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            padding: 10px 0;
            gap: 16px;
            border-width: 1px 0px;
            border-style: solid;
            border-color: var(--cl-almost-black);
            font-family: coolvetica;
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 120%;
            text-align: right;
            letter-spacing: .02em;
            text-transform: uppercase;
            color: var(--cl-black)
        }

        .news-archive__title {
            display: block;
            font-family: coolvetica;
            font-size: 18px;
            line-height: 120%;
            letter-spacing: .02em;
            text-transform: uppercase
        }

        .news-archive__title mark {
            color: var(--cl-dark-blue);
            background: none
        }

        .news-archive__text {
            display: block;
            font-size: 14px;
            line-height: 125%;
            margin: 0
        }

        @media (min-width: 768px) {
            .news-archive__list {
                display: grid;
                gap: var(--space-m);
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(4, auto);
                grid-auto-flow: column
            }

            .news-archive__item:last-child {
                position: relative
            }

            .news-archive__list {
                gap: 10px 20px
            }

            .news-archive__item {
                margin-bottom: 0
            }

            .news-archive__item:last-child {
                margin: 0;
                display: flex;
                flex-direction: column;
                justify-content: flex-end
            }

            .news-archive__item:last-child .news-archive__link {
                gap: 20px
            }
        }

        @media (min-width: 1024px) {
            .news-archive__item:last-child .news-archive__link {
                padding-right: 20px;
                transition: all .3s ease
            }

            .news-archive__item:last-child .news-archive__link .icon--arrow-nav {
                transition: all .3s ease
            }

            @media not all and (pointer: coarse) {
                .news-archive__item:last-child .news-archive__link:hover {
                    color: var(--cl-blue)
                }

                .news-archive__item:last-child .news-archive__link:hover .icon--arrow-nav {
                    background: var(--cl-dark-blue)
                }
            }
        }

        @media (min-width: 1155px) {
            .news-archive__list {
                display: flex;
                flex-direction: column;
                gap: 5px
            }

            .news-archive__item:last-child {
                padding-top: 6px
            }
        }

        @media (min-width: 1648px) {
            .news-archive__text {
                font-size: 16px
            }

            .news-archive__title {
                font-size: 22px
            }

            .news-archive__link {
                font-size: 16px
            }

            .news-archive__list {
                gap: 7px
            }
        }

        @media (min-width: 1803px) {
            .news-archive__list {
                gap: 10px
            }

            .news-archive__item:last-child {
                padding-top: 3px
            }
        }

        @property --os-scroll-percent {
            syntax: "<number>";
            inherits: true;
            initial-value: 0
        }

        @property --os-viewport-percent {
            syntax: "<number>";
            inherits: true;
            initial-value: 0
        }

        :root {
            --swiper-theme-color: #007aff
        }

        .swiper {
            margin-left: auto;
            margin-right: auto;
            position: relative;
            overflow: hidden;
            list-style: none;
            padding: 0;
            z-index: 1;
            display: block
        }

        .swiper-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: flex;
            transition-property: transform;
            transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
            box-sizing: content-box
        }

        .swiper-wrapper {
            transform: translateZ(0)
        }

        .swiper-slide {
            flex-shrink: 0;
            width: 100%;
            height: 100%;
            position: relative;
            transition-property: transform;
            display: block
        }

        @charset "UTF-8";

        .link {
            display: inline;
            text-decoration: none;
            transition: color .3s;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none
        }

        @media (hover: none),
        (pointer: coarse) {
            .link:active {
                color: var(--cl-blue)
            }
        }

        @media not all and (pointer: coarse) {
            .link:hover {
                color: var(--cl-blue)
            }
        }

        .link--lk {
            order: 5;
            font-size: 40px;
            line-height: 40px;
            padding: 7px 0 8px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--cl-white);
            border-top: 1px solid var(--cl-white);
            margin-top: 87px;
            margin-bottom: 15px
        }

        @media (hover: none),
        (pointer: coarse) {
            .link--lk:active {
                color: var(--cl-white)
            }
        }

        @media not all and (pointer: coarse) {
            .link--lk:hover {
                color: var(--cl-white)
            }
        }

        .link--eye {
            order: 4;
            font-size: 22px;
            letter-spacing: .02em;
            display: inline-flex;
            align-items: center;
            gap: 5px;
            margin-bottom: auto
        }

        @media (hover: none),
        (pointer: coarse) {
            .link--eye:active {
                color: var(--cl-white)
            }
        }

        @media not all and (pointer: coarse) {
            .link--eye:hover {
                color: var(--cl-white)
            }
        }

        .link--phone {
            display: none
        }

        .link--tech {
            order: 6;
            font-size: 22px;
            line-height: 120%;
            letter-spacing: .02em;
            text-transform: uppercase
        }

        @media (hover: none),
        (pointer: coarse) {
            .link--tech:active {
                color: var(--cl-white)
            }
        }

        @media not all and (pointer: coarse) {
            .link--tech:hover {
                color: var(--cl-white)
            }
        }

        .link--footer-tech {
            display: none
        }

        @media (min-width: 768px) {
            .link--eye {
                font-size: 32px;
                gap: 16px;
                letter-spacing: 0
            }

            .link--lk {
                margin-bottom: 25px;
                font-size: 56px;
                line-height: 56px
            }

            .link--tech {
                font-size: 32px;
                line-height: 32px;
                letter-spacing: 0
            }
        }

        @media (min-width: 1024px) {
            .link--lk {
                order: 1;
                color: var(--cl-blue);
                font-size: 18px;
                line-height: 120%;
                letter-spacing: .02em;
                margin: 0;
                width: auto;
                padding: 0
            }
        }

        @media (min-width: 1024px) and (hover: none),
        (min-width: 1024px) and (pointer: coarse) {
            .link--lk:active {
                color: var(--cl-dark-blue)
            }
        }

        @media (min-width: 1024px) {
            @media not all and (pointer: coarse) {
                .link--lk:hover {
                    color: var(--cl-dark-blue)
                }
            }

            .link--eye {
                order: 2;
                color: var(--cl-blue);
                margin-bottom: 0
            }
        }

        @media (min-width: 1024px) and (hover: none),
        (min-width: 1024px) and (pointer: coarse) {
            .link--eye:active {
                color: var(--cl-dark-blue)
            }
        }

        @media (min-width: 1024px) {
            @media not all and (pointer: coarse) {
                .link--eye:hover {
                    color: var(--cl-dark-blue)
                }
            }

            .link--eye .link__inner {
                display: none
            }

            .link--phone {
                display: block;
                font-size: 18px;
                line-height: 120%;
                letter-spacing: .02em
            }

            .link--tech {
                display: none
            }

            .link--footer-tech {
                display: block;
                font-family: coolvetica;
                font-style: normal;
                font-weight: 400;
                text-transform: uppercase;
                font-size: 18px;
                line-height: 120%;
                letter-spacing: .02em
            }
        }

        @media (min-width: 1155px) {
            .link--eye {
                gap: 4px
            }

            .link--eye .link__inner {
                display: block;
                font-size: 18px;
                line-height: 120%;
                letter-spacing: .02em
            }
        }

        @media (min-width: 1648px) {

            .link--eye .link__inner,
            .link--lk,
            .link--tech,
            .link--phone,
            .link--footer-tech {
                font-size: 22px
            }
        }

        html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%
        }

        body {
            margin: 0
        }

        main {
            display: block
        }

        a {
            background-color: transparent
        }

        img {
            border-style: none
        }

        button,
        input {
            font-family: inherit;
            font-size: 100%;
            line-height: 1.15;
            margin: 0
        }

        button,
        input {
            overflow: visible
        }

        button {
            text-transform: none
        }

        button {
            -webkit-appearance: button
        }

        button::-moz-focus-inner {
            border-style: none;
            padding: 0
        }

        button:-moz-focusring {
            outline: 1px dotted ButtonText
        }

        [type=search] {
            -webkit-appearance: textfield;
            outline-offset: -2px
        }

        [type=search]::-webkit-search-decoration {
            -webkit-appearance: none
        }

        *,
        *:before,
        *:after {
            box-sizing: border-box
        }

        html,
        body {
            height: 100%;
            background-color: var(--cl-white)
        }

        body {
            font-size: 14px;
            font-family: robotoslab;
            line-height: 21px;
            color: var(--cl-font-main);
            vertical-align: top;
            -webkit-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            width: 100%;
            scroll-behavior: smooth;
            display: flex;
            flex-direction: column;
            min-width: 320px
        }

        .main {
            flex: 1 1 100%
        }

        img {
            max-width: 100%;
            height: auto
        }

        a {
            color: var(--cl-font-main);
            text-decoration: none;
            outline: none
        }

        ul {
            margin: 0
        }

        ul li {
            list-style: disc inside;
            margin-bottom: 0
        }

        p {
            margin-top: 0
        }

        form {
            display: block;
            clear: both;
            position: relative;
            zoom: 1
        }

        input {
            background: #fff;
            border: 1px solid var(--cl-gray);
            box-shadow: none;
            display: block;
            position: relative;
            width: 100%;
            color: var(--cl-font-main);
            vertical-align: top;
            outline: none;
            zoom: 1;
            font-family: robotoslab
        }

        .page-wrapper {
            max-width: 1802px;
            margin: 0 auto;
            padding: 0 16px
        }

        .main {
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
            transition: margin .3s ease
        }

        .header+.main {
            margin-top: 150px
        }

        .container {
            width: 100%
        }

        @media (min-width: 768px) {
            .header+.main {
                margin-top: 162px
            }

            .page-wrapper {
                padding: 0 40px
            }
        }

        @media (min-width: 1024px) {
            .main {
                flex-wrap: nowrap;
                gap: 25px
            }

            .header+.main {
                margin-top: 162px
            }

            .container {
                width: 100%
            }

            .container--small {
                width: calc((100vw - 80px + 20px) / 12 * 8 - 20px);
                margin-left: auto;
                flex-shrink: 0
            }
        }

        @media (min-width: 1155px) {
            .page-wrapper {
                padding: 0 48px
            }

            .container {
                width: 100%
            }

            .container--small {
                column-gap: 25px;
                width: calc((100vw - 96px + 25px) / 12 * 8.5 - 25px)
            }

            .header+.main {
                margin-top: 166px
            }
        }

        @media (min-width: 1280px) {
            .container--small {
                width: calc((100vw - 71px) * .75 - 25px)
            }
        }

        @media (min-width: 1648px) {
            .header+.main {
                margin-top: 210px
            }

            .page-wrapper {
                padding: 0 80px
            }

            .container {
                width: 100%
            }

            .container--small {
                width: calc((100vw - 135px) * .75 - 25px);
                max-width: 1225px
            }
        }

        @media (min-width: 1803px) {
            .header+.main {
                margin-top: 220px
            }
        }

        :root {
            --cl-transparent: transparent;
            --cl-white: #ffffff;
            --cl-black: #000000;
            --cl-gray: #dddddd;
            --cl-pure-or-mostly-pure-red: #ff0000;
            --cl-very-dark-gray-mostly-black: #212121;
            --cl-dark-gray: #505057;
            --cl-light-gray: #B2B2B2;
            --cl-almost-black: #202026;
            --cl-blue: #3232f0;
            --cl-dark-blue: #1f2772;
            --cl-dark-back: #293393;
            --cl-beige: #8C8C8C
        }

        @charset "UTF-8";

        .navigation {
            order: 3;
            width: 100%;
            margin: 12px 0;
            border-top: 1px solid var(--cl-white)
        }

        .navigation__item {
            border-bottom: 1px solid var(--cl-white)
        }

        .navigation__link {
            font-size: 40px;
            line-height: 40px;
            padding: 7px 0 8px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center
        }

        @media (min-width: 768px) {
            .navigation__link {
                font-size: 56px;
                line-height: 56px;
                padding: 7px 0
            }
        }

        @media (min-width: 1024px) {
            .navigation {
                order: 5;
                width: 100%;
                border-top: 11px solid var(--cl-blue);
                padding-top: 13px;
                margin-top: 9px;
                margin-bottom: 0
            }

            .navigation__inner {
                width: 100%;
                display: flex;
                justify-content: space-between
            }

            .navigation__link {
                font-size: 18px;
                line-height: 120%;
                letter-spacing: .02em;
                padding: 0
            }
        }

        @media (min-width: 1024px) and (hover: none),
        (min-width: 1024px) and (pointer: coarse) {
            .navigation__link:active {
                color: var(--cl-blue)
            }
        }

        @media (min-width: 1024px) {
            @media not all and (pointer: coarse) {
                .navigation__link:hover {
                    color: var(--cl-blue)
                }
            }
        }

        @media (min-width: 1155px) {
            .navigation {
                margin-top: 15px;
                padding-top: 15px
            }

            .navigation__inner {
                justify-content: space-between
            }

            .navigation__item:last-child {
                flex-shrink: 0;
                width: calc((100vw - 96px + 25px) / 12 * 3.5)
            }
        }

        @media (min-width: 1440px) {
            .navigation {
                margin-top: 15px;
                padding-top: 15px
            }

            .navigation__inner {
                position: relative;
                justify-content: space-between
            }

            .navigation__item:last-child {
                flex-shrink: 0;
                width: calc((100vw - 71px) / 4 - 25px)
            }
        }

        @media (min-width: 1648px) {
            .navigation {
                padding-top: 21px;
                margin-top: 16px
            }

            .navigation__item:last-child {
                width: calc((100vw - 135px) / 4 - 25px);
                max-width: 392px
            }

            .navigation__link {
                font-size: 22px
            }
        }

        .social {
            margin-bottom: 38px
        }

        .social--header {
            order: 1
        }

        .social__list {
            display: flex;
            align-items: center;
            gap: 16px
        }

        .social__link {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            overflow: hidden;
            background: var(--cl-black);
            transition: background .3s ease
        }

        @media (min-width: 768px) {
            .social--header {
                margin-bottom: 64px
            }

            .social__list {
                gap: 20px
            }

            .social__link,
            .social__image {
                width: 48px;
                height: 48px
            }
        }

        @media (min-width: 1024px) {
            .social--header {
                order: 5;
                margin-bottom: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: calc((100vw - 80px + 20px) / 12 * 4)
            }

            .social__list {
                gap: 6px
            }

            .social__link {
                width: 32px;
                height: 32px
            }
        }

        @media (min-width: 1024px) and (hover: none),
        (min-width: 1024px) and (pointer: coarse) {
            .social__link:active {
                background: var(--cl-blue)
            }
        }

        @media (min-width: 1024px) {
            @media not all and (pointer: coarse) {
                .social__link:hover {
                    background: var(--cl-blue)
                }
            }

            .social__image {
                width: 32px;
                height: 32px
            }
        }

        @media (min-width: 1155px) {
            .social--header {
                width: calc((100vw - 96px + 25px) / 12 * 3.5)
            }
        }

        @media (min-width: 1440px) {
            .social--header {
                width: calc((100vw - 71px) / 4 - 25px);
                display: flex;
                justify-content: space-between;
                align-items: center
            }
        }

        @media (min-width: 1648px) {
            .social--header {
                width: calc((100vw - 135px) / 4 - 25px);
                max-width: 392px
            }

            .social__list {
                gap: 8px
            }

            .social__link,
            .social__image {
                width: 35px;
                height: 35px
            }
        }

        .logo {
            width: 224px;
            display: inline-block;
            max-width: 100%;
            flex-shrink: 0;
            transition: width .6s ease
        }

        .logo img {
            width: 100%;
            height: 100%;
            display: block
        }

        @media (min-width: 375px) {
            .logo {
                width: 288px
            }
        }

        @media (min-width: 1024px) {
            .logo {
                margin-top: 4px
            }
        }

        @media (min-width: 1155px) {
            .logo {
                margin-top: 1px
            }
        }

        @media (min-width: 1440px) {
            .logo {
                width: 288px;
                padding-top: 0
            }
        }

        @media (min-width: 1648px) {
            .logo {
                width: 355px;
                margin-top: -7px
            }
        }

        :root {
            --cl-transparent: transparent;
            --cl-white: #ffffff;
            --cl-black: #000000;
            --cl-gray: #dddddd;
            --cl-pure-or-mostly-pure-red: #ff0000;
            --cl-very-dark-gray-mostly-black: #212121;
            --cl-dark-gray: #505057;
            --cl-light-gray: #B2B2B2;
            --cl-almost-black: #202026;
            --cl-blue: #3232f0;
            --cl-dark-blue: #1f2772;
            --cl-dark-back: #293393;
            --cl-beige: #8C8C8C
        }

        .search--header {
            order: 2;
            position: relative;
            width: 100%;
            margin-bottom: 28px
        }

        .search__form {
            width: 100%;
            display: flex;
            margin: 0 auto
        }

        .search__preview {
            background: none;
            color: var(--cl-white);
            font-size: 24px;
            padding: 0;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 24px;
            position: absolute;
            left: 15px;
            top: 14px
        }

        .search__preview-text {
            display: none
        }

        @media (min-width: 768px) {
            .search--header {
                margin-bottom: 60px
            }

            .search__preview {
                width: 44px;
                height: 44px;
                font-size: 44px;
                left: 25px;
                top: 16px
            }
        }

        @media (min-width: 1024px) {
            .search__preview {
                width: 32px;
                height: 32px;
                font-size: 30px;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                color: var(--cl-blue);
                z-index: 1
            }
        }

        @media (min-width: 1024px) and (hover: none),
        (min-width: 1024px) and (pointer: coarse) {
            .search__preview:active {
                color: var(--cl-dark-blue)
            }
        }

        @media (min-width: 1024px) {
            @media not all and (pointer: coarse) {
                .search__preview:hover {
                    color: var(--cl-dark-blue)
                }
            }

            .search--header {
                width: 32px;
                height: 32px;
                margin: 0
            }

            .search--header .search__form {
                left: -10px;
                top: 50%;
                transform: translateY(-50%);
                position: absolute;
                height: 48px;
                width: 52px;
                transition: width .3s ease
            }
        }

        @media (min-width: 1155px) {
            .search__preview {
                gap: 4px;
                width: 72px;
                font-size: 20px
            }

            .search__preview:hover {
                cursor: pointer
            }

            .search__preview-text {
                display: block;
                font-size: 18px;
                letter-spacing: .02em
            }

            .search--header {
                width: 72px
            }

            .search--header .search__form {
                width: 102px
            }
        }

        @media (min-width: 1648px) {
            .search__preview {
                font-size: 24px
            }

            .search__preview-text {
                font-size: 22px
            }
        }

        @charset "UTF-8";

        .slider-pagination {
            z-index: 1;
            display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
            padding: 10px 10px 9px;
            gap: 0;
            font-family: coolvetica;
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 120%;
            letter-spacing: .02em;
            text-transform: uppercase;
            color: var(--cl-white)
        }

        .slider-pagination__prev,
        .slider-pagination__next {
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            display: none;
            border-radius: 50%;
            background: transparent;
            transition: background .3s ease
        }

        @media (hover: none),
        (pointer: coarse) {

            .slider-pagination__prev:active,
            .slider-pagination__next:active {
                background: var(--cl-blue)
            }
        }

        @media not all and (pointer: coarse) {

            .slider-pagination__prev:hover,
            .slider-pagination__next:hover {
                background: var(--cl-blue);
                cursor: pointer
            }
        }

        @media (min-width: 768px) {
            .slider-pagination {
                z-index: 1;
                position: absolute;
                left: 15px;
                bottom: 15px;
                display: none;
                flex-direction: row;
                align-items: center;
                padding: 10px;
                gap: 2px;
                background: rgba(25, 27, 46, .25);
                backdrop-filter: blur(5px);
                border-radius: 15px;
                font-family: coolvetica;
                font-style: normal;
                font-weight: 400;
                font-size: 32px;
                line-height: 120%;
                letter-spacing: .02em;
                text-transform: uppercase;
                color: var(--cl-white);
                display: flex
            }

            .slider-pagination .swiper-pagination {
                letter-spacing: -1px
            }

            .slider-pagination__prev,
            .slider-pagination__next {
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px
            }
        }

        @media (min-width: 1024px) {
            .slider-pagination {
                left: 20px;
                bottom: 20px
            }
        }

        @media (min-width: 1155px) {
            .slider-pagination {
                left: 15px;
                bottom: 15px
            }
        }

        @media (min-width: 1803px) {
            .slider-pagination {
                left: 20px;
                bottom: 20px
            }
        }

        :root {
            --cl-transparent: transparent;
            --cl-white: #ffffff;
            --cl-black: #000000;
            --cl-gray: #dddddd;
            --cl-pure-or-mostly-pure-red: #ff0000;
            --cl-very-dark-gray-mostly-black: #212121;
            --cl-dark-gray: #505057;
            --cl-light-gray: #B2B2B2;
            --cl-almost-black: #202026;
            --cl-blue: #3232f0;
            --cl-dark-blue: #1f2772;
            --cl-dark-back: #293393;
            --cl-beige: #8C8C8C
        }

        @charset "UTF-8";

        .icon--service {
            display: none
        }

        .icon--arrow-nav {
            font-size: 17px;
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background: var(--cl-blue);
            color: var(--cl-white);
            flex-shrink: 0
        }

        .icon--burger {
            color: var(--cl-white)
        }

        .icon--burger-arrow {
            font-size: 38px;
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background: var(--cl-white);
            color: var(--cl-blue)
        }

        .icon--eye {
            font-size: 40px
        }

        .icon--prev {
            transform: rotate(180deg)
        }

        @media (min-width: 768px) {
            .icon--arrow-nav {
                font-size: 17px;
                width: 40px;
                height: 40px
            }

            .icon--burger-arrow {
                font-size: 40px;
                width: 40px;
                height: 40px
            }

            .icon--eye {
                font-size: 56px
            }
        }

        @media (min-width: 1024px) {
            .icon--service {
                display: block;
                font-size: 32px;
                color: var(--cl-almost-black)
            }

            .icon--burger-arrow {
                display: none
            }

            .icon--eye {
                font-size: 40px
            }
        }

        @media (min-width: 1155px) {
            .icon--eye {
                font-size: 32px
            }
        }

        @media (min-width: 1648px) {
            .icon--eye {
                font-size: 40px
            }
        }

        :root {
            --cl-transparent: transparent;
            --cl-white: #ffffff;
            --cl-black: #000000;
            --cl-gray: #dddddd;
            --cl-pure-or-mostly-pure-red: #ff0000;
            --cl-very-dark-gray-mostly-black: #212121;
            --cl-dark-gray: #505057;
            --cl-light-gray: #B2B2B2;
            --cl-almost-black: #202026;
            --cl-blue: #3232f0;
            --cl-dark-blue: #1f2772;
            --cl-dark-back: #293393;
            --cl-beige: #8C8C8C
        }

        @charset "UTF-8";

        .button {
            display: inline-block;
            text-decoration: none;
            font-size: 16px;
            line-height: 1;
            border: 1px solid transparent;
            transition: background-color .3s;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            cursor: pointer;
            font-family: coolvetica;
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 100%;
            text-align: center;
            letter-spacing: .01em;
            height: 42px;
            background: var(--cl-blue);
            color: var(--cl-white);
            padding: 0 10px;
            min-width: 121px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100px;
            text-transform: uppercase;
            transition: background .3s ease
        }

        @media (hover: none),
        (pointer: coarse) {
            .button:active {
                background: var(--cl-dark-blue);
                color: var(--cl-white)
            }
        }

        @media not all and (pointer: coarse) {
            .button:hover {
                background: var(--cl-dark-blue);
                color: var(--cl-white)
            }
        }

        .button--search {
            pointer-events: none;
            height: 34px;
            padding: 0 15px;
            min-width: 75px
        }

        .button--absolute {
            display: none;
            position: absolute;
            right: 7px;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
            animation-duration: .2s;
            animation-delay: .1s;
            animation-fill-mode: forwards
        }

        .button--burger {
            position: absolute;
            width: 32px;
            min-width: 32px;
            height: 32px;
            right: 16px;
            top: 38px;
            padding: 0;
            background: transparent;
            border-radius: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid var(--cl-white)
        }

        .button:disabled {
            opacity: .5;
            pointer-events: none
        }

        @media (min-width: 768px) {
            .button--burger {
                top: 40px;
                right: 40px;
                width: 48px;
                height: 48px;
                font-size: 24px
            }
        }

        @media (min-width: 1024px) {
            .button--burger {
                display: none
            }

            .button--search {
                display: flex
            }
        }

        :root {
            --cl-transparent: transparent;
            --cl-white: #ffffff;
            --cl-black: #000000;
            --cl-gray: #dddddd;
            --cl-pure-or-mostly-pure-red: #ff0000;
            --cl-very-dark-gray-mostly-black: #212121;
            --cl-dark-gray: #505057;
            --cl-light-gray: #B2B2B2;
            --cl-almost-black: #202026;
            --cl-blue: #3232f0;
            --cl-dark-blue: #1f2772;
            --cl-dark-back: #293393;
            --cl-beige: #8C8C8C
        }
    </style>
    <link rel="stylesheet" href="{{ asset('fonts/webfont-icons/icons.css') }}" crossorigin media="print"
        onload="this.media='all'">
    <noscript>
        <link rel="stylesheet" href="{{ asset('fonts/webfont-icons/icons.css') }}" crossorigin>
    </noscript>
    <link rel="stylesheet" href="{{ asset('fonts/fonts.css') }}" crossorigin media="print" onload="this.media='all'">
    <noscript>
        <link rel="stylesheet" href="{{ asset('fonts/fonts.css') }}" crossorigin>
    </noscript>
    <!-- Import fonts end -->
    <title>@yield('title', 'Главная')</title>
    <meta name="generator" content="Astro v2.10.15">
    <meta name="description">
    <meta name="keywords">
    <meta property="og:image">
    <meta property="og:title" content="Главная">
    <meta property="og:type" content="website">
    <meta property="og:url" content>
    <meta property="og:description">

    <link rel="stylesheet" href="{{ asset('_astro/assets/asset.Gui-1.css') }}" media="print" onload="this.media='all'">
    <noscript>
        <link rel="stylesheet" href="{{ asset('_astro/assets/asset.Gui-1.css') }}">
    </noscript>
    <link rel="stylesheet" href="{{ asset('_astro/assets/asset.index.css') }}" media="print" onload="this.media='all'">
    <noscript>
        <link rel="stylesheet" href="{{ asset('_astro/assets/asset.index.css') }}">
    </noscript>
    <link rel="stylesheet" href="{{ asset('_astro/assets/asset.vendor.css') }}" media="print"
        onload="this.media='all'">
    <noscript>
        <link rel="stylesheet" href="{{ asset('_astro/assets/asset.vendor.css') }}">
    </noscript>
    <link rel="stylesheet" href="{{ asset('_astro/assets/asset.Gui.css') }}" media="print" onload="this.media='all'">
    <noscript>
        <link rel="stylesheet" href="{{ asset('_astro/assets/asset.Gui.css') }}">
    </noscript>
    <link rel="stylesheet" href="{{ asset('_astro/assets/asset.Gui-2.css') }}" media="print"
        onload="this.media='all'">
    <noscript>
        <link rel="stylesheet" href="{{ asset('_astro/assets/asset.Gui-2.css') }}">
    </noscript>
    <link rel="stylesheet" href="{{ asset('_astro/assets/asset.construction.css') }}" media="print"
        onload="this.media='all'">
    <noscript>
        <link rel="stylesheet" href="{{ asset('_astro/assets/asset.construction.css') }}">
    </noscript>
    <link rel="stylesheet" href="{{ asset('_astro/assets/asset.assessment-services.css') }}" media="print"
        onload="this.media='all'">
    <noscript>
        <link rel="stylesheet" href="{{ asset('_astro/assets/asset.assessment-services.css') }}">
    </noscript>
    <link rel="stylesheet" href="{{ asset('_astro/assets/asset.contacts.css') }}" media="print"
        onload="this.media='all'">
    <noscript>
        <link rel="stylesheet" href="{{ asset('_astro/assets/asset.contacts.css') }}">
    </noscript>
    <script type="module" src="{{ asset('_astro/entry5.js') }}"></script>
</head>
