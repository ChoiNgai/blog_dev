(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{401:function(_,v,t){"use strict";t.r(v);var a=t(30),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"数据仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据仓库"}},[_._v("#")]),_._v(" 数据仓库")]),_._v(" "),t("h2",{attrs:{id:"_1-数据仓库的定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据仓库的定义"}},[_._v("#")]),_._v(" 1. 数据仓库的定义")]),_._v(" "),t("p",[t("strong",[_._v("问：什么是数据仓库?")])]),_._v(" "),t("p",[_._v("数据仓库面向主题（整个处理流程）、具有集成（数据整合）、随时间相对稳定、反映历史变化。")]),_._v(" "),t("h2",{attrs:{id:"_2-数仓常见概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-数仓常见概念"}},[_._v("#")]),_._v(" 2. 数仓常见概念")]),_._v(" "),t("h3",{attrs:{id:"_2-1-事实表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-事实表"}},[_._v("#")]),_._v(" 2.1 事实表")]),_._v(" "),t("p",[_._v("事实表产生于业务过程，存储了业务活动或事件提炼出来的性能度量。从最低的粒度级别来看，事实表行对应一个度量事件。")]),_._v(" "),t("p",[_._v("事实表根据粒度的角色划分不同，可分为事务事实表、周期快照事实表、累积快照事实表。")]),_._v(" "),t("p",[_._v("（1）"),t("strong",[_._v("事务事实表")]),_._v("，用于承载事务数据，通常粒度比较低，它是面向事务的，其粒度是每一行对应一个事务，它是最细粒度的事实表，例如产品交易事务事实、ATM交易事务事实。")]),_._v(" "),t("p",[_._v("（2）"),t("strong",[_._v("周期快照事实表")]),_._v("，按照一定的时间周期间隔(每天，每月)来捕捉业务活动的执行情况，一旦装入事实表就不会再去更新，它是事务事实表的补充。用来记录有规律的、固定时间间隔的业务累计数据，通常粒度比较高，例如账户月平均余额事实表。")]),_._v(" "),t("p",[_._v("（3）"),t("strong",[_._v("累积快照事实表")]),_._v("，用来记录具有时间跨度的业务处理过程的整个过程的信息，每个生命周期一行，通常这类事实表比较少见。")]),_._v(" "),t("p",[_._v("注意：这里需要值得注意的是，在事实表的设计时，一定要注意一个事实表只能有一个粒度，不能将不同粒度的事实建立在同一张事实表中。")]),_._v(" "),t("h3",{attrs:{id:"_2-2-维度表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-维度表"}},[_._v("#")]),_._v(" 2.2 维度表")]),_._v(" "),t("p",[_._v("维度表，一致性维度，业务过程的发生或分析角度，我们主要关注下退化维度和缓慢变化维。")]),_._v(" "),t("p",[_._v("（1）"),t("strong",[_._v("退化维度")]),_._v("（DegenerateDimension）")]),_._v(" "),t("p",[_._v("在维度类型中，有一种重要的维度称作为退化维度，亦维度退化一说。这种维度指的是"),t("strong",[_._v("直接把一些简单的维度放在事实表中")]),_._v("。退化维度是维度建模领域中的一个非常重要的概念，它对理解维度建模有着非常重要的作用，退化维度一般在分析中可以用来做分组使用。")]),_._v(" "),t("p",[_._v("（2）"),t("strong",[_._v("缓慢变化维")]),_._v("（Slowly Changing Dimensions）")]),_._v(" "),t("p",[_._v("维度的属性并不是始终不变的，它会随着时间的流逝发生缓慢的变化，这种随时间发生变化的维度我们一般称之为缓慢变化维（SCD）。")]),_._v(" "),t("p",[_._v("SCD常用的三种处理方式：")]),_._v(" "),t("p",[_._v("① "),t("strong",[_._v("TYPE1")]),_._v(" 直接覆盖原值")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210912040809.png",alt:""}})]),_._v(" "),t("p",[_._v("② "),t("strong",[_._v("TYPE2")]),_._v(" 增加维度行")]),_._v(" "),t("p",[_._v("*在为维度成员增加新行时，需为其分配新的主代理键。**并且，至少需要在维度行再增加三列：**有效日期、截止日期、行标识。*"),t("em",[_._v("这个地方可联想拉链表设计。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210912040838.png",alt:"image-20210912040838080"}})]),_._v(" "),t("p",[_._v("③ "),t("strong",[_._v("TYPE3")]),_._v(" 增加属性列")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210912040855.png",alt:""}})]),_._v(" "),t("p",[_._v("④ 混合方式")]),_._v(" "),t("p",[_._v("可根据实际业务场景，混合或选择使用以上三种方式，以快速方便而又准确的分析历史变化情况。")]),_._v(" "),t("h3",{attrs:{id:"_2-3-粒度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-粒度"}},[_._v("#")]),_._v(" 2.3 粒度")]),_._v(" "),t("p",[_._v("用于确定某一事实表中的行表示什么，是业务最小活动单元或不同维度组合，即业务细节程度。")]),_._v(" "),t("h3",{attrs:{id:"_2-4-数仓其他专业术语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-数仓其他专业术语"}},[_._v("#")]),_._v(" 2.4 数仓其他专业术语")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("ETL")]),_._v(" "),t("p",[_._v("ETL（Extract-Transform-Load）是指将业务系统中的数据进行"),t("strong",[_._v("抽取、转换、加载")]),_._v("到数据仓库的过程，目的是将企业中分散、零乱、标准不统一的数据整合到一起，为企业的决策提供分析的依据。")])]),_._v(" "),t("li",[t("p",[_._v("OLAP")]),_._v(" "),t("p",[_._v("联机分析处理（Online analytical processing，OLAP），从数据仓库中抽取详细数据的一个子集并经过必要的聚集，存储到OLAP存储器中供前端分析工具读取。")])]),_._v(" "),t("li",[t("p",[_._v("OLTP")]),_._v(" "),t("p",[_._v("联机(在线)事务处理(On-Line Transaction Processing，OLTP)，主要是执行日常的事务处理，比如数据库记录的增删改查。OLTP的特点一般有：实时性要求高，数据量不大，高并发，并且要求满足ACID原则。")])])]),_._v(" "),t("h3",{attrs:{id:"_2-4-数据库-数据仓库-数据湖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-数据库-数据仓库-数据湖"}},[_._v("#")]),_._v(" 2.4 数据库？数据仓库？数据湖？")]),_._v(" "),t("h4",{attrs:{id:"_2-4-1-数据仓库和数据库的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-数据仓库和数据库的区别"}},[_._v("#")]),_._v(" 2.4.1 数据仓库和数据库的区别？")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("数据库")]),_._v(" "),t("th",[_._v("数据仓库")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("数据库是面向"),t("strong",[_._v("事务")]),_._v("的，数据由日常业务产生，常更新")]),_._v(" "),t("td",[_._v("数据仓库是面向"),t("strong",[_._v("主题")]),_._v("的，数据来源于数据库或文件，经过一定的规则转换得到，用于分析决策")])]),_._v(" "),t("tr",[t("td",[_._v("数据库一般是存储"),t("strong",[_._v("当前")]),_._v("数据的")]),_._v(" "),t("td",[_._v("数据仓库一般存储的是"),t("strong",[_._v("历史")]),_._v("数据")])]),_._v(" "),t("tr",[t("td",[_._v("数据库的设计一般要符合"),t("strong",[_._v("三范式（3NF）")]),_._v("，有最大精确度和最小冗余度，有利于数据的插入")]),_._v(" "),t("td",[_._v("数据仓库的设计一般是按照"),t("strong",[_._v("数仓建模")]),_._v("规范，有一定的冗余，有利于查询")])])])]),_._v(" "),t("h4",{attrs:{id:"_2-4-2-数据仓库与数据湖的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-数据仓库与数据湖的区别"}},[_._v("#")]),_._v(" 2.4.2 数据仓库与数据湖的区别？")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("数据仓库")]),_._v(" "),t("th",[_._v("数据湖")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("不开放HDFS")]),_._v(" "),t("td",[_._v("开放HDFS")])]),_._v(" "),t("tr",[t("td",[_._v("存储结构化、半结构化数据")]),_._v(" "),t("td",[_._v("存储结构化、半结构化、非结构化数据")])]),_._v(" "),t("tr",[t("td",[_._v("依托大数据技术")]),_._v(" "),t("td",[_._v("依托大数据技术与人工智能")])])])]),_._v(" "),t("h2",{attrs:{id:"_3-维度建模"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-维度建模"}},[_._v("#")]),_._v(" 3. 维度建模")]),_._v(" "),t("h3",{attrs:{id:"_3-1-三种模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-三种模型"}},[_._v("#")]),_._v(" 3.1 三种模型")]),_._v(" "),t("p",[_._v("数据仓库建模方法论可分为："),t("strong",[_._v("维度建模")]),_._v("、范式建模、Data Vault模型、Anchor模型")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210801225303.png",width:"50%"}})]),_._v(" "),t("p",[_._v("其中数仓最为常用的是"),t("strong",[_._v("维度建模")]),_._v("，而维度建模建立的模型主要有三种：（1）"),t("strong",[_._v("星型模型")]),_._v("、（2）"),t("strong",[_._v("雪花模型")]),_._v("、（3）"),t("strong",[_._v("星座模型")])]),_._v(" "),t("h4",{attrs:{id:"_3-1-1-星型模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-星型模型"}},[_._v("#")]),_._v(" 3.1.1 星型模型")]),_._v(" "),t("p",[_._v("星型模型主要由维表和事实表构成，"),t("strong",[_._v("以事实表为中心")]),_._v("，所有维度直接关联在事实表上，呈星型分布。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210912040748.png",alt:""}})]),_._v(" "),t("p",[_._v("图来源于Kimball《The Data Warehouse Toolkits -3rd Edition》")]),_._v(" "),t("h4",{attrs:{id:"_3-2-雪花模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-雪花模型"}},[_._v("#")]),_._v(" 3.2 雪花模型")]),_._v(" "),t("p",[_._v("雪花模型，在星型模型的基础上，维度表上又关联了其他维度表。")]),_._v(" "),t("p",[_._v("雪花模型的维护成本较高，性能方面也较差，尤其是基于hadoop体系构建数仓，减少join就是减少shuffle，性能差距会很大。")]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[_._v("区分星型模型与雪花模型")])]),_._v(" "),t("p",[_._v("与星型模型的区别：主要在维度，标准的星型模型维度只有一层，而雪花模型的维度会涉及多级，如图：")])])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210801230325.png",alt:"星型模型与雪花模型"}})]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("星型模型和雪花模型的优劣对比")])])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[_._v("属性")]),_._v(" "),t("th",{staticStyle:{"text-align":"left"}},[_._v("星型模型")]),_._v(" "),t("th",{staticStyle:{"text-align":"left"}},[_._v("雪花模型")])])]),_._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[_._v("数据总量")]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("多")]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("少")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[_._v("可读性")]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("容易")]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("差")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[_._v("表个数")]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("少")]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("多")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[_._v("查询速度")]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("快")]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("慢")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[_._v("冗余度")]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("高")]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("低")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[_._v("对实时表的情况")]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("增加宽度")]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("字段比较少，冗余底")])]),_._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[_._v("扩展性")]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("差")]),_._v(" "),t("td",{staticStyle:{"text-align":"left"}},[_._v("好")])])])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("应用场景")]),_._v(" "),t("p",[t("strong",[_._v("星型模型")]),_._v("的设计方式主要带来的好处是能够提升查询效率，因为生成的事实表已经经过预处理，主要的数据都在事实表里面，所以只要扫描实时表就能够进行大量的查询，而不必进行大量的join，其次维表数据一般比较少，在join可直接放入内存进行join以提升效率，除此之外，星型模型的事实表可读性比较好，不用关联多个表就能获取大部分核心信息，设计维护相对比较简答。")]),_._v(" "),t("p",[t("strong",[_._v("雪花模型")]),_._v("的设计方式是比较符合数据库范式（比较靠近3NF，但无法完全遵守，因为完全遵循3NF的性能成本太高）的理念，设计方式比较正规，数据冗余少，但在查询的时候可能需要join多张表从而导致查询效率下降，此外规范化操作在后期维护比较复杂。")])])]),_._v(" "),t("h4",{attrs:{id:"_3-3-星座模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-星座模型"}},[_._v("#")]),_._v(" 3.3 星座模型")]),_._v(" "),t("p",[_._v("星座模型，是对星型模型的扩展延伸，多张事实表共享维度表。数仓模型建设后期，大部分维度建模都是星座模型。")]),_._v(" "),t("p",[_._v("星座模型与前两种的区别是"),t("strong",[_._v("事实表的数量")]),_._v("，星座模型有多个事实表。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210801234858.png",alt:""}})]),_._v(" "),t("h3",{attrs:{id:"_3-2-模型选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-模型选择"}},[_._v("#")]),_._v(" 3.2 模型选择")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("星座不星座？")]),_._v(" "),t("p",[_._v("这个只跟数据和需求有关系，跟设计没关系，不用选择。")]),_._v(" "),t("p",[_._v("（需要星座模型的时候就得是星座模型，不需要的时候就不会是星座模型，所以不用选）")])]),_._v(" "),t("li",[t("p",[_._v("星型还是雪花？")]),_._v(" "),t("p",[_._v("取决于"),t("strong",[_._v("性能优先")]),_._v("还是"),t("strong",[_._v("灵活优先")])]),_._v(" "),t("p",[_._v("如果性能优先，则选择星型模型；如果灵活优先则选择雪花模型。")]),_._v(" "),t("p",[_._v("在实际开发中，不会只选择一种，会根据情况组合甚至并存（一层维度和多层维度都保留）。但整体来看会更倾向于"),t("strong",[_._v("星型模型")]),_._v("，尤其是Hadoop体系中，减少Join操作可减少Shuffle，性能差距很大（关系型库数据可以依靠强大的主键索引）。")])])]),_._v(" "),t("p",[_._v("总结：")]),_._v(" "),t("p",[_._v("数据仓库大多数时候是比较适合使用"),t("strong",[_._v("星型模型构建底层数据Hive表")]),_._v("，通过大量的冗余来提升查询效率，星型模型对OLAP的分析引擎支持比较友好，这一点在Kylin中比较能体现。而雪花模型在关系型数据库中如MySQL，Oracle中非常常见，尤其像电商的数据库表。在数据仓库中雪花模型的应用场景比较少，但也不是没有，所以在具体设计的时候，可以考虑是不是能结合两者的优点参与设计，以此达到设计的最优化目的。")]),_._v(" "),t("h3",{attrs:{id:"_3-3-注意点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-注意点"}},[_._v("#")]),_._v(" 3.3 注意点")]),_._v(" "),t("h3",{attrs:{id:"_3-3-1-维度建模常见错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-维度建模常见错误"}},[_._v("#")]),_._v(" 3.3.1 维度建模常见错误")]),_._v(" "),t("ul",[t("li",[_._v("舍弃一致性维度和一致性事实表")]),_._v(" "),t("li",[_._v("事实表的粒度不采用原子型")]),_._v(" "),t("li",[_._v("基于报表来设计维度表")]),_._v(" "),t("li",[_._v("不使用代理关键字")]),_._v(" "),t("li",[_._v("忽视维度的变化的需求")]),_._v(" "),t("li",[_._v("将体系与体系层次分解成多个维度")]),_._v(" "),t("li",[_._v("在维度表中为节省空间而限制使用详细的描述属性")]),_._v(" "),t("li",[_._v("在事实表中放置用于约束与分组操作的文本属性")])]),_._v(" "),t("h3",{attrs:{id:"_3-3-2-维度建模技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-维度建模技巧"}},[_._v("#")]),_._v(" 3.3.2 维度建模技巧")]),_._v(" "),t("p",[_._v("关键点：退化维度、代理关键字、一致性维度、渐变维度、角色模仿、杂项维度、微型维度、深度可变的层次建模方法、审计维度、多值维度解决办法、异构产品解决办法。")]),_._v(" "),t("p",[_._v("1、维度表倾向于将行数做得相当少，而将列数做的特别大。数据仓库的能力直接与维度表的属性的质量和深度成正比。")]),_._v(" "),t("p",[_._v("2、维度的属性采用文字而不是编码。")]),_._v(" "),t("p",[_._v("3、维度表通常是不规范的，几乎总是用空间换取简明性和可访问性。（第一章）")]),_._v(" "),t("p",[_._v("4、日期维度，应包含星期、周末指示符、月末指示符、节假日指示符、重大事件、财政时间等。")]),_._v(" "),t("p",[_._v("5、如果需要处理一天中不同时间，则增加一个时间维度。")]),_._v(" "),t("p",[_._v("6、一个维度包含多个体系（层次），每个层次包含若干级别。")]),_._v(" "),t("p",[_._v("7、退化维度。一方面可以通过退化维度对数据进行分组，另一方面可以使用退化维度关联到源数据上，有利于ETL更新及排错。")]),_._v(" "),t("p",[_._v("8、一般情况维度个数应该控制在15个以内，唯独过多影响查询性能和磁盘空间。一些小维度可以进行组合，这取决于具体的业务。")]),_._v(" "),t("p",[_._v("9、代理关键字。使用代理关键字的优点：能实现渐变维度；获得性能上的优势，节省事实表空间；可以记录没有操作源码的数据（ETL过程生成）；处理关键字段的修改、删除等。（第二章）")]),_._v(" "),t("p",[_._v("10、一致性维度。具有一致性的维度关键字，一致的属性名称，一致的属性定义，一致的属性值。一致性维度对于设计可以进行集成的数据中心来说，具有绝对的决定性作用。（第三章）")]),_._v(" "),t("p",[_._v("11、渐变维度。渐变维度的处理办法。")]),_._v(" "),t("ul",[t("li",[_._v("类型1：改写属性值；")]),_._v(" "),t("li",[_._v("类型2：添加维度行（常用，例如拉链表）；")]),_._v(" "),t("li",[_._v("类型3：添加维度列。")])]),_._v(" "),t("p",[_._v("12、快变维度的处理办法：将这些迅速变化的属性分裂成一个或者多个单独的维度。")]),_._v(" "),t("p",[_._v("13、维度的角色模仿。在同一个维度表上通过视图的形式建立多个维度。在实际运用中，很多OLAP工具都支持在同一个维度表上建多个维度，而并不需要建立视图。")]),_._v(" "),t("p",[_._v("14、实体之间存在固定的，不随时间变化的，强烈相关的关系时，显然应该将它们当作单一维度进行建模。")]),_._v(" "),t("p",[_._v("15、杂项维度。将标志与指标符从设计中剥离出来，将其封装成一个或者多个杂项维度。")]),_._v(" "),t("p",[_._v("16、将聚集事实放入维度表的优缺点。优点：查询时可以对聚集属性进行约束。缺点：ETL过程变麻烦了。")]),_._v(" "),t("p",[_._v("17、雪花模型的使用场合：粒度悬殊，节省空间（属性众多）。")]),_._v(" "),t("p",[_._v("18、宽度变化的属性集的处理办法：拆分成两个维度。Oracle数据库不存在这个问题。")]),_._v(" "),t("p",[_._v("19、采用类型2的方式处理维度慢性变化时，应该注意避免计数过度。")]),_._v(" "),t("p",[_._v("20、深化不变的体系结构（层次、级别）。一个层次建立单独的字段。如果某一个级别没有值，就应该用较低级别的属性覆盖该值。")]),_._v(" "),t("p",[_._v("21、深度可变的体系结构。使用桥接标来解决。父到子的每一条路径都包含一行记录，到其自身长度为0的路径包含一行。实际上是把循环递归的过程通过表数据的形式实现。大量olap工具以提供了对小于64000个成员的中小尺寸维度中这些体系进行导航操作得更加强劲的内置功能支持。")]),_._v(" "),t("p",[_._v("22、依照十五描述内容在每行加入生效和截止日期标记，可以将类型2渐变维度设计方案修改为允许自然的对维度在时间上进行非常精细的切割。")]),_._v(" "),t("p",[_._v("23、审计维度。源系统的情况；抽取软件的版本；抽取记录数；开始时间；完成时间等。")]),_._v(" "),t("p",[_._v("24、维度的属性数量不确定时，使用关键词支架维度。相当于将横表设计成纵表。使用union和intersect命令解决SQL跨行约束问题。")]),_._v(" "),t("p",[_._v("25、维度类型：因果维度、多日期或时间标记维度、退化维度、角色模仿维度、状态维度、审计维度、杂项维度。")]),_._v(" "),t("p",[_._v("26、多值维度。概念：一个账户拥有多个客户，一个客户也可能拥有多个账户。解决办法：桥接表。")]),_._v(" "),t("p",[_._v("27、异构产品方案。概念：每种产品类型都有大量的专用属性与度量事实不能为其他产品所用。解决方案：核心维度，定制维度，使用相同的代理关键字。采用支架结构。")]),_._v(" "),t("p",[_._v("28、日期维度。国别历法的处理办法，做成日期维度的支架。")]),_._v(" "),t("p",[_._v("29、多个时区日期的处理办法，增加维度。")]),_._v(" "),t("p",[_._v("30、多值维度解决方案。所谓多值维度是指一个事实表对应多个值的维度，比如，住院结算事实表拥有多个疾病。通过组桥表来实现。组桥表可以增加起止时间来满足住院渐变维度。可以增加加权因子来实现财务报表关于疾病的分类统计。")]),_._v(" "),t("p",[_._v("31、稀疏事实表的解决方案。事实维度表。实际上是纵表和横表的设计思想。优点：灵活、结构简单、节省空间。缺点：生成查询、报表复杂、行间计算困难。")]),_._v(" "),t("p",[_._v("32、迟到维度行的处理办法。所谓迟到维度是指某项属性到当前时间才知道其以前的值。通过渐变维度（类型2）的方法处理，在维度表中增加记录并修改其他型的起止时间，在事实表中修改该维度的代理关键字。")]),_._v(" "),t("h2",{attrs:{id:"_4-维度建模流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-维度建模流程"}},[_._v("#")]),_._v(" 4. 维度建模流程")]),_._v(" "),t("h3",{attrs:{id:"_4-1-维度建模四步法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-维度建模四步法"}},[_._v("#")]),_._v(" 4.1 维度建模四步法")]),_._v(" "),t("p",[_._v("维度建模步骤：选择业务过程->声明粒度->确定维度->确定事实。旨在重点解决数据粒度、维度设计和事实表设计问题。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210912040728.png",alt:""}})]),_._v(" "),t("p",[_._v("声明粒度，为业务最小活动单元或不同维度组合。以共同粒度从多个组织业务过程合并度量的事实表称为合并事实表，需要注意的是，来自多个业务过程的事实合并到合并事实表时，它们必须具有同样等级的粒度。")]),_._v(" "),t("blockquote",[t("p",[_._v("举个例子：")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("选择业务过程——确定主题和数据指标（目标是什么）")]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[_._v("确定主题")])]),_._v(" "),t("p",[_._v("即确定数据分析或前端展示的主题（例如：某年某月某地区的啤酒销售情况）。")]),_._v(" "),t("p",[_._v("主要体现出某一方面的分析角度（维度）和统计数值型数据（指标）之间的关系。")]),_._v(" "),t("p",[_._v("确定主题时要综合考虑。")])]),_._v(" "),t("li",[t("p",[_._v("选择"),t("strong",[_._v("数据指标")]),_._v("（即确定度量单位）")]),_._v(" "),t("p",[_._v("确定主题后，要考虑分析的数据指标（例如年销售额等）。数据指标是要统计的指标，必须事先选择恰当。（如果条件允许，则依托一套元数据管理会做得更好）")])])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("声明粒度")]),_._v("——确定事实数据粒度（声明粒度，即确定最小研究单位）")]),_._v(" "),t("p",[_._v("确定数据指标之后，需要考虑该指标的汇总情况和不同维度下指标的聚合情况。例如在业务系统中数据最小记录到秒，而在数仓建设需求中，时间可能只需要精确到天就可以了。")])]),_._v(" "),t("li",[t("p",[_._v("确定"),t("strong",[_._v("维度")]),_._v("（即分析的角度）")]),_._v(" "),t("p",[_._v("维度是分析的各个角度，例如：我们希望按照时间、地区、产品进行分析，那么这里的时间、地区、产品就是维度。基于不同的维度，可以看到各种数据指标的汇总情况，也可以基于所有维度进行交叉分析（这里的所有维度是指模型中列入的维度）。")])]),_._v(" "),t("li",[t("p",[_._v("创建"),t("strong",[_._v("事实表")]),_._v("（结果表）")]),_._v(" "),t("p",[_._v("在确定好实时数据和维度后，将考虑加载事实表。业务系统中的一条条订单、交易数据就是将要简历的事实表的原始数据（原始表）。通常是将原始表与维度表进行关联，生成事实表。")])])])]),_._v(" "),t("p",[_._v("以上四个步骤是维度建模的所有步骤，仅仅确定模型中的事实表和维度表。")]),_._v(" "),t("p",[_._v("而数据整个流向具体步骤如下：")]),_._v(" "),t("ul",[t("li",[_._v("将详细的原子数据加载到维度结构中")]),_._v(" "),t("li",[_._v("围绕业务流程构建维度模型")]),_._v(" "),t("li",[_._v("确保每个事实表都有一个关联的日期维度表")]),_._v(" "),t("li",[_._v("确保单个事实表中的所有事实具有相同的粒度或详细程度")]),_._v(" "),t("li",[_._v("解析事实表中的多对多关系")]),_._v(" "),t("li",[_._v("解析维度表中的多对一关系")]),_._v(" "),t("li",[_._v("在维度表中存储报表标签和筛选值")]),_._v(" "),t("li",[_._v("确保维度表使用代理键")]),_._v(" "),t("li",[_._v("创建一致的维度以在整个企业中集成数据")]),_._v(" "),t("li",[_._v("提供DW/BI解决方案")]),_._v(" "),t("li",[_._v("支持业务用户的决策")])]),_._v(" "),t("h3",{attrs:{id:"_4-2-三种事实表的维度建模"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-三种事实表的维度建模"}},[_._v("#")]),_._v(" 4.2 三种事实表的维度建模")]),_._v(" "),t("p",[_._v("维度建模的中心是事实表（星型模型、雪花模型、星座模型都是以"),t("strong",[_._v("事实表")]),_._v("为中心）,因而事实表是维度建模的核心表和基本表。它存储了业务过程中的各种度量和事实，而这些度量和事实正是下游数据使用人员所要关心和分析的对象。")]),_._v(" "),t("p",[_._v("接下来将探讨以下三种事实表：")]),_._v(" "),t("ul",[t("li",[_._v("事务事实表")]),_._v(" "),t("li",[_._v("快照事实表")]),_._v(" "),t("li",[_._v("累计快照事实表")])]),_._v(" "),t("h4",{attrs:{id:"_4-2-1-事务事实表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-事务事实表"}},[_._v("#")]),_._v(" 4.2.1 事务事实表")]),_._v(" "),t("p",[_._v("事务事实表是维度建模事实表中最为常见、使用最为广泛的事实表。")]),_._v(" "),t("p",[_._v("事务事实表通常用于记录业务过程的事件，而且是原子粒度的事件。事务事实表中的数据在事务事件发生之后，数据的粒度通常是每个事务一条记录。一旦事务被提交，事实表数据被插入，数据就不再进行更改。")]),_._v(" "),t("p",[_._v("我们通过事务事实表存储单次业务事件 / 行为的细节，以及存储与事件相关的维度细节，用户即可以单独或者聚合分析业务事件和行为。")]),_._v(" "),t("p",[_._v("事务事实表的粒度确定是事务事实表设计过程中的关键步骤，一般都会包含可加的度量和事实。理解概念的最佳途径无疑是实际的例子，因此下面将结合超市零售业务以及维度建模的四个环节来说明事务事实表。")]),_._v(" "),t("p",[t("strong",[_._v("（1）选择业务过程")])]),_._v(" "),t("p",[_._v("在超市的零售示例中，业务用户做的事情是更好的理解POS系统记录顾客购买的情况，那么很容易确定业务过程就是POS系统记录的顾客购买情况，即在什么时候、什么商品、哪个收银台、销售了哪些产品等。")]),_._v(" "),t("p",[t("strong",[_._v("（2）定义粒度")])]),_._v(" "),t("p",[_._v("顾客单次购买行为的体现是一张购物小票，但是事务事实表应该选择最原子粒度的事件，所以小票的子项（在业务上的动作即为收银员每次扫描的商品条码）应该是超市零售事务事实表的粒度。")]),_._v(" "),t("p",[t("strong",[_._v("（3）确定维度")])]),_._v(" "),t("p",[_._v("小票子项的粒度确定后，销售日期、销售商品、销售收银台、销售门店等维度很容易被确定了。另一个不太容易考虑到的是维度是促销行为，但是通过和业务人员交流或者查看报表表头等也能够发现此维度。")]),_._v(" "),t("p",[t("strong",[_._v("（4）确定事实")])]),_._v(" "),t("p",[_._v("维度设计的最后一步，是确定哪些事实和度量应该在事实表中出现。对于本例，商品销售数量、销售价格和销售金额很容易确定下来。但是实际上，商品的成本价是确定的，因此可以很容易地确定商品的销售毛利：（商品实际销售价格－商品成本价） 销售数量，基于下游使用便利这一因素，也应该将此放人事务事实表中。")]),_._v(" "),t("p",[_._v("基于毛利润也可以计算出毛利率，那么毛利率这种比例应该放入事务事实表吗？在事实表的设计中，一个常见的原则是只存放比例的分子和分母，因此比例的计算是和业务强，业务逻辑可能非常的复杂，所以一般不加入事实表中。")]),_._v(" "),t("p",[_._v("至此，我们也完成了超市零售事务的事实表和维度表的设计，超市零售事务事实表以及相关的维度表如图所示：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210912040711.png",alt:""}})]),_._v(" "),t("h4",{attrs:{id:"_4-2-2-快照事实表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-快照事实表"}},[_._v("#")]),_._v(" 4.2.2 快照事实表")]),_._v(" "),t("p",[_._v("在实际的业务活动中，除了关心单次的业务事件和行为外，很多时候还关心业务的状态（当前状态、历史状态）。以超市零售业务为例，管理人员和分析人员除了关心销售情况，还会关心商品的库存情况，例如哪些商品的库存情况，例如哪些商品库存告罄需要补货、哪些积压需要促销，而这正是 **快照事实表（也叫周期快照事实表）**所要解决发范畴。")]),_._v(" "),t("p",[_._v("所谓周期快照事实表，是指间隔一定的周期对业务的状态进行一次拍照并记录下来的事实表。最常见的例子是销售库存、银行账户余额等。")]),_._v(" "),t("p",[_._v("与事务事实表的稀疏性不同（这里的稀疏性是相对的），周期快照事实表通常被认为是稠密的。因此事务事实表只有事务发生才会记录，但是周期快照则必须捕获当前每个实体的状态。")]),_._v(" "),t("p",[_._v("比如，某个商品如果某天没有销售，那么这个商品不会存在于当天的事务事实表中的，但是为了记录其库存情况，即使没有销售行为，也必须再周期快照事实表中对其进行拍照。")]),_._v(" "),t("p",[_._v("周期快照事实表的周期通常需要和业务方共同确定，最常见的周期是天、周和月等。")]),_._v(" "),t("p",[_._v("周期快照事实表中的事实一般是半可加的，如某个商品的库存可以跨商品、仓库等相加，但是明显在时间上相加是没有意义的。")]),_._v(" "),t("p",[_._v("下面就以超市的库存业务为例来介绍周期快照事实表的设计过程。")]),_._v(" "),t("p",[t("strong",[_._v("（1）选择业务过程")])]),_._v(" "),t("p",[_._v("本例是为了更好地理解超市的库存情况，因此业务过程就是商品的库存情况，即在什么时候、什么商品、哪个仓库的库存量如何。")]),_._v(" "),t("p",[t("strong",[_._v("（2）定义粒度")])]),_._v(" "),t("p",[_._v("这里的粒度主要指库存的周期，商品的粒度很容易确定（注意这里是 SKU 级别）。选择库存的周期需要考虑到数据量膨胀情况。")]),_._v(" "),t("p",[_._v("考虑如下例子，某个超市有 万个商品（即SKU）， 其有 100 家连锁店，那么每天对其库存拍照将有 100"),t("em",[_._v("10000=100 万行记录，那么一年将有 365")]),_._v("1000000=3.65亿条记录。当然随着目前存储的日益廉价，这些都不是问题，但是设计人员需要考虑到这些因素。")]),_._v(" "),t("p",[t("strong",[_._v("（3）确认维度")])]),_._v(" "),t("p",[_._v("对于超市零售库存，相应的维度为周期（天 周、月等） 商品、仓库（总仓、分仓或者门店等）。")]),_._v(" "),t("p",[t("strong",[_._v("（4）确定事实")])]),_._v(" "),t("p",[_._v("这里的事实很容易确定，即库存量。但是仅仅记录现存库存是不够充分的，因为业务上通常会和其他事实协同来度量库存的变化趋势、快慢等，所以还可对周期快照事实表的事实进行增强 。")]),_._v(" "),t("p",[_._v("基于上述设计的周期快照事实表及相关维度如图所示：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210912040651.png",alt:""}})]),_._v(" "),t("h4",{attrs:{id:"_4-2-3-累计快照事实表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-累计快照事实表"}},[_._v("#")]),_._v(" 4.2.3 累计快照事实表")]),_._v(" "),t("p",[_._v("事实表的第三种类型是累计快照事实表，相比前两者，累计快照事实表没那么常见，但是对于某些业务场景来说非常有价值。")]),_._v(" "),t("p",[t("strong",[_._v("累计快照事实表非常适用于具有工作流或者流水线形式业务的分****析")]),_._v("，这些业务通常涉及多个时间节点或者有主要的里程碑事件，而累计快照事实表正是从全流程角度对其业务状态的拍照。")]),_._v(" "),t("p",[_._v("考虑车险理赔业务，一次车险的理赔通常包括客户报案、保险公司立案、客户提交理赔材料、理赔审批通过和付款等关键步骤，而累积快照事实表正是从全流程角度对每个车险理赔单的拍照，拍照内容即是其关键步骤的各个状态，便于业务人员一目了然地分析各个理赔单的状态、步骤间的耗时等。")]),_._v(" "),t("p",[_._v("下面以车险理赔业务为例来介绍累计周期快照事实表。")]),_._v(" "),t("p",[t("strong",[_._v("（1）选择业务过程")])]),_._v(" "),t("p",[_._v("本例是为了更好地理解保险公司的车险理赔业务，因此业务过程就是车险理赔，即在什么时候、 哪个理赔申请所处的状态如何。")]),_._v(" "),t("p",[t("strong",[_._v("（2）定义粒度")])]),_._v(" "),t("p",[_._v("累计周期快照事实表的粒度一般很容易确定，就是业务的某个实体，这里即为保险理赔申请。")]),_._v(" "),t("p",[t("strong",[_._v("（3）确定维度")])]),_._v(" "),t("p",[_._v("对于累计周期快照事实表，相关的维度包含快照周期（天、周、月 和年等）、理赔申请人、受理 、审核人、网点 电话或者实体）等。")]),_._v(" "),t("p",[t("strong",[_._v("（4）确定事实")])]),_._v(" "),t("p",[_._v("这里的事实包括索赔金额、审批金额、打款金额、处理时长等。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210912040629.png",alt:""}})]),_._v(" "),t("h2",{attrs:{id:"_5-数仓分层设计-命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-数仓分层设计-命名规范"}},[_._v("#")]),_._v(" 5. 数仓分层设计&命名规范")]),_._v(" "),t("h3",{attrs:{id:"_5-1-数仓分层目的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-数仓分层目的"}},[_._v("#")]),_._v(" 5.1 数仓分层目的")]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[_._v("清晰数据结构")])]),_._v(" "),t("p",[_._v("每一个数据分层都有它的作用域和职责，在使用表的时候能更方便地定位和理解")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("减少重复开发")])]),_._v(" "),t("p",[_._v("规范数据分层，开发一些通用的中间层数据，能够减少极大的重复计算")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("统一数据口径")])]),_._v(" "),t("p",[_._v("通过数据分层，提供统一的数据出口，统一对外输出的数据口径")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("复杂问题简单化")])]),_._v(" "),t("p",[_._v("将一个复杂的任务分解成多个步骤来完成，每一层解决特定的问题")])])]),_._v(" "),t("h3",{attrs:{id:"_5-2-数仓命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-数仓命名规范"}},[_._v("#")]),_._v(" 5.2 数仓命名规范")]),_._v(" "),t("p",[_._v("这里分为"),t("strong",[_._v("表命名规范")]),_._v("、"),t("strong",[_._v("字段命名规范")]),_._v("、"),t("strong",[_._v("指标命名规范")]),_._v("、"),t("strong",[_._v("作业命名规范")])]),_._v(" "),t("h4",{attrs:{id:"_5-2-1-表命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-1-表命名规范"}},[_._v("#")]),_._v(" 5.2.1 表命名规范")]),_._v(" "),t("p",[_._v("不同分层的表命名规范不一样（以下命名规范包括了库名），abc为补充的三个参数，具体见后面")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("ODS层")]),_._v(" "),t("p",[_._v("即贴源层，由业务方直接导入，不会经过数据清洗转化。操作数据层定位于业务明细数据保留区，负责保留数据接入时点后历史变更数据，数据原则上全量保留。")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("项目名_ods.ods_系统名称(默认为空)_源表名_abc\n")])])])]),_._v(" "),t("li",[t("p",[_._v("DW层")]),_._v(" "),t("p",[_._v("由ODS层数据经过清洗转化而成。这一层整合后的业务过程明细数据，负责各业务场景整合、数据结构化、规范化，常用公共维度冗余加工，以及明细业务标签信息加工。另外，在该层也会做一部分的数据聚合，将相同主题的数据汇集到一张表中，提高数据的可用性。")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("dim层（维表）")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("项目名_dw.dim_项目名_业务描述_abc\n")])])])]),_._v(" "),t("li",[t("p",[_._v("dwv（业务明细）")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("项目名_dw.dwv_项目名_一级主题域_二级主题域_业务描述_abc\n")])])])]),_._v(" "),t("li",[t("p",[_._v("dwm（周期汇总）")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("项目名_dw.dws_项目名_数据粒度_业务描述_统计范围cycle[N]_abc\n")])])]),t("p",[_._v("例如：")]),_._v(" "),t("p",[t("code",[_._v("pm_dw.dwm_pm_store_activity_byr_currcy_order_cycle7_sdt")]),_._v("说明：pm是项目名，其数据粒度为店铺（store）+活动（activity）+买家（byr）+币种（currcy）;业务描述为下单（order）；统计的时间范围为近7天。")])]),_._v(" "),t("li",[t("p",[_._v("dws层（数据汇总服务）")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("项目名_dw.dws_项目名_数据粒度_业务描述_abc\n")])])])])])]),_._v(" "),t("li",[t("p",[_._v("DM层")]),_._v(" "),t("p",[_._v("主要用于各产品或各业务向个性化的数据加工，一般报表/产品数据存放在这层")]),_._v(" "),t("p",[_._v("dm_产品|应用_数据粒度_业务描述_abc；")]),_._v(" "),t("p",[t("code",[_._v("pm_dm.dm_sl_store_event_sdt")]),_._v("其产品名称为sl、数据粒度为店铺、业务描述为店铺的顾客行为相关指标数据。")])])]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("abc 说明")])]),_._v(" "),t("p",[_._v("a：表示数据粒度类别: "),t("strong",[_._v("f")]),_._v(" 表示明细数据，"),t("strong",[_._v("s")]),_._v("表示汇总数据。")]),_._v(" "),t("p",[_._v("b：表示数据更新周期: "),t("strong",[_._v("d")]),_._v("表示天(t+1)产出; "),t("strong",[_._v("h")]),_._v("表示小时产出; "),t("strong",[_._v("mi")]),_._v("表示分钟产出; "),t("strong",[_._v("c")]),_._v("表示全量产出; "),t("strong",[_._v("w")]),_._v("表示周产出; "),t("strong",[_._v("m")]),_._v("表示月产出，"),t("strong",[_._v("y")]),_._v("表示月产出。")]),_._v(" "),t("p",[_._v("c：表示数据存储形态: "),t("strong",[_._v("t")]),_._v("表示表; "),t("strong",[_._v("v")]),_._v("表示视图。")]),_._v(" "),t("p",[_._v("abc会有多种不同的组合，比如 fct 表示dw层的全量表，fdt 表示dw层的增量表(天表)")])]),_._v(" "),t("h4",{attrs:{id:"_5-2-2-作业命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-2-作业命名规范"}},[_._v("#")]),_._v(" 5.2.2 作业命名规范")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("数据采集作业（后缀import）")]),_._v(" "),t("p",[_._v("一般是采集变成ods层数据")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("项目名_ods.ods_系统名称_源表名_abc_import \n")])])]),t("p",[_._v("如：pm_ods.ods_pm_orders_fct_import")])]),_._v(" "),t("li",[t("p",[_._v("数据导出作业（后缀export）")]),_._v(" "),t("p",[_._v("同采集作业，但后缀改成export")]),_._v(" "),t("p",[_._v("pm_store_method_h_export")])]),_._v(" "),t("li",[t("p",[_._v("数据查询作业")]),_._v(" "),t("p",[_._v("与产出目标表同名")])])]),_._v(" "),t("h4",{attrs:{id:"_5-2-3-字段命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-3-字段命名规范"}},[_._v("#")]),_._v(" 5.2.3 字段命名规范")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("度量词汇")]),_._v(" "),t("blockquote",[t("p",[_._v("次数：cnt")]),_._v(" "),t("p",[_._v("金额：amt")]),_._v(" "),t("p",[_._v("时长：dr")]),_._v(" "),t("p",[_._v("比例：rate")]),_._v(" "),t("p",[_._v("百分比：pct")]),_._v(" "),t("p",[_._v("环比：p2p")])])]),_._v(" "),t("li",[t("p",[_._v("统计词汇")]),_._v(" "),t("blockquote",[t("p",[_._v("订单金额：order_amt")]),_._v(" "),t("p",[_._v("商品数：prod_cnt")]),_._v(" "),t("p",[_._v("用户数：uid_cnt")]),_._v(" "),t("p",[_._v("订单数：order_cnt")]),_._v(" "),t("p",[_._v("曝光次数：pv")]),_._v(" "),t("p",[_._v("点击次数：click_cnt")]),_._v(" "),t("p",[_._v("买家数：byr_cnt")]),_._v(" "),t("p",[_._v("卖家数：sel_cnt")]),_._v(" "),t("p",[_._v("店铺数：store_cnt")])])]),_._v(" "),t("li",[t("p",[_._v("约定名词词汇")]),_._v(" "),t("blockquote",[t("p",[_._v("gmv：成交金额")]),_._v(" "),t("p",[_._v("cmv：取消金额")]),_._v(" "),t("p",[_._v("pmv：营业额")]),_._v(" "),t("p",[_._v("cancel：取消")]),_._v(" "),t("p",[_._v("consumer：顾客（有消费记录）")]),_._v(" "),t("p",[_._v("user：用户")]),_._v(" "),t("p",[_._v("member：会员")]),_._v(" "),t("p",[_._v("coins：购物金")]),_._v(" "),t("p",[_._v("sent：发送")]),_._v(" "),t("p",[_._v("used：使用")]),_._v(" "),t("p",[_._v("unuse：待使用/未使用（不含已过期）")]),_._v(" "),t("p",[_._v("source：来源")]),_._v(" "),t("p",[_._v("promotion：优惠")])])]),_._v(" "),t("li",[t("p",[_._v("日期修饰词汇")]),_._v(" "),t("blockquote",[t("p",[_._v("日：d")]),_._v(" "),t("p",[_._v("小时：h")]),_._v(" "),t("p",[_._v("分钟：mi")]),_._v(" "),t("p",[_._v("周：w")]),_._v(" "),t("p",[_._v("月：m")]),_._v(" "),t("p",[_._v("季度：q")]),_._v(" "),t("p",[_._v("年：y")]),_._v(" "),t("p",[_._v("七日：7d")])])]),_._v(" "),t("li",[t("p",[_._v("聚合词汇")]),_._v(" "),t("blockquote",[t("p",[_._v("total：历史累计")]),_._v(" "),t("p",[_._v("avg：平均")]),_._v(" "),t("p",[_._v("std：截止到当前统计日期")])])]),_._v(" "),t("li",[t("p",[_._v("业务场景词汇")]),_._v(" "),t("blockquote",[t("p",[_._v("order：下单")]),_._v(" "),t("p",[_._v("pay：支付")]),_._v(" "),t("p",[_._v("refund：退款")]),_._v(" "),t("p",[_._v("return_goods：退货")]),_._v(" "),t("p",[_._v("subs：订阅")]),_._v(" "),t("p",[_._v("reg：注册")]),_._v(" "),t("p",[_._v("login：登录")]),_._v(" "),t("p",[_._v("visit：访问")]),_._v(" "),t("p",[_._v("add_chart：购物车")]),_._v(" "),t("p",[_._v("site：站点")])])])]),_._v(" "),t("h4",{attrs:{id:"_5-2-4-指标命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-4-指标命名规范"}},[_._v("#")]),_._v(" 5.2.4 指标命名规范")]),_._v(" "),t("p",[_._v("1、指标统一：数据指标的内容及对应的命名、属性需要保持唯一性，无歧义。")]),_._v(" "),t("p",[_._v("2、指标统一目前只针对单一业务，暂不考虑跨业务间场景")]),_._v(" "),t("p",[_._v("3、指标统一命名：修饰语（业务场景限定条件）+对象+方法+时间范围 如cancel_order_cnt_1d")]),_._v(" "),t("p",[_._v("修饰语（业务场景限定条件）：cancel 取消；")]),_._v(" "),t("p",[_._v("统计对象：order 订单；")]),_._v(" "),t("p",[_._v("统计方法：cnt 记数，对订单进行去重统计；")]),_._v(" "),t("p",[_._v("统计周期：1d近一天的。")]),_._v(" "),t("p",[_._v("4、原子、派生指标之间的定义和关系")]),_._v(" "),t("p",[_._v("​    原子指标：基于某一业务事件行为下的度量，是业务定义中不可再拆分的指标，具有明确业务含义的名词 ，如支付金额。")]),_._v(" "),t("p",[_._v("​    派生指标: 由原子指标＋多个修饰词（可选）＋时间周期。可以理解为对原子指标业务统计范围的圈定。如原子指标：支付金额，最近一天海外买家支付金额则为派生指标（最近一天为时间周期，海外为修饰词 买家作为维度，而不作为修饰词）")]),_._v(" "),t("h3",{attrs:{id:"_5-3-指标分级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-指标分级"}},[_._v("#")]),_._v(" 5.3 指标分级")]),_._v(" "),t("p",[_._v("指标一共分为三级：A B C")]),_._v(" "),t("blockquote",[t("p",[_._v("1、产品中展示给用户的指标：")]),_._v(" "),t("p",[_._v("业务过程指标，如订单数、GMV等          A级")]),_._v(" "),t("p",[_._v("行为数据指标，如PV UV 加入购物车等       B级")])]),_._v(" "),t("blockquote",[t("p",[_._v("2、财务指标(BI)")]),_._v(" "),t("p",[_._v("如营收、净利润等                       A级")])]),_._v(" "),t("blockquote",[t("p",[_._v("3、决策指标(BI)")]),_._v(" "),t("p",[_._v("影响公司管理者做决策相关的指标           A级")])]),_._v(" "),t("blockquote",[t("p",[_._v("4、其它指标")]),_._v(" "),t("p",[_._v("C级")])]),_._v(" "),t("h3",{attrs:{id:"_5-4-表的生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-表的生命周期"}},[_._v("#")]),_._v(" 5.4 表的生命周期")]),_._v(" "),t("blockquote",[t("p",[_._v("ods层表")]),_._v(" "),t("p",[_._v("增量(fdt)：数据永久保存")]),_._v(" "),t("p",[_._v("全量(fct)：数据保存30天")]),_._v(" "),t("p",[_._v("小时(fht)：数据保存90天")]),_._v(" "),t("p",[_._v("dw层表")]),_._v(" "),t("p",[_._v("增量(fdt)：数据保存3年")]),_._v(" "),t("p",[_._v("全量(fct)：数据保存30天")]),_._v(" "),t("p",[_._v("小时(fht)：数据保存90天")]),_._v(" "),t("p",[_._v("dm层表")]),_._v(" "),t("p",[_._v("数据永久保存")])]),_._v(" "),t("h2",{attrs:{id:"_6-主题域划分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-主题域划分"}},[_._v("#")]),_._v(" 6. 主题域划分")]),_._v(" "),t("p",[_._v("因为数据仓库是面向主题的，所以主题域的划分显得很重要，因为主题域的确定也意味着数据的目的是干什么的。有关于主题划分的文章较少，阿里大数据之路这本书也没有单独的章节来讲主题域的划分，因为这个是需要对业务场景来说的，而且就算确定的业务场景也没有说百分百该如何划分，我还见过一群在互联网大数据领域有着多年工作经验的数仓专家们讨论某个表该划分到哪个主题域。所以，以下内容仅代表我在数仓主题域的一些拙见。")]),_._v(" "),t("p",[t("strong",[_._v("什么是数据仓库主题域？")])]),_._v(" "),t("p",[_._v("主题域通常是联系较为紧密的数据主题的集合。可以根据业务的关注点，将这些数据主题划分到不同的主题域。主题域的确定必须由最终用户和数据仓库的设计人员共同完成。")]),_._v(" "),t("h3",{attrs:{id:"_6-1-划分主题域方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-划分主题域方法"}},[_._v("#")]),_._v(" 6.1 划分主题域方法")]),_._v(" "),t("h4",{attrs:{id:"_6-1-1-传统方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-传统方法"}},[_._v("#")]),_._v(" 6.1.1 传统方法")]),_._v(" "),t("p",[_._v("在业务调研之后，可以进行主题域的划分。划分主题域，需要分析各个业务模块中有哪些业务活动。通常我们按照以下方法划分主题域，可以按照用户企业的部门划分，也可以按照业务过程或者业务板块中的功能模块划分。")]),_._v(" "),t("ul",[t("li",[_._v("按照系统划分：业务系统有几种，就划分为几类")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210801204402.png",alt:""}})]),_._v(" "),t("ul",[t("li",[_._v("按业务划分：比如业务系统中有商品、交易、物流等过程，那这里的每一个过程就划分到一个主体域里。相对来说按业务划分主题域较常用。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210801215033.png",alt:""}})]),_._v(" "),t("ul",[t("li",[_._v("按部门规划：比如公司内的生产、供应链、研发、销售等")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210801204847.png",alt:""}})]),_._v(" "),t("h4",{attrs:{id:"_6-1-2-目前常用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-目前常用方法"}},[_._v("#")]),_._v(" 6.1.2 目前常用方法")]),_._v(" "),t("p",[_._v("目前较多大型互联网公司都有建设数据中台，这种模式下较多按业务划分。这种除了具有一级主题域以外，每个一级主题域还有二级主题域。具体架构图如下：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210801214947.png",alt:""}})]),_._v(" "),t("p",[_._v("具体表现例子：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210801215726.png",alt:""}})]),_._v(" "),t("p",[_._v("当然，在实际的业务中每个一级域下的二级域也不会就这么两三个。")]),_._v(" "),t("h3",{attrs:{id:"_6-2-主题域的核心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-主题域的核心"}},[_._v("#")]),_._v(" 6.2 主题域的核心")]),_._v(" "),t("p",[_._v("为保障整个体系的生命力，主题域需要抽象提炼，并长期维护更新，但不轻易变动。划分数据域时，需满足以下两点：")]),_._v(" "),t("ul",[t("li",[_._v("能涵盖当前所有的业务需求。")]),_._v(" "),t("li",[_._v("能在新业务进入时，无影响地被包含进已有的主题域中和扩展新的主题域。")])]),_._v(" "),t("h3",{attrs:{id:"_6-3-注意点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-注意点"}},[_._v("#")]),_._v(" 6.3 注意点")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("一次能划分好主题域吗")]),_._v(" "),t("p",[_._v("首先，主题域是无法一次划分完整的，一般是一次先建立几个明确的主题，在大多数数据仓库的设计过程中都有一个主题域的选择过程。业务是一直发展的，因此设计之初不要想着一次把所有主题全部划分完整。我们可以遵循上面说的划分主题域的两个要点，后续采用迭代的方式补充。")])]),_._v(" "),t("li",[t("p",[_._v("划分为几个主题域合适")]),_._v(" "),t("p",[_._v("主题域的个数由业务复杂度决定，但建议一级主题域在10个以内。")])]),_._v(" "),t("li",[t("p",[_._v("感觉可以划分到多个主题域？")]),_._v(" "),t("p",[_._v("表只能属于一个一级主题域，在一些比较模糊中的报表中，例如如果有一级数据域：商品域、订阅域，那商品中的订阅该划分到商品域还是订阅域？")]),_._v(" "),t("p",[_._v("这种比较容易让人接受的是以"),t("strong",[_._v("数据内容")]),_._v("来划分域。不同的人有不同的看法，但是数据团队一定要制定统一的规范。")])])]),_._v(" "),t("h2",{attrs:{id:"_7-数据开发规范及流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-数据开发规范及流程"}},[_._v("#")]),_._v(" 7. 数据开发规范及流程")]),_._v(" "),t("ol",[t("li",[_._v("业务理解与数据调研")]),_._v(" "),t("li",[_._v("数据域划分，构建总线矩阵，明确统计指标")]),_._v(" "),t("li",[_._v("分层架构 ，规范定义（命名规范、开发规范、流程规范）")]),_._v(" "),t("li",[_._v("模型设计（"),t("strong",[_._v("维度建模")]),_._v("）宽表 粒度 指标体系")]),_._v(" "),t("li",[_._v("代码开发（任务调度 数据质量 元数据管理 血缘关系 数据治理）")]),_._v(" "),t("li",[_._v("应用（BI可视化 OLAP多维分析 用户画像 推荐系统 ）")])]),_._v(" "),t("h2",{attrs:{id:"_8-数据治理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-数据治理"}},[_._v("#")]),_._v(" 8. 数据治理")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210911041853.png",alt:"数据治理轮盘"}})]),_._v(" "),t("h3",{attrs:{id:"_8-1元数据管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-1元数据管理"}},[_._v("#")]),_._v(" 8.1元数据管理")]),_._v(" "),t("h4",{attrs:{id:"_8-1-1-元数据管理平台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-1-元数据管理平台"}},[_._v("#")]),_._v(" 8.1.1 元数据管理平台")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20210911040333.png",alt:"元数据管理平台"}})]),_._v(" "),t("h4",{attrs:{id:"_8-1-2-指标确定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-2-指标确定"}},[_._v("#")]),_._v(" 8.1.2 指标确定")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("原子指标")])]),_._v(" "),t("li",[t("p",[_._v("基础指标")])]),_._v(" "),t("li",[t("p",[_._v("衍生指标")])])]),_._v(" "),t("h2",{attrs:{id:"_8-2-血缘关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-血缘关系"}},[_._v("#")]),_._v(" 8.2 血缘关系")]),_._v(" "),t("p",[_._v("自建血缘管理工具，记录血缘关系。")]),_._v(" "),t("p",[_._v("数据血缘的获取主要有程序解析与人工采集两种方式。")]),_._v(" "),t("p",[t("strong",[_._v("1.程序解析")])]),_._v(" "),t("p",[_._v("程序解析主要是面向存储过程，sql，视图以及已有的ETL过程。")]),_._v(" "),t("p",[_._v("以一个数据加工的完整流程为例，每个数据加工的流程都通过一个唯一的标识进行标记，流程中的每一个环节都记录其前后依赖关系，程序将灭一个环节的逻辑解析以后根据依赖关系和流程便可以生成全流程的数据血缘。")]),_._v(" "),t("p",[t("strong",[_._v("2.人工采集")])]),_._v(" "),t("p",[_._v("人工采集可以是程序解析的一种辅助，也可以单独以这种方式发挥作用。")]),_._v(" "),t("p",[_._v("与程序解析不同的是，人工采集的结果可以更准确与详实，即使是在程序解析可以实现极高的准确率的情况下也需要以人工的方式进行一次审核是比较合理的做法。")]),_._v(" "),t("h3",{attrs:{id:"_8-3-数仓难题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-数仓难题"}},[_._v("#")]),_._v(" 8.3 数仓难题")]),_._v(" "),t("h4",{attrs:{id:"_8-3-1-数据跨层-跨域问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-1-数据跨层-跨域问题"}},[_._v("#")]),_._v(" 8.3.1 数据跨层&跨域问题")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("跨层性能优先还是近距离？")]),_._v(" "),t("p",[_._v("如果非要跨层，dws从dwm（近）还是ods（性能好）取数？")]),_._v(" "),t("p",[_._v("（从dwm取，因为性能怎样由多种情况决定，此外跨层少血缘清晰）")])]),_._v(" "),t("li",[t("p",[_._v("跨域")]),_._v(" "),t("p",[_._v("若只是少量跨域，则把表放在dwd（dwv）层")]),_._v(" "),t("p",[_._v("大量的情况则需要起一个新的主题域")])])])])}),[],!1,null,null,null);v.default=s.exports}}]);