(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{474:function(s,t,a){"use strict";a.r(t);var n=a(30),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210923180509.png",alt:""}})]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" gender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cnt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cnt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cnt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" gender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("persons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" cnt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" passenger\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" passenger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orderid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orderid\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("BETWEEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("YEAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("orderdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" gender "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" t1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" gender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("persons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" cnt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" passenger\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" passenger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orderid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orderid\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("BETWEEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("YEAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("orderdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" gender \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" t2\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gender "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gender\n\n")])])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" gender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("orderdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("persons "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" passenger\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" passenger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orderid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orderid\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("BETWEEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);