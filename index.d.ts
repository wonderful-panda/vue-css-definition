/*
 * TypeScript definition of CSS properties
 * MIT License
 *
 * Generated from source of vscode-css-languageservice (MIT License / Copyright 2016, Microsoft)
 *   https://github.com/Microsoft/vscode-css-languageservice
 */
declare module "vue-css-definition" {
    export type CssWideValue = "initial" | "inherit" | "unset";

    export type KnownColor = (
        "aliceblue"
      | "antiquewhite"
      | "aqua"
      | "aquamarine"
      | "azure"
      | "beige"
      | "bisque"
      | "black"
      | "blanchedalmond"
      | "blue"
      | "blueviolet"
      | "brown"
      | "burlywood"
      | "cadetblue"
      | "chartreuse"
      | "chocolate"
      | "coral"
      | "cornflowerblue"
      | "cornsilk"
      | "crimson"
      | "cyan"
      | "darkblue"
      | "darkcyan"
      | "darkgoldenrod"
      | "darkgray"
      | "darkgrey"
      | "darkgreen"
      | "darkkhaki"
      | "darkmagenta"
      | "darkolivegreen"
      | "darkorange"
      | "darkorchid"
      | "darkred"
      | "darksalmon"
      | "darkseagreen"
      | "darkslateblue"
      | "darkslategray"
      | "darkslategrey"
      | "darkturquoise"
      | "darkviolet"
      | "deeppink"
      | "deepskyblue"
      | "dimgray"
      | "dimgrey"
      | "dodgerblue"
      | "firebrick"
      | "floralwhite"
      | "forestgreen"
      | "fuchsia"
      | "gainsboro"
      | "ghostwhite"
      | "gold"
      | "goldenrod"
      | "gray"
      | "grey"
      | "green"
      | "greenyellow"
      | "honeydew"
      | "hotpink"
      | "indianred"
      | "indigo"
      | "ivory"
      | "khaki"
      | "lavender"
      | "lavenderblush"
      | "lawngreen"
      | "lemonchiffon"
      | "lightblue"
      | "lightcoral"
      | "lightcyan"
      | "lightgoldenrodyellow"
      | "lightgray"
      | "lightgrey"
      | "lightgreen"
      | "lightpink"
      | "lightsalmon"
      | "lightseagreen"
      | "lightskyblue"
      | "lightslategray"
      | "lightslategrey"
      | "lightsteelblue"
      | "lightyellow"
      | "lime"
      | "limegreen"
      | "linen"
      | "magenta"
      | "maroon"
      | "mediumaquamarine"
      | "mediumblue"
      | "mediumorchid"
      | "mediumpurple"
      | "mediumseagreen"
      | "mediumslateblue"
      | "mediumspringgreen"
      | "mediumturquoise"
      | "mediumvioletred"
      | "midnightblue"
      | "mintcream"
      | "mistyrose"
      | "moccasin"
      | "navajowhite"
      | "navy"
      | "oldlace"
      | "olive"
      | "olivedrab"
      | "orange"
      | "orangered"
      | "orchid"
      | "palegoldenrod"
      | "palegreen"
      | "paleturquoise"
      | "palevioletred"
      | "papayawhip"
      | "peachpuff"
      | "peru"
      | "pink"
      | "plum"
      | "powderblue"
      | "purple"
      | "red"
      | "rebeccapurple"
      | "rosybrown"
      | "royalblue"
      | "saddlebrown"
      | "salmon"
      | "sandybrown"
      | "seagreen"
      | "seashell"
      | "sienna"
      | "silver"
      | "skyblue"
      | "slateblue"
      | "slategray"
      | "slategrey"
      | "snow"
      | "springgreen"
      | "steelblue"
      | "tan"
      | "teal"
      | "thistle"
      | "tomato"
      | "turquoise"
      | "violet"
      | "wheat"
      | "white"
      | "whitesmoke"
      | "yellow"
      | "yellowgreen");

    export type Position = (
        "bottom"
      | "center"
      | "left"
      | "right"
      | "top");

    export type LineStyle = (
        "dashed"
      | "dotted"
      | "double"
      | "groove"
      | "hidden"
      | "inset"
      | "none"
      | "outset"
      | "ridge"
      | "solid");

    export type TransitionTimingFunction = (
        "ease"
      | "ease-in"
      | "ease-in-out"
      | "ease-out"
      | "linear"
      | "step-end"
      | "step-start"
      | "steps()"
      | "cubic-bezier()");

    export interface CssProperties {
        additiveSymbols?: string | CssWideValue;
        alignContent?: "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "stretch" | string | CssWideValue;
        alignItems?: "baseline" | "center" | "flex-end" | "flex-start" | "stretch" | string | CssWideValue;
        alignSelf?: "auto" | "baseline" | "center" | "flex-end" | "flex-start" | "stretch" | string | CssWideValue;
        all?: string | CssWideValue;
        alt?: string | CssWideValue;
        animation?: "alternate" | "alternate-reverse" | "backwards" | "both" | "forwards" | "infinite" | "none" | "normal" | "reverse" | string | CssWideValue;
        animationDelay?: string | CssWideValue;
        animationDirection?: "alternate" | "alternate-reverse" | "normal" | "reverse" | string | CssWideValue;
        animationDuration?: string | CssWideValue;
        animationFillMode?: "backwards" | "both" | "forwards" | "none" | string | CssWideValue;
        animationIterationCount?: "infinite" | number | CssWideValue;
        animationName?: "none" | string | CssWideValue;
        animationPlayState?: "paused" | "running" | string | CssWideValue;
        animationTimingFunction?: TransitionTimingFunction | string | CssWideValue;
        backfaceVisibility?: "hidden" | "visible" | string | CssWideValue;
        background?: "fixed" | "local" | "scroll" | string | CssWideValue;
        backgroundAttachment?: "fixed" | "local" | "scroll" | string | CssWideValue;
        backgroundBlendMode?: "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity" | string | CssWideValue;
        backgroundClip?: string | CssWideValue;
        backgroundColor?: KnownColor | string | CssWideValue;
        backgroundImage?: "none" | string | CssWideValue;
        backgroundOrigin?: string | CssWideValue;
        backgroundPosition?: string | CssWideValue;
        backgroundPositionX?: "center" | "left" | "right" | string | CssWideValue;
        backgroundPositionY?: "bottom" | "center" | "top" | string | CssWideValue;
        backgroundRepeat?: string | CssWideValue;
        backgroundSize?: "auto" | "contain" | "cover" | string | CssWideValue;
        behavior?: string | CssWideValue;
        blockSize?: "auto" | string | CssWideValue;
        border?: string | CssWideValue;
        borderBlockEnd?: string | CssWideValue;
        borderBlockStart?: string | CssWideValue;
        borderBlockEndColor?: KnownColor | string | CssWideValue;
        borderBlockStartColor?: KnownColor | string | CssWideValue;
        borderBlockEndStyle?: LineStyle | CssWideValue;
        borderBlockStartStyle?: string | CssWideValue;
        borderBlockEndWidth?: string | CssWideValue;
        borderBlockStartWidth?: string | CssWideValue;
        borderBottom?: string | CssWideValue;
        borderBottomColor?: KnownColor | string | CssWideValue;
        borderBottomLeftRadius?: string | CssWideValue;
        borderBottomRightRadius?: string | CssWideValue;
        borderBottomStyle?: LineStyle | CssWideValue;
        borderBottomWidth?: string | CssWideValue;
        borderCollapse?: "collapse" | "separate" | string | CssWideValue;
        borderColor?: KnownColor | string | CssWideValue;
        borderImage?: "auto" | "fill" | "none" | "repeat" | "round" | "space" | "stretch" | "url()" | string | CssWideValue;
        borderImageOutset?: string | CssWideValue;
        borderImageRepeat?: "repeat" | "round" | "space" | "stretch" | string | CssWideValue;
        borderImageSlice?: "fill" | string | CssWideValue;
        borderImageSource?: "none" | string | CssWideValue;
        borderImageWidth?: "auto" | string | CssWideValue;
        borderInlineEnd?: string | CssWideValue;
        borderInlineStart?: string | CssWideValue;
        borderInlineEndColor?: KnownColor | string | CssWideValue;
        borderInlineStartColor?: KnownColor | string | CssWideValue;
        borderInlineEndStyle?: LineStyle | CssWideValue;
        borderInlineStartStyle?: string | CssWideValue;
        borderInlineEndWidth?: string | CssWideValue;
        borderInlineStartWidth?: string | CssWideValue;
        borderLeft?: string | CssWideValue;
        borderLeftColor?: KnownColor | string | CssWideValue;
        borderLeftStyle?: LineStyle | CssWideValue;
        borderLeftWidth?: string | CssWideValue;
        borderRadius?: string | CssWideValue;
        borderRight?: string | CssWideValue;
        borderRightColor?: KnownColor | string | CssWideValue;
        borderRightStyle?: LineStyle | CssWideValue;
        borderRightWidth?: string | CssWideValue;
        borderSpacing?: string | CssWideValue;
        borderStyle?: LineStyle | CssWideValue;
        borderTop?: string | CssWideValue;
        borderTopColor?: KnownColor | string | CssWideValue;
        borderTopLeftRadius?: string | CssWideValue;
        borderTopRightRadius?: string | CssWideValue;
        borderTopStyle?: LineStyle | CssWideValue;
        borderTopWidth?: string | CssWideValue;
        borderWidth?: string | CssWideValue;
        bottom?: "auto" | string | CssWideValue;
        boxDecorationBreak?: "clone" | "slice" | string | CssWideValue;
        boxShadow?: "inset" | string | CssWideValue;
        boxSizing?: "border-box" | "content-box" | string | CssWideValue;
        breakAfter?: "always" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "column" | "left" | "page" | "right" | string | CssWideValue;
        breakBefore?: "always" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "column" | "left" | "page" | "right" | string | CssWideValue;
        breakInside?: "auto" | "avoid" | "avoid-column" | "avoid-page" | string | CssWideValue;
        captionSide?: "bottom" | "top" | string | CssWideValue;
        clear?: "both" | "left" | "none" | "right" | string | CssWideValue;
        clip?: "auto" | "rect()" | string | CssWideValue;
        clipPath?: "none" | "url()" | string | CssWideValue;
        clipRule?: "evenodd" | "nonzero" | string | CssWideValue;
        color?: KnownColor | string | CssWideValue;
        colorInterpolationFilters?: "auto" | "linearRGB" | "sRGB" | string | CssWideValue;
        columnCount?: "auto" | string | CssWideValue;
        columnFill?: "auto" | "balance" | string | CssWideValue;
        columnGap?: "normal" | string | CssWideValue;
        columnRule?: string | CssWideValue;
        columnRuleColor?: KnownColor | string | CssWideValue;
        columnRuleStyle?: LineStyle | CssWideValue;
        columnRuleWidth?: string | CssWideValue;
        columns?: "auto" | string | CssWideValue;
        columnSpan?: "all" | "none" | string | CssWideValue;
        columnWidth?: "auto" | string | CssWideValue;
        content?: "attr()" | "counter(name)" | "icon" | "none" | "normal" | "url()" | string | CssWideValue;
        counterIncrement?: "none" | string | CssWideValue;
        counterReset?: "none" | string | CssWideValue;
        cursor?: "alias" | "all-scroll" | "auto" | "cell" | "col-resize" | "context-menu" | "copy" | "crosshair" | "default" | "e-resize" | "ew-resize" | "grab" | "grabbing" | "help" | "move" | "ne-resize" | "nesw-resize" | "no-drop" | "none" | "not-allowed" | "n-resize" | "ns-resize" | "nw-resize" | "nwse-resize" | "pointer" | "progress" | "row-resize" | "se-resize" | "s-resize" | "sw-resize" | "text" | "vertical-text" | "wait" | "w-resize" | "zoom-in" | "zoom-out" | string | CssWideValue;
        direction?: "ltr" | "rtl" | string | CssWideValue;
        display?: "block" | "flex" | "flexbox" | "inline" | "inline-block" | "inline-flex" | "inline-flexbox" | "inline-table" | "list-item" | "none" | "ruby" | "ruby-base" | "ruby-base-container" | "ruby-text" | "ruby-text-container" | "run-in" | "table" | "table-caption" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row" | "table-row-group" | string | CssWideValue;
        emptyCells?: "hide" | "show" | string | CssWideValue;
        enableBackground?: "accumulate" | "new" | string | CssWideValue;
        fallback?: string | CssWideValue;
        fill?: "url()" | string | CssWideValue;
        fillOpacity?: string | CssWideValue;
        fillRule?: "evenodd" | "nonzero" | string | CssWideValue;
        filter?: "none" | "blur()" | "brightness()" | "contrast()" | "drop-shadow()" | "grayscale()" | "hue-rotate()" | "invert()" | "opacity()" | "saturate()" | "sepia()" | "url()" | string | CssWideValue;
        flex?: "auto" | "content" | "none" | string | CssWideValue;
        flexBasis?: "auto" | "content" | string | CssWideValue;
        flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | string | CssWideValue;
        flexFlow?: "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse" | string | CssWideValue;
        flexGrow?: number | CssWideValue;
        flexShrink?: number | CssWideValue;
        flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | string | CssWideValue;
        float?: "left" | "none" | "right" | string | CssWideValue;
        floodColor?: KnownColor | string | CssWideValue;
        floodOpacity?: string | CssWideValue;
        font?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold" | "bolder" | "caption" | "icon" | "italic" | "large" | "larger" | "lighter" | "medium" | "menu" | "message-box" | "normal" | "oblique" | "small" | "small-caps" | "small-caption" | "smaller" | "status-bar" | "x-large" | "x-small" | "xx-large" | "xx-small" | string | CssWideValue;
        fontFamily?: "Arial, Helvetica, sans-serif" | "Cambria, Cochin, Georgia, Times, Times New Roman, serif" | "Courier New, Courier, monospace" | "cursive" | "fantasy" | "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" | "Georgia, 'Times New Roman', Times, serif" | "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" | "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" | "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" | "monospace" | "sans-serif" | "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" | "serif" | "'Times New Roman', Times, serif" | "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" | "Verdana, Geneva, Tahoma, sans-serif" | string | CssWideValue;
        fontFeatureSettings?: "\"aalt\"" | "\"abvf\"" | "\"abvm\"" | "\"abvs\"" | "\"afrc\"" | "\"akhn\"" | "\"blwf\"" | "\"blwm\"" | "\"blws\"" | "\"calt\"" | "\"case\"" | "\"ccmp\"" | "\"cfar\"" | "\"cjct\"" | "\"clig\"" | "\"cpct\"" | "\"cpsp\"" | "\"cswh\"" | "\"curs\"" | "\"c2pc\"" | "\"c2cs\"" | "\"dist\"" | "\"dlig\"" | "\"dnom\"" | "\"dtls\"" | "\"expt\"" | "\"falt\"" | "\"fin2\"" | "\"fin3\"" | "\"fina\"" | "\"flac\"" | "\"frac\"" | "\"fwid\"" | "\"half\"" | "\"haln\"" | "\"halt\"" | "\"hist\"" | "\"hkna\"" | "\"hlig\"" | "\"hngl\"" | "\"hojo\"" | "\"hwid\"" | "\"init\"" | "\"isol\"" | "\"ital\"" | "\"jalt\"" | "\"jp78\"" | "\"jp83\"" | "\"jp90\"" | "\"jp04\"" | "\"kern\"" | "\"lfbd\"" | "\"liga\"" | "\"ljmo\"" | "\"lnum\"" | "\"locl\"" | "\"ltra\"" | "\"ltrm\"" | "\"mark\"" | "\"med2\"" | "\"medi\"" | "\"mgrk\"" | "\"mkmk\"" | "\"nalt\"" | "\"nlck\"" | "\"nukt\"" | "\"numr\"" | "\"onum\"" | "\"opbd\"" | "\"ordn\"" | "\"ornm\"" | "\"palt\"" | "\"pcap\"" | "\"pkna\"" | "\"pnum\"" | "\"pref\"" | "\"pres\"" | "\"pstf\"" | "\"psts\"" | "\"pwid\"" | "\"qwid\"" | "\"rand\"" | "\"rclt\"" | "\"rlig\"" | "\"rkrf\"" | "\"rphf\"" | "\"rtbd\"" | "\"rtla\"" | "\"rtlm\"" | "\"ruby\"" | "\"salt\"" | "\"sinf\"" | "\"size\"" | "\"smcp\"" | "\"smpl\"" | "\"ssty\"" | "\"stch\"" | "\"subs\"" | "\"sups\"" | "\"swsh\"" | "\"titl\"" | "\"tjmo\"" | "\"tnam\"" | "\"tnum\"" | "\"trad\"" | "\"twid\"" | "\"unic\"" | "\"valt\"" | "\"vatu\"" | "\"vert\"" | "\"vhal\"" | "\"vjmo\"" | "\"vkna\"" | "\"vkrn\"" | "\"vpal\"" | "\"vrt2\"" | "\"zero\"" | "normal" | "off" | "on" | string | CssWideValue;
        fontKerning?: "auto" | "none" | "normal" | string | CssWideValue;
        fontLanguageOverride?: "normal" | string | CssWideValue;
        fontSize?: "large" | "larger" | "medium" | "small" | "smaller" | "x-large" | "x-small" | "xx-large" | "xx-small" | string | CssWideValue;
        fontSizeAdjust?: "none" | number | CssWideValue;
        fontStretch?: "condensed" | "expanded" | "extra-condensed" | "extra-expanded" | "narrower" | "normal" | "semi-condensed" | "semi-expanded" | "ultra-condensed" | "ultra-expanded" | "wider" | string | CssWideValue;
        fontStyle?: "italic" | "normal" | "oblique" | string | CssWideValue;
        fontSynthesis?: "none" | "style" | "weight" | string | CssWideValue;
        fontVariant?: "normal" | "small-caps" | string | CssWideValue;
        fontVariantAlternates?: "annotation()" | "character-variant()" | "historical-forms" | "normal" | "ornaments()" | "styleset()" | "stylistic()" | "swash()" | string | CssWideValue;
        fontVariantCaps?: "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase" | string | CssWideValue;
        fontVariantEastAsian?: "full-width" | "jis04" | "jis78" | "jis83" | "jis90" | "normal" | "proportional-width" | "ruby" | "simplified" | "traditional" | string | CssWideValue;
        fontVariantLigatures?: "additional-ligatures" | "common-ligatures" | "contextual" | "discretionary-ligatures" | "historical-ligatures" | "no-additional-ligatures" | "no-common-ligatures" | "no-contextual" | "no-discretionary-ligatures" | "no-historical-ligatures" | "none" | "normal" | string | CssWideValue;
        fontVariantNumeric?: "diagonal-fractions" | "lining-nums" | "normal" | "oldstyle-nums" | "ordinal" | "proportional-nums" | "slashed-zero" | "stacked-fractions" | "tabular-nums" | string | CssWideValue;
        fontVariantPosition?: "normal" | "sub" | "super" | string | CssWideValue;
        fontWeight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold" | "bolder" | "lighter" | "normal" | string | CssWideValue;
        glyphOrientationHorizontal?: string | CssWideValue;
        glyphOrientationVertical?: "auto" | string | CssWideValue;
        height?: "auto" | "fit-content" | "max-content" | "min-content" | string | CssWideValue;
        imageOrientation?: "flip" | "from-image" | string | CssWideValue;
        imageRendering?: "auto" | "crisp-edges" | "optimizeQuality" | "optimizeSpeed" | "pixelated" | string | CssWideValue;
        imeMode?: "active" | "auto" | "disabled" | "inactive" | "normal" | string | CssWideValue;
        inlineSize?: "auto" | string | CssWideValue;
        isolation?: "auto" | "isolate" | string | CssWideValue;
        justifyContent?: "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | string | CssWideValue;
        kerning?: "auto" | string | CssWideValue;
        left?: "auto" | string | CssWideValue;
        letterSpacing?: "normal" | string | CssWideValue;
        lightingColor?: KnownColor | string | CssWideValue;
        lineHeight?: "normal" | string | CssWideValue;
        listStyle?: "armenian" | "circle" | "decimal" | "decimal-leading-zero" | "disc" | "georgian" | "inside" | "lower-alpha" | "lower-greek" | "lower-latin" | "lower-roman" | "none" | "outside" | "square" | "symbols()" | "upper-alpha" | "upper-latin" | "upper-roman" | "url()" | string | CssWideValue;
        listStyleImage?: "none" | string | CssWideValue;
        listStylePosition?: "inside" | "outside" | string | CssWideValue;
        listStyleType?: "armenian" | "circle" | "decimal" | "decimal-leading-zero" | "disc" | "georgian" | "lower-alpha" | "lower-greek" | "lower-latin" | "lower-roman" | "none" | "square" | "symbols()" | "upper-alpha" | "upper-latin" | "upper-roman" | string | CssWideValue;
        margin?: "auto" | string | CssWideValue;
        marginBlockEnd?: "auto" | string | CssWideValue;
        marginBlockStart?: "auto" | string | CssWideValue;
        marginBottom?: "auto" | string | CssWideValue;
        marginInlineEnd?: "auto" | string | CssWideValue;
        marginInlineStart?: "auto" | string | CssWideValue;
        marginLeft?: "auto" | string | CssWideValue;
        marginRight?: "auto" | string | CssWideValue;
        marginTop?: "auto" | string | CssWideValue;
        marker?: "none" | "url()" | string | CssWideValue;
        markerEnd?: "none" | "url()" | string | CssWideValue;
        markerMid?: "none" | "url()" | string | CssWideValue;
        markerStart?: "none" | "url()" | string | CssWideValue;
        maskType?: "alpha" | "luminance" | string | CssWideValue;
        maxBlockSize?: "none" | string | CssWideValue;
        maxHeight?: "none" | "fit-content" | "max-content" | "min-content" | string | CssWideValue;
        maxInlineSize?: "none" | string | CssWideValue;
        maxWidth?: "none" | "fit-content" | "max-content" | "min-content" | string | CssWideValue;
        minBlockSize?: string | CssWideValue;
        minHeight?: "auto" | "fit-content" | "max-content" | "min-content" | string | CssWideValue;
        minInlineSize?: string | CssWideValue;
        minWidth?: "auto" | "fit-content" | "max-content" | "min-content" | string | CssWideValue;
        mixBlendMode?: "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity" | string | CssWideValue;
        motion?: "none" | "path()" | "auto" | "reverse" | string | CssWideValue;
        motionOffset?: string | CssWideValue;
        motionPath?: "none" | "path()" | string | CssWideValue;
        motionRotation?: "auto" | "reverse" | string | CssWideValue;
        navDown?: "auto" | "current" | "root" | string | CssWideValue;
        navIndex?: "auto" | number | CssWideValue;
        navLeft?: "auto" | "current" | "root" | string | CssWideValue;
        navRight?: "auto" | "current" | "root" | string | CssWideValue;
        navUp?: "auto" | "current" | "root" | string | CssWideValue;
        negative?: string | CssWideValue;
        objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down" | string | CssWideValue;
        objectPosition?: string | CssWideValue;
        opacity?: string | CssWideValue;
        order?: string | CssWideValue;
        orphans?: string | CssWideValue;
        offsetBlockEnd?: "auto" | string | CssWideValue;
        offsetBlockStart?: "auto" | string | CssWideValue;
        offsetInlineEnd?: "auto" | string | CssWideValue;
        offsetInlineStart?: "auto" | string | CssWideValue;
        outline?: "auto" | "invert" | string | CssWideValue;
        outlineColor?: "invert" | KnownColor | string | CssWideValue;
        outlineOffset?: string | CssWideValue;
        outlineStyle?: "auto" | LineStyle | CssWideValue;
        outlineWidth?: string | CssWideValue;
        overflow?: "auto" | "hidden" | "scroll" | "visible" | string | CssWideValue;
        overflowWrap?: "break-word" | "normal" | string | CssWideValue;
        overflowX?: "auto" | "hidden" | "scroll" | "visible" | string | CssWideValue;
        overflowY?: "auto" | "hidden" | "scroll" | "visible" | string | CssWideValue;
        pad?: string | CssWideValue;
        padding?: string | CssWideValue;
        paddingBottom?: string | CssWideValue;
        paddingBlockEnd?: string | CssWideValue;
        paddingBlockStart?: string | CssWideValue;
        paddingInlineEnd?: string | CssWideValue;
        paddingInlineStart?: string | CssWideValue;
        paddingLeft?: string | CssWideValue;
        paddingRight?: string | CssWideValue;
        paddingTop?: string | CssWideValue;
        pageBreakAfter?: "always" | "auto" | "avoid" | "left" | "right" | string | CssWideValue;
        pageBreakBefore?: "always" | "auto" | "avoid" | "left" | "right" | string | CssWideValue;
        pageBreakInside?: "auto" | "avoid" | string | CssWideValue;
        paintOrder?: "fill" | "markers" | "normal" | "stroke" | string | CssWideValue;
        perspective?: "none" | string | CssWideValue;
        perspectiveOrigin?: string | CssWideValue;
        pointerEvents?: "all" | "fill" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | string | CssWideValue;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | string | CssWideValue;
        prefix?: string | CssWideValue;
        quotes?: "none" | string | CssWideValue;
        range?: "auto" | "infinite" | string | CssWideValue;
        resize?: "both" | "horizontal" | "none" | "vertical" | string | CssWideValue;
        right?: "auto" | string | CssWideValue;
        rubyAlign?: "auto" | "center" | "distribute-letter" | "distribute-space" | "left" | "line-edge" | "right" | "start" | "space-between" | "space-around" | string | CssWideValue;
        rubyOverhang?: "auto" | "end" | "none" | "start" | string | CssWideValue;
        rubyPosition?: "after" | "before" | "inline" | "right" | string | CssWideValue;
        rubySpan?: "attr(x)" | "none" | string | CssWideValue;
        "scrollbar-3dlight-color"?: KnownColor | string | CssWideValue;
        scrollbarArrowColor?: KnownColor | string | CssWideValue;
        scrollbarBaseColor?: KnownColor | string | CssWideValue;
        scrollbarDarkshadowColor?: KnownColor | string | CssWideValue;
        scrollbarFaceColor?: KnownColor | string | CssWideValue;
        scrollbarHighlightColor?: KnownColor | string | CssWideValue;
        scrollbarShadowColor?: KnownColor | string | CssWideValue;
        scrollbarTrackColor?: KnownColor | string | CssWideValue;
        scrollBehavior?: "auto" | "smooth" | string | CssWideValue;
        scrollSnapCoordinate?: "none" | string | CssWideValue;
        scrollSnapDestination?: string | CssWideValue;
        scrollSnapPointsX?: "none" | "repeat()" | string | CssWideValue;
        scrollSnapPointsY?: "none" | "repeat()" | string | CssWideValue;
        scrollSnapType?: "none" | "mandatory" | "proximity" | string | CssWideValue;
        shapeImageThreshold?: number | CssWideValue;
        shapeMargin?: string | CssWideValue;
        shapeOutside?: "margin-box" | "none" | string | CssWideValue;
        size?: string | CssWideValue;
        src?: "url()" | "format()" | "local()" | string | CssWideValue;
        stopColor?: KnownColor | string | CssWideValue;
        stopOpacity?: string | CssWideValue;
        stroke?: "url()" | string | CssWideValue;
        strokeDasharray?: "none" | string | CssWideValue;
        strokeDashoffset?: string | CssWideValue;
        strokeLinecap?: "butt" | "round" | "square" | string | CssWideValue;
        strokeLinejoin?: "bevel" | "miter" | "round" | string | CssWideValue;
        strokeMiterlimit?: number | CssWideValue;
        strokeOpacity?: string | CssWideValue;
        strokeWidth?: string | CssWideValue;
        suffix?: string | CssWideValue;
        system?: "additive" | "alphabetic" | "cyclic" | "extends" | "fixed" | "numeric" | "symbolic" | string | CssWideValue;
        symbols?: string | CssWideValue;
        tableLayout?: "auto" | "fixed" | string | CssWideValue;
        tabSize?: string | CssWideValue;
        textAlign?: "center" | "end" | "justify" | "left" | "right" | "start" | string | CssWideValue;
        textAlignLast?: "auto" | "center" | "justify" | "left" | "right" | string | CssWideValue;
        textAnchor?: "end" | "middle" | "start" | string | CssWideValue;
        textDecoration?: "dashed" | "dotted" | "double" | "line-through" | "overline" | "solid" | "underline" | "wavy" | KnownColor | string | CssWideValue;
        textDecorationLine?: "line-through" | "none" | "overline" | "underline" | string | CssWideValue;
        textDecorationStyle?: "dashed" | "dotted" | "double" | "none" | "solid" | "wavy" | string | CssWideValue;
        textIndent?: string | CssWideValue;
        textJustify?: "auto" | "distribute" | "distribute-all-lines" | "inter-cluster" | "inter-ideograph" | "inter-word" | "kashida" | "newspaper" | string | CssWideValue;
        textOrientation?: "sideways" | "sideways-right" | "upright" | string | CssWideValue;
        textOverflow?: "clip" | "ellipsis" | string | CssWideValue;
        textRendering?: "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed" | string | CssWideValue;
        textShadow?: string | CssWideValue;
        textTransform?: "capitalize" | "lowercase" | "none" | "uppercase" | string | CssWideValue;
        textUnderlinePosition?: "above" | "auto" | "below" | string | CssWideValue;
        top?: "auto" | string | CssWideValue;
        touchAction?: "auto" | "cross-slide-x" | "cross-slide-y" | "double-tap-zoom" | "manipulation" | "none" | "pan-x" | "pan-y" | "pinch-zoom" | string | CssWideValue;
        transform?: "matrix()" | "matrix3d()" | "none" | "perspective()" | "rotate()" | "rotate3d()" | "rotateX('angle')" | "rotateY('angle')" | "rotateZ('angle')" | "scale()" | "scale3d()" | "scaleX()" | "scaleY()" | "scaleZ()" | "skew()" | "skewX()" | "skewY()" | "translate()" | "translate3d()" | "translateX()" | "translateY()" | "translateZ()" | string | CssWideValue;
        transformOrigin?: string | CssWideValue;
        transformStyle?: "flat" | "preserve-3d" | string | CssWideValue;
        transition?: "all" | "none" | string | CssWideValue;
        transitionDelay?: string | CssWideValue;
        transitionDuration?: string | CssWideValue;
        transitionProperty?: "all" | "none" | string | CssWideValue;
        transitionTimingFunction?: TransitionTimingFunction | string | CssWideValue;
        unicodeBidi?: "bidi-override" | "embed" | "isolate" | "isolate-override" | "normal" | "plaintext" | string | CssWideValue;
        unicodeRange?: "U+26" | "U+20-24F, U+2B0-2FF, U+370-4FF, U+1E00-1EFF, U+2000-20CF, U+2100-23FF, U+2500-26FF, U+E000-F8FF, U+FB00–FB4F" | "U+20-17F, U+2B0-2FF, U+2000-206F, U+20A0-20CF, U+2100-21FF, U+2600-26FF" | "U+20-2FF, U+370-4FF, U+1E00-20CF, U+2100-23FF, U+2500-26FF, U+FB00-FB4F, U+FFF0-FFFD" | "U+20-4FF, U+530-58F, U+10D0-10FF, U+1E00-23FF, U+2440-245F, U+2500-26FF, U+FB00-FB4F, U+FE20-FE2F, U+FFF0-FFFD" | "U+00-7F" | "U+80-FF" | "U+100-17F" | "U+180-24F" | "U+1E00-1EFF" | "U+250-2AF" | "U+370-3FF" | "U+1F00-1FFF" | "U+400-4FF" | "U+500-52F" | "U+00-52F, U+1E00-1FFF, U+2200–22FF" | "U+530–58F" | "U+590–5FF" | "U+600–6FF" | "U+750–77F" | "U+8A0–8FF" | "U+700–74F" | "U+900–97F" | "U+980–9FF" | "U+A00–A7F" | "U+A80–AFF" | "U+B00–B7F" | "U+B80–BFF" | "U+C00–C7F" | "U+C80–CFF" | "U+D00–D7F" | "U+D80–DFF" | "U+118A0–118FF" | "U+E00–E7F" | "U+1A20–1AAF" | "U+AA80–AADF" | "U+E80–EFF" | "U+F00–FFF" | "U+1000–109F" | "U+10A0–10FF" | "U+1200–137F" | "U+1380–139F" | "U+2D80–2DDF" | "U+AB00–AB2F" | "U+1780–17FF" | "U+1800–18AF" | "U+1B80–1BBF" | "U+1CC0–1CCF" | "U+4E00–9FD5" | "U+3400–4DB5" | "U+2F00–2FDF" | "U+2E80–2EFF" | "U+1100–11FF" | "U+AC00–D7AF" | "U+3040–309F" | "U+30A0–30FF" | "U+A5, U+4E00-9FFF, U+30??, U+FF00-FF9F" | "U+A4D0–A4FF" | "U+A000–A48F" | "U+A490–A4CF" | "U+2000-206F" | "U+3000–303F" | "U+2070–209F" | "U+20A0–20CF" | "U+2100–214F" | "U+2150–218F" | "U+2190–21FF" | "U+2200–22FF" | "U+2300–23FF" | "U+E000-F8FF" | "U+FB00–FB4F" | "U+FB50–FDFF" | "U+1F600–1F64F" | "U+2600–26FF" | "U+1F300–1F5FF" | "U+1F900–1F9FF" | "U+1F680–1F6FF" | string | CssWideValue;
        userSelect?: "all" | "auto" | "contain" | "none" | "text" | string | CssWideValue;
        verticalAlign?: "auto" | "baseline" | "bottom" | "middle" | "sub" | "super" | "text-bottom" | "text-top" | "top" | string | CssWideValue;
        visibility?: "collapse" | "hidden" | "visible" | string | CssWideValue;
        whiteSpace?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap" | string | CssWideValue;
        widows?: string | CssWideValue;
        width?: "auto" | "fit-content" | "max-content" | "min-content" | string | CssWideValue;
        willChange?: "auto" | "contents" | "scroll-position" | string | CssWideValue;
        wordBreak?: "break-all" | "keep-all" | "normal" | string | CssWideValue;
        wordSpacing?: "normal" | string | CssWideValue;
        wordWrap?: "break-word" | "normal" | string | CssWideValue;
        writingMode?: "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl" | string | CssWideValue;
        zIndex?: "auto" | string | CssWideValue;
        zoom?: "normal" | string | CssWideValue;
    }
}

