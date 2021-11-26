(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{407:function(t,a,e){"use strict";e.r(a);var n=e(30),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"hive-复杂数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hive-复杂数据类型"}},[t._v("#")]),t._v(" Hive 复杂数据类型")]),t._v(" "),e("h4",{attrs:{id:"_1-hive的数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-hive的数据类型"}},[t._v("#")]),t._v(" "),e("strong",[t._v("1. hive的数据类型")])]),t._v(" "),e("p",[t._v("Hive的内置数据类型可以分为两大类：(1)、基础数据类型；(2)、复杂数据类型")]),t._v(" "),e("h4",{attrs:{id:"_2-hive基本数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-hive基本数据类型"}},[t._v("#")]),t._v(" "),e("strong",[t._v("2. hive基本数据类型")])]),t._v(" "),e("p",[t._v("基础数据类型包括：")]),t._v(" "),e("p",[t._v("TINYINT,SMALLINT,INT,BIGINT,BOOLEAN,FLOAT,DOUBLE,STRING,BINARY,TIMESTAMP,DECIMAL,CHAR,VARCHAR,DATE。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz/1OYP1AZw0W1VhQztWf4P3WTyO6micx2NCs4nM7gBgiakO3u0ofTliaCndKt8No3W9m4GJaw4icHcgdQ9QribQN380gQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),e("h4",{attrs:{id:"_3-hive集合类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-hive集合类型"}},[t._v("#")]),t._v(" "),e("strong",[t._v("3. hive集合类型")])]),t._v(" "),e("p",[t._v("集合类型主要包括：array，map，struct等，hive的特性支持集合类型，这特性是关系型数据库所不支持的，利用好集合类型可以有效提升SQL的查询速率。")]),t._v(" "),e("p",[t._v("3.1 集合类型之array\n(1) 先创建一张表")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("create table t_array(id int,name string,hobby array<string>)\nrow format delimited\nfields terminated by ','\ncollection items terminated by '-'\nstored as textfile;\n\nload data inpath '/tmp/array.txt' into table t_array;\n")])])]),e("p",[t._v("(2) 准备数据文件 t_array.txt")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1,zhangsan,唱歌-跳舞-游泳\n2,lisi,打游戏-篮球\n")])])]),e("p",[t._v("(3) 查询数据")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('select id ,name,hobby[0],hobby[1] from t_array;\n+-----+-----------+------+------+\n| id  |   name    | _c2  | _c3  |\n+-----+-----------+------+------+\n| 1   | zhangsan  | 唱歌   | 跳舞   |\n| 2   | lisi      | 打游戏  | 篮球   |\n+-----+-----------+------+------+\nselect id ,name,hobby[0],hobby[1],hobby[2] from t_array;\n+-----+-----------+------+------+-------+\n| id  |   name    | _c2  | _c3  |  _c4  |\n+-----+-----------+------+------+-------+\n| 1   | zhangsan  | 唱歌   | 跳舞   | 游泳    |\n| 2   | lisi      | 打游戏  | 篮球   | NULL  |\n+-----+-----------+------+------+-------+\nselect * from t_array;\n+-------------+---------------+-------------------+\n| t_array.id  | t_array.name  |   t_array.hobby   |\n+-------------+---------------+-------------------+\n| 1           | zhangsan      | ["唱歌","跳舞","游泳"]  |\n| 2           | lisi          | ["打游戏","篮球"]      |\n+-------------+---------------+-------------------+\n2 rows selected (0.114 seconds)\n')])])]),e("p",[t._v("注意：array的访问元素和java中是一样的，这里通过索引来访问。")]),t._v(" "),e("h5",{attrs:{id:"_3-2-集合类型之map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-集合类型之map"}},[t._v("#")]),t._v(" 3.2 集合类型之map")]),t._v(" "),e("p",[t._v("(1) 先创建一张表")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("create table t_map(id int,name string,hobby map<string,string>)\nrow format delimited\nfields terminated by ','\ncollection items terminated by '-'\nmap keys terminated by ':'\nstored as textfile;\n\n#加载数据\nload data inpath '/tmp/t_map.txt' into table t_map;\n")])])]),e("p",[t._v("(2) 准备数据文件 t_map.txt")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1,zhangsan,唱歌:非常喜欢-跳舞:喜欢-游泳:一般般\n2,lisi,打游戏:非常喜欢-篮球:不喜欢\n")])])]),e("p",[t._v("(3) 查询数据")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' select * from _map;\n+-----------+-------------+-------------------------------------+\n| t_map.id  | t_map.name  |             t_map.hobby             |\n+-----------+-------------+-------------------------------------+\n| 1         | zhangsan    | {"唱歌":"非常喜欢","跳舞":"喜欢","游泳":"一般般"}  |\n| 2         | lisi        | {"打游戏":"非常喜欢","篮球":"不喜欢"}           |\n+-----------+-------------+-------------------------------------+\n2 rows selected (0.103 seconds)\nselect id,name,hobby[\'唱歌\'] from t_map;\n+-----+-----------+-------+\n| id  |   name    |  _c2  |\n+-----+-----------+-------+\n| 1   | zhangsan  | 非常喜欢  |\n| 2   | lisi      | NULL  |\n+-----+-----------+-------+\n2 rows selected (0.115 seconds)\nselect id,name,hobby[\'唱歌\'],hobby[\'跳舞\'] from t_map;\n+-----+-----------+-------+-------+\n| id  |   name    |  _c2  |  _c3  |\n+-----+-----------+-------+-------+\n| 1   | zhangsan  | 非常喜欢  | 喜欢    |\n| 2   | lisi      | NULL  | NULL  |\n+-----+-----------+-------+-------+\n')])])]),e("p",[t._v("注意：map的访问元素中的value和java中是一样的，这里通过key来访问。")]),t._v(" "),e("h5",{attrs:{id:"_3-3-集合类型之struct"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-集合类型之struct"}},[t._v("#")]),t._v(" 3.3 集合类型之struct")]),t._v(" "),e("p",[t._v("(1) 先创建一张表")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("create table t_struct(id int,name string,address struct<country:string,city:string>)\nrow format delimited\nfields terminated by ','\ncollection items terminated by '-'\nstored as textfile;\n#加载数据\nload data inpath '/tmp/t_struct.txt' into table t_struct;\n")])])]),e("p",[t._v("(2) 准备数据文件 struct.txt")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1,zhangsan,china-beijing\n2,lisi,USA-newyork\n")])])]),e("p",[t._v("(3) 查询数据")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('select * from t_struct;\n+--------------+----------------+---------------------------------------+\n| t_struct.id  | t_struct.name  |           t_struct.address            |\n+--------------+----------------+---------------------------------------+\n| 1            | zhangsan       | {"country":"china","city":"beijing"}  |\n| 2            | lisi           | {"country":"USA","city":"newyork"}    |\n+--------------+----------------+---------------------------------------+\n2 rows selected (0.112 seconds)\nselect id,name,address.country,address.city from t_struct;\n+-----+-----------+----------+----------+\n| id  |   name    | country  |   city   |\n+-----+-----------+----------+----------+\n| 1   | zhangsan  | china    | beijing  |\n| 2   | lisi      | USA      | newyork  |\n+-----+-----------+----------+----------+\n')])])]),e("p",[t._v("总结：struct访问元素的方式是通过.符号")])])}),[],!1,null,null,null);a.default=s.exports}}]);