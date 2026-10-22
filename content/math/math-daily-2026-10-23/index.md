---
title: "Math 每日速递 · 2026-10-23"
date: "2026-10-23T03:51:56+08:00"
description: "精选3篇：从Ray–Knight局部时定理重建自相互作用游走、选择性扫荡的分支模型，以及带停步象游走的经验归一化与尾近似。"
categories: ["Math"]
tags: ["math.PR", "自相互作用随机游走", "非马尔可夫过程", "分支过程", "局部时", "象随机游走", "选择性扫荡"]
draft: false
showToc: true
tocopen: true
---

本期精选 **3 篇**，关注**如何从历史积累的信息读出整体行为**：知道游走的局部时曲线，能否重建整条极限路径？不断引入新基因型时，独立分支族群为何会出现单一类型占优？象随机游走既会停步、步长又随机，怎样用观测数据完成归一化？三篇分别提示我们检查曲线合并、族群年龄和随机运动时钟；仅看单时刻分布或平均参数，容易漏掉关键条件。

## 今日论文

### Functional limit theorems for self-interacting random walks

{{< paper-meta
  authors="Elena Kosygina、Laure Marêché、Thomas Mountford、Jonathon Peterson"
  source="arXiv 预印本"
  date="2026-10-20 · v1"
  arxiv="2610.28935"
  fulltext="https://arxiv.org/html/2610.28935v1"
  fulltextLabel="全文 v1"
  directions="自相互作用随机游走、非马尔可夫过程"
>}}

**研究问题与背景：** Ray–Knight 定理描述在逆局部时停止后得到的占据曲线，但曲线的单独收敛并不自动意味着游走路径收敛。本文建立一套“反演”方法：把局部时曲线及其合并结构转回过程级极限，并应用到多项式自排斥游走。

**核心模型与数学设定：** 一类典型模型在 {{< math >}}\mathbb Z{{< /math >}} 上作近邻游走。若 {{< math >}}\ell_k(x){{< /math >}} 是边 {{< math >}}\{x,x+1\}{{< /math >}} 已被穿越的次数，则向右概率为

{{< math display="true" >}}
\frac{w(\ell_k(X_k))}{w(\ell_k(X_k))+w(\ell_k(X_k-1))}.
{{< /math >}}

{{< math >}}w{{< /math >}} 为正的单调权函数；非增权对应自排斥。一般定理要求游走常返，具有缩放函数 {{< math >}}g(n)=a_0n^\gamma{{< /math >}}（{{< math >}}a_0,\gamma>0{{< /math >}}）的**增强联合 Ray–Knight 定理**：多条逆局部时曲线、支撑端点及曲线合并位置同时收敛。

原文**假设1–3**还要求：极限曲线由平方 Bessel 过程的幂及其反射—吸收拼接组成（反射段维数大于0、吸收段维数小于2），左右段具有指定独立性；曲线族满足联合 Markov 结构；相邻曲线在规定局部距离内合并的概率有统一正下界。后一个非退化条件是紧性证明的一部分，不能省略。

**主要定理或理论结果：** **定理2.4**在上述条件下给出连续极限过程 {{< math >}}\mathfrak X{{< /math >}}，使

{{< math display="true" >}}
\mathcal X_n(t)=n^{-1}X_{\lfloor tng(n)\rfloor}
\ \Longrightarrow\ \mathfrak X(t)
{{< /math >}}

在 {{< math >}}D([0,\infty)){{< /math >}} 的 Skorokhod {{< math >}}J_1{{< /math >}} 拓扑下成立。**定理2.5–2.6**进一步给出路径与局部时曲面的联合收敛，确认极限具有连续局部时，并保留相应联合 Ray–Knight 描述。

具体地，**定理2.10**处理正、单调权函数满足

{{< math display="true" >}}
\frac1{w(j)}=j^\alpha\left(1+\frac{2B}{j}+O(j^{-2})\right),
\qquad\alpha>0
{{< /math >}}

的多项式自排斥游走（{{< math >}}B\in\mathbb R{{< /math >}}），验证增强联合条件，得到 {{< math >}}g(n)=n{{< /math >}} 下路径与局部时的极限；联合 Ray–Knight 定律唯一刻画连续极限。这里“唯一”是极限分布的刻画，不是某个 SDE 的路径唯一性；扩散尺度也不自动说明极限是标准布朗运动。

**方法与证明思路：** 以局部时曲线及其合并、吸收位置控制游走的空间范围和路径紧性，再识别有限维分布及极限占据密度。关键补充是联合几何信息，而不是把一个随机停止时刻的定理直接改写成确定时间结论。

**与研究主线的关联：** 直接研究历史局部时决定转移的自相互作用模型，将 Ray–Knight 理论与函数型极限定理连接起来。作者也注明，相关极限另有 Yu 同期独立的 Bessel 流构造，不宜把所有构造路线都归为本文首次提出。

**值得进一步研究的问题：** **本期提出：** 合并非退化条件若失效，还能否在别的时间尺度或较弱拓扑下得到过程极限？原文提醒某些有向边自排斥模型在自然尺度下不紧，不能直接套用本定理。

---

### A branching model for selective sweeps

{{< paper-meta
  authors="Luiz Renato Fontes、Rinaldo B. Schinazi"
  source="arXiv 预印本"
  date="2026-10-21 · v1"
  arxiv="2610.29759"
  fulltext="https://arxiv.org/html/2610.29759v1"
  fulltextLabel="全文 v1"
  directions="分支过程"
>}}

**研究问题与背景：** 在一个不断增长、持续出现新基因型的种群里，适应度和进入时间共同决定族群大小。本文用独立分支族群研究选择性扫荡：为什么在很晚的一个观测时刻，总人口仍可能几乎都属于同一基因型？

**核心模型与数学设定：** 每个离散时刻 {{< math >}}i\ge1{{< /math >}} 引入一个个体，其参数 {{< math >}}p_i{{< /math >}} 独立均匀分布于 {{< math >}}(0,1){{< /math >}}。它建立独立的 Galton–Watson 族群，后代数满足

{{< math display="true" >}}
\mathbb P(Y_i=k\mid p_i)=p_i(1-p_i)^{k-1},\qquad k\ge1.
{{< /math >}}

给定参数后，同一基因型的繁殖均按该规律独立进行；不同族群独立。因为没有零后代，族群不会灭绝，后代均值为 {{< math >}}1/p_i{{< /math >}}。记 {{< math >}}G_n(i){{< /math >}} 为第 {{< math >}}i{{< /math >}} 个族群在时刻 {{< math >}}n{{< /math >}} 的大小，定义

{{< math display="true" >}}
\pi_n(i)=\frac{G_n(i)}{\sum_{j=1}^nG_n(j)},\qquad
I_n\in\operatorname*{arg\,max}_{1\le i\le n}G_n(i),
{{< /math >}}

并按原文取最小指标处理并列。这不是总人数固定、通过死亡竞争实现固定的种群模型。

**主要定理或理论结果：** **定理1**证明

{{< math display="true" >}}
\pi_n(I_n)\xrightarrow{\mathbb P}1.
{{< /math >}}

即在不断后移的观测时刻，最大族群占比依概率趋于1。它不意味着某个固定基因型最终永久占据整个种群，也不等于比例几乎必然收敛。原文后续还研究扫荡的点过程结构，本期重点摘取这一单时刻占优定理。

**方法与证明思路：** 令 {{< math >}}\tau_i=-\log p_i{{< /math >}}，则 {{< math >}}\tau_i{{< /math >}} 独立服从均值1的指数分布，族群平均增长因子为 {{< math >}}e^{\tau_i}{{< /math >}}。证明比较适应度与族群年龄形成的加权极值，控制最大项与次大项之间的间隙，再把增长指数的优势转为实际总人口中的占比。单看最大的适应度并不足以判断当前谁最大。

**与研究主线的关联：** 直接连接分支族群增长、持续移入与极值驱动的集中现象。占优来自不同独立族群增长速度与年龄的竞争，不应误写成模型中已经加入了族群间相互抑制。

**值得进一步研究的问题：** **本期提出：** 若后代分布允许零后代，持续移入能否仍产生类似的单族群集中？灭绝会增加筛选机制，本篇无灭绝模型不能直接回答。

---

### Normal approximation, moderate and large deviations for the elephant random walk with stops and random step sizes

{{< paper-meta
  authors="Shuyuan Liang"
  source="arXiv 预印本"
  date="2026-10-21 · v1"
  arxiv="2610.29105"
  fulltext="https://arxiv.org/html/2610.29105v1"
  fulltextLabel="全文 v1"
  directions="自相互作用随机游走、非马尔可夫过程"
>}}

**研究问题与背景：** 带停步的象游走不仅方向有记忆，实际运动次数也随机；再加入随机步长，归一化分母本身也需要估计。本文把固定运动次数下的结果转移到随机运动时钟，并控制经验分母带来的误差。

**核心模型与数学设定：** 首次 {{< math >}}Y_1=\pm1{{< /math >}} 等概率。之后均匀抽取一个历史增量，以概率 {{< math >}}p,q,r{{< /math >}} 分别复制、反向或置零，其中 {{< math >}}p+q+r=1{{< /math >}}、{{< math >}}0<r<1{{< /math >}}。抽到历史零增量也只能产生零，所以 {{< math >}}r{{< /math >}} 不是下一步为零的无条件概率。

正的独立同分布步长 {{< math >}}Z_k{{< /math >}} 与整个方向—停步过程独立，{{< math >}}\mathbb E Z_1=1{{< /math >}}。记

{{< math display="true" >}}
\begin{gathered}
S_n=\sum_{k=1}^nY_kZ_k,\quad \Sigma_n=\sum_{k=1}^nY_k^2,\\
b=1-r,\qquad p_r=p/(1-r),
\end{gathered}
{{< /math >}}

其中 {{< math >}}\Sigma_n{{< /math >}} 为实际运动次数。下文限于 {{< math >}}0<p_r\le3/4{{< /math >}}。取

{{< math display="true" >}}
\begin{gathered}
A_m=\frac{\Gamma(m)\Gamma(2p_r)}{\Gamma(m+2p_r-1)},\\
V_m=\sum_{j=1}^mA_j^2,\quad Q_m=V_m/A_m^2,\\
W_n=\frac{S_n}{\sqrt{Q_{\Sigma_n}+\sum_{k=1}^nY_k^2(Z_k-1)^2}}.
\end{gathered}
{{< /math >}}

这是原文式(2.4)–(2.5)的经验方差归一化，不需要预先知道步长方差；{{< math >}}A_m{{< /math >}} 对应嵌入的非零运动链，不能把原时间上的鞅系数机械替换成 {{< math >}}\Sigma_n{{< /math >}}。

**主要定理或理论结果：** **命题2.1**在有限二阶矩及 {{< math >}}0<p_r\le3/4{{< /math >}} 下给出 {{< math >}}W_n\Rightarrow N(0,1){{< /math >}}。本期摘取**定理2.2**的一个清晰范围：有限三阶中心绝对矩且 {{< math >}}0<p_r\le5/8{{< /math >}} 时，

{{< math display="true" >}}
d_K(W_n,N(0,1))\le Cn^{-b/2}.
{{< /math >}}

{{< math >}}d_K{{< /math >}} 为 Kolmogorov 距离。临界 {{< math >}}p_r=3/4{{< /math >}} 时，仅有限方差也有 {{< math >}}C(\log n)^{-1/3}{{< /math >}} 上界；这是另一条条件下的速率，不能沿用上式。

**定理2.11**另要求更强的 {{< math >}}\mathbb E e^{\eta(Z_1-1)^2}<\infty{{< /math >}}（某个 {{< math >}}\eta>0{{< /math >}}）。在扩散区间 {{< math >}}0<p_r<3/4{{< /math >}}，对每个固定 {{< math >}}0<c<\sqrt{2b}{{< /math >}}，两侧正态尾比值在 {{< math >}}0\le x\le c\sqrt{\log n}{{< /math >}} 上一致趋于1。有限三阶矩的正态距离界不自动包含这个更强矩条件下的尾近似。

**方法与证明思路：** 将方向过程嵌入实际运动时钟，结合已有固定运动数估计；用置换比较保留扩散区间的 Kolmogorov 速率，再控制随机分母和运动次数偏小的事件。论文明确区分已有估计与此次向经验归一化、随机时钟的转移步骤。

**与研究主线的关联：** 直接说明停步记忆、有效记忆参数与观测时间如何共同影响极限精度；它与无停步随机步长模型及 minimal random walk 都有关，但不是同一个模型。

**值得进一步研究的问题：** **本期提出：** 若振幅分布依赖停步历史，方向链与振幅、时钟不再独立，哪些比较步骤仍可保留？本文的独立性假设不能直接去掉。

## 本期观察

三篇都依赖额外的结构信息：局部时还需记录曲线合并，族群大小还需考虑进入时间，正态近似还需控制随机分母与运动时钟。知道一个边缘分布或一个增长指数，通常不足以替代这些联合控制。

## 阅读建议

- 自相互作用游走：先读第一篇定义2.2、假设1–3及定理2.4，再看多项式自排斥应用。
- 分支过程：先读第二篇定理1，分清独立族群模型与占优结论的依概率含义。
- 象游走：先核对第三篇运动计数和式(2.4)–(2.5)，再分别阅读正态距离与尾比值的矩条件。
