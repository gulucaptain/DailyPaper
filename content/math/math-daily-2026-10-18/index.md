---
title: "Math 每日速递 · 2026-10-18"
date: "2026-10-18T08:53:55+08:00"
description: "近期论文补遗3篇：相互作用象随机游走的分离时间、爆炸Galton–Watson树的Gamma极限，以及Rough CIR与Feller随机测度的超过程构造。"
categories: ["Math"]
tags: ["math.PR", "非马尔可夫过程", "分支过程", "自相互作用随机游走", "象随机游走", "Rough CIR", "超过程", "补遗"]
draft: false
showToc: true
tocopen: true
---

本期从近期未收录论文中精选 **3 篇作补遗**，关注**记忆与分支结构怎样决定随机系统的极限**：两个相互模仿历史的游走，何时真正分离？种群接近有限时刻爆炸时，是否存在统一的局部标度？带记忆的 CIR 模型又能否从分支族群构造出来？三篇分别连接自相互作用游走、爆炸分支过程与随机测度，阅读重点是归一化、收敛层次和结论成立的条件。

## 今日论文

### Functional Limits and Separation Times for Two Interacting Elephant Random Walks

{{< paper-meta
  authors="Rafik Aguech、Shuhei Shibata、Tomoyuki Shirai"
  source="arXiv 预印本"
  date="2026-09-30 · v1"
  arxiv="2609.39455"
  arxivURL="https://arxiv.org/abs/2609.39455"
  fulltext="https://arxiv.org/html/2609.39455v1"
  fulltextLabel="全文 v1"
  directions="自相互作用随机游走、非马尔可夫过程"
  note="近期未收录论文补遗。主要结论核对定理3.1、5.1、6.4和命题6.1，不是今日新投稿。"
>}}

**研究问题与背景：** 两个 elephant random walks 不再独立回忆各自的过去，而是从对方的历史步长中采样并模仿或反向模仿。这种交叉记忆既影响整体运动，也影响两者的相对位置。单时刻中心极限定理不能直接回答首次分离时间的分布与矩渐近，必须进一步控制整条路径和退出时间的尾部。

**核心模型与数学设定：** 两个游走均从整数格原点出发，步长取正负1。第一个游走均匀选择第二个游走的一个过去步长，以概率 {{< math >}}p_1{{< /math >}} 保持其方向、否则反向；第二个同理使用参数 {{< math >}}p_2{{< /math >}}。历史抽样和后续符号变量相互独立，允许最初两个步长相关。记

{{< math display="true" >}}
\alpha_i=2p_i-1,\qquad
A=\begin{pmatrix}0&\alpha_1\\\alpha_2&0\end{pmatrix},\qquad
\mu=\alpha_1\alpha_2.
{{< /math >}}

这里 {{< math >}}S_n=(S_n^{(1)},S_n^{(2)})^\top{{< /math >}} 为联合位置，{{< math >}}\mathcal D_n=S_n^{(1)}-S_n^{(2)}{{< /math >}} 为差值。

**主要定理或理论结果：**

- **定理3.1：** 当 {{< math >}}\mu<1/4{{< /math >}} 时，{{< math >}}S_{\lfloor nt\rfloor}/\sqrt n{{< /math >}} 在 {{< math >}}D([0,\infty),\mathbb R^2){{< /math >}} 的 Skorokhod {{< math >}}J_1{{< /math >}} 拓扑中依分布收敛到连续中心高斯过程

{{< math display="true" >}}
Z_t=\int_0^t(t/s)^A\,\mathrm d B_s,
{{< /math >}}

其中 {{< math >}}B{{< /math >}} 为二维标准布朗运动。

- **定理5.1：** 除上述联合扩散区间外，在对称参数 {{< math >}}\alpha_1=\alpha_2=\alpha\in[1/2,1){{< /math >}} 下，差值仍按 {{< math >}}\sqrt n{{< /math >}} 缩放，并在一维路径空间中收敛到

{{< math display="true" >}}
V_t=\sqrt2\int_0^t(t/s)^{-\alpha}\,\mathrm d W_s.
{{< /math >}}

这不意味着联合游走在临界或超扩散区间也保持同一种扩散极限。

- **命题6.1、定理6.4：** 在 {{< math >}}\mu<1/4{{< /math >}}，或上述对称参数区间，令 {{< math >}}\sigma_c=\inf\{n\geq1:|\mathcal D_n|\geq2c\}{{< /math >}}，整数阈值 {{< math >}}c\to\infty{{< /math >}} 时，{{< math >}}\sigma_c/c^2{{< /math >}} 收敛到相应高斯差值过程首次离开 {{< math >}}(-2,2){{< /math >}} 的时间 {{< math >}}\tau{{< /math >}}；对任意 {{< math >}}q>0{{< /math >}}，还有

{{< math display="true" >}}
\mathbb E[\sigma_c^q]=c^{2q}\mathbb E[\tau^q]+o(c^{2q}),
\qquad \mathbb E[\tau^q]<\infty.
{{< /math >}}

**方法与证明思路：** 对条件均值作矩阵补偿，构造鞅并证明函数型中心极限定理，再以矩阵核变换恢复原游走；需单独控制时间原点附近的奇异核。分离时间部分先验证退出映射在极限路径上的连续性，再用统一尾部/矩界获得一致可积性，因此矩收敛不是仅由弱收敛自动得到。作者也明确指出，一般图相互作用框架已有相关函数极限结果；本篇价值包括直接鞅证明及分离时间的分布、矩和随机单调性分析。

**与研究主线的关联：** 这是交叉历史记忆直接驱动转移的非马尔可夫模型；差值方向可以在整体超扩散时仍保持扩散，提示应按相互作用矩阵的不同方向分别研究标度。

**值得进一步研究的问题：** **本期提出：** 在参数轻微不对称时，差值方向如何混入主增长模态？能否找到随不对称程度变化的交叉标度？论文没有给出一般临界/超扩散情形的联合函数极限，不能将对称差值结果直接推广过去。

---

### Behaviour near explosion in continuous-time Galton-Watson trees

{{< paper-meta
  authors="Simon C. Harris、Samuel G. G. Johnston、Juan Carlos Pardo"
  source="arXiv 预印本"
  date="2026-10-01 · v1"
  arxiv="2610.01810"
  arxivURL="https://arxiv.org/abs/2610.01810"
  fulltext="https://arxiv.org/html/2610.01810v1"
  fulltextLabel="全文 v1"
  directions="分支过程"
  note="近期未收录论文补遗。依据模型式(1.1)、定义2.1、定理2.2–2.3及第3.4节的条件分布。"
>}}

**研究问题与背景：** 无限均值后代分布可能使连续时间种群在有限时刻爆炸。相比单纯判定是否爆炸，本文追问：爆炸之前种群有多大、增长事件来自哪条祖先线，以及经过何种空间—时间变换，能看见稳定的极限过程。

**核心模型与数学设定：** 从一个个体出发，每个个体寿命为速率1的独立指数变量，死亡时按同一后代分布独立繁殖，种群大小记为 {{< math >}}N_t{{< /math >}}。后代生成函数具有形式

{{< math display="true" >}}
f(s)=s-(1-s)^\alpha L(1-s),\qquad 0<\alpha<1,
{{< /math >}}

其中 {{< math >}}L:[0,1]\to[0,\infty){{< /math >}} 在0处缓慢变化，且 {{< math >}}f{{< /math >}} 确为后代分布的生成函数。这个设定迫使 {{< math >}}p_0=0{{< /math >}}，不包含灭绝；不能只凭“无限均值”就套用全部结论。令爆炸时间为 {{< math >}}\tau{{< /math >}}、{{< math >}}E(t)=\mathbf P(\tau\leq t){{< /math >}}。研究在第3.4节明确构造的、条件于 {{< math >}}\tau=T{{< /math >}} 的规律下进行，而非把零概率事件当作普通条件概率直接相除。

**主要定理或理论结果：** 定义2.1刻画通向爆炸的唯一 spine：每个爆炸前时刻，只有其上一个个体在爆炸时有无限后代，其他在世个体各自只有有限后代。定理2.2说明，距爆炸尚余 {{< math >}}\varepsilon{{< /math >}} 时，spine 繁殖速率渐近为 {{< math >}}\frac{\alpha}{1-\alpha}\varepsilon^{-1}{{< /math >}}；对应后代数按 {{< math >}}E(\varepsilon){{< /math >}} 缩放后趋于 {{< math >}}\mathrm{Gamma}(1-\alpha,1){{< /math >}}。

更核心的**定理2.3**采用同时变化的空间和对数剩余时间：

{{< math display="true" >}}
Z_t^{\varepsilon,T}=E(\varepsilon e^{-t})N_{T-\varepsilon e^{-t}}.
{{< /math >}}

对固定 {{< math >}}T>0{{< /math >}}，在条件规律下，{{< math >}}\varepsilon\downarrow0{{< /math >}} 时，该过程在**有限维分布意义**下收敛到平稳的连续状态分支—移民过程，取值于 {{< math >}}(0,\infty){{< /math >}}，其平稳分布为 {{< math >}}\mathrm{Gamma}(\alpha,1){{< /math >}}。分支机制是次临界的，移民来自 spine 事件；极限规律只依赖 {{< math >}}\alpha{{< /math >}}，不依赖所条件的爆炸时刻 {{< math >}}T{{< /math >}} 或缓慢变化修正 {{< math >}}L{{< /math >}}。这是有限维分布结论，不能在没有紧性证明时改写成 Skorokhod 路径收敛。

**方法与证明思路：** 先利用生成函数与微分方程分析爆炸概率和正则变化尺度，再在爆炸时刻的条件规律下进行 spine 分解。对数剩余时间把越来越密集的 spine 繁殖事件转为稳定强度的移民来源；通过条件转移的拉普拉斯变换识别分支—移民极限。原种群趋于无穷，但在随剩余时间调整的尺度下，极限可以平稳，两者并不矛盾。

**与研究主线的关联：** 本文直接研究无限均值 Galton–Watson 分支的爆炸、spine 和极限理论，展示了“条件化祖先线产生移民”的具体机制，而不是把爆炸只视作过程定义的终点。

**值得进一步研究的问题：** **本期提出：** 能否在合适路径拓扑下把有限维极限加强为过程极限，并分析缓慢变化修正造成的收敛速度？若允许灭绝或改变寿命分布，则现有模型条件已经变化，需重新分析条件化与尺度，不能照搬 Gamma 极限。

---

### A Superprocess-based Approach to Rough CIR Processes and Feller Random Measures

{{< paper-meta
  authors="Gordan Žitković；The University of Texas at Austin"
  source="arXiv 预印本"
  date="2026-10-05 · v1"
  arxiv="2610.05675"
  arxivURL="https://arxiv.org/abs/2610.05675"
  fulltext="https://arxiv.org/html/2610.05675v1"
  fulltextLabel="全文 v1"
  directions="非马尔可夫过程、分支过程"
  note="近期未收录论文补遗。重点核对定义2.1–2.2、定理3.1、推论3.4、命题4.6及备注4.7。"
>}}

**研究问题与背景：** 经典 Feller/CIR 扩散有局部、无记忆的分支结构；加入记忆核后，可能得到 rough CIR，甚至只能作为随机测度而没有常规强度密度的对象。本文尝试从一个统一的分支族群构造出这些模型，并区分“随机测度存在”和“它具有平方可积密度”这两个问题。

**核心模型与数学设定：** 取 {{< math >}}\mathbb R_+{{< /math >}} 上的 PGID 概率核 {{< math >}}\rho{{< /math >}} 和局部有限初始测度 {{< math >}}\mu{{< /math >}}。PGID 指对任意几何分布参数，该核都可写成相应数量的非负独立同分布变量之和的规律，求和变量的规律允许依赖参数。它并非任意概率核。定义2.2通过 Riccati–Volterra 方程及其拉普拉斯泛函刻画 {{< math >}}(\rho,\mu){{< /math >}}-Feller 随机测度。

构造时，引入由 {{< math >}}\rho{{< /math >}} 对应的 killed Lévy subordinator 作为空间运动、分支机制为 {{< math >}}\lambda\mapsto\lambda^2/2{{< /math >}} 的 Dawson–Watanabe 超过程 {{< math >}}X_\tau{{< /math >}}。这里 {{< math >}}\tau{{< /math >}} 是分支时间，超过程测度所在的 {{< math >}}\mathbb R_+{{< /math >}} 才是原模型的时间轴；两个时间不能混用。

**主要定理或理论结果：**

- **定理3.1、推论3.4：** 对 PGID 核及任意局部有限 {{< math >}}\mu{{< /math >}}，从 {{< math >}}X_0=\mu{{< /math >}} 出发的超过程占据测度

{{< math display="true" >}}
\xi(A)=\int_0^\infty X_\tau(A)\,\mathrm d\tau
{{< /math >}}

是对应的 Feller 随机测度，因而给出其存在性。它可理解为将连续化的“各代后裔”在原时间轴上的贡献叠加。

- **命题4.6：** 若 {{< math >}}\rho(\mathrm dt)=r(t)\,\mathrm dt{{< /math >}} 为 PGID 概率核且 {{< math >}}\mu{{< /math >}} 非零、局部有限，则 {{< math >}}\xi{{< /math >}} 具有满足 {{< math >}}\mathbb E\int_0^T Z_t^2\,\mathrm dt<\infty{{< /math >}}（每个有限 {{< math >}}T>0{{< /math >}}）的密度，当且仅当

{{< math display="true" >}}
\int_0^T r(t)^2\,\mathrm dt<\infty\quad\text{对每个 }T>0.
{{< /math >}}

**备注4.7明确将更强结论留为猜想：** 不能由此声称，核不满足上述条件时随机测度绝无任何类型的密度；已证明的必要充分条件针对的是这里定义的**平方可积密度**。

**方法与证明思路：** 对应的 Lévy subordinator 将记忆核变成超过程空间运动的势测度，超过程的占据泛函再连接到定义中的非线性 Volterra 方程，形成 Hawkes–Oakes 簇表示的连续对应物。由超过程鞅测度提取原时间轴上的噪声，结合二阶矩/随机积分等距分析密度存在性。核在原点是否有原子会改变噪声结构，因此不能把连续核的布朗驱动描述直接延伸到全部核。

**与研究主线的关联：** 这项表示把非马尔可夫记忆过程嵌入额外分支时间维度的 Markov 超过程。分支机制不仅是类比，而是用于构造随机测度和研究噪声、稳定性与正则性的数学工具。

**值得进一步研究的问题：** 作者在备注4.7提出，是否任意密度一旦存在便自动满足相应平方可积条件。**本期提出：** 可从特定 PGID 核族和初始测度入手，检验哪些工具能将二阶矩判据推广到一般密度的排除；不要把该猜想当作已解决的超粗糙区间定理。

## 本期观察

**观察方向和时间尺度会改变极限的形态。** 相互作用象游走的差值可与整体运动具有不同标度；爆炸种群经过对数剩余时间与动态空间归一化，可以出现平稳的分支—移民极限；Feller 随机测度则通过额外分支时间维度获得构造。三者都提示，在比较模型长期行为前，应先明确研究的是整体、投影、条件规律还是占据测度。

**收敛和正则性的层次不能相互替换。** 象游走的分离时间矩收敛还需一致可积性；爆炸树的主要过程结论只声明有限维分布收敛；Feller 测度的平方可积密度判据也不是任意密度的完全刻画。这些边界本身正是可继续研究的切入点。本期没有直接研究随机流的论文，不将一般随机过程结果牵强归入该主线。

## 阅读建议

1. **两象游走（2609.39455）**：先读定理5.1及第6节，关注差值模态为何保留扩散标度，以及尾部控制如何支持全阶正矩渐近。
2. **爆炸 Galton–Watson 树（2610.01810）**：先读第2.2节，理解剩余时间缩放、spine 移民与 Gamma 平稳分布的对应关系。
3. **Rough CIR 的超过程方法（2610.05675）**：先读定理3.1和命题4.6，将构造性表示、密度判据与备注4.7的未解问题分开阅读。
