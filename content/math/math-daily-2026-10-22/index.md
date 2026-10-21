---
title: "Math 每日速递 · 2026-10-22"
date: "2026-10-22T03:59:33+08:00"
description: "精选3篇：随机步长象游走的偏差概率、嵌套格点分支随机游走的强分支渐近，以及随机Lotka–Volterra系统的精确共存判据。"
categories: ["Math"]
tags: ["math.PR", "自相互作用随机游走", "非马尔可夫过程", "分支过程", "随机流", "随机动力系统", "遍历性"]
draft: false
showToc: true
tocopen: true
---

本期精选 **3 篇**，关注**记忆、空间运动和环境噪声如何改变随机系统的长期规律**：象随机游走加入随机步长后，高斯近似还能描述多远的尾部？分支极强时，空间跳跃是否仍会修正种群增长率？多物种随机系统又能否只根据系数判断是否共存？阅读时可分别抓住偏差尺度、固定维数的渐近，以及平稳分布与点轨道之间的区别。

## 今日论文

### Cramér-type moderate deviations and precise large deviations for the elephant random walk with random step sizes

{{< paper-meta
  authors="Xiequan Fan、Shuyuan Liang、Dongxue Ma"
  source="arXiv 预印本"
  date="2026-10-17 · v1"
  arxiv="2610.26928"
  fulltext="https://arxiv.org/html/2610.26928v1"
  fulltextLabel="全文 v1"
  directions="自相互作用随机游走、非马尔可夫过程"
>}}

**研究问题与背景：** 中心极限定理主要控制典型涨落，对越来越远的尾部不自动给出相对误差。本文考察历史记忆与随机步长共同作用下的中偏差和大偏差。本期重点阅读定理2.1及推论2.1：在弱于通常 Cramér 指数矩的条件下，高斯尾近似仍可用到什么范围。

**核心模型与数学设定：** 方向变量 {{< math >}}X_k\in\{-1,1\}{{< /math >}} 按象游走规则生成：首次方向等概率取正负，之后均匀抽取过去的一个方向，以概率 {{< math >}}p{{< /math >}} 复制、否则反向。随机变量 {{< math >}}Z_k{{< /math >}} 独立同分布，与整个方向过程独立，满足 {{< math >}}\mathbb E Z_1=1{{< /math >}}、{{< math >}}\operatorname{Var}(Z_1)=\sigma^2>0{{< /math >}}；位置为 {{< math >}}S_n=\sum_{k=1}^nX_kZ_k{{< /math >}}。记

{{< math display="true" >}}
\begin{gathered}
a_n=\frac{\Gamma(n)\Gamma(2p)}{\Gamma(n+2p-1)},\qquad v_n=\sum_{k=1}^n a_k^2,\\
U_n=\frac{a_nS_n}{\sqrt{v_n+n a_n^2\sigma^2}}.
\end{gathered}
{{< /math >}}

下面的结论限于 {{< math >}}0<p<3/4{{< /math >}}，并要求存在 {{< math >}}0<\alpha<1{{< /math >}}、{{< math >}}c>0{{< /math >}}，使

{{< math display="true" >}}
\mathbb E\!\left[(Z_1-1)^2e^{c|Z_1-1|^\alpha}\right]<\infty.
{{< /math >}}

**主要定理或理论结果：** **定理2.1**先给出相对标准正态尾部的对数误差界；**推论2.1**由此得到

{{< math display="true" >}}
\begin{gathered}
\frac{\mathbb P(U_n\ge x)}{1-\Phi(x)}=1+o(1),\\
\frac{\mathbb P(U_n\le-x)}{\Phi(-x)}=1+o(1),\\
0\le x=o(n^\eta),\qquad
\eta=\frac{\alpha\min\{1,3-4p\}}{6\alpha+4}.
\end{gathered}
{{< /math >}}

{{< math >}}\Phi{{< /math >}} 为标准正态分布函数。接近临界记忆参数 {{< math >}}3/4{{< /math >}} 时，保证高斯尾相对近似的幂次窗口变窄。论文还分别讨论临界情形和其他尾部假设下的大偏差，不能将上式直接推广到那些区间。

**方法与证明思路：** 把步长分成截断部分与尾部余项：前者接入归一化鞅的 Cramér 型偏差估计，后者用次指数矩控制到相应尺度下可忽略。截断阈值与偏差大小需要共同选择，不能只凭 CLT 推出上述比值结论。

**与研究主线的关联：** 直接研究象随机游走的历史记忆与极限定理；独立随机步长增加了另一类尾部来源，需与记忆参数造成的标度变化区分。

**值得进一步研究的问题：** **本期提出：** 当 {{< math >}}p=p_n{{< /math >}} 随样本量接近 {{< math >}}3/4{{< /math >}} 时，能否给出扩散与临界区间之间的一致偏差窗口？本期摘取的是固定参数结果。

---

### Supercritical Branching Random Walks on Nested Lattices

{{< paper-meta
  authors="Elena Yarovaya"
  source="arXiv 预印本"
  date="2026-10-19 · v1"
  arxiv="2610.27129"
  fulltext="https://arxiv.org/html/2610.27129v1"
  fulltextLabel="全文 v1"
  directions="分支过程"
>}}

**研究问题与背景：** 分支源相同、格点维数不同，种群增长率的比较取决于如何保持随机游走之间的可比性。本文引入嵌套格点的一致跳率族。本期重点摘取定理5的固定维数强分支渐近，观察空间运动如何进入增长率的首个修正项。

**核心模型与数学设定：** 连续时间随机游走在 {{< math >}}\mathbb Z^d{{< /math >}} 上运动，对称、空间齐次、不可约，跳率核满足有限总离开率。有限方差情形还要求 {{< math >}}\sum_x|x|^2a_d(x)<\infty{{< /math >}}。嵌套一致性规定，对 {{< math >}}x\ne0{{< /math >}}，

{{< math display="true" >}}
a_{d+1}(x,0)=a_d(x).
{{< /math >}}

粒子只在原点分支，分支机制 {{< math >}}f(u)=\sum_{k\ge0}b_ku^k{{< /math >}} 满足 {{< math >}}b_k\ge0{{< /math >}}（{{< math >}}k\ne1{{< /math >}}）、{{< math >}}b_1<0{{< /math >}}、{{< math >}}\sum_kb_k=0{{< /math >}}，记有限的净平均产生强度 {{< math >}}\beta=f'(1){{< /math >}}。均值演化算子为 {{< math >}}\mathcal H_{\beta,d}=\mathcal A_d+\beta\mathcal V_0{{< /math >}}，其中 {{< math >}}\mathcal V_0{{< /math >}} 只作用于原点。

**主要定理或理论结果：** 超临界时，正特征值 {{< math >}}\lambda_0(d,\beta){{< /math >}} 由原点 Green 函数方程 {{< math >}}G_{\lambda}(d,0)=\beta^{-1}{{< /math >}} 刻画。**定理5**在上述有限方差情形给出：对每个固定 {{< math >}}d{{< /math >}}，

{{< math display="true" >}}
\lambda_0(d,\beta)=\beta+a_d(0)+O(\beta^{-1}),\qquad\beta\to\infty.
{{< /math >}}

因为 {{< math >}}a_d(0)<0{{< /math >}}，令总离开率 {{< math >}}q_d=-a_d(0){{< /math >}}，首个修正就是 {{< math >}}-q_d{{< /math >}}：即便分支极强，粒子离开唯一分支源的运动仍在绝对误差层面留下影响。这是固定维数估计，不能自动用于 {{< math >}}d{{< /math >}} 与 {{< math >}}\beta{{< /math >}} 同时增长。原文也研究跨维数比较及正则重尾跳跃，本段公式只展开有限方差分支。

**方法与证明思路：** 将单点分支看作游走生成元的秩一扰动，用 Green 函数把谱问题化为标量方程；随后作参数变换，研究强分支极限下的隐式解。核的原点对角元因此出现在修正项中。

**与研究主线的关联：** 直接连接分支随机游走、催化分支源与增长谱。比较维数时还需固定跳率的继承规则，不能只比较符号 {{< math >}}d{{< /math >}}。

**值得进一步研究的问题：** **本期提出：** 在指定跳率族中，能否控制余项对维数的依赖，并刻画 {{< math >}}q_d{{< /math >}} 与 {{< math >}}\beta{{< /math >}} 同阶时的交叉尺度？定理5的固定维数表达没有给出这一结论。

---

### An exact coexistence criterion for stochastic Lotka--Volterra systems with Volterra--Lyapunov stable interactions

{{< paper-meta
  authors="Jorge Ramirez Osorio"
  source="arXiv 预印本"
  date="2026-10-20 · v1"
  arxiv="2610.28174"
  fulltext="https://arxiv.org/html/2610.28174v1"
  fulltextLabel="全文 v1"
  directions="随机流、随机动力系统"
  note="重点是不变测度、共存与遍历性；不将分布收敛表述为点轨道同步或流的微分正则性。"
>}}

**研究问题与背景：** 多物种随机系统的共存常需逐一分析边界上的平稳群落，类型数量随物种数增长很快。本文在明确的相互作用稳定性条件下，把全物种共存简化成一个向量逐分量为正的判据。

**核心模型与数学设定：** 研究非负正交象限上的系统

{{< math display="true" >}}
dX=\operatorname{Diag}(X)(\alpha+AX)\,dt
 +\operatorname{Diag}(X)\Gamma\,dB.
{{< /math >}}

{{< math >}}B{{< /math >}} 为 {{< math >}}n{{< /math >}} 维标准布朗运动，{{< math >}}\alpha\in\mathbb R^n{{< /math >}}，{{< math >}}A,\Gamma\in\mathbb R^{n\times n}{{< /math >}}。**假设1**要求噪声协方差 {{< math >}}\Sigma=\Gamma\Gamma^\top\succ0{{< /math >}}，且存在正对角矩阵 {{< math >}}D{{< /math >}} 使 {{< math >}}DA+A^\top D\prec0{{< /math >}}。定义噪声校正增长率与候选均值

{{< math display="true" >}}
\beta=\alpha-\tfrac12\operatorname{diag}(\Sigma),\qquad
m=-A^{-1}\beta.
{{< /math >}}

**主要定理或理论结果：** **定理2**证明：存在把全部质量放在 {{< math >}}(0,\infty)^n{{< /math >}} 的不变概率测度，当且仅当 {{< math >}}m>0{{< /math >}}（每个分量都为正）。成立时，该内部不变测度 {{< math >}}\pi{{< /math >}} 唯一、遍历，满足 {{< math >}}\int x\,\pi(dx)=m{{< /math >}}；从每个内部初态出发，转移概率在全变差距离下指数趋于 {{< math >}}\pi{{< /math >}}。

这里的“唯一”指支持在内部的不变概率测度；边界仍可能有其他平稳群落。Itô 校正给出了本模型的共存判据，不意味着任意退化噪声、任意交互矩阵或所有分布性质都只取决于这个校正。

**方法与证明思路：** 利用对数种群的增长率得到平稳均值必须满足的线性方程，先证明必要性。充分性以 {{< math >}}Dm{{< /math >}} 为权重，把边界入侵率化为受稳定矩阵控制的二次型，再应用已有随机持续性定理；本文的推进是把该充分条件与线性均值约束结合成此类系统的充要判据。

**与研究主线的关联：** 对随机动力系统的长期行为给出可直接检查的系数条件，连接平稳共存、耦合相关的分布混合问题与遍历性；不涉及微分同胚流的正则性结论。

**值得进一步研究的问题：** **本期提出：** 当 {{< math >}}\Sigma{{< /math >}} 退化时，内部可达性与平滑性需要怎样补充，才能保留部分判据？本篇非退化噪声条件不能直接删除。

## 本期观察

三篇都说明条件会改变结论的尺度：象游走的记忆参数决定高斯尾窗口，游走离开率修正强分支增长，而噪声协方差通过 Itô 校正影响共存。它们分别控制偏差概率、均值增长谱和平稳分布，不能互相替代。

## 阅读建议

- 象游走：先读模型和推论2.1，核对随机步长矩条件与偏差范围。
- 分支游走：从 Green 方程及定理5入手，区分固定维数渐近与跨维比较。
- 随机动力系统：先检查假设1和定理2，再看平稳均值、边界入侵率如何提供必要性与充分性。
