import e from"./typescript-c39e3818.js";import n from"./css-472cb4ba.js";import t from"./javascript-cb1c43e8.js";import a from"./html-0fbf7974.js";const i=Object.freeze(JSON.parse(`{"displayName":"Glimmer TS","injections":{"L:source.gts -comment -(string -meta.embedded)":{"patterns":[{"include":"#main"}]}},"name":"glimmer-ts","patterns":[{"include":"#main"},{"include":"source.ts"}],"repository":{"as-keyword":{"match":"\\\\s\\\\b(as)\\\\b(?=\\\\s\\\\|)","name":"keyword.control","patterns":[]},"as-params":{"begin":"(?<!\\\\|)(\\\\|)","beginCaptures":{"1":{"name":"constant.other.symbol.begin.ember-handlebars"}},"end":"(\\\\|)(?!\\\\|)","endCaptures":{"1":{"name":"constant.other.symbol.end.ember-handlebars"}},"name":"keyword.block-params.ember-handlebars","patterns":[{"include":"#variable"}]},"attention":{"match":"@?(TODO|FIXME|CHANGED|XXX|IDEA|HACK|NOTE|REVIEW|NB|BUG|QUESTION|TEMP)\\\\b","name":"storage.type.class.\${1:/downcase}","patterns":[]},"boolean":{"captures":{"0":{"name":"string.regexp"},"1":{"name":"string.regexp"},"2":{"name":"string.regexp"}},"match":"true|false|undefined|null","patterns":[]},"component-tag":{"begin":"(<\\\\/?)(@|this.)?([a-zA-Z0-9-_$:\\\\.]+)\\\\b","beginCaptures":{"1":{"name":"punctuation.definition.tag"},"2":{"name":"support.function","patterns":[{"match":"(@|this)","name":"variable.language"},{"match":"(\\\\.)+","name":"punctuation.definition.tag"}]},"3":{"name":"entity.name.type","patterns":[{"include":"#glimmer-component-path"},{"match":"(@|:|\\\\$)","name":"markup.bold"}]}},"end":"(\\\\/?)(>)","endCaptures":{"1":{"name":"punctuation.definition.tag"},"2":{"name":"punctuation.definition.tag"}},"name":"meta.tag.any.ember-handlebars","patterns":[{"include":"#tag-like-content"}]},"digit":{"captures":{"0":{"name":"constant.numeric"},"1":{"name":"constant.numeric"},"2":{"name":"constant.numeric"}},"match":"\\\\d*(\\\\.)?\\\\d+","patterns":[]},"entities":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.entity.html.ember-handlebars"},"3":{"name":"punctuation.definition.entity.html.ember-handlebars"}},"match":"(&)([a-zA-Z0-9]+|#\\\\d+|#x[0-9a-fA-F]+)(;)","name":"constant.character.entity.html.ember-handlebars"},{"match":"&","name":"invalid.illegal.bad-ampersand.html.ember-handlebars"}]},"glimmer-argument":{"captures":{"1":{"name":"entity.other.attribute-name.ember-handlebars.argument","patterns":[{"match":"(@)","name":"markup.italic"}]},"2":{"name":"punctuation.separator.key-value.html.ember-handlebars"}},"match":"\\\\s(@[a-zA-Z0-9:_.-]+)(=)?"},"glimmer-as-stuff":{"patterns":[{"include":"#as-keyword"},{"include":"#as-params"}]},"glimmer-block":{"begin":"({{~?)(#|/)(([@$a-zA-Z0-9_/.-]+))","captures":{"1":{"name":"punctuation.definition.tag"},"2":{"name":"punctuation.definition.tag"},"3":{"name":"keyword.control","patterns":[{"include":"#glimmer-component-path"},{"match":"(\\\\/)+","name":"punctuation.definition.tag"},{"match":"(\\\\.)+","name":"punctuation.definition.tag"}]}},"end":"(~?}})","name":"entity.expression.ember-handlebars","patterns":[{"include":"#glimmer-as-stuff"},{"include":"#glimmer-supexp-content"}]},"glimmer-bools":{"captures":{"0":{"name":"keyword.operator"},"1":{"name":"keyword.operator"},"2":{"name":"string.regexp"},"3":{"name":"string.regexp"},"4":{"name":"keyword.operator"}},"match":"({{~?)(true|false|null|undefined|\\\\d*(\\\\.)?\\\\d+)(~?}})","name":"entity.expression.ember-handlebars"},"glimmer-comment-block":{"begin":"{{!--","captures":{"0":{"name":"punctuation.definition.block.comment.glimmer"}},"end":"--}}","name":"comment.block.glimmer","patterns":[{"include":"#script"},{"include":"#attention"}]},"glimmer-comment-inline":{"begin":"{{!","captures":{"0":{"name":"punctuation.definition.block.comment.glimmer"}},"end":"}}","name":"comment.inline.glimmer","patterns":[{"include":"#script"},{"include":"#attention"}]},"glimmer-component-path":{"captures":{"1":{"name":"punctuation.definition.tag"}},"match":"(::|_|\\\\$|\\\\.)"},"glimmer-control-expression":{"begin":"({{~?)(([-a-zA-Z_0-9/]+)\\\\s)","captures":{"1":{"name":"keyword.operator"},"2":{"name":"keyword.operator"},"3":{"name":"keyword.control"}},"end":"(~?}})","name":"entity.expression.ember-handlebars","patterns":[{"include":"#glimmer-supexp-content"}]},"glimmer-else-block":{"captures":{"0":{"name":"punctuation.definition.tag"},"1":{"name":"punctuation.definition.tag"},"2":{"name":"keyword.control"},"3":{"name":"keyword.control","patterns":[{"include":"#glimmer-subexp"},{"include":"#string-single-quoted-handlebars"},{"include":"#string-double-quoted-handlebars"},{"include":"#boolean"},{"include":"#digit"},{"include":"#param"},{"include":"#glimmer-parameter-name"},{"include":"#glimmer-parameter-value"}]},"4":{"name":"punctuation.definition.tag"}},"match":"({{~?)(else\\\\s[a-z]+\\\\s|else)([()@a-zA-Z0-9\\\\.\\\\s\\\\b]+)?(~?}})","name":"entity.expression.ember-handlebars"},"glimmer-expression":{"begin":"({{~?)(([()\\\\s@a-zA-Z0-9_.-]+))","captures":{"1":{"name":"keyword.operator"},"2":{"name":"keyword.operator"},"3":{"name":"support.function","patterns":[{"match":"[(]+","name":"string.regexp"},{"match":"[)]+","name":"string.regexp"},{"match":"(\\\\.)+","name":"punctuation.definition.tag"},{"include":"#glimmer-supexp-content"}]}},"end":"(~?}})","name":"entity.expression.ember-handlebars","patterns":[{"include":"#glimmer-supexp-content"}]},"glimmer-expression-property":{"begin":"({{~?)((@|this.)([a-zA-Z0-9_.-]+))","captures":{"1":{"name":"keyword.operator"},"2":{"name":"keyword.operator"},"3":{"name":"support.function","patterns":[{"match":"(@|this)","name":"variable.language"},{"match":"(\\\\.)+","name":"punctuation.definition.tag"}]},"4":{"name":"support.function","patterns":[{"match":"(\\\\.)+","name":"punctuation.definition.tag"}]}},"end":"(~?}})","name":"entity.expression.ember-handlebars","patterns":[{"include":"#glimmer-supexp-content"}]},"glimmer-parameter-name":{"captures":{"1":{"name":"variable.parameter.name.ember-handlebars"},"2":{"name":"punctuation.definition.expression.ember-handlebars"}},"match":"\\\\b([a-zA-Z0-9_-]+)(\\\\s?=)","patterns":[]},"glimmer-parameter-value":{"captures":{"1":{"name":"support.function","patterns":[{"match":"(\\\\.)+","name":"punctuation.definition.tag"}]}},"match":"\\\\b([a-zA-Z0-9:_.-]+)\\\\b(?!=)","patterns":[]},"glimmer-special-block":{"captures":{"0":{"name":"keyword.operator"},"1":{"name":"keyword.operator"},"2":{"name":"keyword.control"},"3":{"name":"keyword.operator"}},"match":"({{~?)(yield|outlet)(~?}})","name":"entity.expression.ember-handlebars"},"glimmer-subexp":{"begin":"(\\\\()([@a-zA-Z0-9.-]+)","captures":{"1":{"name":"keyword.other"},"2":{"name":"keyword.control"}},"end":"(\\\\))","name":"entity.subexpression.ember-handlebars","patterns":[{"include":"#glimmer-supexp-content"}]},"glimmer-supexp-content":{"patterns":[{"include":"#glimmer-subexp"},{"include":"#string-single-quoted-handlebars"},{"include":"#string-double-quoted-handlebars"},{"include":"#boolean"},{"include":"#digit"},{"include":"#param"},{"include":"#glimmer-parameter-name"},{"include":"#glimmer-parameter-value"}]},"glimmer-unescaped-expression":{"begin":"{{{","captures":{"0":{"name":"keyword.operator"}},"end":"}}}","name":"entity.unescaped.expression.ember-handlebars","patterns":[{"include":"#string-single-quoted-handlebars"},{"include":"#string-double-quoted-handlebars"},{"include":"#glimmer-subexp"},{"include":"#param"}]},"html-attribute":{"captures":{"1":{"name":"entity.other.attribute-name.ember-handlebars","patterns":[{"match":"(\\\\.\\\\.\\\\.attributes)","name":"markup.bold"}]},"2":{"name":"punctuation.separator.key-value.html.ember-handlebars"}},"match":"\\\\s([a-zA-Z0-9:_.-]+)(=)?"},"html-comment":{"begin":"<!--","captures":{"0":{"name":"punctuation.definition.comment.html.ember-handlebars"}},"end":"--\\\\s*>","name":"comment.block.html.ember-handlebars","patterns":[{"include":"#attention"},{"match":"--","name":"invalid.illegal.bad-comments-or-CDATA.html.ember-handlebars"}]},"html-tag":{"begin":"(<\\\\/?)([a-z0-9-]+)(?!\\\\.|:)\\\\b","beginCaptures":{"1":{"name":"punctuation.definition.tag"},"2":{"name":"entity.name.tag.html.ember-handlebars"}},"end":"(\\\\/?)(>)","endCaptures":{"1":{"name":"punctuation.definition.tag"},"2":{"name":"punctuation.definition.tag"}},"name":"meta.tag.any.ember-handlebars","patterns":[{"include":"#tag-like-content"}]},"main":{"patterns":[{"begin":"\\\\s*(<)(template)\\\\s*(>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.html"},"2":{"name":"entity.name.tag.other.html"},"3":{"name":"punctuation.definition.tag.html"}},"end":"(</)(template)(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.html"},"2":{"name":"entity.name.tag.other.html"},"3":{"name":"punctuation.definition.tag.html"}},"name":"meta.js.embeddedTemplateWithoutArgs","patterns":[{"include":"#style"},{"include":"#script"},{"include":"#glimmer-else-block"},{"include":"#glimmer-bools"},{"include":"#glimmer-special-block"},{"include":"#glimmer-unescaped-expression"},{"include":"#glimmer-comment-block"},{"include":"#glimmer-comment-inline"},{"include":"#glimmer-expression-property"},{"include":"#glimmer-control-expression"},{"include":"#glimmer-expression"},{"include":"#glimmer-block"},{"include":"#html-tag"},{"include":"#component-tag"},{"include":"#html-comment"},{"include":"#entities"}]},{"begin":"(<)(template)","beginCaptures":{"1":{"name":"punctuation.definition.tag.html"},"2":{"name":"entity.name.tag.other.html"}},"end":"(</)(template)(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.html"},"2":{"name":"entity.name.tag.other.html"},"3":{"name":"punctuation.definition.tag.html"}},"name":"meta.js.embeddedTemplateWithArgs","patterns":[{"begin":"(?<=<template)","end":"(?=>)","patterns":[{"include":"#tag-like-content"}]},{"begin":"(>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.end.js"}},"contentName":"meta.html.embedded.block","end":"(?=</template>)","patterns":[{"include":"#style"},{"include":"#script"},{"include":"#glimmer-else-block"},{"include":"#glimmer-bools"},{"include":"#glimmer-special-block"},{"include":"#glimmer-unescaped-expression"},{"include":"#glimmer-comment-block"},{"include":"#glimmer-comment-inline"},{"include":"#glimmer-expression-property"},{"include":"#glimmer-control-expression"},{"include":"#glimmer-expression"},{"include":"#glimmer-block"},{"include":"#html-tag"},{"include":"#component-tag"},{"include":"#html-comment"},{"include":"#entities"}]}]},{"begin":"(\\\\b(?:\\\\w+\\\\.)*(?:hbs|html)\\\\s*)(\`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.js"},"2":{"name":"punctuation.definition.string.template.begin.js"}},"contentName":"meta.embedded.block.html","end":"(\`)","endCaptures":{"0":{"name":"string.js"},"1":{"name":"punctuation.definition.string.template.end.js"}},"patterns":[{"include":"source.ts#template-substitution-element"},{"include":"#style"},{"include":"#script"},{"include":"#glimmer-else-block"},{"include":"#glimmer-bools"},{"include":"#glimmer-special-block"},{"include":"#glimmer-unescaped-expression"},{"include":"#glimmer-comment-block"},{"include":"#glimmer-comment-inline"},{"include":"#glimmer-expression-property"},{"include":"#glimmer-control-expression"},{"include":"#glimmer-expression"},{"include":"#glimmer-block"},{"include":"#html-tag"},{"include":"#component-tag"},{"include":"#html-comment"},{"include":"#entities"}]},{"begin":"((createTemplate|hbs|html))(\\\\()","beginCaptures":{"1":{"name":"entity.name.function.ts"},"2":{"name":"meta.function-call.ts"},"3":{"name":"meta.brace.round.ts"}},"contentName":"meta.embedded.block.html","end":"(\\\\))","endCaptures":{"1":{"name":"meta.brace.round.ts"}},"patterns":[{"begin":"((\`|'|\\"))","beginCaptures":{"1":{"name":"string.template.ts"},"2":{"name":"punctuation.definition.string.template.begin.ts"}},"end":"((\`|'|\\"))","endCaptures":{"1":{"name":"string.template.ts"},"2":{"name":"punctuation.definition.string.template.end.ts"}},"patterns":[{"include":"#style"},{"include":"#script"},{"include":"#glimmer-else-block"},{"include":"#glimmer-bools"},{"include":"#glimmer-special-block"},{"include":"#glimmer-unescaped-expression"},{"include":"#glimmer-comment-block"},{"include":"#glimmer-comment-inline"},{"include":"#glimmer-expression-property"},{"include":"#glimmer-control-expression"},{"include":"#glimmer-expression"},{"include":"#glimmer-block"},{"include":"#html-tag"},{"include":"#component-tag"},{"include":"#html-comment"},{"include":"#entities"}]}]},{"begin":"((precompileTemplate)\\\\s*)(\\\\()","beginCaptures":{"1":{"name":"entity.name.function.ts"},"2":{"name":"meta.function-call.ts"},"3":{"name":"meta.brace.round.ts"}},"end":"(\\\\))","endCaptures":{"1":{"name":"meta.brace.round.ts"}},"patterns":[{"begin":"((\`|'|\\"))","beginCaptures":{"1":{"name":"string.template.ts"},"2":{"name":"punctuation.definition.string.template.begin.ts"}},"contentName":"meta.embedded.block.html","end":"((\`|'|\\"))","endCaptures":{"1":{"name":"string.template.ts"},"2":{"name":"punctuation.definition.string.template.end.ts"}},"patterns":[{"include":"#style"},{"include":"#script"},{"include":"#glimmer-else-block"},{"include":"#glimmer-bools"},{"include":"#glimmer-special-block"},{"include":"#glimmer-unescaped-expression"},{"include":"#glimmer-comment-block"},{"include":"#glimmer-comment-inline"},{"include":"#glimmer-expression-property"},{"include":"#glimmer-control-expression"},{"include":"#glimmer-expression"},{"include":"#glimmer-block"},{"include":"#html-tag"},{"include":"#component-tag"},{"include":"#html-comment"},{"include":"#entities"}]},{"include":"source.ts#object-literal"},{"include":"source.ts"}]}]},"param":{"captures":{"0":{"name":"support.function","patterns":[{"match":"(@|this)","name":"variable.language"},{"match":"(\\\\.)+","name":"punctuation.definition.tag"}]},"1":{"name":"support.function","patterns":[{"match":"(\\\\.)+","name":"punctuation.definition.tag"}]}},"match":"(@|this.)([a-zA-Z0-9_.-]+)","patterns":[]},"script":{"begin":"(^[ \\\\t]+)?(?=<(?i:script)\\\\b(?!-))","beginCaptures":{"1":{"name":"punctuation.whitespace.embedded.leading.html"}},"end":"(?!\\\\G)([ \\\\t]*$\\\\n?)?","endCaptures":{"1":{"name":"punctuation.whitespace.embedded.trailing.html"}},"patterns":[{"begin":"(<)((?i:script))\\\\b","beginCaptures":{"0":{"name":"meta.tag.metadata.script.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"(/)((?i:script))(>)","endCaptures":{"0":{"name":"meta.tag.metadata.script.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.embedded.block.html","patterns":[{"begin":"\\\\G","end":"(?=/)","patterns":[{"begin":"(>)","beginCaptures":{"0":{"name":"meta.tag.metadata.script.start.html"},"1":{"name":"punctuation.definition.tag.end.html"}},"end":"((<))(?=/(?i:script))","endCaptures":{"0":{"name":"meta.tag.metadata.script.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"source.js-ignored-vscode"}},"patterns":[{"begin":"\\\\G","end":"(?=</(?i:script))","name":"source.js","patterns":[{"begin":"(^[ \\\\t]+)?(?=//)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.js"}},"end":"(?!\\\\G)","patterns":[{"begin":"//","beginCaptures":{"0":{"name":"punctuation.definition.comment.js"}},"end":"(?=<\/script)|\\\\n","name":"comment.line.double-slash.js"}]},{"begin":"/\\\\*","captures":{"0":{"name":"punctuation.definition.comment.js"}},"end":"\\\\*/|(?=<\/script)","name":"comment.block.js"},{"include":"source.js"}]}]},{"begin":"(?i:(?=type\\\\s*=\\\\s*('|\\"|)text/(x-handlebars|(x-(handlebars-)?|ng-)?template|html)[\\\\s\\"'>]))","end":"((<))(?=/(?i:script))","endCaptures":{"0":{"name":"meta.tag.metadata.script.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"text.html.basic"}},"patterns":[{"begin":"(?!\\\\G)","end":"(?=</(?i:script))","name":"text.html.basic","patterns":[{"include":"text.html.basic"}]}]},{"begin":"(?=(?i:type))","end":"(<)(?=/(?i:script))","endCaptures":{"0":{"name":"meta.tag.metadata.script.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"}}},{"include":"#string-double-quoted-html"},{"include":"#string-single-quoted-html"},{"include":"#glimmer-argument"},{"include":"#html-attribute"}]}]}]},"string-double-quoted-handlebars":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ember-handlebars"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.ember-handlebars"}},"name":"string.quoted.double.ember-handlebars","patterns":[{"match":"\\\\\\\\\\"","name":"constant.character.escape.ember-handlebars"}]},"string-double-quoted-html":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ember-handlebars"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.ember-handlebars"}},"name":"string.quoted.double.html.ember-handlebars","patterns":[{"match":"\\\\\\\\\\"","name":"constant.character.escape.ember-handlebars"},{"include":"#glimmer-bools"},{"include":"#glimmer-expression-property"},{"include":"#glimmer-control-expression"},{"include":"#glimmer-expression"},{"include":"#glimmer-block"}]},"string-single-quoted-handlebars":{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ember-handlebars"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.ember-handlebars"}},"name":"string.quoted.single.ember-handlebars","patterns":[{"match":"\\\\\\\\'","name":"constant.character.escape.ember-handlebars"}]},"string-single-quoted-html":{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ember-handlebars"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.ember-handlebars"}},"name":"string.quoted.single.html.ember-handlebars","patterns":[{"match":"\\\\\\\\'","name":"constant.character.escape.ember-handlebars"},{"include":"#glimmer-bools"},{"include":"#glimmer-expression-property"},{"include":"#glimmer-control-expression"},{"include":"#glimmer-expression"},{"include":"#glimmer-block"}]},"style":{"begin":"(^[ \\\\t]+)?(?=<(?i:style)\\\\b(?!-))","beginCaptures":{"1":{"name":"punctuation.whitespace.embedded.leading.html"}},"end":"(?!\\\\G)([ \\\\t]*$\\\\n?)?","endCaptures":{"1":{"name":"punctuation.whitespace.embedded.trailing.html"}},"patterns":[{"begin":"(?i)(<)(style)(?=\\\\s|/?>)","beginCaptures":{"0":{"name":"meta.tag.metadata.style.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"(?i)((<)/)(style)\\\\s*(>)","endCaptures":{"0":{"name":"meta.tag.metadata.style.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"source.css-ignored-vscode"},"3":{"name":"entity.name.tag.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.embedded.block.html","patterns":[{"begin":"\\\\G","captures":{"1":{"name":"punctuation.definition.tag.end.html"}},"end":"(>)","name":"meta.tag.metadata.style.start.html","patterns":[{"include":"#glimmer-argument"},{"include":"#html-attribute"}]},{"begin":"(?!\\\\G)","end":"(?=</(?i:style))","name":"source.css","patterns":[{"include":"source.css"}]}]}]},"tag-like-content":{"patterns":[{"include":"#glimmer-bools"},{"include":"#glimmer-unescaped-expression"},{"include":"#glimmer-comment-block"},{"include":"#glimmer-comment-inline"},{"include":"#glimmer-expression-property"},{"include":"#boolean"},{"include":"#digit"},{"include":"#glimmer-control-expression"},{"include":"#glimmer-expression"},{"include":"#glimmer-block"},{"include":"#string-double-quoted-html"},{"include":"#string-single-quoted-html"},{"include":"#glimmer-as-stuff"},{"include":"#glimmer-argument"},{"include":"#html-attribute"}]},"variable":{"match":"\\\\b([a-zA-Z0-9-_]+)\\\\b","name":"support.function","patterns":[]}},"scopeName":"source.gts","embeddedLangs":["typescript","css","javascript","html"],"aliases":["gts"]}`)),c=[...e,...n,...t,...a,i];export{c as default};
