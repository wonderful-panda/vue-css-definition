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
        additiveSymbols?: {} | CssWideValue;
        alignContent?: "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "stretch" | {} | CssWideValue;
        alignItems?: "baseline" | "center" | "flex-end" | "flex-start" | "stretch" | {} | CssWideValue;
        alignSelf?: "auto" | "baseline" | "center" | "flex-end" | "flex-start" | "stretch" | {} | CssWideValue;
        all?: {} | CssWideValue;
        alt?: {} | CssWideValue;
        animation?: "alternate" | "alternate-reverse" | "backwards" | "both" | "forwards" | "infinite" | "none" | "normal" | "reverse" | {} | CssWideValue;
        animationDelay?: {} | CssWideValue;
        animationDirection?: "alternate" | "alternate-reverse" | "normal" | "reverse" | {} | CssWideValue;
        animationDuration?: {} | CssWideValue;
        animationFillMode?: "backwards" | "both" | "forwards" | "none" | {} | CssWideValue;
        animationIterationCount?: "infinite" | number | CssWideValue;
        animationName?: "none" | {} | CssWideValue;
        animationPlayState?: "paused" | "running" | {} | CssWideValue;
        animationTimingFunction?: TransitionTimingFunction | {} | CssWideValue;
        backfaceVisibility?: "hidden" | "visible" | {} | CssWideValue;
        background?: "fixed" | "local" | "scroll" | {} | CssWideValue;
        backgroundAttachment?: "fixed" | "local" | "scroll" | {} | CssWideValue;
        backgroundBlendMode?: "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity" | {} | CssWideValue;
        backgroundClip?: {} | CssWideValue;
        backgroundColor?: KnownColor | {} | CssWideValue;
        backgroundImage?: "none" | {} | CssWideValue;
        backgroundOrigin?: {} | CssWideValue;
        backgroundPosition?: {} | CssWideValue;
        backgroundPositionX?: "center" | "left" | "right" | {} | CssWideValue;
        backgroundPositionY?: "bottom" | "center" | "top" | {} | CssWideValue;
        backgroundRepeat?: {} | CssWideValue;
        backgroundSize?: "auto" | "contain" | "cover" | {} | CssWideValue;
        behavior?: {} | CssWideValue;
        blockSize?: "auto" | {} | CssWideValue;
        border?: {} | CssWideValue;
        borderBlockEnd?: {} | CssWideValue;
        borderBlockStart?: {} | CssWideValue;
        borderBlockEndColor?: KnownColor | {} | CssWideValue;
        borderBlockStartColor?: KnownColor | {} | CssWideValue;
        borderBlockEndStyle?: LineStyle | CssWideValue;
        borderBlockStartStyle?: {} | CssWideValue;
        borderBlockEndWidth?: {} | CssWideValue;
        borderBlockStartWidth?: {} | CssWideValue;
        borderBottom?: {} | CssWideValue;
        borderBottomColor?: KnownColor | {} | CssWideValue;
        borderBottomLeftRadius?: {} | CssWideValue;
        borderBottomRightRadius?: {} | CssWideValue;
        borderBottomStyle?: LineStyle | CssWideValue;
        borderBottomWidth?: {} | CssWideValue;
        borderCollapse?: "collapse" | "separate" | {} | CssWideValue;
        borderColor?: KnownColor | {} | CssWideValue;
        borderImage?: "auto" | "fill" | "none" | "repeat" | "round" | "space" | "stretch" | "url()" | {} | CssWideValue;
        borderImageOutset?: {} | CssWideValue;
        borderImageRepeat?: "repeat" | "round" | "space" | "stretch" | {} | CssWideValue;
        borderImageSlice?: "fill" | {} | CssWideValue;
        borderImageSource?: "none" | {} | CssWideValue;
        borderImageWidth?: "auto" | {} | CssWideValue;
        borderInlineEnd?: {} | CssWideValue;
        borderInlineStart?: {} | CssWideValue;
        borderInlineEndColor?: KnownColor | {} | CssWideValue;
        borderInlineStartColor?: KnownColor | {} | CssWideValue;
        borderInlineEndStyle?: LineStyle | CssWideValue;
        borderInlineStartStyle?: {} | CssWideValue;
        borderInlineEndWidth?: {} | CssWideValue;
        borderInlineStartWidth?: {} | CssWideValue;
        borderLeft?: {} | CssWideValue;
        borderLeftColor?: KnownColor | {} | CssWideValue;
        borderLeftStyle?: LineStyle | CssWideValue;
        borderLeftWidth?: {} | CssWideValue;
        borderRadius?: {} | CssWideValue;
        borderRight?: {} | CssWideValue;
        borderRightColor?: KnownColor | {} | CssWideValue;
        borderRightStyle?: LineStyle | CssWideValue;
        borderRightWidth?: {} | CssWideValue;
        borderSpacing?: {} | CssWideValue;
        borderStyle?: LineStyle | CssWideValue;
        borderTop?: {} | CssWideValue;
        borderTopColor?: KnownColor | {} | CssWideValue;
        borderTopLeftRadius?: {} | CssWideValue;
        borderTopRightRadius?: {} | CssWideValue;
        borderTopStyle?: LineStyle | CssWideValue;
        borderTopWidth?: {} | CssWideValue;
        borderWidth?: {} | CssWideValue;
        bottom?: "auto" | {} | CssWideValue;
        boxDecorationBreak?: "clone" | "slice" | {} | CssWideValue;
        boxShadow?: "inset" | {} | CssWideValue;
        boxSizing?: "border-box" | "content-box" | {} | CssWideValue;
        breakAfter?: "always" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "column" | "left" | "page" | "right" | {} | CssWideValue;
        breakBefore?: "always" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "column" | "left" | "page" | "right" | {} | CssWideValue;
        breakInside?: "auto" | "avoid" | "avoid-column" | "avoid-page" | {} | CssWideValue;
        captionSide?: "bottom" | "top" | {} | CssWideValue;
        clear?: "both" | "left" | "none" | "right" | {} | CssWideValue;
        clip?: "auto" | "rect()" | {} | CssWideValue;
        clipPath?: "none" | "url()" | {} | CssWideValue;
        clipRule?: "evenodd" | "nonzero" | {} | CssWideValue;
        color?: KnownColor | {} | CssWideValue;
        colorInterpolationFilters?: "auto" | "linearRGB" | "sRGB" | {} | CssWideValue;
        columnCount?: "auto" | {} | CssWideValue;
        columnFill?: "auto" | "balance" | {} | CssWideValue;
        columnGap?: "normal" | {} | CssWideValue;
        columnRule?: {} | CssWideValue;
        columnRuleColor?: KnownColor | {} | CssWideValue;
        columnRuleStyle?: LineStyle | CssWideValue;
        columnRuleWidth?: {} | CssWideValue;
        columns?: "auto" | {} | CssWideValue;
        columnSpan?: "all" | "none" | {} | CssWideValue;
        columnWidth?: "auto" | {} | CssWideValue;
        content?: "attr()" | "counter(name)" | "icon" | "none" | "normal" | "url()" | {} | CssWideValue;
        counterIncrement?: "none" | {} | CssWideValue;
        counterReset?: "none" | {} | CssWideValue;
        cursor?: "alias" | "all-scroll" | "auto" | "cell" | "col-resize" | "context-menu" | "copy" | "crosshair" | "default" | "e-resize" | "ew-resize" | "grab" | "grabbing" | "help" | "move" | "ne-resize" | "nesw-resize" | "no-drop" | "none" | "not-allowed" | "n-resize" | "ns-resize" | "nw-resize" | "nwse-resize" | "pointer" | "progress" | "row-resize" | "se-resize" | "s-resize" | "sw-resize" | "text" | "vertical-text" | "wait" | "w-resize" | "zoom-in" | "zoom-out" | {} | CssWideValue;
        direction?: "ltr" | "rtl" | {} | CssWideValue;
        display?: "block" | "flex" | "flexbox" | "inline" | "inline-block" | "inline-flex" | "inline-flexbox" | "inline-table" | "list-item" | "none" | "ruby" | "ruby-base" | "ruby-base-container" | "ruby-text" | "ruby-text-container" | "run-in" | "table" | "table-caption" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row" | "table-row-group" | {} | CssWideValue;
        emptyCells?: "hide" | "show" | {} | CssWideValue;
        enableBackground?: "accumulate" | "new" | {} | CssWideValue;
        fallback?: {} | CssWideValue;
        fill?: "url()" | {} | CssWideValue;
        fillOpacity?: {} | CssWideValue;
        fillRule?: "evenodd" | "nonzero" | {} | CssWideValue;
        filter?: "none" | "blur()" | "brightness()" | "contrast()" | "drop-shadow()" | "grayscale()" | "hue-rotate()" | "invert()" | "opacity()" | "saturate()" | "sepia()" | "url()" | {} | CssWideValue;
        flex?: "auto" | "content" | "none" | {} | CssWideValue;
        flexBasis?: "auto" | "content" | {} | CssWideValue;
        flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | {} | CssWideValue;
        flexFlow?: "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse" | {} | CssWideValue;
        flexGrow?: number | CssWideValue;
        flexShrink?: number | CssWideValue;
        flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | {} | CssWideValue;
        float?: "left" | "none" | "right" | {} | CssWideValue;
        floodColor?: KnownColor | {} | CssWideValue;
        floodOpacity?: {} | CssWideValue;
        font?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold" | "bolder" | "caption" | "icon" | "italic" | "large" | "larger" | "lighter" | "medium" | "menu" | "message-box" | "normal" | "oblique" | "small" | "small-caps" | "small-caption" | "smaller" | "status-bar" | "x-large" | "x-small" | "xx-large" | "xx-small" | {} | CssWideValue;
        fontFamily?: "Arial, Helvetica, sans-serif" | "Cambria, Cochin, Georgia, Times, Times New Roman, serif" | "Courier New, Courier, monospace" | "cursive" | "fantasy" | "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" | "Georgia, 'Times New Roman', Times, serif" | "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" | "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" | "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" | "monospace" | "sans-serif" | "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" | "serif" | "'Times New Roman', Times, serif" | "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" | "Verdana, Geneva, Tahoma, sans-serif" | {} | CssWideValue;
        fontFeatureSettings?: "\"aalt\"" | "\"abvf\"" | "\"abvm\"" | "\"abvs\"" | "\"afrc\"" | "\"akhn\"" | "\"blwf\"" | "\"blwm\"" | "\"blws\"" | "\"calt\"" | "\"case\"" | "\"ccmp\"" | "\"cfar\"" | "\"cjct\"" | "\"clig\"" | "\"cpct\"" | "\"cpsp\"" | "\"cswh\"" | "\"curs\"" | "\"c2pc\"" | "\"c2cs\"" | "\"dist\"" | "\"dlig\"" | "\"dnom\"" | "\"dtls\"" | "\"expt\"" | "\"falt\"" | "\"fin2\"" | "\"fin3\"" | "\"fina\"" | "\"flac\"" | "\"frac\"" | "\"fwid\"" | "\"half\"" | "\"haln\"" | "\"halt\"" | "\"hist\"" | "\"hkna\"" | "\"hlig\"" | "\"hngl\"" | "\"hojo\"" | "\"hwid\"" | "\"init\"" | "\"isol\"" | "\"ital\"" | "\"jalt\"" | "\"jp78\"" | "\"jp83\"" | "\"jp90\"" | "\"jp04\"" | "\"kern\"" | "\"lfbd\"" | "\"liga\"" | "\"ljmo\"" | "\"lnum\"" | "\"locl\"" | "\"ltra\"" | "\"ltrm\"" | "\"mark\"" | "\"med2\"" | "\"medi\"" | "\"mgrk\"" | "\"mkmk\"" | "\"nalt\"" | "\"nlck\"" | "\"nukt\"" | "\"numr\"" | "\"onum\"" | "\"opbd\"" | "\"ordn\"" | "\"ornm\"" | "\"palt\"" | "\"pcap\"" | "\"pkna\"" | "\"pnum\"" | "\"pref\"" | "\"pres\"" | "\"pstf\"" | "\"psts\"" | "\"pwid\"" | "\"qwid\"" | "\"rand\"" | "\"rclt\"" | "\"rlig\"" | "\"rkrf\"" | "\"rphf\"" | "\"rtbd\"" | "\"rtla\"" | "\"rtlm\"" | "\"ruby\"" | "\"salt\"" | "\"sinf\"" | "\"size\"" | "\"smcp\"" | "\"smpl\"" | "\"ssty\"" | "\"stch\"" | "\"subs\"" | "\"sups\"" | "\"swsh\"" | "\"titl\"" | "\"tjmo\"" | "\"tnam\"" | "\"tnum\"" | "\"trad\"" | "\"twid\"" | "\"unic\"" | "\"valt\"" | "\"vatu\"" | "\"vert\"" | "\"vhal\"" | "\"vjmo\"" | "\"vkna\"" | "\"vkrn\"" | "\"vpal\"" | "\"vrt2\"" | "\"zero\"" | "normal" | "off" | "on" | {} | CssWideValue;
        fontKerning?: "auto" | "none" | "normal" | {} | CssWideValue;
        fontLanguageOverride?: "normal" | {} | CssWideValue;
        fontSize?: "large" | "larger" | "medium" | "small" | "smaller" | "x-large" | "x-small" | "xx-large" | "xx-small" | {} | CssWideValue;
        fontSizeAdjust?: "none" | number | CssWideValue;
        fontStretch?: "condensed" | "expanded" | "extra-condensed" | "extra-expanded" | "narrower" | "normal" | "semi-condensed" | "semi-expanded" | "ultra-condensed" | "ultra-expanded" | "wider" | {} | CssWideValue;
        fontStyle?: "italic" | "normal" | "oblique" | {} | CssWideValue;
        fontSynthesis?: "none" | "style" | "weight" | {} | CssWideValue;
        fontVariant?: "normal" | "small-caps" | {} | CssWideValue;
        fontVariantAlternates?: "annotation()" | "character-variant()" | "historical-forms" | "normal" | "ornaments()" | "styleset()" | "stylistic()" | "swash()" | {} | CssWideValue;
        fontVariantCaps?: "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase" | {} | CssWideValue;
        fontVariantEastAsian?: "full-width" | "jis04" | "jis78" | "jis83" | "jis90" | "normal" | "proportional-width" | "ruby" | "simplified" | "traditional" | {} | CssWideValue;
        fontVariantLigatures?: "additional-ligatures" | "common-ligatures" | "contextual" | "discretionary-ligatures" | "historical-ligatures" | "no-additional-ligatures" | "no-common-ligatures" | "no-contextual" | "no-discretionary-ligatures" | "no-historical-ligatures" | "none" | "normal" | {} | CssWideValue;
        fontVariantNumeric?: "diagonal-fractions" | "lining-nums" | "normal" | "oldstyle-nums" | "ordinal" | "proportional-nums" | "slashed-zero" | "stacked-fractions" | "tabular-nums" | {} | CssWideValue;
        fontVariantPosition?: "normal" | "sub" | "super" | {} | CssWideValue;
        fontWeight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold" | "bolder" | "lighter" | "normal" | {} | CssWideValue;
        glyphOrientationHorizontal?: {} | CssWideValue;
        glyphOrientationVertical?: "auto" | {} | CssWideValue;
        height?: "auto" | "fit-content" | "max-content" | "min-content" | {} | CssWideValue;
        imageOrientation?: "flip" | "from-image" | {} | CssWideValue;
        imageRendering?: "auto" | "crisp-edges" | "optimizeQuality" | "optimizeSpeed" | "pixelated" | {} | CssWideValue;
        imeMode?: "active" | "auto" | "disabled" | "inactive" | "normal" | {} | CssWideValue;
        inlineSize?: "auto" | {} | CssWideValue;
        isolation?: "auto" | "isolate" | {} | CssWideValue;
        justifyContent?: "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | {} | CssWideValue;
        kerning?: "auto" | {} | CssWideValue;
        left?: "auto" | {} | CssWideValue;
        letterSpacing?: "normal" | {} | CssWideValue;
        lightingColor?: KnownColor | {} | CssWideValue;
        lineHeight?: "normal" | {} | CssWideValue;
        listStyle?: "armenian" | "circle" | "decimal" | "decimal-leading-zero" | "disc" | "georgian" | "inside" | "lower-alpha" | "lower-greek" | "lower-latin" | "lower-roman" | "none" | "outside" | "square" | "symbols()" | "upper-alpha" | "upper-latin" | "upper-roman" | "url()" | {} | CssWideValue;
        listStyleImage?: "none" | {} | CssWideValue;
        listStylePosition?: "inside" | "outside" | {} | CssWideValue;
        listStyleType?: "armenian" | "circle" | "decimal" | "decimal-leading-zero" | "disc" | "georgian" | "lower-alpha" | "lower-greek" | "lower-latin" | "lower-roman" | "none" | "square" | "symbols()" | "upper-alpha" | "upper-latin" | "upper-roman" | {} | CssWideValue;
        margin?: "auto" | {} | CssWideValue;
        marginBlockEnd?: "auto" | {} | CssWideValue;
        marginBlockStart?: "auto" | {} | CssWideValue;
        marginBottom?: "auto" | {} | CssWideValue;
        marginInlineEnd?: "auto" | {} | CssWideValue;
        marginInlineStart?: "auto" | {} | CssWideValue;
        marginLeft?: "auto" | {} | CssWideValue;
        marginRight?: "auto" | {} | CssWideValue;
        marginTop?: "auto" | {} | CssWideValue;
        marker?: "none" | "url()" | {} | CssWideValue;
        markerEnd?: "none" | "url()" | {} | CssWideValue;
        markerMid?: "none" | "url()" | {} | CssWideValue;
        markerStart?: "none" | "url()" | {} | CssWideValue;
        maskType?: "alpha" | "luminance" | {} | CssWideValue;
        maxBlockSize?: "none" | {} | CssWideValue;
        maxHeight?: "none" | "fit-content" | "max-content" | "min-content" | {} | CssWideValue;
        maxInlineSize?: "none" | {} | CssWideValue;
        maxWidth?: "none" | "fit-content" | "max-content" | "min-content" | {} | CssWideValue;
        minBlockSize?: {} | CssWideValue;
        minHeight?: "auto" | "fit-content" | "max-content" | "min-content" | {} | CssWideValue;
        minInlineSize?: {} | CssWideValue;
        minWidth?: "auto" | "fit-content" | "max-content" | "min-content" | {} | CssWideValue;
        mixBlendMode?: "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity" | {} | CssWideValue;
        motion?: "none" | "path()" | "auto" | "reverse" | {} | CssWideValue;
        motionOffset?: {} | CssWideValue;
        motionPath?: "none" | "path()" | {} | CssWideValue;
        motionRotation?: "auto" | "reverse" | {} | CssWideValue;
        navDown?: "auto" | "current" | "root" | {} | CssWideValue;
        navIndex?: "auto" | number | CssWideValue;
        navLeft?: "auto" | "current" | "root" | {} | CssWideValue;
        navRight?: "auto" | "current" | "root" | {} | CssWideValue;
        navUp?: "auto" | "current" | "root" | {} | CssWideValue;
        negative?: {} | CssWideValue;
        objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down" | {} | CssWideValue;
        objectPosition?: {} | CssWideValue;
        opacity?: {} | CssWideValue;
        order?: {} | CssWideValue;
        orphans?: {} | CssWideValue;
        offsetBlockEnd?: "auto" | {} | CssWideValue;
        offsetBlockStart?: "auto" | {} | CssWideValue;
        offsetInlineEnd?: "auto" | {} | CssWideValue;
        offsetInlineStart?: "auto" | {} | CssWideValue;
        outline?: "auto" | "invert" | {} | CssWideValue;
        outlineColor?: "invert" | KnownColor | {} | CssWideValue;
        outlineOffset?: {} | CssWideValue;
        outlineStyle?: "auto" | LineStyle | CssWideValue;
        outlineWidth?: {} | CssWideValue;
        overflow?: "auto" | "hidden" | "scroll" | "visible" | {} | CssWideValue;
        overflowWrap?: "break-word" | "normal" | {} | CssWideValue;
        overflowX?: "auto" | "hidden" | "scroll" | "visible" | {} | CssWideValue;
        overflowY?: "auto" | "hidden" | "scroll" | "visible" | {} | CssWideValue;
        pad?: {} | CssWideValue;
        padding?: {} | CssWideValue;
        paddingBottom?: {} | CssWideValue;
        paddingBlockEnd?: {} | CssWideValue;
        paddingBlockStart?: {} | CssWideValue;
        paddingInlineEnd?: {} | CssWideValue;
        paddingInlineStart?: {} | CssWideValue;
        paddingLeft?: {} | CssWideValue;
        paddingRight?: {} | CssWideValue;
        paddingTop?: {} | CssWideValue;
        pageBreakAfter?: "always" | "auto" | "avoid" | "left" | "right" | {} | CssWideValue;
        pageBreakBefore?: "always" | "auto" | "avoid" | "left" | "right" | {} | CssWideValue;
        pageBreakInside?: "auto" | "avoid" | {} | CssWideValue;
        paintOrder?: "fill" | "markers" | "normal" | "stroke" | {} | CssWideValue;
        perspective?: "none" | {} | CssWideValue;
        perspectiveOrigin?: {} | CssWideValue;
        pointerEvents?: "all" | "fill" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" | {} | CssWideValue;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | {} | CssWideValue;
        prefix?: {} | CssWideValue;
        quotes?: "none" | {} | CssWideValue;
        range?: "auto" | "infinite" | {} | CssWideValue;
        resize?: "both" | "horizontal" | "none" | "vertical" | {} | CssWideValue;
        right?: "auto" | {} | CssWideValue;
        rubyAlign?: "auto" | "center" | "distribute-letter" | "distribute-space" | "left" | "line-edge" | "right" | "start" | "space-between" | "space-around" | {} | CssWideValue;
        rubyOverhang?: "auto" | "end" | "none" | "start" | {} | CssWideValue;
        rubyPosition?: "after" | "before" | "inline" | "right" | {} | CssWideValue;
        rubySpan?: "attr(x)" | "none" | {} | CssWideValue;
        "scrollbar-3dlight-color"?: KnownColor | {} | CssWideValue;
        scrollbarArrowColor?: KnownColor | {} | CssWideValue;
        scrollbarBaseColor?: KnownColor | {} | CssWideValue;
        scrollbarDarkshadowColor?: KnownColor | {} | CssWideValue;
        scrollbarFaceColor?: KnownColor | {} | CssWideValue;
        scrollbarHighlightColor?: KnownColor | {} | CssWideValue;
        scrollbarShadowColor?: KnownColor | {} | CssWideValue;
        scrollbarTrackColor?: KnownColor | {} | CssWideValue;
        scrollBehavior?: "auto" | "smooth" | {} | CssWideValue;
        scrollSnapCoordinate?: "none" | {} | CssWideValue;
        scrollSnapDestination?: {} | CssWideValue;
        scrollSnapPointsX?: "none" | "repeat()" | {} | CssWideValue;
        scrollSnapPointsY?: "none" | "repeat()" | {} | CssWideValue;
        scrollSnapType?: "none" | "mandatory" | "proximity" | {} | CssWideValue;
        shapeImageThreshold?: number | CssWideValue;
        shapeMargin?: {} | CssWideValue;
        shapeOutside?: "margin-box" | "none" | {} | CssWideValue;
        size?: {} | CssWideValue;
        src?: "url()" | "format()" | "local()" | {} | CssWideValue;
        stopColor?: KnownColor | {} | CssWideValue;
        stopOpacity?: {} | CssWideValue;
        stroke?: "url()" | {} | CssWideValue;
        strokeDasharray?: "none" | {} | CssWideValue;
        strokeDashoffset?: {} | CssWideValue;
        strokeLinecap?: "butt" | "round" | "square" | {} | CssWideValue;
        strokeLinejoin?: "bevel" | "miter" | "round" | {} | CssWideValue;
        strokeMiterlimit?: number | CssWideValue;
        strokeOpacity?: {} | CssWideValue;
        strokeWidth?: {} | CssWideValue;
        suffix?: {} | CssWideValue;
        system?: "additive" | "alphabetic" | "cyclic" | "extends" | "fixed" | "numeric" | "symbolic" | {} | CssWideValue;
        symbols?: {} | CssWideValue;
        tableLayout?: "auto" | "fixed" | {} | CssWideValue;
        tabSize?: {} | CssWideValue;
        textAlign?: "center" | "end" | "justify" | "left" | "right" | "start" | {} | CssWideValue;
        textAlignLast?: "auto" | "center" | "justify" | "left" | "right" | {} | CssWideValue;
        textAnchor?: "end" | "middle" | "start" | {} | CssWideValue;
        textDecoration?: "dashed" | "dotted" | "double" | "line-through" | "overline" | "solid" | "underline" | "wavy" | KnownColor | {} | CssWideValue;
        textDecorationLine?: "line-through" | "none" | "overline" | "underline" | {} | CssWideValue;
        textDecorationStyle?: "dashed" | "dotted" | "double" | "none" | "solid" | "wavy" | {} | CssWideValue;
        textIndent?: {} | CssWideValue;
        textJustify?: "auto" | "distribute" | "distribute-all-lines" | "inter-cluster" | "inter-ideograph" | "inter-word" | "kashida" | "newspaper" | {} | CssWideValue;
        textOrientation?: "sideways" | "sideways-right" | "upright" | {} | CssWideValue;
        textOverflow?: "clip" | "ellipsis" | {} | CssWideValue;
        textRendering?: "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed" | {} | CssWideValue;
        textShadow?: {} | CssWideValue;
        textTransform?: "capitalize" | "lowercase" | "none" | "uppercase" | {} | CssWideValue;
        textUnderlinePosition?: "above" | "auto" | "below" | {} | CssWideValue;
        top?: "auto" | {} | CssWideValue;
        touchAction?: "auto" | "cross-slide-x" | "cross-slide-y" | "double-tap-zoom" | "manipulation" | "none" | "pan-x" | "pan-y" | "pinch-zoom" | {} | CssWideValue;
        transform?: "matrix()" | "matrix3d()" | "none" | "perspective()" | "rotate()" | "rotate3d()" | "rotateX('angle')" | "rotateY('angle')" | "rotateZ('angle')" | "scale()" | "scale3d()" | "scaleX()" | "scaleY()" | "scaleZ()" | "skew()" | "skewX()" | "skewY()" | "translate()" | "translate3d()" | "translateX()" | "translateY()" | "translateZ()" | {} | CssWideValue;
        transformOrigin?: {} | CssWideValue;
        transformStyle?: "flat" | "preserve-3d" | {} | CssWideValue;
        transition?: "all" | "none" | {} | CssWideValue;
        transitionDelay?: {} | CssWideValue;
        transitionDuration?: {} | CssWideValue;
        transitionProperty?: "all" | "none" | {} | CssWideValue;
        transitionTimingFunction?: TransitionTimingFunction | {} | CssWideValue;
        unicodeBidi?: "bidi-override" | "embed" | "isolate" | "isolate-override" | "normal" | "plaintext" | {} | CssWideValue;
        unicodeRange?: "U+26" | "U+20-24F, U+2B0-2FF, U+370-4FF, U+1E00-1EFF, U+2000-20CF, U+2100-23FF, U+2500-26FF, U+E000-F8FF, U+FB00–FB4F" | "U+20-17F, U+2B0-2FF, U+2000-206F, U+20A0-20CF, U+2100-21FF, U+2600-26FF" | "U+20-2FF, U+370-4FF, U+1E00-20CF, U+2100-23FF, U+2500-26FF, U+FB00-FB4F, U+FFF0-FFFD" | "U+20-4FF, U+530-58F, U+10D0-10FF, U+1E00-23FF, U+2440-245F, U+2500-26FF, U+FB00-FB4F, U+FE20-FE2F, U+FFF0-FFFD" | "U+00-7F" | "U+80-FF" | "U+100-17F" | "U+180-24F" | "U+1E00-1EFF" | "U+250-2AF" | "U+370-3FF" | "U+1F00-1FFF" | "U+400-4FF" | "U+500-52F" | "U+00-52F, U+1E00-1FFF, U+2200–22FF" | "U+530–58F" | "U+590–5FF" | "U+600–6FF" | "U+750–77F" | "U+8A0–8FF" | "U+700–74F" | "U+900–97F" | "U+980–9FF" | "U+A00–A7F" | "U+A80–AFF" | "U+B00–B7F" | "U+B80–BFF" | "U+C00–C7F" | "U+C80–CFF" | "U+D00–D7F" | "U+D80–DFF" | "U+118A0–118FF" | "U+E00–E7F" | "U+1A20–1AAF" | "U+AA80–AADF" | "U+E80–EFF" | "U+F00–FFF" | "U+1000–109F" | "U+10A0–10FF" | "U+1200–137F" | "U+1380–139F" | "U+2D80–2DDF" | "U+AB00–AB2F" | "U+1780–17FF" | "U+1800–18AF" | "U+1B80–1BBF" | "U+1CC0–1CCF" | "U+4E00–9FD5" | "U+3400–4DB5" | "U+2F00–2FDF" | "U+2E80–2EFF" | "U+1100–11FF" | "U+AC00–D7AF" | "U+3040–309F" | "U+30A0–30FF" | "U+A5, U+4E00-9FFF, U+30??, U+FF00-FF9F" | "U+A4D0–A4FF" | "U+A000–A48F" | "U+A490–A4CF" | "U+2000-206F" | "U+3000–303F" | "U+2070–209F" | "U+20A0–20CF" | "U+2100–214F" | "U+2150–218F" | "U+2190–21FF" | "U+2200–22FF" | "U+2300–23FF" | "U+E000-F8FF" | "U+FB00–FB4F" | "U+FB50–FDFF" | "U+1F600–1F64F" | "U+2600–26FF" | "U+1F300–1F5FF" | "U+1F900–1F9FF" | "U+1F680–1F6FF" | {} | CssWideValue;
        userSelect?: "all" | "auto" | "contain" | "none" | "text" | {} | CssWideValue;
        verticalAlign?: "auto" | "baseline" | "bottom" | "middle" | "sub" | "super" | "text-bottom" | "text-top" | "top" | {} | CssWideValue;
        visibility?: "collapse" | "hidden" | "visible" | {} | CssWideValue;
        whiteSpace?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap" | {} | CssWideValue;
        widows?: {} | CssWideValue;
        width?: "auto" | "fit-content" | "max-content" | "min-content" | {} | CssWideValue;
        willChange?: "auto" | "contents" | "scroll-position" | {} | CssWideValue;
        wordBreak?: "break-all" | "keep-all" | "normal" | {} | CssWideValue;
        wordSpacing?: "normal" | {} | CssWideValue;
        wordWrap?: "break-word" | "normal" | {} | CssWideValue;
        writingMode?: "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl" | {} | CssWideValue;
        zIndex?: "auto" | {} | CssWideValue;
        zoom?: "normal" | {} | CssWideValue;
    }
}

