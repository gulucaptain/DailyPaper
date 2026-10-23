---
title: "Math 每日速递 · 2026-10-24"
date: "2026-10-24T05:36:47+08:00"
description: "精选3篇：符号漂移的分数噪声正则化、路径依赖粗糙方程的完整二阶范围，以及时空 Hawkes 过程的三种密度极限。"
categories: ["Math"]
tags: ["math.PR", "非马尔可夫过程", "分支过程", "粗糙路径", "Hawkes过程"]
draft: false
showToc: true
tocopen: true
---

本期精选3篇，围绕**带记忆动力学的解与极限**展开：长程相关噪声能否使不连续漂移的方程只有一条解？依赖整段历史的粗糙方程，能允许多不规则的驱动？当事件不断繁殖，初始历史的密度又如何决定宏观随机性是否保留？三篇分别从路径唯一性、存在性和分支族簇的尺度极限回答这些问题；下文核对原文主要定理，并保留各自成立所需的条件。

## 今日论文

### Strong uniqueness for fractional stochastic differential equations with sign drift

{{< paper-meta
  authors="Ercan Sönmez、Yuliya Mishura"
  source="arXiv 预印本"
  date="2026-10-22 · v1"
  arxiv="2610.30889"
  fulltext="https://arxiv.org/html/2610.30889v1"
  fulltextLabel="全文 v1"
  directions="非马尔可夫过程"
>}}

**研究问题与背景：** 符号漂移会把状态推离零点，对应的确定性方程可以有多个解。加入分数布朗运动后，已有强存在性仍不能代替路径唯一性。本文关注的难点是 Hurst 参数 {{< math >}}H\in(1/2,1){{< /math >}}：噪声具有长程相关性，轨道也比布朗运动更规则，常用漂移正则性条件不能直接涵盖符号函数。

**核心模型与数学设定：** 研究一维加性噪声方程

{{< math display="true" >}}
X_t=x+B_t^K+\int_0^t\operatorname{sign}(X_s)\,ds,
\qquad \operatorname{sign}(0)=0.
{{< /math >}}

这里 {{< math >}}x\in\mathbb R{{< /math >}}，{{< math >}}B_t^K=\int_0^t K(t,s)\,dW_s{{< /math >}} 是具有连续样本路径的高斯 Volterra 过程，核平方可积。定理要求存在 {{< math >}}H\in(0,1){{< /math >}} 和 {{< math >}}c>0{{< /math >}}，满足局部非确定性下界

{{< math display="true" >}}
\int_{t-\varepsilon}^t K(t,s)^2\,ds\ge c\varepsilon^{2H},
\qquad 0<\varepsilon<t\le T,
{{< /math >}}

并且对 {{< math >}}0<s\le t\le T{{< /math >}}，几乎处处有 {{< math >}}K(t,r)K(s,r)\ge0{{< /math >}}（{{< math >}}r\in(0,s){{< /math >}}）。核非负是后一条件的充分情形。

**主要定理或理论结果：** **定理1**证明：在以上条件下，同一噪声、同一初值驱动的任意两个连续解，几乎必然在整个有限时间区间上一致。**推论2**将此与已有强存在性结果结合，得到强适定性。标准分数布朗运动的 Volterra 核满足这些要求；本文重点推进的是 {{< math >}}H>1/2{{< /math >}} 的符号漂移情形，并非宣称任意不连续漂移都已解决。

**方法与证明思路：** 把漂移积分记为 {{< math >}}A_t{{< /math >}}，方程转为关于它的单调不动点问题。从上下界 {{< math >}}-t\le A_t\le t{{< /math >}} 出发迭代，所有可能的解都夹在两条极端迭代之间。两者的差只能在中点过程靠近零时继续增长；高斯创新分解与小球概率估计控制这段占用时间，再用尾估计反复缩小不确定区间。原文引理4–7给出这一概率控制，最终证明区间坍缩。

**与研究主线的关联：** 这是非马尔可夫噪声下的路径唯一性问题。核的时间相关结构直接参与证明；结论针对固定初值的解，并未进一步建立微分同胚随机流。

**值得进一步研究的问题：** **本期提出：** 符号函数的单调性和核的正性分别在哪一步不可替代？将漂移换成有多个跳点的单调函数，或允许核改变符号时，极端迭代与小球估计还能保留多少？这些推广不属于本文已证明的结论。

---

### Path-dependent rough differential equations in the full step-two range

{{< paper-meta
  authors="Xing Gao、Nannan Li"
  source="arXiv 预印本"
  date="2026-10-22 · v1"
  arxiv="2610.30931"
  fulltext="https://arxiv.org/html/2610.30931v1"
  fulltextLabel="全文 v1"
  directions="非马尔可夫过程"
>}}

**研究问题与背景：** 当系数读取整段过去轨道时，经典粗糙方程的复合估计不能直接照搬。Ananova 的既有结果在相应 Dupire 正则性假设下给出存在性，但仅覆盖 {{< math >}}2\le p<1+\sqrt2{{< /math >}}。本文提出：这一上界来自估计损失，能否在不加强系数条件的前提下去掉？

**核心模型与数学设定：** 令 {{< math >}}\mathbf X=(X,\mathbb X){{< /math >}} 为连续二阶粗糙路径，{{< math >}}2\le p<3{{< /math >}}，第一、二层分别具有有限 {{< math >}}p{{< /math >}}、{{< math >}}p/2{{< /math >}} 变差。未知轨道取值于 {{< math >}}\mathbb R^k{{< /math >}}，给定初始历史 {{< math >}}\xi{{< /math >}}，满足

{{< math display="true" >}}
\begin{gathered}
Y_t=\xi_{t_0}+\int_{t_0}^t b(s,Y_s)\,ds\\
\quad+\int_{t_0}^t\sigma(s,Y_s)\,d\mathbf X_s.
\end{gathered}
{{< /math >}}

这里 {{< math >}}Y_s{{< /math >}} 表示截至时刻 {{< math >}}s{{< /math >}} 的停止路径，而不是单独的当前位置。原文假设5.2要求 {{< math >}}b{{< /math >}} 关于停止路径度量 {{< math >}}d_\infty{{< /math >}} 全局 Lipschitz；假设5.3引用假设3.2：{{< math >}}\sigma\in C_b^{1,2}{{< /math >}}、{{< math >}}\nabla\sigma\in C_b^{1,1}{{< /math >}}，且 {{< math >}}\sigma,D\sigma,\nabla\sigma,D\nabla\sigma,\nabla^2\sigma{{< /math >}} 均关于该度量全局 Lipschitz。{{< math >}}D{{< /math >}} 与 {{< math >}}\nabla{{< /math >}} 分别是 Dupire 水平与垂直导数。

**主要定理或理论结果：** **定理5.7**在上述条件下，对每段有限 {{< math >}}p{{< /math >}} 变差的连续初始历史，建立整个 {{< math >}}[t_0,T]{{< /math >}} 上的受控粗糙路径解，覆盖完整的 {{< math >}}2\le p<3{{< /math >}}。关键的**定理3.6**与第4节复合结果，将功能型 Taylor 余项的变差控制改进至标准二阶尺度。这里建立的是**存在性**，不能据此再推导路径唯一性或解流的可微性。

**方法与证明思路：** 保持过去历史固定，只近似未来轨道，通过因果 Taylor 展开与分段线性近似控制余项。原有余项指数为 {{< math >}}q_p=p^2/(p+1){{< /math >}}，缝合条件 {{< math >}}1/p+1/q_p>1{{< /math >}} 导致旧上界；改进到 {{< math >}}q=p/2{{< /math >}} 后，条件成为 {{< math >}}3/p>1{{< /math >}}。随后利用受控路径空间中的紧性、复合连续性与 Schauder 不动点定理，先构造局部解，再延拓至给定时间区间。

**与研究主线的关联：** 记忆位于系数中，驱动则可以来自具有适当粗糙路径提升的随机过程。本文提供处理历史依赖随机动力学的路径分析工具，但主要定理本身并不要求驱动随机，也不直接给出长期统计性质。

**值得进一步研究的问题：** **本期提出：** 在相同的 Dupire 框架中，若进一步要求唯一性与对初始历史的稳定依赖，需要补充什么条件？这一问题可帮助区分“已有一个解”和“可建立稳定演化映射”之间的差距。

---

### Hydrodynamic and Stochastic Limits of Space-Time Hawkes Processes

{{< paper-meta
  authors="Fuqing Gao、Yingli Wang、Lingjiong Zhu"
  source="arXiv 预印本"
  date="2026-10-22 · v1"
  arxiv="2610.31604"
  fulltext="https://arxiv.org/html/2610.31604v1"
  fulltextLabel="全文 v1"
  directions="分支过程、非马尔可夫过程"
>}}

**研究问题与背景：** Hawkes 事件通过自激机制产生后代，因此既有分支族谱，也有延迟造成的历史依赖。本文考察临界及近临界时空模型：同样处于临界繁殖，为什么有时只看见确定性热流，有时保留超过程随机性，有时局部趋零却仍有非零均值？以下重点核对第3节的有限均值延迟情形。

**核心模型与数学设定：** 空间维数 {{< math >}}d\ge1{{< /math >}}。非负后代核 {{< math >}}h(s,z){{< /math >}} 的总质量为1，空间位移均值为零；繁殖延迟均值 {{< math >}}m_1\in(0,\infty){{< /math >}}，位移协方差 {{< math >}}\Sigma{{< /math >}} 有限且正定。不要求延迟与位移独立，也不要求二阶时间矩。初始负时间事件是给定的 Poisson 场，其强度为

{{< math display="true" >}}
\varepsilon^{-(\alpha+1-d)}\lambda_0(\varepsilon y)\,ds\,dy,
\qquad \alpha>0,
{{< /math >}}

其中 {{< math >}}\lambda_0{{< /math >}} 非负、有界且一致连续。正时间事件由这些历史事件的直接后代及后续族簇产生。用宏观时间 {{< math >}}\varepsilon^2t{{< /math >}}、空间 {{< math >}}\varepsilon x{{< /math >}} 观察事件，并对计数乘以 {{< math >}}\varepsilon^{3+\alpha}{{< /math >}}，得到重标度时空事件测度 {{< math >}}\mathcal N_\varepsilon{{< /math >}}。{{< math >}}\alpha{{< /math >}} 调节历史密度，**不是繁殖率**；各情形的平均后代数仍为1。

**主要定理或理论结果：** 对局部有限时空测度使用 vague 拓扑：

- **定理3.2：** {{< math >}}\alpha>1{{< /math >}} 时，{{< math >}}\mathcal N_\varepsilon{{< /math >}} 依概率趋于确定性的 {{< math >}}\rho(t,x)\,dt\,dx{{< /math >}}；{{< math >}}\rho{{< /math >}} 是初值为 {{< math >}}\lambda_0{{< /math >}}、扩散矩阵为 {{< math >}}\Sigma/(2m_1){{< /math >}} 的热流。
- **定理3.4：** {{< math >}}\alpha=1{{< /math >}} 时，依分布趋于 {{< math >}}m_1^{-1}X_t(dx)\,dt{{< /math >}}。这里 {{< math >}}X{{< /math >}} 是 Dawson–Watanabe 超过程，初始测度为 {{< math >}}m_1\lambda_0(x)\,dx{{< /math >}}，空间生成元为 {{< math >}}(2m_1)^{-1}\Sigma:D_x^2{{< /math >}}，其测试函数鞅的二次变差为 {{< math >}}m_1^{-1}\int_0^t\langle X_s,\psi^2\rangle\,ds{{< /math >}}。
- **定理3.6：** {{< math >}}0<\alpha<1{{< /math >}} 时，{{< math >}}\mathcal N_\varepsilon{{< /math >}} 依概率趋于零，均值测度却仍趋于同一热流。对极限均值为正的非负紧支测试函数，相应随机变量族不一致可积：少见的大族簇维持了均值。

临界随机极限是超过程的**时空占用测度**，不能把事件计数测度直接写成单个时刻的种群状态。初始总质量可以无限，因此局部有限测度的表述也不能随意替换为有限总质量框架。

**方法与证明思路：** 从 Poisson 分支族簇表示出发，分析 Laplace 泛函与更新算子；有限均值延迟和空间二阶矩导出热算子。再结合族簇矩估计、鞅和超过程占用测度表征，区分涨落消失、保留与稀疏三种尺度。全文第4节还处理近临界扰动和重尾延迟，后者出现分数阶扩散与时间记忆项；本期不展开该部分的参数和定理细节。

**与研究主线的关联：** 分支族谱解释随机涨落，繁殖延迟解释时间记忆；两条主线在同一模型中相遇。密度阈值区分的是给定重标度下可见的宏观随机性，不能解释为底层分支模型的生存—灭绝阈值。

**值得进一步研究的问题：** **本期提出：** 用有限时间模拟估计均值时，应如何识别稀疏区间里少见大族簇造成的偏差？能否将不同观察窗口下的分布与均值一起比较，避免把局部趋零误读为系统没有活动？

## 本期观察

三篇中的“记忆”位于不同位置：第一篇是相关噪声，第二篇是读取整段历史的系数，第三篇是事件后代的繁殖延迟。相应结果也各有层次：路径唯一性、解的存在性、重标度事件测度的极限。记录时把“记忆在哪里、证明了哪一种性质、需要哪些结构条件”并列写下，比只记模型名称更容易比较。

## 阅读建议

- **关注奇异漂移：** 先读符号漂移论文第2.1节的上下迭代，再看引理4–7怎样控制近零占用时间。
- **关注历史依赖方程：** 对照路径依赖 RDE 的假设3.2、定理3.6与定理5.7，追踪余项指数为何决定可用的粗糙度范围。
- **关注分支极限：** 先读 Hawkes 论文第2节缩放和第3.1节三种极限，尤其区分事件占用测度、超过程状态和均值。
