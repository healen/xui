(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba0c0"],{3618:function(s,C,E){"use strict";E.r(C);var t=function(){var s=this,C=s.$createElement;s._self._c;return s._m(0)},a=[function(){var s=this,C=s.$createElement,E=s._self._c||C;return E("section",{domProps:{innerHTML:s._s(s.content)}})}],n={created:function(){this.content=unescape("%3Ch2%3EContact%20%u8054%u7CFB%u4EBA%3C/h2%3E%0A%3Cp%3E%u901A%u8FC7%20Contact%20%u7EC4%u4EF6%u53EF%u4EE5%u5B9E%u73B0%u8054%u7CFB%u4EBA%u7684%u5C55%u793A%u3001%u9009%u62E9%u3001%u7F16%u8F91%u7B49%u529F%u80FD%u3002%3C/p%3E%0A%3Ch3%3E%u4F7F%u7528%u6307%u5357%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ContactCard%2C%20ContactList%2C%20ContactEdit%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27healen-x-ui%27%3C/span%3E%3B%0A%0AVue%0A%20%20.use%28ContactCard%29%0A%20%20.use%28ContactList%29%0A%20%20.use%28ContactEdit%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3E%u4EE3%u7801%u6F14%u793A%3C/h3%3E%0A%3Ch4%3E%u57FA%u7840%u7528%u6CD5%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20%u8054%u7CFB%u4EBA%u5361%u7247%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ex-contact-card%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22cardType%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aname%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22currentContact.name%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22currentContact.tel%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showList%20%3D%20true%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20%u8054%u7CFB%u4EBA%u5217%u8868%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ex-popup%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showList%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eposition%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22bottom%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ex-contact-list%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22chosenContactId%22%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Alist%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22list%22%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eadd%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onAdd%22%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eedit%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onEdit%22%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eselect%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onSelect%22%3C/span%3E%0A%20%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Ex-popup%3C/span%3E%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20%u8054%u7CFB%u4EBA%u7F16%u8F91%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ex-popup%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showEdit%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eposition%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22bottom%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ex-contact-edit%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acontact-info%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22editingContact%22%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ais-edit%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22isEdit%22%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Esave%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onSave%22%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Edelete%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onDelete%22%3C/span%3E%0A%20%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Ex-popup%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EchosenContactId%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Enull%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EeditingContact%3C/span%3E%3A%20%7B%7D%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EshowList%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EshowEdit%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EisEdit%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elist%3C/span%3E%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u5F20%u4E09%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%2713000000000%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%0A%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecomputed%3C/span%3E%3A%20%7B%0A%20%20%20%20cardType%28%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.chosenContactId%20%21%3D%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Enull%3C/span%3E%20%3F%20%3Cspan%20class%3D%22hljs-string%22%3E%27edit%27%3C/span%3E%20%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27add%27%3C/span%3E%3B%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20currentContact%28%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20id%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.chosenContactId%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20id%20%21%3D%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Enull%3C/span%3E%20%3F%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list.filter%28%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3Eitem%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20item.id%20%3D%3D%3D%20id%29%5B%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%5D%20%3A%20%7B%7D%3B%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u6DFB%u52A0%u8054%u7CFB%u4EBA%3C/span%3E%0A%20%20%20%20onAdd%28%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.editingContact%20%3D%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list.length%20%7D%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.isEdit%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.showEdit%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%3B%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u7F16%u8F91%u8054%u7CFB%u4EBA%3C/span%3E%0A%20%20%20%20onEdit%28item%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.isEdit%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%3B%20%20%20%20%20%20%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.showEdit%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.editingContact%20%3D%20item%3B%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u9009%u4E2D%u8054%u7CFB%u4EBA%3C/span%3E%0A%20%20%20%20onSelect%28%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.showList%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u4FDD%u5B58%u8054%u7CFB%u4EBA%3C/span%3E%0A%20%20%20%20onSave%28info%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.showEdit%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.showList%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.isEdit%29%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list.map%28%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3Eitem%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20item.id%20%3D%3D%3D%20info.id%20%3F%20info%20%3A%20item%29%3B%0A%20%20%20%20%20%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Eelse%3C/span%3E%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list.push%28info%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.chosenContactId%20%3D%20info.id%3B%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u5220%u9664%u8054%u7CFB%u4EBA%3C/span%3E%0A%20%20%20%20onDelete%28info%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.showEdit%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list.filter%28%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3Eitem%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20item.id%20%21%3D%3D%20info.id%29%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.chosenContactId%20%3D%3D%3D%20info.id%29%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.chosenContactId%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Enull%3C/span%3E%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%u4E0D%u53EF%u7F16%u8F91%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ex-contact-card%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22edit%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%u5F20%u4E09%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%2213000000000%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aeditable%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22false%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EContactCard%20API%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u7248%u672C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Etype%3C/td%3E%0A%3Ctd%3E%u7C7B%u578B%uFF0C%u53EF%u9009%u503C%u4E3A%20%3Ccode%3Eadd%3C/code%3E%20%3Ccode%3Eedit%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eadd%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3E%u8054%u7CFB%u4EBA%u59D3%u540D%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel%3C/td%3E%0A%3Ctd%3E%u8054%u7CFB%u4EBA%u624B%u673A%u53F7%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eadd-text%3C/td%3E%0A%3Ctd%3E%u6DFB%u52A0%u65F6%u7684%u6587%u6848%u63D0%u793A%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%u6DFB%u52A0%u8BA2%u5355%u8054%u7CFB%u4EBA%u4FE1%u606F%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EContactList%20API%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u7248%u672C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3C/td%3E%0A%3Ctd%3E%u5F53%u524D%u9009%u4E2D%u8054%u7CFB%u4EBA%u7684%20id%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%20%7C%20Number%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elist%3C/td%3E%0A%3Ctd%3E%u8054%u7CFB%u4EBA%u5217%u8868%3C/td%3E%0A%3Ctd%3E%3Ccode%3EArray%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eadd-text%3C/td%3E%0A%3Ctd%3E%u65B0%u5EFA%u6309%u94AE%u6587%u6848%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%u65B0%u5EFA%u8054%u7CFB%u4EBA%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EContactList%20Event%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eadd%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u65B0%u589E%u6309%u94AE%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eedit%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u7F16%u8F91%u6309%u94AE%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Eitem%3A%20%u5F53%u524D%u8054%u7CFB%u4EBA%u5BF9%u8C61%uFF0Cindex%3A%20%u7D22%u5F15%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eselect%3C/td%3E%0A%3Ctd%3E%u5207%u6362%u9009%u4E2D%u7684%u8054%u7CFB%u4EBA%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Eitem%3A%20%u5F53%u524D%u8054%u7CFB%u4EBA%u5BF9%u8C61%uFF0Cindex%3A%20%u7D22%u5F15%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EContactEdit%20API%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u7248%u672C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Econtact-info%3C/td%3E%0A%3Ctd%3E%u8054%u7CFB%u4EBA%u4FE1%u606F%3C/td%3E%0A%3Ctd%3E%3Ccode%3EObject%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eis-edit%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u4E3A%u7F16%u8F91%u8054%u7CFB%u4EBA%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eis-saving%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u4FDD%u5B58%u6309%u94AE%u52A0%u8F7D%u52A8%u753B%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eis-deleting%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u5220%u9664%u6309%u94AE%u52A0%u8F7D%u52A8%u753B%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel-validator%3C/td%3E%0A%3Ctd%3E%u624B%u673A%u53F7%u683C%u5F0F%u6821%u9A8C%u51FD%u6570%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%28tel%3A%20string%29%20%3D%26gt%3B%20boolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EContactEdit%20Event%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Esave%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u4FDD%u5B58%u6309%u94AE%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Econtent%uFF1A%u8868%u5355%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edelete%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u5220%u9664%u6309%u94AE%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Econtent%uFF1A%u8868%u5355%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3E%u6570%u636E%u683C%u5F0F%3C/h3%3E%0A%3Ch4%3E%u8054%u7CFB%u4EBA%u6570%u636E%u683C%u5F0F%3C/h4%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3Ekey%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eid%3C/td%3E%0A%3Ctd%3E%u6BCF%u4F4D%u8054%u7CFB%u4EBA%u7684%u552F%u4E00%u6807%u8BC6%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%20%7C%20Number%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3E%u8054%u7CFB%u4EBA%u59D3%u540D%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel%3C/td%3E%0A%3Ctd%3E%u8054%u7CFB%u4EBA%u624B%u673A%u53F7%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},l=n,A=E("2877"),u=Object(A["a"])(l,t,a,!1,null,null,null);u.options.__file="zh-CN.md";C["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0ba0c0.d9caf4ee.js.map