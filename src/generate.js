const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const langFacts = require("vscode-css-languageservice/lib/services/languageFacts.js");
const data = require("vscode-css-languageservice/lib/data/browsers.js").data;
const props = data.css.properties.filter(p => p.name[0] !== "-");

const colors = Object.getOwnPropertyNames(langFacts.colors);
const positions = Object.getOwnPropertyNames(langFacts.positionKeywords);
const lineStyle = Object.getOwnPropertyNames(langFacts.lineStyleKeywords);
const transitionTiming = Object.getOwnPropertyNames(langFacts.transitionTimingFunctions).filter(name => !name.match(/\(.+\)/));

const typeMap = {
    "color": ["KnownColor", "{}"],
    "position": ["Position"],
    "line-style": ["LineStyle"],
    "timing-function": ["TransitionTimingFunction", "{}"],
    "number": ["number"]
}

function toCamelCase(name) {
    return name.replace(/\-[a-z]/gi, m => m[1].toUpperCase());
}
function escape(value) {
    return value.replace(/\"/g, m => "\\" + m);
}

function getName(prop) {
    var name = toCamelCase(prop.name);
    if (name.indexOf("-") >= 0) {
        return `"${prop.name}"`;
    }
    else {
        return name;
    }
}

function getTypes(prop) {
    const types = [];
    if (prop.values) {
        prop.values.filter(v => v.name[0] !== "-").forEach(v => types.push(`"${escape(v.name)}"`));
        if (prop.values.findIndex(v => v.name[0] === "-" || v.name.indexOf("(") >= 0) >= 0) {
            types.push("{}");
        }
    }
    const r = prop.restriction.split(", ").filter(name => name != "enum");
    if (r.length === 0) {
        if (types.indexOf("{}") < 0) {
            types.push("{}");
        }
    }
    else {
        (r.length === 1 && typeMap[r[0]] ? typeMap[r[0]] : ["{}"]).forEach(t => {
            if (types.indexOf(t) < 0) {
                types.push(t);
            }
        });
    }
    return types.join(" | ");
}

function makeMember(prop) {
    return { name: getName(prop), typeString: getTypes(prop) };
}

const template = fs.readFileSync(path.join(__dirname, "index.d.ts.ejs")).toString();
const compiledTemplate = ejs.compile(template);
const compiled = compiledTemplate({
    colors,
    positions,
    lineStyle,
    transitionTiming,
    props: props.map(p => makeMember(p))
});

fs.writeFileSync(path.join(__dirname, "../index.d.ts"), compiled);
