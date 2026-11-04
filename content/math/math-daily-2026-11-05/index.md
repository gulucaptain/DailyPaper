---
title: "Math 每日速递 · 2026-11-05"
date: 2026-11-05T04:16:44+08:00
description: "带记忆高斯过程的马尔可夫提升、随机流混合的扰动稳定性，以及随机平流的白噪声极限。"
categories: ["Math"]
tags: ["math.PR", "非马尔可夫过程", "随机流"]
draft: false
showToc: true
tocopen: true
---

本期精选三篇。第一篇把高斯噪声的历史存进一条前向曲线，再用有限个因子近似。另两篇研究随机流中的两种极限：改变速度场的演化规律后，原有的混合还会持续吗？当随机平流的相关时间趋于零，输运噪声和漂移修正又如何同时出现？三篇均据预印本全文核验，其中随机混合一篇来自前一批公告。

## 今日论文

### Markovian Lifts and Multifactor Approximations for Weighted Sub-fractional Brownian Motion

{{< paper-meta
  authors="Jose H. Ramirez-Gonzalez、Edison Cuba"
  source="arXiv 预印本"
  date="2026-11-02 · v1"
  arxiv="2611.03926"
  fulltext="https://arxiv.org/html/2611.03926v1"
  fulltextLabel="全文 v1"
  directions="非马尔可夫过程"
>}}

**研究问题与背景。** 带权次分数布朗运动的当前值一般不足以描述其未来。论文研究如何选取一个既能存储历史、又适合分析和数值近似的状态空间。

**核心模型。** 参数 {{< math >}}0<b<2{{< /math >}}，包括对数型的 {{< math >}}b=1{{< /math >}}。作者用 Laplace 分解构造前向曲线，曲线记录过去噪声对未来增量的贡献。所用加权 Sobolev 空间的导数权重为 {{< math >}}r^\gamma/(1+r)^2{{< /math >}}，其中 {{< math >}}0<\gamma<1{{< /math >}}。

**主要结果。** 在该空间构造中，噪声算子为 Hilbert–Schmidt 当且仅当 {{< math >}}b+\gamma>1{{< /math >}}。定理 3.10 在局部有界的确定性时间权重和假设 3.5 下，证明标量解与前向曲线组成时间非齐次 Markov 过程，转移算子把有界连续函数映为有界连续函数。系数在空间上一致全局 Lipschitz。Young 积分区间另需扩散系数的时间 Lipschitz 性和有界 Hölder 空间导数。定理 4.3 对 Young 区间的有限因子驱动给出一致误差量级 {{< math >}}M^{-b/4}\sqrt{\log(2+M)}{{< /math >}}，其中谱截断取 {{< math >}}\Lambda=M^{1/2}{{< /math >}}。非线性解的误差需要定理 4.6 的附加条件，并带有由 Hölder 指数决定的幂损失。

**方法与证明思路。** 将曲线沿时间平移后，新增项只依赖独立的未来 Brownian 增量。状态范数控制初始曲线在紧区间的总变差，使方程能从提升空间的任意状态重新启动。谱变量分片后，有限近似由独立 Ornstein–Uhlenbeck 因子表示。

**与研究主线的关联。** 这里的记忆来自连续谱。提升把它转化成可递推的状态，有限因子近似则让记忆的表示成本与误差可以量化。

**值得进一步研究的问题。** 本期提出，谱分片能否针对时间权重和误差范数自适应设计，从而提高固定因子数下的精度？

---

### From Random Advection to Transport Noise and the LU Framework for the Navier–Stokes Equations

{{< paper-meta
  authors="Arnaud Debussche、Bérenger Hug、Étienne Mémin"
  source="arXiv 预印本"
  date="2026-11-03 · v1"
  arxiv="2611.05050"
  fulltext="https://arxiv.org/html/2611.05050v1"
  fulltextLabel="全文 v1"
  directions="随机流"
>}}

**研究问题与背景。** 随机流体模型常直接使用时间白噪声输运。论文从有短相关时间的随机速度场出发，推导这种输运噪声，并追踪空间非均匀性引起的漂移项。

**核心模型。** 在二维或三维光滑有界域中考虑不可压 Navier–Stokes 方程和 Dirichlet 边界条件。快速度为 {{< math >}}\varepsilon^{-1}m(t/\varepsilon^2){{< /math >}}。其中 {{< math >}}m{{< /math >}} 是中心化、平稳的 Markov 向量场，无散且在边界为零。定理使用假设 3.1 的矩、混合和积分相关对称性条件。

**主要结果。** 定理 4.3 证明，大尺度速度与快速度时间积分的联合分布紧。极限点的大尺度速度是 LU 随机 Navier–Stokes 方程的鞅解，积分快速度的极限和该方程共用同一个柱状 Wiener 过程。输运噪声的协方差由快场的时间积分相关决定。空间非均匀性产生 Itô–Stokes 漂移，论文的极限还包括黏性作用于快速度所带来的修正。二维路径唯一，因此得到整个联合分布族的收敛。三维结论适用于 Galerkin 选出的弱解及其子列极限。

**方法与证明思路。** 扰动测试函数抵消生成元中的奇异输运项。Leray 投影可能破坏 Dirichlet 边界条件，作者将 Stokes 算子纳入修正子方程，使能量估计能控制原来出现在边界的难项。

**与研究主线的关联。** 论文把快速度驱动的拉格朗日平流与极限随机输运联系起来。漂移和噪声的关系来自同一快场的统计结构。

**值得进一步研究的问题。** 本期提出，当积分相关不对称时，额外漂移能否在相同的有界域框架下被完整识别？

---

### Stability of negative-regularity mixing and applications to stochastic fluids

{{< paper-meta
  authors="Antonio Agresti、William Cooperman、Patrick Flynn"
  source="arXiv 预印本"
  date="2026-11-02 · v1"
  arxiv="2611.03519"
  fulltext="https://arxiv.org/html/2611.03519v1"
  fulltextLabel="全文 v1"
  directions="随机流"
>}}

本文来自 11 月 3 日公告，本期补录。

**研究问题与背景。** 随机速度场能把标量搅拌到更细的空间尺度，使负 Sobolev 范数衰减。论文考察速度与标量的联合动力学受到扰动后，这种混合能保留多少。

**核心模型。** 在流形上用随机微分同胚推送零均值标量，流的随机性由 Markov 转移核和状态到微分同胚的映射共同给出。扰动既可改变转移核，也可改变映射。距离使用加权的 Wasserstein 型耦合成本，权重考虑流映射及其逆的 Lipschitz 控制。

**主要结果。** 定理 3.4 在基准系统满足假设 3.1、且式 (3.4) 的耦合成本以参数 {{< math >}}\varepsilon{{< /math >}} 控制时，将单位时间负 Sobolev 衰减系数从 {{< math >}}\beta{{< /math >}} 改为 {{< math >}}\beta+C_1\varepsilon{{< /math >}}，保留初始状态的 Lyapunov 权重。定理 3.6 另用假设 3.2 的 Lyapunov 控制，把单位时间估计迭代为整数时刻的指数混合。若单位估计用 {{< math >}}p{{< /math >}} 阶矩，长期估计使用满足式 (3.7) 的较低阶矩 {{< math >}}q<p{{< /math >}}。

**方法与证明思路。** 比较两套随机流推送同一标量的结果，再用耦合控制短时误差。在流体应用中，可以给两套系统使用同一噪声，把比较转成拉格朗日流的加权空间正则性估计。长期论证还要控制速度状态进入大 Lyapunov 权重区域的影响。

**与研究主线的关联。** 短时流映射的接近程度、速度过程的回归控制和长期混合分别出现在不同的估计中。这使得已有的混合结论可以迁移到可控的扰动系统。

**值得进一步研究的问题。** 本期提出，如果速度状态只有多项式回归，短时稳定性可以转化为怎样的长期混合速率？

## 本期观察

前向曲线保留噪声的历史，快平流极限消去相关时间，扰动稳定性则比较两个保有各自动力学的流。三个结果对状态与极限的选择不同，但都把噪声的时间结构转化为可检验的数学条件。

## 阅读建议

- 先读第一篇定理 3.10，分清提升过程的 Markov 性与标量驱动本身的记忆。
- 第二篇从定理 4.3 和式 (30) 入手，对照二维与三维的结论。
- 第三篇连读定理 3.4 和 3.6，检查单位时间估计之外需要的 Lyapunov 条件。
